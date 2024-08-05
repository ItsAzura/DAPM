import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ListProfile = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [facility, setFacility] = useState(null);

  const fetchToken = () => {
    const token = localStorage.getItem('attp_token');
    if (!token) {
      console.log('Token not found');
      return;
    }
    const decoded = jwtDecode(token);
    setCurrentUser(decoded.IdNguoiDung);
  };

  const fetchFacility = async () => {
    const res = await fetch(
      `http://localhost:5000/api/profile/user/${currentUser}`
    );
    const data = await res.json();
    // console.log(data);
    setFacility(data);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    fetchFacility();
  }, [currentUser]);

  console.table('facility', facility);

  return (
    <div className="pl-14">
      <h1 className="py-6 text-4xl font-semibold text-[#0cb306]">
        Danh Sach Cơ Sở
      </h1>
      <ul className="w-full space-y-6 flex flex-col gap-4">
        {facility &&
          facility.map((f, i) => (
            <li key={i}>
              <Link
                to={`/facility/${f.IdCoSo}`}
                className="w-1/2 p-4 flex flex-col border bg-white rounded-md shadow-dashboard"
              >
                <h2 className="font-semibold">{f.TenCoSo}</h2>
                <p>
                  {f.DiaChi} - {f.TenPhuongXa} - {f.TenQuanHuyen}
                </p>
                <p>{f.TenLoaiHinhKinhDoanh}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListProfile;
