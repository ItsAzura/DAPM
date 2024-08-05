import express from 'express';
import {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
  getProfilesByIdUser,
} from '../service/profile.service.js';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  const result = await createProfile(req.body);
  if (result.success) {
    res.status(201).json({ message: 'Profile created successfully' });
  } else {
    res
      .status(500)
      .json({ message: 'Error creating profile', error: result.error });
  }
});

// Read
router.get('/:IdCoSo', async (req, res) => {
  const result = await getProfile(req.params.IdCoSo);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Profile not found' });
  }
});

//Read
router.get('/user/:IdNguoiDung', async (req, res) => {
  const result = await getProfilesByIdUser(req.params.IdNguoiDung);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Profile not found' });
  }
});

// Update
router.put('/', async (req, res) => {
  const result = await updateProfile(req.body);
  if (result.success) {
    res.status(200).json({ message: 'Profile updated successfully' });
  } else {
    res
      .status(500)
      .json({ message: 'Error updating profile', error: result.error });
  }
});

// Delete
router.delete('/:IdCoSo', async (req, res) => {
  const result = await deleteProfile(req.params.IdCoSo);
  if (result.success) {
    res.status(200).json({ message: 'Profile deleted successfully' });
  } else {
    res
      .status(500)
      .json({ message: 'Error deleting profile', error: result.error });
  }
});

export default router;
