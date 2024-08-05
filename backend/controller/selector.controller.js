import express from 'express';
import {
  getAllLoaiHinhKinhDoanh,
  getAllQuanHuyen,
  getPhuongXaByQuanHuyen,
} from '../service/selector.service.js';

const router = express.Router();

// Get all LoaiHinhKinhDoanh
router.get('/loaihinhkinhdoanh', async (req, res) => {
  const result = await getAllLoaiHinhKinhDoanh();
  if (result.success === false) {
    res
      .status(500)
      .json({ message: 'Error fetching data', error: result.error });
  } else {
    res.status(200).json(result);
  }
});

// Get all QuanHuyen
router.get('/quanhuyen', async (req, res) => {
  const result = await getAllQuanHuyen();
  if (result.success === false) {
    res
      .status(500)
      .json({ message: 'Error fetching data', error: result.error });
  } else {
    res.status(200).json(result);
  }
});

// Get PhuongXa by QuanHuyen ID
router.get('/phuongxa/:IdQuanHuyen', async (req, res) => {
  const result = await getPhuongXaByQuanHuyen(req.params.IdQuanHuyen);
  if (result.success === false) {
    res
      .status(500)
      .json({ message: 'Error fetching data', error: result.error });
  } else {
    res.status(200).json(result);
  }
});

export default router;
