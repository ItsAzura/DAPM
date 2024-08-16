import React from 'react';
import { useState } from 'react';

const Report_violation = () => {
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
        <h2 className="text-4xl font-semibold mb-8 text-center text-[#00CD00]">
          Phản Ánh Vi Phạm
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="UserBaoCao" className="block mb-2 font-medium">
                Họ Tên Người Báo Cáo
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
                Số Điện Thoại
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
                Căn Cước Công Dân
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
                Cơ Sở Phản Ánh
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
            <label htmlFor="NoiDung" className="block mb-2 font-medium mt-2">
              Nội Dung
            </label>
            <textarea
              type="date"
              id="NoiDung"
              value={NoiDung}
              onChange={(e) => setNoiDung(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              cols={3}
              rows={6}
            />
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
              Gửi Phản Ánh
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

export default Report_violation;
