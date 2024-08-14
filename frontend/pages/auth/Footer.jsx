import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0be20b] text-white py-10 border-t-4 border-green-500 ">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <p className="text-2xl font-bold uppercase tracking-wider">
            Bản Quyền Thuộc Ban Quản Lý An Toàn Thực Phẩm Thành Phố Đà Nẵng
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-semibold uppercase mb-2">Giấy phép:</p>
            <p>
              Số 521/GP-STTTT do Sở Thông tin và Truyền thông thành phố Đà Nẵng
              cấp ngày 05/6/2020
            </p>
          </div>
          <div>
            <p className="font-semibold uppercase mb-2">Trưởng Ban biên tập:</p>
            <p>
              Ông Nguyễn Tấn Hải, Trưởng ban Ban Quản lý An toàn thực phẩm thành
              phố
            </p>
          </div>
          <div>
            <p className="font-semibold uppercase mb-2">Trụ sở:</p>
            <p>
              12 Bạch Đằng, phường Thạch Thang, quận Hải Châu, thành phố Đà Nẵng
            </p>
          </div>
          <div>
            <p className="font-semibold uppercase mb-2">Điện thoại:</p>
            <p>84.236.3.562731</p>
          </div>
          <div>
            <p className="font-semibold uppercase mb-2">Email:</p>
            <p>
              <a
                href="mailto:bqlattp@danang.gov.vn"
                className="hover:underline"
              >
                bqlattp@danang.gov.vn
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://tinnhiemmang.vn/handle_cert?id=antoanthucpham.danang.gov.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://tinnhiemmang.vn/handle_cert?id=antoanthucpham.danang.gov.vn"
              alt="NCSC"
              className="h-16"
            />
          </a>
        </div>
        <div className="mt-8 text-xs">
          <p>
            © {new Date().getFullYear()} Ban Quản Lý An Toàn Thực Phẩm TP Đà
            Nẵng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
