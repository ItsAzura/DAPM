import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-4 border-t-2 border-green-500">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          BẢN QUYỀN THUỘC BAN QUẢN LÝ AN TOÀN THỰC PHẨM THÀNH PHỐ ĐÀ NẴNG
        </p>
        <p className="text-xs mt-1">
          Giấy phép: Số 521/GP-STTTT do Sở Thông tin và Truyền thông thành phố
          Đà Nẵng cấp ngày 05/6/2020
        </p>
        <p className="text-xs mt-1">
          Trưởng Ban biên tập: ông Nguyễn Tấn Hải, Trưởng ban Ban Quản lý An
          toàn thực phẩm thành phố
        </p>
        <p className="text-xs mt-1">
          Trụ sở: 12 Bạch Đằng, phường Thạch Thang, quận Hải Châu, thành phố Đà
          Nẵng
        </p>
        <p className="text-xs mt-1">
          Điện thoại: 84.236.3.562731 - Email: bqlattp@danang.gov.vn
        </p>
        <div className="flex justify-center mt-4">
          <img
            src="https://tinnhiemmang.vn/handle_cert?id=antoanthucpham.danang.gov.vn"
            alt="NCSC"
            className="h-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
