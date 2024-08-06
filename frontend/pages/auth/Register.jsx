import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Assets/auth.jpg';
import Loading from '../../components/loading/Loading';

const Register = () => {
  const [Name, setName] = useState('');
  const [CCCD, setCCCD] = useState('');
  const [SDT, setSDT] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }
    setIsLoading(true);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-20 py-6">
        <div className="w-full md:w-1/2 mt-6  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#0cb306]">
            Đăng Ký
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center"
          >
            <div className="my-4 md:my-8 max-md:w-1/2">
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-[#0cb306] "
              >
                Họ Và Tên
              </label>
              <input
                type="text"
                id="Name"
                className="mt-1 p-2 rounded w-full md:w-2/3 bg-[#fff] border-2  border-solid focus:border-[#0cb306] border-[rgb(12,179,6)] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-white"
                placeholder="Nhập Họ Và Tên"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="my-4 md:my-8 max-md:w-1/2">
              <label
                htmlFor="CCCD"
                className="block text-sm font-medium text-[#0cb306] "
              >
                CCCD
              </label>
              <input
                type="text"
                id="CCCD"
                className="mt-1 p-2 rounded w-full md:w-2/3 bg-[#fff] border-2  border-solid focus:border-[#0cb306] border-[rgb(12,179,6)] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-white"
                placeholder="Nhập CCCD"
                value={CCCD}
                onChange={(e) => setCCCD(e.target.value)}
              />
            </div>
            <div className="my-4 md:my-8 max-md:w-1/2">
              <label
                htmlFor="SDT"
                className="block text-sm font-medium text-[#0cb306] "
              >
                Nhập Số Điện Thoại
              </label>
              <input
                type="text"
                id="SDT"
                className="mt-1 p-2 rounded w-full md:w-2/3 bg-[#fff] border-2  border-solid focus:border-[#0cb306] border-[rgb(12,179,6)] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-white"
                placeholder="Nhập Số điện thoại"
                value={SDT}
                onChange={(e) => setSDT(e.target.value)}
              />
            </div>
            <div className="my-4 max-md:w-1/2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#0cb306]"
              >
                Mật Khẩu
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 rounded w-full md:w-2/3 bg-[#fff] border-2  border-solid focus:border-[#0cb306] border-[#0cb306] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-white"
                placeholder="Nhập Mật Khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-4 max-md:w-1/2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#0cb306]"
              >
                Xác Nhận Mật Khẩu
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-2 rounded w-full md:w-2/3 bg-[#fff] border-2  border-solid focus:border-[#0cb306] border-[#0cb306] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-white"
                placeholder="Xác Nhận Mật Khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              disabled={isLoading}
              type="submit"
              className="bg-[#0cb306] text-white px-4 py-2 rounded cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110"
            >
              Sign In
            </button>
            {isLoading && <Loading />}
          </form>
          <div className="mt-4">
            <p className="text-black">
              Đã Có tài khoản?{' '}
              <Link to="/login" className="text-[#0cb306] hover:underline">
                Đăng Nhập
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={auth}
            alt=""
            className="w-full max-md:hidden h-[20rem] md:h-[30rem] rounded-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
