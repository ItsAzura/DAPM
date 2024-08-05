import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { id } = useParams();
  const [currernfacility, setCurrernfacility] = useState(null);

  const [IdCoSo, setIdCoSo] = useState('');
  const [TenCoSo, setTenCoSo] = useState('');
  const [ChuCoSo, setChuCoSo] = useState('');
  const [DiaChi, setDiaChi] = useState('');
  const [IdQuanHuyen, setIdQuanHuyen] = useState('');
  const [IdPhuongXa, setIdPhuongXa] = useState('');

  const [IdLoaiHinhKinhDoanh, setIdLoaiHinhKinhDoanh] = useState('');

  const [SoGiayPhepKD, setSoGiayPhepKD] = useState('');
  const [NgayCapGiayPhepKD, setNgayCapGiayPhepKD] = useState('');
  const [NgayCapATTP, setNgayCapATTP] = useState('');
  const [NgayHetHanATTP, setNgayHetHanATTP] = useState('');

  const [KDSelector, setKDSelector] = useState('');
  const [PhuongXaSelector, setPhuongXaSelector] = useState('');
  const [QuanHuyenSelector, setQuanHuyenSelector] = useState('');

  const fetchFacility = async () => {
    const res = await fetch(`http://localhost:5000/api/profile/${id}`);
    const data = await res.json();
    setCurrernfacility(data);
  };

  const fetchIdLoaiHinhKinhDoanh = async () => {
    const res = await fetch('http://localhost:5000/api/loaihinhkinhdoanh');
    const data = await res.json();
    setKDSelector(data);
  };

  const fetchIdQuanHuyen = async () => {
    const res = await fetch('http://localhost:5000/api/quanhuyen');
    const data = await res.json();
    setQuanHuyenSelector(data);
  };

  const fetchIdPhuongXa = async () => {
    const res = await fetch(
      `http://localhost:5000/api/phuongxa/${IdQuanHuyen}`
    );
    const data = await res.json();
    setPhuongXaSelector(data);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    fetchFacility();
    fetchIdLoaiHinhKinhDoanh();
    fetchIdQuanHuyen();
  }, []);

  useEffect(() => {
    if (currernfacility) {
      setIdCoSo(currernfacility.IdCoSo || '');
      setTenCoSo(currernfacility.TenCoSo || '');
      setChuCoSo(currernfacility.TenNguoiDung || '');
      setDiaChi(currernfacility.DiaChi || '');
      setIdQuanHuyen(currernfacility.IdQuanHuyen);
      setIdPhuongXa(currernfacility.IdPhuongXa);
      setIdLoaiHinhKinhDoanh(currernfacility.IdLoaiHinhKinhDoanh);
      setSoGiayPhepKD(currernfacility.SoGiayPhepKD || '');
      setNgayCapGiayPhepKD(formatDate(currernfacility.NgayCapGiayPhepKD) || '');
      setNgayCapATTP(formatDate(currernfacility.NgayCapChungNhanATTP) || '');
      setNgayHetHanATTP(
        formatDate(currernfacility.NgayHetHanChungNhanATTP) || ''
      );
    }
  }, [currernfacility]);

  useEffect(() => {
    fetchIdPhuongXa();
  }, [IdQuanHuyen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      IdCoSo,
      TenCoSo,
      DiaChi,
      IdQuanHuyen: parseInt(IdQuanHuyen, 10),
      IdPhuongXa: parseInt(IdPhuongXa, 10),
      IdLoaiHinhKinhDoanh: parseInt(IdLoaiHinhKinhDoanh, 10),
      SoGiayPhepKD,
      NgayCapGiayPhepKD,
    };
    try {
      const res = await fetch('http://localhost:5000/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      toast.success('Cập nhật hồ sơ thành công');
      setTimeout(() => {
        window.location.href = `http://localhost:5173/facility/${IdCoSo}`;
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error('Cập nhật hồ sơ thất bại');
    }
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
              <label htmlFor="idCoSo" className="block mb-2 font-medium">
                Id Hồ sơ
              </label>
              <input
                type="text"
                id="idCoSo"
                value={IdCoSo}
                className="w-full p-2 border border-gray-300 rounded"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="tenCoSo" className="block mb-2 font-medium">
                Tên cơ sở
              </label>
              <input
                type="text"
                id="tenCoSo"
                value={TenCoSo}
                onChange={(e) => setTenCoSo(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
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
                type="text"
                id="diaChi"
                value={DiaChi}
                onChange={(e) => setDiaChi(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="QuanHuyen" className="block mb-2 font-medium">
                Quận Huyện
              </label>
              <select
                type="text"
                id="QuanHuyen"
                value={IdQuanHuyen}
                onChange={(e) => setIdQuanHuyen(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {QuanHuyenSelector &&
                  QuanHuyenSelector.map((qh, i) => (
                    <option key={i} value={qh.IdQuanHuyen}>
                      {qh.TenQuanHuyen}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="PhuongXa" className="block mb-2 font-medium">
                Phường Xã
              </label>
              <select
                type="text"
                id="PhuongXa"
                value={IdPhuongXa}
                onChange={(e) => setIdPhuongXa(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {PhuongXaSelector &&
                  PhuongXaSelector.map((px, i) => (
                    <option key={i} value={px.IdPhuongXa}>
                      {px.TenPhuongXa}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="loaiHinhKinhDoanh"
                className="block mb-2 font-medium"
              >
                Loại hình kinh doanh
              </label>
              <select
                type="text"
                id="loaiHinhKinhDoanh"
                value={IdLoaiHinhKinhDoanh}
                onChange={(e) => setIdLoaiHinhKinhDoanh(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {KDSelector &&
                  KDSelector.map((kd, i) => (
                    <option key={i} value={kd.IdLoaiHinhKinhDoanh}>
                      {kd.TenLoaiHinhKinhDoanh}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="SoGiayPhepKD" className="block mb-2 font-medium">
                Số giấy phép kinh doanh
              </label>
              <input
                type="text"
                id="SoGiayPhepKD"
                value={SoGiayPhepKD}
                onChange={(e) => setSoGiayPhepKD(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
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
                type="date"
                id="NgayCapGiayPhepKD"
                value={NgayCapGiayPhepKD}
                onChange={(e) => setNgayCapGiayPhepKD(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="ngayCapATTP" className="block mb-2 font-medium">
                Ngày cấp chứng nhận ATTP
              </label>
              <input
                type="date"
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
                Ngày hết hạn chứng nhận ATTP
              </label>
              <input
                type="date"
                id="ngayHetHanATTP"
                value={NgayHetHanATTP}
                className="w-full p-2 border border-gray-300 rounded"
                readOnly
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#0cb306] text-white py-2 px-4 rounded hover:bg-gray-800"
            >
              Cập nhật
            </button>
            <button
              type="button"
              className="bg-[#ff5e5e] text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
