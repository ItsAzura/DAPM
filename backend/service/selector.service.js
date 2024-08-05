import db from '../db.js';

// Get all LoaiHinhKinhDoanh
export const getAllLoaiHinhKinhDoanh = async () => {
  const sqlSelectAllLoaiHinhKinhDoanh = `
    SELECT * FROM LoaiHinhKinhDoanh
  `;
  try {
    const [result] = await db.query(sqlSelectAllLoaiHinhKinhDoanh);
    return result;
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// Get all QuanHuyen
export const getAllQuanHuyen = async () => {
  const sqlSelectAllQuanHuyen = `
    SELECT * FROM QuanHuyen
  `;
  try {
    const [result] = await db.query(sqlSelectAllQuanHuyen);
    return result;
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// Get PhuongXa by QuanHuyen ID
export const getPhuongXaByQuanHuyen = async (IdQuanHuyen) => {
  const sqlSelectPhuongXaByQuanHuyen = `
    SELECT * FROM PhuongXa WHERE IdQuanHuyen = ?
  `;
  try {
    const [result] = await db.query(sqlSelectPhuongXaByQuanHuyen, [
      IdQuanHuyen,
    ]);
    return result;
  } catch (err) {
    return { success: false, error: err.message };
  }
};
