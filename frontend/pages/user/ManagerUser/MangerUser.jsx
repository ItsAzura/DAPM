import React from 'react';
import { useState } from 'react';

const MangerUser = () => {
  const [UserName, setUserName] = useState('');
  const [ChucVu, setChucVu] = useState('');
  const [CCCD, setCCCD] = useState('');
  const [MatKhau, setMatKhau] = useState('');
  const handleSubmit = async (e) => {};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl">
        <h2 className="text-4xl font-semibold mb-8 text-center text-[#00CD00]">
          Quản Lý Tài Khoản
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="UserName" className="block mb-2 font-medium">
                Họ Và Tên
              </label>
              <input
                type="text"
                id="UserName"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
            <div>
              <label htmlFor="ChucVu" className="block mb-2 font-medium">
                Chức Vụ
              </label>
              <input
                type="text"
                id="ChucVu"
                value={ChucVu}
                onChange={(e) => setChucVu(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded  border-solid focus:border-[#0cb306]  hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
            <div>
              <label htmlFor="CCCD" className="block mb-2 font-medium">
                Căn Cước Công Dân
              </label>
              <input
                type="text"
                id="CCCD"
                value={CCCD}
                onChange={(e) => setCCCD(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
            <div>
              <label htmlFor="MatKhau" className="block mb-2 font-medium">
                Mật Khẩu
              </label>
              <input
                type="text"
                id="MatKhau"
                value={MatKhau}
                onChange={(e) => setMatKhau(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded  border-solid focus:border-[#0cb306]  hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] transition duration-300 ease-in-out transform focus:-translate-y-1 text-black"
              />
            </div>
            <button
              type="submit"
              className="w-1/3 bg-[#00CD00] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
            >
              Tìm Kiếm
            </button>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <table className="min-w-full bg-white">
                    <thead className="bg-[#00CD00] text-white">
                      <tr>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Họ Tên
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          CCCD
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Chức Vụ
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Mật Khẩu
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Nguyen Van A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cán Bộ Nghiệp Vụ
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          CW1OARncVfDqT0j
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="mt-6 flex justify-center space-x-4">
                            <button
                              type="submit"
                              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => navigate(-1)}
                              className="bg-[#ff5e5e] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Nguyen Van A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cán Bộ Nghiệp Vụ
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          CW1OARncVfDqT0j
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="mt-6 flex justify-center space-x-4">
                            <button
                              type="submit"
                              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => navigate(-1)}
                              className="bg-[#ff5e5e] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Nguyen Van A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cán Bộ Nghiệp Vụ
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          CW1OARncVfDqT0j
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="mt-6 flex justify-center space-x-4">
                            <button
                              type="submit"
                              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => navigate(-1)}
                              className="bg-[#ff5e5e] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Nguyen Van A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cán Bộ Nghiệp Vụ
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          CW1OARncVfDqT0j
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="mt-6 flex justify-center space-x-4">
                            <button
                              type="submit"
                              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => navigate(-1)}
                              className="bg-[#ff5e5e] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Nguyen Van A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cán Bộ Nghiệp Vụ
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          CW1OARncVfDqT0j
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="mt-6 flex justify-center space-x-4">
                            <button
                              type="submit"
                              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => navigate(-1)}
                              className="bg-[#ff5e5e] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Nguyen Van A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cán Bộ Nghiệp Vụ
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          CW1OARncVfDqT0j
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="mt-6 flex justify-center space-x-4">
                            <button
                              type="submit"
                              className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => navigate(-1)}
                              className="bg-[#ff5e5e] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MangerUser;
