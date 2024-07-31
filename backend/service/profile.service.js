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
      cs.IdCoSo, cs.TenCoSo, cs.DiaChi, cs.IdPhuongXa, cs.IdLoaiHinhKinhDoanh,
      px.TenPhuongXa, qh.TenQuanHuyen,
      lhk.TenLoaiHinhKinhDoanh,
      gcn.NgayDangKy, gcn.LoaiThucPham, gcn.HinhAnhMinhHoa, gcn.TrangThai, gcn.NgayCapChungNhanATTP, gcn.NgayHetHanChungNhanATTP
    FROM CoSo cs
    JOIN PhuongXa px ON cs.IdPhuongXa = px.IdPhuongXa
    JOIN QuanHuyen qh ON px.IdQuanHuyen = qh.IdQuanHuyen
    JOIN LoaiHinhKinhDoanh lhk ON cs.IdLoaiHinhKinhDoanh = lhk.IdLoaiHinhKinhDoanh
    LEFT JOIN GiayChungNhanATTP gcn ON cs.IdCoSo = gcn.IdCoSo
    WHERE cs.IdCoSo = ?
  `;

  try {
    const [result] = await db.query(sqlSelectCoSo, [IdCoSo]);
    return result.length ? result[0] : null;
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// Update
export const updateProfile = async (profile) => {
  const {
    IdCoSo,
    TenCoSo,
    DiaChi,
    IdPhuongXa,
    IdLoaiHinhKinhDoanh,
    IdGiayChungNhan,
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

  const sqlUpdateCoSo = `
    UPDATE CoSo
    SET TenCoSo = ?, DiaChi = ?, IdPhuongXa = ?, IdLoaiHinhKinhDoanh = ?
    WHERE IdCoSo = ?
  `;

  const sqlUpdatePhuongXa = `
    UPDATE PhuongXa
    SET TenPhuongXa = ?, IdQuanHuyen = ?
    WHERE IdPhuongXa = ?
  `;

  const sqlUpdateQuanHuyen = `
    UPDATE QuanHuyen
    SET TenQuanHuyen = ?
    WHERE IdQuanHuyen = ?
  `;

  const sqlUpdateGiayChungNhanATTP = `
    UPDATE GiayChungNhanATTP
    SET NgayDangKy = ?, LoaiThucPham = ?, HinhAnhMinhHoa = ?, TrangThai = ?, NgayCapChungNhanATTP = ?, NgayHetHanChungNhanATTP = ?
    WHERE IdGiayChungNhan = ?
  `;

  const updateQuery = async (query, values) => {
    return new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.affectedRows);
        }
      });
    });
  };

  try {
    if (TenPhuongXa && IdPhuongXa) {
      await updateQuery(sqlUpdatePhuongXa, [
        TenPhuongXa,
        IdQuanHuyen,
        IdPhuongXa,
      ]);
    }

    if (TenQuanHuyen && IdQuanHuyen) {
      await updateQuery(sqlUpdateQuanHuyen, [TenQuanHuyen, IdQuanHuyen]);
    }

    if (TenCoSo && IdCoSo) {
      await updateQuery(sqlUpdateCoSo, [
        TenCoSo,
        DiaChi,
        IdPhuongXa,
        IdLoaiHinhKinhDoanh,
        IdCoSo,
      ]);
    }

    if (IdGiayChungNhan && NgayDangKy) {
      await updateQuery(sqlUpdateGiayChungNhanATTP, [
        NgayDangKy,
        LoaiThucPham,
        HinhAnhMinhHoa,
        TrangThai,
        NgayCapChungNhanATTP,
        NgayHetHanChungNhanATTP,
        IdGiayChungNhan,
      ]);
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
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
