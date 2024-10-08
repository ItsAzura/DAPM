import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Assets/auth.jpg';
import Loading from '../../components/loading/Loading';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({ CCCD: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        toast.error(data.error);
      } else {
        localStorage.setItem('attp_token', data.token);
        toast.success('Đăng nhập thành công');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
    } catch (err) {
      setError('Có lỗi xảy ra, vui lòng thử lại.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <section className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-20 py-6">
        <div className="w-full md:w-1/2 mt-6 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#0cb306]">
            Đăng Nhập
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center"
          >
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
                className="mt-1 p-2 rounded w-full md:w-2/3 bg-[#fff] border-2 border-solid focus:border-[#0cb306] border-[rgb(12,179,6)] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
                placeholder="Nhập CCCD"
                value={formData.CCCD}
                onChange={handleChange}
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
                className="mt-1 p-2 rounded w-full md:w-2/3 bg-[#fff] border-2 border-solid focus:border-[#0cb306] border-[#0cb306] hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
                placeholder="Nhập Mật Khẩu"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              disabled={isLoading}
              type="submit"
              className="bg-[#0cb306] text-white px-4 py-2 rounded cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110"
            >
              Đăng Nhập
            </button>
          </form>
          <div className="mt-4">
            <p className="text-black">
              Chưa có Tài Khoản?{' '}
              <Link to="/register" className="text-[#0cb306] hover:underline">
                Đăng Ký
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

export default Login;
