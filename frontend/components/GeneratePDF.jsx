// src/components/GeneratePDF.js
import React from 'react';
import jsPDF from 'jspdf';

const GeneratePDF = ({ data, setPdfData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Report', 14, 20);

    data.forEach((item, index) => {
      const yOffset = 30 + index * 50;
      doc.text(`Kế hoạch: ${item.NoiDungKeHoach}`, 14, yOffset);
      doc.text(
        `Cơ sở: ${item.TenCoSo} (${item.TenLoaiHinhKinhDoanh})`,
        14,
        yOffset + 10
      );
      doc.text(
        `Địa chỉ: ${item.DiaChi}, ${item.TenPhuongXa}, ${item.TenQuanHuyen}`,
        14,
        yOffset + 20
      );
      doc.text(`Người lập kế hoạch: ${item.NguoiLapKeHoach}`, 14, yOffset + 30);
      doc.text(
        `Thành viên: ${item.HoTenThanhVien} (${item.VaiTro})`,
        14,
        yOffset + 40
      );
    });

    const pdfData = doc.output('blob');
    setPdfData(URL.createObjectURL(pdfData));
  };

  return <button onClick={generatePDF}>Generate PDF</button>;
};

export default GeneratePDF;
