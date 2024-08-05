import db from '../db.js';

// Create
export const createProfile = async (profile) => {
  const {
    TenCoSo,
    DiaChi,
    IdPhuongXa,
    IdLoaiHinhKinhDoanh,
    NgayDangKy,
    LoaiThucPham,
    HinhAnhMinhHoa,
    TrangThai,
    NgayCapChungNhanATTP,
    NgayHetHanChungNhanATTP,
    TenPhuongXa,
    IdQuanHuyen,
    TenQuanHuyen,
  } = profile;

  const sqlInsertPhuongXa = `
    INSERT INTO PhuongXa (TenPhuongXa, IdQuanHuyen) 
    VALUES (?, ?)
  `;

  const sqlInsertQuanHuyen = `
    INSERT INTO QuanHuyen (TenQuanHuyen) 
    VALUES (?)
  `;

  const sqlInsertCoSo = `
    INSERT INTO CoSo (TenCoSo, DiaChi, IdPhuongXa, IdLoaiHinhKinhDoanh) 
    VALUES (?, ?, ?, ?)
  `;

  const sqlInsertGiayChungNhanATTP = `
    INSERT INTO GiayChungNhanATTP (IdCoSo, NgayDangKy, LoaiThucPham, HinhAnhMinhHoa, TrangThai, NgayCapChungNhanATTP, NgayHetHanChungNhanATTP) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    let IdQuanHuyen = null;
    let IdPhuongXa = null;

    if (TenQuanHuyen) {
      const resultQuanHuyen = await db.query(sqlInsertQuanHuyen, [
        TenQuanHuyen,
      ]);
      IdQuanHuyen = resultQuanHuyen.insertId;
    }

    if (TenPhuongXa && IdQuanHuyen) {
      const resultPhuongXa = await db.query(sqlInsertPhuongXa, [
        TenPhuongXa,
        IdQuanHuyen,
      ]);
      IdPhuongXa = resultPhuongXa.insertId;
    }

    let IdCoSo = null;

    if (TenCoSo) {
      const resultCoSo = await db.query(sqlInsertCoSo, [
        TenCoSo,
        DiaChi,
        IdPhuongXa,
        IdLoaiHinhKinhDoanh,
      ]);
      IdCoSo = resultCoSo.insertId;
    }

    if (IdCoSo) {
      await db.query(sqlInsertGiayChungNhanATTP, [
        IdCoSo,
        NgayDangKy,
        LoaiThucPham,
        HinhAnhMinhHoa,
        TrangThai,
        NgayCapChungNhanATTP,
        NgayHetHanChungNhanATTP,
      ]);
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// Read
export const getProfile = async (IdCoSo) => {
  const sqlSelectCoSo = `
    SELECT 
    cs.IdCoSo, cs.TenCoSo, cs.DiaChi, cs.IdPhuongXa, cs.IdLoaiHinhKinhDoanh, cs.SoGiayPhepKD, cs.NgayCapGiayPhepKD,
    px.TenPhuongXa, px.IdQuanHuyen, qh.TenQuanHuyen,
    lhk.TenLoaiHinhKinhDoanh, 
    gcn.NgayDangKy, gcn.LoaiThucPham, gcn.HinhAnhMinhHoa, gcn.TrangThai, gcn.NgayCapChungNhanATTP, gcn.NgayHetHanChungNhanATTP,
    nd.HoTen AS TenNguoiDung -- Thêm cột TenNguoiDung từ bảng NguoiDung
FROM 
    CoSo cs
JOIN 
    PhuongXa px ON cs.IdPhuongXa = px.IdPhuongXa
JOIN 
    QuanHuyen qh ON px.IdQuanHuyen = qh.IdQuanHuyen
JOIN 
    LoaiHinhKinhDoanh lhk ON cs.IdLoaiHinhKinhDoanh = lhk.IdLoaiHinhKinhDoanh
LEFT JOIN 
    GiayChungNhanATTP gcn ON cs.IdCoSo = gcn.IdCoSo
JOIN 
    NguoiDung nd ON cs.IdChuCoSo = nd.IdNguoiDung -- Thêm JOIN để kết hợp bảng NguoiDung
WHERE 
    cs.IdCoSo = ?;

  `;

  try {
    const [result] = await db.query(sqlSelectCoSo, [IdCoSo]);
    return result.length ? result[0] : null;
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const getProfilesByIdUser = async (IdNguoiDung) => {
  const slqNguoiDung = `SELECT 
    NguoiDung.IdNguoiDung,
    NguoiDung.HoTen,
    NguoiDung.CCCD,
    NguoiDung.SDT,
    NguoiDung.MatKhau,
    NguoiDung.IdChucVu,
    NguoiDung.TrangThai,
    CoSo.IdCoSo,
    CoSo.TenCoSo,
    CoSo.DiaChi,
    CoSo.IdPhuongXa,
    PhuongXa.TenPhuongXa,
    PhuongXa.IdQuanHuyen,
    QuanHuyen.TenQuanHuyen,
    CoSo.IdLoaiHinhKinhDoanh,
    LoaiHinhKinhDoanh.TenLoaiHinhKinhDoanh,
    CoSo.SoGiayPhepKD,
    CoSo.NgayCapGiayPhepKD
FROM 
    NguoiDung
LEFT JOIN 
    CoSo ON NguoiDung.IdNguoiDung = CoSo.IdChuCoSo
LEFT JOIN 
    PhuongXa ON CoSo.IdPhuongXa = PhuongXa.IdPhuongXa
LEFT JOIN 
    QuanHuyen ON PhuongXa.IdQuanHuyen = QuanHuyen.IdQuanHuyen
LEFT JOIN 
    LoaiHinhKinhDoanh ON CoSo.IdLoaiHinhKinhDoanh = LoaiHinhKinhDoanh.IdLoaiHinhKinhDoanh
Where
    NguoiDung.IdNguoiDung = ? `;
  try {
    const [result] = await db.query(slqNguoiDung, [IdNguoiDung]);
    return result.length ? result : null;
  } catch (error) {
    console.log(error);
    return { success: false, error: error.message };
  }
};

// Update
export const updateProfile = async (profile) => {
  const {
    IdCoSo,
    TenCoSo,
    DiaChi,
    IdQuanHuyen,
    IdPhuongXa,
    IdLoaiHinhKinhDoanh,
    SoGiayPhepKD,
    NgayCapGiayPhepKD,
  } = profile;

  const sqlUpdateProfile = `
    UPDATE CoSo
    JOIN PhuongXa ON CoSo.IdPhuongXa = PhuongXa.IdPhuongXa
    JOIN QuanHuyen ON PhuongXa.IdQuanHuyen = QuanHuyen.IdQuanHuyen
    JOIN LoaiHinhKinhDoanh ON CoSo.IdLoaiHinhKinhDoanh = LoaiHinhKinhDoanh.IdLoaiHinhKinhDoanh
    SET 
      CoSo.TenCoSo = ?, 
      CoSo.DiaChi = ?, 
      CoSo.IdPhuongXa = ?, 
      CoSo.IdLoaiHinhKinhDoanh = ?, 
      PhuongXa.IdQuanHuyen = ?, 
      CoSo.SoGiayPhepKD = ?, 
      CoSo.NgayCapGiayPhepKD = ?
    WHERE CoSo.IdCoSo = ?
  `;

  try {
    await db.query(sqlUpdateProfile, [
      TenCoSo,
      DiaChi,
      IdPhuongXa,
      IdLoaiHinhKinhDoanh,
      IdQuanHuyen,
      SoGiayPhepKD,
      NgayCapGiayPhepKD,
      IdCoSo,
    ]);

    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

// Delete
export const deleteProfile = async (IdCoSo) => {
  const sqlDeleteCoSo = `
    DELETE FROM CoSo
    WHERE IdCoSo = ?
  `;

  const sqlDeletePhuongXa = `
    DELETE FROM PhuongXa
    WHERE IdPhuongXa NOT IN (SELECT DISTINCT IdPhuongXa FROM CoSo)
  `;

  const sqlDeleteQuanHuyen = `
    DELETE FROM QuanHuyen
    WHERE IdQuanHuyen NOT IN (SELECT DISTINCT IdQuanHuyen FROM PhuongXa)
  `;

  const sqlDeleteGiayChungNhanATTP = `
    DELETE FROM GiayChungNhanATTP
    WHERE IdCoSo = ?
  `;

  try {
    // Delete GiayChungNhanATTP first to avoid foreign key constraints
    await db.query(sqlDeleteGiayChungNhanATTP, [IdCoSo]);
    await db.query(sqlDeleteCoSo, [IdCoSo]);

    // Optionally, clean up PhuongXa and QuanHuyen if they're not used anymore
    await db.query(sqlDeletePhuongXa);
    await db.query(sqlDeleteQuanHuyen);

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};
