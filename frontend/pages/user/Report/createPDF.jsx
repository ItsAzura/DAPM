import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
import GeneratePDF from '../../../components/GeneratePDF';
import PDFPreview from '../../../components/PDFPreview';

const data = [
  {
    IdChiTietKetQua: 13,
    NoiDungKetQua: 'nbcncncn',
    HinhAnhMinhChung: 'uploads/1723021642367-animepic2.jpg',
    CoViPham: 1,
    IdKeHoach: 21,
    ThoiGianBatDau: '2023-12-31T17:00:00.000Z',
    NoiDungKeHoach: 'Kế hoạch 1',
    TrangThaiKeHoach: 2,
    LoaiKeHoach: 2,
    IdCoSo: 11,
    TenCoSo: 'Cửa hàng ABC',
    DiaChi: '123 Đường A',
    TenPhuongXa: 'Hòa Liên',
    TenQuanHuyen: 'Hòa Vang',
    TenLoaiHinhKinhDoanh: 'Chế biến thực phẩm',
    NguoiLapKeHoach: 'Tran Thi B',
    IdXuLyViPham: null,
    NgayXuLy: null,
    NoiDungXuLy: null,
    TrangThaiXuLy: null,
    NguoiXuLy: null,
    IdDanhSachThanhVien: 11,
    IdNguoiDungThanhVien: 'ND005',
    HoTenThanhVien: 'Hoang Van E',
    VaiTro: 'Trưởng Đoàn',
    TenDoan: 'Đoàn thẩm định 1',
  },
  {
    IdChiTietKetQua: 13,
    NoiDungKetQua: 'nbcncncn',
    HinhAnhMinhChung: 'uploads/1723021642367-animepic2.jpg',
    CoViPham: 1,
    IdKeHoach: 21,
    ThoiGianBatDau: '2023-12-31T17:00:00.000Z',
    NoiDungKeHoach: 'Kế hoạch 1',
    TrangThaiKeHoach: 2,
    LoaiKeHoach: 2,
    IdCoSo: 11,
    TenCoSo: 'Cửa hàng ABC',
    DiaChi: '123 Đường A',
    TenPhuongXa: 'Hòa Liên',
    TenQuanHuyen: 'Hòa Vang',
    TenLoaiHinhKinhDoanh: 'Chế biến thực phẩm',
    NguoiLapKeHoach: 'Tran Thi B',
    IdXuLyViPham: null,
    NgayXuLy: null,
    NoiDungXuLy: null,
    TrangThaiXuLy: null,
    NguoiXuLy: null,
    IdDanhSachThanhVien: 12,
    IdNguoiDungThanhVien: 'ND006',
    HoTenThanhVien: 'Vu Thi F',
    VaiTro: 'Phó Đoàn',
    TenDoan: 'Đoàn thẩm định 1',
  },
  {
    IdChiTietKetQua: 13,
    NoiDungKetQua: 'nbcncncn',
    HinhAnhMinhChung: 'uploads/1723021642367-animepic2.jpg',
    CoViPham: 1,
    IdKeHoach: 21,
    ThoiGianBatDau: '2023-12-31T17:00:00.000Z',
    NoiDungKeHoach: 'Kế hoạch 1',
    TrangThaiKeHoach: 2,
    LoaiKeHoach: 2,
    IdCoSo: 11,
    TenCoSo: 'Cửa hàng ABC',
    DiaChi: '123 Đường A',
    TenPhuongXa: 'Hòa Liên',
    TenQuanHuyen: 'Hòa Vang',
    TenLoaiHinhKinhDoanh: 'Chế biến thực phẩm',
    NguoiLapKeHoach: 'Tran Thi B',
    IdXuLyViPham: null,
    NgayXuLy: null,
    NoiDungXuLy: null,
    TrangThaiXuLy: null,
    NguoiXuLy: null,
    IdDanhSachThanhVien: 13,
    IdNguoiDungThanhVien: 'ND007',
    HoTenThanhVien: 'Nguyen Van G',
    VaiTro: 'Thư Ký',
    TenDoan: 'Đoàn thẩm định 1',
  },
];

const CreatePDF = () => {
  const [pdfData, setPdfData] = useState(null);

  return (
    <div>
      <h1>PDF Generation and Preview</h1>
      <GeneratePDF data={data} setPdfData={setPdfData} />
      <PDFPreview fileUrl={pdfData} />
    </div>
  );
};

export default CreatePDF;
