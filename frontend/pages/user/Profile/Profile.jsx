import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const Profile = () => {
  const { id } = useParams();
  const [currernfacility, setCurrernfacility] = useState(null);

  const fetchFacility = async () => {
    const res = await fetch(`http://localhost:5000/api/profile/${id}`);
    const data = await res.json();
    setCurrernfacility(data);
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  useEffect(() => {
    fetchFacility();
  }, []);

  console.log('currernfacility', currernfacility);
  return (
    <div className="pl-14 ">
      <h1 className="py-6 text-4xl font-semibold text-[#0cb306]">
        Hồ Sơ {currernfacility?.TenCoSo}
      </h1>
      <div className="w-1/2 p-4 flex flex-col gap-7 border bg-white rounded-md shadow-dashboard">
        <p>Mã Cơ Sở: {currernfacility?.IdCoSo}</p>
        <p>Tên Cơ Sở: {currernfacility?.TenCoSo}</p>
        <p>Chủ Cơ Sở: {currernfacility?.TenNguoiDung}</p>
        <p>
          Địa Chỉ: {currernfacility?.DiaChi} - {currernfacility?.TenPhuongXa} -{' '}
          {currernfacility?.TenQuanHuyen}
        </p>
        <p>Loai Hình Kinh Doanh: {currernfacility?.TenLoaiHinhKinhDoanh}</p>
        <p>Số Giấy Phép Kinh Doanh: {currernfacility?.SoGiayPhepKD}</p>
        <p>
          Ngày Cấp Giấy Phép Kinh Doanh:{' '}
          {formatDate(currernfacility?.NgayCapGiayPhep)}
        </p>
        <p>
          Ngày Cấp Chứng Nhận ATTP:{' '}
          {formatDate(currernfacility?.NgayCapChungNhanATTP)}
        </p>
        <p>
          Ngày Hết Hạn Chứng Nhận ATTP:{' '}
          {formatDate(currernfacility?.NgayHetHanChungNhanATTP)}
        </p>
      </div>
      <div className="flex flex-row gap-8">
        <button className="bg-[#ff5e5e] text-white px-4 py-2 rounded cursor-pointer my-4">
          Quay Lại
        </button>
        <button className="bg-[#0cb306] text-white px-4 py-2 rounded cursor-pointer my-4">
          <Link to={`/updateProfile/${id}`}>Cập Nhật</Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;
