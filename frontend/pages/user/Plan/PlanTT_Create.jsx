import React from 'react';
import { useNavigate } from 'react-router';

const PlanTT_Create = () => {
  const navigate = useNavigate();
  const [TieuDe, setTieuDe] = React.useState('');
  const [Desp, setDesp] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleSubmit = async (e) => {};
  return (
    <div className="mb-8 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl">
        <h2 className="text-4xl font-semibold mb-8 text-center text-[#00CD00]">
          Tạo Kế Hoạch Thanh Tra
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="TieuDe" className="block mb-2 font-medium">
                Tên Kế Hoạch
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
                Cơ Sở Thực Hiện
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
          <div>
            <label htmlFor="content" className="mt-4 block mb-2 font-medium">
              Nội Dung Kiểm Tra
            </label>
            <textarea
              type="text"
              id="content"
              cols={30}
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded  border-solid focus:border-[#0cb306]  hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
            />
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
            >
              Tạo Kế Hoạch
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

export default PlanTT_Create;
