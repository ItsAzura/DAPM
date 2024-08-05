import express from 'express';
import { getAllNews } from '../service/news.service.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const result = await getAllNews();
  if (result.success === false) {
    res
      .status(500)
      .json({ message: 'Error fetching data', error: result.error });
  } else {
    res.status(200).json(result);
  }
});

export default router;
