import db from '../db.js';

export const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM nguoidung').catch((err) => {
    console.log(err);
    result.status(500).send('Internal Server Error');
  });
  return result;
};
