import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Import các controller
import db from './db.js';
import userController from './controller/user.controller.js';
import reportController from './controller/report.controller.js';
import profileController from './controller/profile.controller.js';
import selectorController from './controller/selector.controller.js';
import newsController from './controller/news.controller.js';
import plansController from './controller/plan.controller.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cấu hình bodyParser và cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Sử dụng các controller
app.use('/api/users', userController);
app.use('/api/reports', reportController);
app.use('/api/profile', profileController);
app.use('/api', selectorController);
app.use('/api/news', newsController);
app.use('/api/plans', plansController);

// Cấu hình multer để lưu file vào thư mục "uploads"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Endpoint để upload file
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const filePath = path.join('uploads', req.file.filename).replace(/\\/g, '/');
  res.status(200).json({ filePath });
});

// Middleware để phục vụ file tĩnh từ thư mục "uploads"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Something broke!');
});

// Khởi chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
