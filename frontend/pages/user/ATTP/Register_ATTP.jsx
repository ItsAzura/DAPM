import React from 'react';
import { useState } from 'react';

const Register_ATTP = () => {
  const [UserBaoCao, setUserBaoCao] = useState('');
  const [SDT, setSDT] = useState('');
  const [CCCD, setCCCD] = useState('');
  const [CoSoPA, setCoSoPA] = useState('');
  const [NoiDung, setNoiDung] = useState('');
  const [File, setFile] = useState('');
  const handleSubmit = async (e) => {};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mb-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl mt-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#00CD00]">
          Đăng Ký Chứng Nhận ATTP
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="UserBaoCao" className="block mb-2 font-medium">
                Tên Cơ Sở
              </label>
              <input
                type="text"
                id="UserBaoCao"
                value={UserBaoCao}
                onChange={(e) => setUserBaoCao(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
            <div>
              <label htmlFor="SDT" className="block mb-2 font-medium">
                Chủ Cơ Sở
              </label>
              <input
                type="text"
                id="SDT"
                value={SDT}
                onChange={(e) => setSDT(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
            <div>
              <label htmlFor="CCCD" className="block mb-2 font-medium">
                Địa Chỉ
              </label>
              <input
                type="text"
                id="CCCD"
                value={CCCD}
                onChange={(e) => setCCCD(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
            <div>
              <label htmlFor="CoSoPA" className="block mb-2 font-medium">
                Loại Hình Kinh Doanh
              </label>
              <input
                type="text"
                id="CoSoPA"
                value={CoSoPA}
                onChange={(e) => setCoSoPA(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
            <div>
              <label htmlFor="CoSoPA" className="block mb-2 font-medium">
                Số Giấy Phép Kinh Doanh
              </label>
              <input
                type="text"
                id="CoSoPA"
                value={CoSoPA}
                onChange={(e) => setCoSoPA(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
            <div>
              <label htmlFor="CoSoPA" className="block mb-2 font-medium">
                Ngày Cấp Giấy Phép Kinh Doanh
              </label>
              <input
                type="date"
                id="CoSoPA"
                value={CoSoPA}
                onChange={(e) => setCoSoPA(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
            <div>
              <label htmlFor="CoSoPA" className="block mb-2 font-medium">
                Loại Thực Phẩm
              </label>
              <input
                type="text"
                id="CoSoPA"
                value={CoSoPA}
                onChange={(e) => setCoSoPA(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
          </div>

          <div>
            <label htmlFor="File" className="block mb-2 font-medium mt-2">
              Hình Ảnh Minh Chứng
            </label>
            <input
              type="file"
              id="File"
              value={File}
              onChange={(e) => setFile(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              cols={3}
              rows={6}
            />
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
            >
              Gửi Hồ Sơ
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-[#ff5e5e] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register_ATTP;
