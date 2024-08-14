import React from 'react';

const Approve = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl">
        <h2 className="text-4xl font-semibold mb-8 text-center text-[#00CD00]">
          Duyệt Tài Khoản
        </h2>
        <form>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <table className="min-w-full bg-white">
                    <thead className="bg-[#00CD00] text-white">
                      <tr>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          IDUser
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Họ Tên
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          CCCD
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Số Điện Thoại
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          User001
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          0123456789
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className=" flex justify-center space-x-4 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 24 24"
                              className="text-[#00CD00]"
                            >
                              <path
                                fill="currentColor"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 48 48"
                              className="text-red-500"
                            >
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-27.778 7.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          User002
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          0123456789
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className=" flex justify-center space-x-4 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 24 24"
                              className="text-[#00CD00]"
                            >
                              <path
                                fill="currentColor"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 48 48"
                              className="text-red-500"
                            >
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-27.778 7.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          User003
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          0123456789
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className=" flex justify-center space-x-4 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 24 24"
                              className="text-[#00CD00]"
                            >
                              <path
                                fill="currentColor"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 48 48"
                              className="text-red-500"
                            >
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-27.778 7.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          User004
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          0123456789
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className=" flex justify-center space-x-4 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 24 24"
                              className="text-[#00CD00]"
                            >
                              <path
                                fill="currentColor"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 48 48"
                              className="text-red-500"
                            >
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-27.778 7.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          User005
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          1234567890
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          0123456789
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className=" flex justify-center space-x-4 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 24 24"
                              className="text-[#00CD00]"
                            >
                              <path
                                fill="currentColor"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2rem"
                              height="2rem"
                              viewBox="0 0 48 48"
                              className="text-red-500"
                            >
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-27.778 7.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0"
                                clip-rule="evenodd"
                              />
                            </svg>
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

export default Approve;
