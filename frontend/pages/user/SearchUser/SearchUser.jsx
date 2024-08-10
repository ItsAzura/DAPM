import React from 'react';
import { useState } from 'react';

const SearchUser = () => {
  const [UserName, setUserName] = useState('');
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Tìm Kiếm Hồ Sơ Đăng Ký ATTP
        </h2>
        <form>
          <div className="w-1/3">
            <label htmlFor="UserName" className="block mb-2 font-medium">
              Tìm Kiếm
            </label>
            <input
              type="text"
              id="UserName"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded "
              placeholder="Tìm Kiếm theo cơ sở, họ tên, CCCD, SĐT"
            />
          </div>
          <div className="flex flex-row gap-10 my-6">
            <div className="w-1/5">
              <label htmlFor="UserName" className="block mb-2 font-medium">
                Lọc theo Phường Xã
              </label>
              <select
                type="text"
                id="UserName"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded "
                placeholder="Tìm Kiếm theo cơ sở, họ tên, CCCD, SĐT"
              />
            </div>
            <div className="w-1/5">
              <label htmlFor="UserName" className="block mb-2 font-medium">
                Lọc theo Quận Huyện
              </label>
              <select
                type="text"
                id="UserName"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded "
                placeholder="Tìm Kiếm theo cơ sở, họ tên, CCCD, SĐT"
              />
            </div>
            <div className="w-1/5">
              <label htmlFor="UserName" className="block mb-2 font-medium">
                Ngày bắt đầu
              </label>
              <input
                type="date"
                id="UserName"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded "
                placeholder="Tìm Kiếm theo cơ sở, họ tên, CCCD, SĐT"
              />
            </div>
            <div className="w-1/5">
              <label htmlFor="UserName" className="block mb-2 font-medium">
                Ngày kết thúc
              </label>
              <input
                type="date"
                id="UserName"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded "
                placeholder="Tìm Kiếm theo cơ sở, họ tên, CCCD, SĐT"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#0cb306] text-white py-2 px-4 cursor-pointer my-4 transition-all duration-300 ease-in-out hover:scale-110 rounded"
          >
            Lọc
          </button>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-gray-200 border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Mã hồ sơ
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Ngày Đăng Ký
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Loại Thực Phẩm
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Tên Cơ Sở
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          chủ cơ sở
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Phường Xã
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Trạng Thái
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          4
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          5
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          6
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Gà
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơm Gà Hải Nam
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Nguyễn Văn A
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Phường 1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đã Duyệt
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
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
