import express from 'express';
import {
  getPlanThanhTraByIdUser,
  getPlanKiemTraByIdUser,
  getPlanThanhTraByIdUserDone,
  getPlanKiemTraByIdUserDone,
} from '../service/plan.service.js';

const router = express.Router();

router.get('/PlanThanhTra/:IdNguoiDung', async (req, res) => {
  const result = await getPlanThanhTraByIdUser(req.params.IdNguoiDung);
  if (result.success) {
    res.status(200).json(result.plan);
  } else if (result.message === 'Plan not found') {
    res.status(404).json({ message: 'Plan not found' });
  } else {
    res
      .status(500)
      .json({ message: 'Error getting plan', error: result.error });
  }
});

router.get('/PlanKiemTra/:IdNguoiDung', async (req, res) => {
  const result = await getPlanKiemTraByIdUser(req.params.IdNguoiDung);
  if (result.success) {
    res.status(200).json(result.plan);
  } else if (result.message === 'Plan not found') {
    res.status(404).json({ message: 'Plan not found' });
  } else {
    res
      .status(500)
      .json({ message: 'Error getting plan', error: result.error });
  }
});

router.get('/PlanThanhTraDone/:IdNguoiDung', async (req, res) => {
  const result = await getPlanThanhTraByIdUserDone(req.params.IdNguoiDung);
  if (result.success) {
    res.status(200).json(result.plan);
  } else if (result.message === 'Plan not found') {
    res.status(404).json({ message: 'Plan not found' });
  } else {
    res
      .status(500)
      .json({ message: 'Error getting plan', error: result.error });
  }
});

router.get('/PlanKiemTraDone/:IdNguoiDung', async (req, res) => {
  const result = await getPlanKiemTraByIdUserDone(req.params.IdNguoiDung);
  if (result.success) {
    res.status(200).json(result.plan);
  } else if (result.message === 'Plan not found') {
    res.status(404).json({ message: 'Plan not found' });
  } else {
    res
      .status(500)
      .json({ message: 'Error getting plan', error: result.error });
  }
});

export default router;
