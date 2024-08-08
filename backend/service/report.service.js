import db from '../db.js';

export const createReport = async (report) => {
  const { IdKeHoach, NoiDung, HinhAnhMinhChung, CoViPham } = report;
  const sqlInsert = `
    INSERT INTO ChiTietKetQua (IdKeHoach, NoiDung, HinhAnhMinhChung, CoViPham)
    VALUES (?, ?, ?, ?)
  `;

  const sqlUpdateKeHoach = `
    UPDATE KeHoach
    SET TrangThai = 2
    WHERE IdKeHoach = ?
  `;

  try {
    const result = await db.query(sqlInsert, [
      IdKeHoach,
      NoiDung,
      HinhAnhMinhChung,
      CoViPham,
    ]);

    await db.query(sqlUpdateKeHoach, [IdKeHoach]);

    return { success: true, insertId: result.insertId };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

export const updateReport = async (report) => {
  const { IdChiTietKetQua, NoiDung, HinhAnhMinhChung, CoViPham } = report;
  const sqlUpdate = `
    UPDATE ChiTietKetQua
    SET NoiDung = ?, HinhAnhMinhChung = ?, CoViPham = ?
    WHERE IdChiTietKetQua = ?
  `;

  try {
    const result = await db.query(sqlUpdate, [
      NoiDung,
      HinhAnhMinhChung,
      CoViPham,
      IdChiTietKetQua,
    ]);
    return { success: true, affectedRows: result.affectedRows };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

export const getReport = async (IdKeHoach) => {
  const sqlSelectReport = `
    SELECT 
    ctkq.IdChiTietKetQua, 
    ctkq.NoiDung AS NoiDungKetQua, 
    ctkq.HinhAnhMinhChung, 
    ctkq.CoViPham, 
    kh.IdKeHoach, 
    kh.ThoiGianBatDau, 
    kh.NoiDung AS NoiDungKeHoach, 
    kh.TrangThai AS TrangThaiKeHoach, 
    kh.LoaiKeHoach, 
    cs.IdCoSo, 
    cs.TenCoSo, 
    cs.DiaChi, 
    px.TenPhuongXa, 
    qh.TenQuanHuyen, 
    lhk.TenLoaiHinhKinhDoanh, 
    nd.HoTen AS NguoiLapKeHoach,
    nd4.HoTen AS ChuCoSo,
    xlv.IdXuLyViPham, 
    xlv.NgayXuLy, 
    xlv.NoiDungXuLy, 
    xlv.TrangThai AS TrangThaiXuLy, 
    nd2.HoTen AS NguoiXuLy,
    dstv.IdDanhSachThanhVien, 
    nd3.IdNguoiDung AS IdNguoiDungThanhVien, 
    nd3.HoTen AS HoTenThanhVien, 
    dstv.VaiTro, 
    dtd.TenDoan
FROM ChiTietKetQua ctkq
JOIN KeHoach kh ON ctkq.IdKeHoach = kh.IdKeHoach
JOIN CoSo cs ON kh.IdCoSo = cs.IdCoSo
JOIN PhuongXa px ON cs.IdPhuongXa = px.IdPhuongXa
JOIN QuanHuyen qh ON px.IdQuanHuyen = qh.IdQuanHuyen
JOIN LoaiHinhKinhDoanh lhk ON cs.IdLoaiHinhKinhDoanh = lhk.IdLoaiHinhKinhDoanh
JOIN NguoiDung nd ON kh.IdNguoiLap = nd.IdNguoiDung 
JOIN NguoiDung nd4 ON cs.IdChuCoSo = nd4.IdNguoiDung
LEFT JOIN XuLyViPham xlv ON ctkq.IdChiTietKetQua = xlv.IdChiTietKetQua
LEFT JOIN NguoiDung nd2 ON xlv.NguoiXuLy = nd2.IdNguoiDung 
LEFT JOIN DoanThamDinhKeHoach dtdkh ON kh.IdKeHoach = dtdkh.IdKeHoach
LEFT JOIN DoanThamDinh dtd ON dtdkh.IdDoanThamDinh = dtd.IdDoanThamDinh
LEFT JOIN DanhSachThanhVien dstv ON dtd.IdDoanThamDinh = dstv.IdDoanThamDinh
LEFT JOIN NguoiDung nd3 ON dstv.IdCanBo = nd3.IdNguoiDung 
WHERE kh.IdKeHoach = ?;


  `;

  try {
    const [result] = await db.query(sqlSelectReport, [IdKeHoach]);
    if (result.length === 0) {
      return { success: false, message: 'Report not found' };
    }
    return { success: true, report: result };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

export const deleteReport = async (IdChiTietKetQua) => {
  const sqlDelete = `
    DELETE FROM ChiTietKetQua
    WHERE IdChiTietKetQua = ?
  `;

  try {
    const result = await db.query(sqlDelete, [IdChiTietKetQua]);
    return { success: true, affectedRows: result.affectedRows };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};
