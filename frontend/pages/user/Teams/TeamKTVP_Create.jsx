import React from 'react';
import { useNavigate } from 'react-router';

const TeamKTVP_Create = () => {
  const navigate = useNavigate();
  const [TieuDe, setTieuDe] = React.useState('');
  const [Desp, setDesp] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleSubmit = async (e) => {};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Lập Đoàn Kiểm Tra Vi Phạm
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="TieuDe" className="block mb-2 font-medium">
                Tên Đoàn
              </label>
              <input
                type="text"
                id="TieuDe"
                value={TieuDe}
                className="w-full p-2 border border-gray-300 rounded "
                readOnly
              />
            </div>
            <div>
              <label htmlFor="Desp" className="block mb-2 font-medium">
                Kế Hoạch Kiểm Tra Vi Phạm
              </label>
              <input
                type="text"
                id="Desp"
                value={Desp}
                onChange={(e) => setDesp(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded  border-solid focus:border-[#0cb306]  hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
            <div>
              <label htmlFor="TieuDe" className="block mb-2 font-medium">
                Ngày Kiểm Tra
              </label>
              <input
                type="date"
                id="TieuDe"
                value={TieuDe}
                className="w-full p-2 border border-gray-300 rounded "
                readOnly
              />
            </div>
            <div>
              <label htmlFor="Desp" className="block mb-2 font-medium">
                Giờ Bắt Đầu
              </label>
              <input
                type="text"
                id="Desp"
                value={Desp}
                onChange={(e) => setDesp(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded  border-solid focus:border-[#0cb306]  hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
          </div>
          <div className="w-1/2 mt-4">
            <h1 className="font-semibold mb-2">Chọn Thành Viên</h1>
            <div className="flex flex-col">
              <div className="ml-10 flex gap-10">
                <span>Tên Cán Bộ</span>
                <span>Chức Vụ</span>
              </div>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  value="Nguyễn Văn A"
                  className="w-1/4 p-2 border border-gray-300 rounded "
                />
                <input
                  type="text"
                  value="Trưởng Đoàn"
                  className="w-1/4 p-2 border border-gray-300 rounded "
                />
              </div>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  value="Nguyễn Văn B"
                  className="w-1/4 p-2 border border-gray-300 rounded "
                />
                <input
                  type="text"
                  value="Phó Đoàn"
                  className="w-1/4 p-2 border border-gray-300 rounded "
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  value="Nguyễn Văn C"
                  className="w-1/4 p-2 border border-gray-300 rounded "
                />
                <input
                  type="text"
                  value="Thư Ký"
                  className="w-1/4 p-2 border border-gray-300 rounded "
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
            >
              Xác Nhận
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

export default TeamKTVP_Create;
