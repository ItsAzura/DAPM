import express from 'express';
import {
  createReport,
  updateReport,
  getReport,
  deleteReport,
} from '../service/report.service.js';

const router = express.Router();

router.post('/report', async (req, res) => {
  const result = await createReport(req.body);
  if (result.success) {
    res.status(201).json({
      message: 'Report created successfully',
      reportId: result.insertId,
    });
  } else {
    res
      .status(500)
      .json({ message: 'Error creating report', error: result.error });
  }
});

router.put('/report', async (req, res) => {
  const result = await updateReport(req.body);
  if (result.success) {
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Report not found' });
    } else {
      res.status(200).json({ message: 'Report updated successfully' });
    }
  } else {
    res
      .status(500)
      .json({ message: 'Error updating report', error: result.error });
  }
});

router.get('/report/:IdChiTietKetQua', async (req, res) => {
  const result = await getReport(req.params.IdChiTietKetQua);
  if (result.success) {
    res.status(200).json(result.report);
  } else if (result.message === 'Report not found') {
    res.status(404).json({ message: 'Report not found' });
  } else {
    res
      .status(500)
      .json({ message: 'Error getting report', error: result.error });
  }
});

router.delete('/report/:IdChiTietKetQua', async (req, res) => {
  const result = await deleteReport(req.params.IdChiTietKetQua);
  if (result.success) {
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Report not found' });
    } else {
      res.status(200).json({ message: 'Report deleted successfully' });
    }
  } else {
    res
      .status(500)
      .json({ message: 'Error deleting report', error: result.error });
  }
});

export default router;
