import db from '../db.js';

export const getAllNews = async () => {
  const sqlSelectAllNews = `SELECT 
    T.IdTinTuc,
    T.TieuDe,
    T.Mota,
    T.NoiDung,
    T.NgayTao,
    T.NgayCapNhat,
    T.AnhBia,
    N.IdNguoiDung,
    N.HoTen AS TenNguoiDung,
    N.CCCD,
    N.SDT,
    N.MatKhau,
    N.TrangThai AS TrangThaiNguoiDung,
    C.TenChucVu
FROM 
    TinTuc T
LEFT JOIN 
    NguoiDung N ON T.IdNguoiTao = N.IdNguoiDung
LEFT JOIN 
    ChucVu C ON N.IdChucVu = C.IdChucVu;
`;

  try {
    const [result] = await db.query(sqlSelectAllNews);
    return result;
  } catch (err) {
    return { success: false, error: err.message };
  }
};
