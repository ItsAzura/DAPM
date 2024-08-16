import React from 'react';
import { useNavigate } from 'react-router';

const Createprocessingrecords = () => {
  const navigate = useNavigate();
  const [TieuDe, setTieuDe] = React.useState('');
  const [Desp, setDesp] = React.useState('');
  const [content, setContent] = React.useState('');
  const handleSubmit = async (e) => {};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mb-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl mt-8">
        <h2 className="text-4xl font-semibold mb-8 text-center text-[#00CD00]">
          Tạo Biên Bản Xử Lý
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="TieuDe" className="block mb-2 font-medium">
                Tên Biên Bản
              </label>
              <input
                type="text"
                id="TieuDe"
                value={TieuDe}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="Desp" className="block mb-2 font-medium">
                ID Vi Phạm
              </label>
              <input
                type="text"
                id="Desp"
                value={Desp}
                onChange={(e) => setDesp(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
            <div>
              <label htmlFor="TieuDe" className="block mb-2 font-medium">
                Ngày Xử Lý
              </label>
              <input
                type="date"
                id="TieuDe"
                value={TieuDe}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="Desp" className="block mb-2 font-medium">
                Người Xử Lý
              </label>
              <input
                type="text"
                id="Desp"
                value={Desp}
                onChange={(e) => setDesp(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
              />
            </div>
          </div>
          <div>
            <label htmlFor="content" className="block mb-2 font-medium">
              Nội Dung
            </label>
            <textarea
              type="text"
              id="content"
              cols={30}
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform focus:-translate-y-1"
            />
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
            >
              Tạo Biên Bản
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

export default Createprocessingrecords;
