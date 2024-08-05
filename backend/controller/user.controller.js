import {
  getAllUsers,
  loginUser,
  registerUser,
  logoutUser,
} from '../service/user.service.js';
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await getAllUsers();
  res.json(result[0]);
});

router.post('/register', async (req, res) => {
  const result = await registerUser(req.body);
  res.json(result);
});

router.post('/login', async (req, res) => {
  try {
    const result = await loginUser(req.body);

    if (!result.success) {
      return res.status(401).json({ success: false, message: result.message });
    }

    return res.json({ success: true, token: result.token });
  } catch (error) {
    console.error('Login error:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
});

router.post('/logout', async (req, res) => {
  const result = await logoutUser(req.body);
  res.cookie('token', '', { expires: new Date(0) });
  res.status(200).json(result);
});

export default router;
