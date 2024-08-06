import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
const app = express();

import db from './db.js';
import userController from './controller/user.controller.js';
import reportController from './controller/report.controller.js';
import profileController from './controller/profile.controller.js';
import selectorController from './controller/selector.controller.js';
import newsController from './controller/news.controller.js';
import plansController from './controller/plan.controller.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', userController);
app.use('/api/reports', reportController);
app.use('/api/profile', profileController);
app.use('/api', selectorController);
app.use('/api/news', newsController);
app.use('/api/plans', plansController);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
