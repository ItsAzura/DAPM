import React, { useEffect } from 'react';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';

const PlanKTVP = () => {
  const [user, setUser] = useState({});
  const [plan, setPlan] = useState([]);
  const [plan2, setPlan2] = useState([]);

  const fetchPlan = async () => {
    const res = await fetch(
      `http://localhost:5000/api/plans/PlanKiemTraDone/${user.IdNguoiDung}`
    );
    const data = await res.json();
    setPlan(data);
  };

  const fetchPlan2 = async () => {
    const res = await fetch(
      `http://localhost:5000/api/plans/PlanKiemTraDone2/${user.IdNguoiDung}`
    );
    const data = await res.json();
    setPlan2(data);
  };

  const fetchUser = async () => {
    const token = localStorage.getItem('attp_token');
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchPlan();
    fetchPlan2();
  }, [user]);

  console.log(plan);
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="pl-14">
      <h1 className="py-6 text-4xl font-semibold text-[#0cb306]">
        Danh Sách Kế Hoạch Kiểm tra Vi Phạm
      </h1>
      <div className="flex flex-row">
        <ul className="w-full space-y-6 flex flex-col gap-4">
          {plan.map((p, i) => (
            <li key={i}>
              <div className="w-5/6 p-4 flex flex-col border bg-white rounded-md shadow-dashboard">
                <h2 className="font-semibold">Mã Kế Hoạch: {p.IdKeHoach}</h2>
                <p>Tên Cơ Sở: {p.TenCoSo}</p>
                <p>Thời Gian Bắt Đầu: {formatDate(p.ThoiGianBatDau)}</p>
                <p>Vai Trò: {p.VaiTro}</p>
                {p.TrangThai === 1 ? (
                  <p>Trạng Thái: Đang Thực Hiện</p>
                ) : (
                  <p>Trạng Thái: Đã Hoàn Thành</p>
                )}
                <button
                  type="submit"
                  className="ml-[80%] w-1/5 bg-[#0cb306]  text-white px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <Link to={`/createReport/${p.IdKeHoach}`}>Tạo Báo Cáo</Link>
                </button>
              </div>
            </li>
          ))}
        </ul>

        <ul className="w-full space-y-6 flex flex-col gap-4">
          {plan2.map((p, i) => (
            <li key={i}>
              <div className="w-5/6 p-4 flex flex-col border bg-white rounded-md shadow-dashboard">
                <h2 className="font-semibold">Mã Kế Hoạch: {p.IdKeHoach}</h2>
                <p>Tên Cơ Sở: {p.TenCoSo}</p>
                <p>Thời Gian Bắt Đầu: {formatDate(p.ThoiGianBatDau)}</p>
                <p>Vai Trò: {p.VaiTro}</p>
                {p.TrangThai === 1 ? (
                  <p>Trạng Thái: Đang Thực Hiện</p>
                ) : (
                  <p>Trạng Thái: Đã Hoàn Thành</p>
                )}
                <button
                  type="submit"
                  className="ml-[80%] w-1/5 bg-[#0cb306]  text-white px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <Link to={`/createPDF/${p.IdKeHoach}`}>In Báo Cáo</Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanKTVP;
