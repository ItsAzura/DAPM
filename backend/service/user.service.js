import db from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const JWT_SECRET =
  'eyJhbGciOiJIUzUxMiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMjUyMjI3NywiaWF0IjoxNzIyNTIyMjc3fQ.b88JMvMrMQOEkFP_4QFNivE_f6M-w3bi4toHBVf9TRH11n3oetcutV5VewaQOmjWkU64Q3j066ZOj09VIWIefA';

export const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM nguoidung').catch((err) => {
    console.log(err);
    result.status(500).send('Internal Server Error');
  });
  return result;
};

export const registerUser = async (user) => {
  const { HoTen, CCCD, SDT, MatKhau } = user;

  const sqlInsert = `
    INSERT INTO NguoiDung (IdNguoiDung,HoTen, CCCD, SDT, MatKhau, IdChucVu, TrangThai)
    VALUES ('ND011',?, ?, ?, ?, 1,1)
  `;

  try {
    const [result] = await db.query(sqlInsert, [HoTen, CCCD, SDT, MatKhau]);

    // `result` sẽ chứa thông tin về kết quả của câu lệnh INSERT
    return { success: true, insertId: result.insertId };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

export const loginUser = async (user) => {
  const { CCCD, MatKhau } = user;
  const sqlSelect = `
    SELECT * FROM NguoiDung WHERE CCCD = ?
  `;

  try {
    const result = await db.query(sqlSelect, [CCCD]);
    if (result.length === 0) {
      return { success: false, message: 'User not found' };
    }
    const user = result[0][0];

    const payload = {
      IdNguoiDung: user.IdNguoiDung,
      HoTen: user.HoTen,
      CCCD: user.CCCD,
      IdChucVu: user.IdChucVu,
      TrangThai: user.TrangThai,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return { success: true, token };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

export const logoutUser = async (user) => {
  return { success: true, message: 'Logout successfully' };
};
