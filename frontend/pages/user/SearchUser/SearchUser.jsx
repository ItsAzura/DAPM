import React from 'react';
import { useState } from 'react';

const SearchUser = () => {
  const [UserName, setUserName] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 mb-8">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl mt-8">
        <h2 className="text-4xl font-semibold mb-8 text-center text-[#00CD00]">
          Tìm Kiếm Hồ Sơ Đăng Ký ATTP
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="UserName"
              className="block mb-3 font-medium text-gray-700"
            >
              Tìm Kiếm
            </label>
            <input
              type="text"
              id="UserName"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform"
              placeholder="Tìm Kiếm theo cơ sở, họ tên, CCCD, SĐT"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 my-6">
            <div className="flex-1">
              <label
                htmlFor="PhuongXa"
                className="block mb-3 font-medium text-gray-700 "
              >
                Lọc theo Phường Xã
              </label>
              <select
                id="PhuongXa"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform"
              >
                {/* Add options here */}
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="QuanHuyen"
                className="block mb-3 font-medium text-gray-700"
              >
                Lọc theo Quận Huyện
              </label>
              <select
                id="QuanHuyen"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform"
              >
                {/* Add options here */}
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="StartDate"
                className="block mb-3 font-medium text-gray-700"
              >
                Ngày bắt đầu
              </label>
              <input
                type="date"
                id="StartDate"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="EndDate"
                className="block mb-3 font-medium text-gray-700"
              >
                Ngày kết thúc
              </label>
              <input
                type="date"
                id="EndDate"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:drop-shadow-[0_0px_4px_rgba(12,179,6,1)] duration-300 ease-in-out transform"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#00CD00] text-white py-3 px-6 rounded-md font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
          >
            Lọc
          </button>
          <div className="flex flex-col mt-10">
            <div className="overflow-x-auto">
              <div className="py-2 inline-block min-w-full">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <table className="min-w-full bg-white">
                    <thead className="bg-[#00CD00] text-white">
                      <tr>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Mã hồ sơ
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Ngày Đăng Ký
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Loại Thực Phẩm
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Tên Cơ Sở
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Chủ Cơ Sở
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Phường Xã
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Trạng Thái
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          4
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          5
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
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

export default SearchUser;
