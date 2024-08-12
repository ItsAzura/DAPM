import React, { useState, useEffect } from 'react';
import img from '../../../Assets/upload/attp5.jpg';

const Details_ATTP = () => {
  const [TenCoSo, setTenCoSo] = useState('Co So 1');
  const [ChuCoSo, setChuCoSo] = useState('Nguyen Van A');
  const [DiaChi, setDiaChi] = useState('48 Cao Thang');
  const [IdLoaiHinhKinhDoanh, setIdLoaiHinhKinhDoanh] =
    useState('Kinh Doanh An Uong');
  const [SoGiayPhepKD, setSoGiayPhepKD] = useState('KD001');
  const [NgayCapGiayPhepKD, setNgayCapGiayPhepKD] = useState('12/08/2024');
  const [NgayCapATTP, setNgayCapATTP] = useState('12/08/2024');
  const [NgayHetHanATTP, setNgayHetHanATTP] = useState('Đồ Ăn');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {};

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Cập Nhật Hồ Sơ
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="tenCoSo" className="block mb-2 font-medium">
                Tên cơ sở
              </label>
              <input
                readOnly
                type="text"
                id="tenCoSo"
                value={TenCoSo}
                onChange={(e) => setTenCoSo(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded border-solid focus:border-[#0cb306] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
            <div>
              <label htmlFor="chuCoSo" className="block mb-2 font-medium">
                Chủ cơ sở
              </label>
              <input
                type="text"
                id="chuCoSo"
                value={ChuCoSo}
                className="w-full p-2 border border-gray-300 rounded"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="diaChi" className="block mb-2 font-medium">
                Địa Chỉ
              </label>
              <input
                readOnly
                type="text"
                id="diaChi"
                value={DiaChi}
                onChange={(e) => setDiaChi(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded border-solid focus:border-[#0cb306] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="loaiHinhKinhDoanh"
                className="block mb-2 font-medium"
              >
                Loại hình kinh doanh
              </label>
              <input
                readOnly
                type="text"
                id="loaiHinhKinhDoanh"
                value={IdLoaiHinhKinhDoanh}
                onChange={(e) => setIdLoaiHinhKinhDoanh(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded border-solid focus:border-[#0cb306] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
            <div>
              <label htmlFor="SoGiayPhepKD" className="block mb-2 font-medium">
                Số giấy phép kinh doanh
              </label>
              <input
                readOnly
                type="text"
                id="SoGiayPhepKD"
                value={SoGiayPhepKD}
                onChange={(e) => setSoGiayPhepKD(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded border-solid focus:border-[#0cb306] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="NgayCapGiayPhepKD"
                className="block mb-2 font-medium"
              >
                Ngày cấp giấy phép
              </label>
              <input
                readOnly
                type="text"
                id="NgayCapGiayPhepKD"
                value={NgayCapGiayPhepKD}
                onChange={(e) => setNgayCapGiayPhepKD(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded border-solid focus:border-[#0cb306] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
            <div>
              <label htmlFor="ngayCapATTP" className="block mb-2 font-medium">
                Ngày Đăng Ký
              </label>
              <input
                type="text"
                id="ngayCapATTP"
                value={NgayCapATTP}
                className="w-full p-2 border border-gray-300 rounded"
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="ngayHetHanATTP"
                className="block mb-2 font-medium"
              >
                Loại Thực Phẩm
              </label>
              <input
                type="text"
                id="ngayHetHanATTP"
                value={NgayHetHanATTP}
                className="w-full p-2 border border-gray-300 rounded"
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="ngayHetHanATTP"
                className="block mb-2 font-medium"
              >
                Hình Ảnh Minh Chứng
              </label>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
            >
              Xác Nhận Đăng Ký
            </button>
            <button
              type="button"
              onClick={toggleModal}
              className="bg-[#ff5e5e] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
            >
              Yêu Cầu Bổ Sung
            </button>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Yêu Cầu Bổ Sung</h2>
            <div>
              <label htmlFor="nd" className="block mb-2 font-medium">
                Nội dung
              </label>
              <textarea
                cols={30}
                rows={6}
                type="text"
                id="nd"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              onClick={toggleModal}
              className="ml-[81%] mt-4 bg-[#ff5e5e] text-white py-2 px-4 rounded"
            >
              Gửi Yêu Cầu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details_ATTP;
