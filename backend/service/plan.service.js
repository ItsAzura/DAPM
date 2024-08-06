import db from '../db.js';

export const getPlanThanhTraByIdUser = async (IdNguoiDung) => {
  const sqlSelectPlan = `SELECT 
    kh.IdKeHoach,
    kh.ThoiGianBatDau,
    kh.IdNguoiLap,
    kh.IdCoSo,
    cs.TenCoSo,
    kh.NoiDung,
    kh.TrangThai,
    kh.LoaiKeHoach,
    dtd.TenDoan,
    dstv.VaiTro,
    pavp.IdCoSoViPham,
    pavp.HoTenNguoiBaoCao,
    pavp.CCCD,
    pavp.SDT,
    pavp.NgayPhanAnh,
    pavp.HinhAnhMinhChung,
    pavp.TrangThai AS TrangThaiPhanAnh
FROM KeHoach kh
JOIN DoanThamDinhKeHoach dtdk ON kh.IdKeHoach = dtdk.IdKeHoach
JOIN DoanThamDinh dtd ON dtdk.IdDoanThamDinh = dtd.IdDoanThamDinh
JOIN DanhSachThanhVien dstv ON dtd.IdDoanThamDinh = dstv.IdDoanThamDinh
JOIN CoSo cs ON kh.IdCoSo = cs.IdCoSo
LEFT JOIN PhanAnhViPham pavp ON kh.IdCoSoViPham = pavp.IdCoSoViPham
WHERE dstv.IdCanBo = ? 
  AND kh.LoaiKeHoach = 1 `;

  try {
    const result = await db.query(sqlSelectPlan, [IdNguoiDung]);
    if (result.length === 0) {
      return { success: false, message: 'Plan not found' };
    }
    return { success: true, plan: result[0] };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

export const getPlanKiemTraByIdUser = async (IdNguoiDung) => {
  const sqlSelectPlan = `SELECT 
    kh.IdKeHoach,
    kh.ThoiGianBatDau,
    kh.IdNguoiLap,
    kh.IdCoSo,
    cs.TenCoSo,
    kh.NoiDung,
    kh.TrangThai,
    kh.LoaiKeHoach,
    dtd.TenDoan,
    dstv.VaiTro,
    pavp.IdCoSoViPham,
    pavp.HoTenNguoiBaoCao,
    pavp.CCCD,
    pavp.SDT,
    pavp.NgayPhanAnh,
    pavp.HinhAnhMinhChung,
    pavp.TrangThai AS TrangThaiPhanAnh
FROM KeHoach kh
JOIN DoanThamDinhKeHoach dtdk ON kh.IdKeHoach = dtdk.IdKeHoach
JOIN DoanThamDinh dtd ON dtdk.IdDoanThamDinh = dtd.IdDoanThamDinh
JOIN DanhSachThanhVien dstv ON dtd.IdDoanThamDinh = dstv.IdDoanThamDinh
JOIN CoSo cs ON kh.IdCoSo = cs.IdCoSo
LEFT JOIN PhanAnhViPham pavp ON kh.IdCoSoViPham = pavp.IdCoSoViPham
WHERE dstv.IdCanBo = ? 
  AND kh.LoaiKeHoach = 2 ;
`;

  try {
    const result = await db.query(sqlSelectPlan, [IdNguoiDung]);
    if (result.length === 0) {
      return { success: false, message: 'Plan not found' };
    }
    return { success: true, plan: result[0] };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

export const getPlanThanhTraByIdUserDone = async (IdNguoiDung) => {
  const sqlSelectPlan = `SELECT 
    kh.IdKeHoach,
    kh.ThoiGianBatDau,
    kh.IdNguoiLap,
    kh.IdCoSo,
    cs.TenCoSo,
    kh.NoiDung,
    kh.TrangThai,
    kh.LoaiKeHoach,
    dtd.TenDoan,
    dstv.VaiTro,
    pavp.IdCoSoViPham,
    pavp.HoTenNguoiBaoCao,
    pavp.CCCD,
    pavp.SDT,
    pavp.NgayPhanAnh,
    pavp.HinhAnhMinhChung,
    pavp.TrangThai AS TrangThaiPhanAnh
FROM KeHoach kh
JOIN DoanThamDinhKeHoach dtdk ON kh.IdKeHoach = dtdk.IdKeHoach
JOIN DoanThamDinh dtd ON dtdk.IdDoanThamDinh = dtd.IdDoanThamDinh
JOIN DanhSachThanhVien dstv ON dtd.IdDoanThamDinh = dstv.IdDoanThamDinh
JOIN CoSo cs ON kh.IdCoSo = cs.IdCoSo
LEFT JOIN PhanAnhViPham pavp ON kh.IdCoSoViPham = pavp.IdCoSoViPham
WHERE dstv.IdCanBo = ? 
  AND kh.LoaiKeHoach = 1 
  AND kh.TrangThai = 1
  AND dstv.VaiTro = 'Trưởng Đoàn';`;

  try {
    const result = await db.query(sqlSelectPlan, [IdNguoiDung]);
    if (result.length === 0) {
      return { success: false, message: 'Plan not found' };
    }
    return { success: true, plan: result[0] };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

export const getPlanKiemTraByIdUserDone = async (IdNguoiDung) => {
  const sqlSelectPlan = `SELECT 
    kh.IdKeHoach,
    kh.ThoiGianBatDau,
    kh.IdNguoiLap,
    kh.IdCoSo,
    cs.TenCoSo,
    kh.NoiDung,
    kh.TrangThai,
    kh.LoaiKeHoach,
    dtd.TenDoan,
    dstv.VaiTro,
    pavp.IdCoSoViPham,
    pavp.HoTenNguoiBaoCao,
    pavp.CCCD,
    pavp.SDT,
    pavp.NgayPhanAnh,
    pavp.HinhAnhMinhChung,
    pavp.TrangThai AS TrangThaiPhanAnh
FROM KeHoach kh
JOIN DoanThamDinhKeHoach dtdk ON kh.IdKeHoach = dtdk.IdKeHoach
JOIN DoanThamDinh dtd ON dtdk.IdDoanThamDinh = dtd.IdDoanThamDinh
JOIN DanhSachThanhVien dstv ON dtd.IdDoanThamDinh = dstv.IdDoanThamDinh
JOIN CoSo cs ON kh.IdCoSo = cs.IdCoSo
LEFT JOIN PhanAnhViPham pavp ON kh.IdCoSoViPham = pavp.IdCoSoViPham
WHERE dstv.IdCanBo = ? 
  AND kh.LoaiKeHoach = 2 
  AND kh.TrangThai = 1
  AND dstv.VaiTro = 'Trưởng Đoàn';`;

  try {
    const result = await db.query(sqlSelectPlan, [IdNguoiDung]);
    if (result.length === 0) {
      return { success: false, message: 'Plan not found' };
    }
    return { success: true, plan: result[0] };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};
