import { getAllUsers } from '../service/user.service.js';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await getAllUsers();
  res.json(result[0]);
});

export default router;
