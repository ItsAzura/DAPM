import React from 'react';

const PlanTT_History = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl">
        <h2 className="text-4xl font-semibold mb-6 text-center text-[#00CD00]">
          Lịch Sử Thanh Tra
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
                          STT
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Cơ Sở Kiểm Tra
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Ngày Kiểm Tra
                        </th>
                        <th className="text-sm font-medium px-6 py-4 text-left">
                          Đoàn Kiểm Tra
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
                          Cơ Sở 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đoàn Số 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Xem Chi Tiết {' >'}
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơ Sở 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đoàn Số 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Xem Chi Tiết {' >'}
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơ Sở 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đoàn Số 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Xem Chi Tiết {' >'}
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          4
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơ Sở 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đoàn Số 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Xem Chi Tiết {' >'}
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          5
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Cơ Sở 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/08/2024
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Đoàn Số 1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Xem Chi Tiết {' >'}
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

export default PlanTT_History;
