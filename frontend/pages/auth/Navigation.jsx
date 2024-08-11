import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';
import { jwtDecode } from 'jwt-decode';
import logo from '../../Assets/Logo.jpg';

const Navigation = () => {
  const [decodedToken, setDecodedToken] = useState(null);
  const [userInfo, setUserInfo] = useState(false);
  const [user, setUser] = useState(false);
  const [owners, setOwners] = useState(false);
  const [checkEmployee, setCheckEmployee] = useState(false);
  const [staff, setStaff] = useState(false);
  const [admin, setAdmin] = useState(false);

  const fetchToken = () => {
    const token = localStorage.getItem('attp_token');
    if (!token) {
      console.log('Token not found');
      return;
    }
    try {
      const decoded = jwtDecode(token);
      setDecodedToken(decoded); // Cập nhật biến trạng thái
      switch (decoded.IdChucVu) {
        case 1: {
          setAdmin(true);
          setUserInfo(true);
          break;
        }
        case 2: {
          setStaff(true);
          setUserInfo(true);
          break;
        }
        case 3: {
          setCheckEmployee(true);
          setUserInfo(true);
          break;
        }
        case 4: {
          setOwners(true);
          setUserInfo(true);
          break;
        }
        default: {
          setUser(true);
          break;
        }
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  console.log(decodedToken);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('attp_token');
    navigate('/login');
    window.location.reload();
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <div
      style={{ zIndex: 100 }}
      className={`${
        showSidebar ? 'hidden' : 'flex'
      } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between text-white bg-transparent w-[3%] hover:w-[30%] h-[100vh]  fixed `}
      id="navigation-container"
    >
      <div className="h-full w-2/3 flex flex-col justify-between bg-[#0cb306] p-2 ">
        <div className="flex flex-col justify-center gap-y-6">
          <Link to="/" className="flex items-center justify-center mt-4">
            <img src={logo} alt="" className="w-[30%] rounded-full" />
          </Link>

          {/* Home */}
          <Link
            to="/"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
              />
            </svg>
            <span className="hidden nav-item-name ml-3">Trang Chủ</span>
            {''}
          </Link>

          {admin && (
            <>
              {' '}
              {/* Search Profile */}
              <Link
                to="/SearchUser"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2m.5 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 5c.47 0 .917-.092 1.326-.26l1.967 1.967a1 1 0 0 0 1.414-1.414l-1.817-1.818A3.5 3.5 0 1 0 11.5 17"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Tìm Kiếm Hồ Sơ{''}
                </span>
                {''}
              </Link>
              {/* Manage Profile */}
              <Link
                to="/"
                className="relative flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="8" r="4" fill="currentColor" />
                  <path
                    fill="currentColor"
                    d="M10.67 13.02c-.22-.01-.44-.02-.67-.02c-2.42 0-4.68.67-6.61 1.82c-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01l-1-1.73l-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49l-1 1.73l1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01l1 1.73l1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49l1-1.73l-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3">
                  Tài Khoản{'  >'}
                </span>
                <div className="absolute top-0 left-48 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg w-48 z-100 ">
                  <Link
                    to="/Approve"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Duyệt Tài Khoản
                  </Link>
                  <Link
                    to="/MangerUser"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Quản Lý Tài Khoản
                  </Link>
                </div>
              </Link>
            </>
          )}

          {staff && (
            <>
              {/* News */}
              <Link
                to="/TinTuc"
                className="w-3/4 flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11l5 5v11q0 .825-.587 1.413T19 21zm2-4h10v-2H7zm0-4h10v-2H7zm8-4h4l-4-4zM7 9h5V7H7z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Tin Tức{'  >'}
                </span>
                {''}
                <div className="w-3/4 absolute top-0 left-40 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg  z-100 ">
                  <Link
                    to="/XemTinTuc"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Xem Tin Tức
                  </Link>
                  <Link
                    to="/TaoTinTuc"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Tạo Tin Tức
                  </Link>
                </div>
              </Link>

              {/* profile */}
              <Link
                to="/HoSo"
                className="flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v14h16zm-3 10a1 1 0 0 1 .117 1.993L17 17H7a1 1 0 0 1-.117-1.993L7 15zm-7-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm7 4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm-7-2H8v2h2zm7-2a1 1 0 0 1 .117 1.993L17 9h-3a1 1 0 0 1-.117-1.993L14 7z"
                    />
                  </g>
                </svg>
                <span className="hidden nav-item-name ml-3 ">Hồ Sơ{'  >'}</span>
                {''}
                <div className="w-3/4 absolute top-0 left-48 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg  z-100 ">
                  <Link
                    to="/XacNhanHoSo"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Xác nhận hồ sơ đăng ký
                  </Link>
                  <Link
                    to="/YeuCauBoSung"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Yêu cầu bổ sung.
                  </Link>
                </div>
              </Link>

              {/* create plan */}
              <Link
                to="/TaoKeHoach"
                className="w-3/4 flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 48 48"
                >
                  <g fill="none" stroke="currentColor" stroke-width="4">
                    <path
                      stroke-linejoin="round"
                      d="M5 19h38v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm0-9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16 31l6 6l12-12"
                    />
                    <path stroke-linecap="round" d="M16 5v8m16-8v8" />
                  </g>
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Lập Kế Hoạch{'  >'}
                </span>
                {''}
                <div className="w-3/4 absolute top-0 left-48 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg  z-100 ">
                  <Link
                    to="/KeHoachThanhTra"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kế Hoạch Thanh Tra
                  </Link>
                  <Link
                    to="/KeHoachKiemTraViPham"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kế Hoạch Kiểm Tra Vi Phạm
                  </Link>
                </div>
              </Link>

              {/* create teams */}
              <Link
                to="/LapDoanThanhTra"
                className="w-2/3 flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m5 .5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-13 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0zm-1 0c0-.463.14-.892.379-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973A5 5 0 0 1 5 14zM15 14c0 .7-.144 1.368-.404 1.973Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.24.358.379.787.379 1.25z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Lập Đoàn Thẩm Định{'  >'}
                </span>
                {''}
                <div className="w-3/4 absolute top-0 left-40 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg  z-100 ">
                  <Link
                    to="/LapDoanThanhTra"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Thanh Tra
                  </Link>
                  <Link
                    to="/LapDoanKiemTraViPham"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kiểm tra Vi Phạm
                  </Link>
                </div>
              </Link>

              {/* create report */}
              <Link
                to="/LapBienBanXuLy"
                className="w-3/4 flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 32 32"
                >
                  <g fill="currentColor">
                    <path d="M25 5h-.17v2H25a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h.17V5H7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3" />
                    <path d="M23 3h-3V0h-8v3H9v6h14zm-2 4H11V5h3V2h4v3h3z" />
                    <path
                      d="M10 13h12v2H10zm0 5h12v2H10zm0 5h12v2H10z"
                      class="ouiIcon__fillSecondary"
                    />
                  </g>
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Lập Biên bản xử lý
                </span>
                {''}
              </Link>
            </>
          )}

          {checkEmployee && (
            <>
              {/* News */}
              <Link
                to="/"
                className="w-3/4 flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11l5 5v11q0 .825-.587 1.413T19 21zm2-4h10v-2H7zm0-4h10v-2H7zm8-4h4l-4-4zM7 9h5V7H7z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Tin Tức{'  >'}
                </span>
                {''}
                <div className="w-3/4 absolute top-0 left-40 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg  z-100 ">
                  <Link
                    to="/ListNews"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Xem Tin Tức
                  </Link>
                  <Link
                    to="/CreateNews"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Tạo Tin Tức
                  </Link>
                </div>
              </Link>

              {/* plan */}
              <Link
                to="/"
                className="w-3/4 flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 48 48"
                >
                  <g fill="none" stroke="currentColor" stroke-width="4">
                    <path
                      stroke-linejoin="round"
                      d="M5 19h38v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm0-9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16 31l6 6l12-12"
                    />
                    <path stroke-linecap="round" d="M16 5v8m16-8v8" />
                  </g>
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Kế Hoạch{'  >'}
                </span>
                {''}
                <div className="w-3/4 absolute top-0 left-40 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg  z-100 ">
                  {decodedToken && (
                    <>
                      <Link
                        to={`/PlanThanhTra`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Thanh Tra
                      </Link>
                      <Link
                        to={`/PlanKiemTra`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Kiểm Tra Vi Phạm
                      </Link>
                    </>
                  )}
                </div>
              </Link>

              {/* create report */}
              <Link
                to="/"
                className="w-3/4 flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 19V5h7v7h7v1c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2zm9-14.5l5.5 5.5H14zM23 18v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Tạo Báo Cáo{'  >'}
                </span>
                {''}
                <div className="w-3/4 absolute top-0 left-40 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg  z-100 ">
                  <Link
                    to="/ReportTT"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Thanh Tra
                  </Link>
                  <Link
                    to="/ReportKTVP"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kiểm Tra Vi Phạm
                  </Link>
                </div>
              </Link>

              {/* create propose */}
              <Link
                to="/propose_report"
                className="w-1/2 flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.194 8.094a1.86 1.86 0 1 0 0-3.719a1.86 1.86 0 0 0 0 3.719M.523 13.479A3.68 3.68 0 0 1 1 11.704a3.711 3.711 0 0 1 3.195-1.868c1.31.003 2.55.727 3.195 1.868a3.68 3.68 0 0 1 .477 1.774m2.02-12.095v-.82m2.799 1.827l.671-.471m-6.271.471l-.672-.471m5.506 3.139a2.055 2.055 0 0 0-2.077-2.042a2.055 2.055 0 0 0-1.99 2.127a2.067 2.067 0 0 0 1.126 1.73v1a.227.227 0 0 0 .226.22h1.361a.227.227 0 0 0 .227-.22V6.855a2.07 2.07 0 0 0 1.128-1.797Z"
                  />
                </svg>
                <span className="w-1/2 hidden nav-item-name ml-3 ">
                  Đề xuất biện pháp xử lý
                </span>
                {''}
              </Link>
            </>
          )}

          {owners && (
            <>
              {/* Food safety certification registration */}
              <Link
                to="/Register_ATTP"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093M16.586 8H14V5.414zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10z"
                  />
                  <path
                    fill="currentColor"
                    d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3">Đăng Ký ATTP</span>
                {''}
              </Link>

              {/* update profile */}
              <Link
                to="/ListProfile"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2 22V9.975L9 7v2l5-2v3h8v12zm9-4h2v-4h-2zm-4 0h2v-4H7zm8 0h2v-4h-2zm6.8-9.5h-4.625l.85-6.5H21z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3">Hồ Sơ</span>
                {''}
              </Link>
              {/* History  */}
              <Link
                to="/"
                className="w-3/4 flex items-center transition-transform transform hover:translate-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11l5 5v11q0 .825-.587 1.413T19 21zm2-4h10v-2H7zm0-4h10v-2H7zm8-4h4l-4-4zM7 9h5V7H7z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3 ">
                  Lịch Sử{'  >'}
                </span>
                {''}
                <div className="w-3/4 absolute top-0 left-40 mt-2 hidden group-hover:block bg-[#0cb306] text-black border border-gray-300 rounded shadow-lg  z-100 ">
                  <Link
                    to="/PlanTT_History"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Thanh Tra
                  </Link>
                  <Link
                    to="/PlanKTVP_History"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kiểm Tra
                  </Link>
                </div>
              </Link>
            </>
          )}

          {user && (
            <>
              {' '}
              {/* News */}
              <Link
                to="/XemTinTuc"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11l5 5v11q0 .825-.587 1.413T19 21zm2-4h10v-2H7zm0-4h10v-2H7zm8-4h4l-4-4zM7 9h5V7H7z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3">Tin Tức</span>
                {''}
              </Link>
              {/* List ATTP */}
              <Link
                to="/DanhsachCoSoATTP"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm4 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M7 7a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2zm-1 5a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3">
                  Danh Sách cơ sở ATTP
                </span>
                {''}
              </Link>
              {/* List handle ATTP */}
              <Link
                to="/DanhsachXuLyCoSoATTP"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm4 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M7 7a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2zm-1 5a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3">
                  Danh Sách xử lý cơ sở ATTP
                </span>
                {''}
              </Link>
            </>
          )}
          {/* Report */}
          <Link
            to="/Report_violation"
            className="w-[70%] flex items-center transition-transform transform hover:translate-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm-2.75 8L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21z"
              />
            </svg>
            <span className="w-1/2 hidden nav-item-name ml-3">
              Phản Ánh Vi Phạm
            </span>
            {''}
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none text-white"
          >
            {userInfo && (
              <>
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18s3.583-.386 4.865-1.203C16.167 15.967 17 14.69 17 13a2 2 0 0 0-2-2z"
                  />
                </svg>
                <span className="text-white e ml-3 hidden nav-item-name">
                  {decodedToken?.HoTen}
                </span>
              </>
            )}

            {userInfo && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`hidden nav-item-name ml-3 h-4 w-4  ${
                  dropdownOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={dropdownOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            )}
          </button>

          {dropdownOpen && userInfo && (
            <ul
              className={`absolute left-0  bottom-6   bg-[#0cb306] text-white border-solid border border-gray-300 rounded shadow-lg ${
                !userInfo.isAdmin ? '-top-24' : '-top-100'
              } `}
            >
              {userInfo.isAdmin && (
                <>
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 hover:drop-shadow-[0_0px_2px_rgba(255,255,255,1)] rounded"
                      onClick={closeDropdown}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/productlist"
                      className="block px-4 py-2 hover:drop-shadow-[0_0px_2px_rgba(255,255,255,1)] rounded"
                      onClick={closeDropdown}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/categorylist"
                      className="block px-4 py-2 hover:drop-shadow-[0_0px_2px_rgba(255,255,255,1)] rounded"
                      onClick={closeDropdown}
                    >
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/orderlist"
                      className="block px-4 py-2 hover:drop-shadow-[0_0px_2px_rgba(255,255,255,1)] rounded"
                      onClick={closeDropdown}
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/userlist"
                      className="block px-4 py-2 hover:drop-shadow-[0_0px_2px_rgba(255,255,255,1)] rounded"
                      onClick={closeDropdown}
                    >
                      Users
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:drop-shadow-[0_0px_2px_rgba(255,255,255,1)] rounded"
                  onClick={closeDropdown}
                >
                  Thông tin cá nhân
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left hover:drop-shadow-[0_0px_2px_rgba(255,255,255,1)] rounded"
                >
                  Thoát
                </button>
              </li>
            </ul>
          )}
        </div>
        {!userInfo && (
          <ul className="flex flex-col gap-y-8">
            {/* Login */}
            <li>
              <Link
                to="/login"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3">Login</span>
                {''}
              </Link>
            </li>

            {/* Register */}
            <li>
              <Link
                to="/register"
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 12a1 1 0 0 0-1-1h-7.59l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L11.41 13H19a1 1 0 0 0 1-1M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3"
                  />
                </svg>
                <span className="hidden nav-item-name ml-3">Register</span>
                {''}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navigation;
