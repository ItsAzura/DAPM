import React, { useEffect, useState } from 'react';

const Home = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const res = await fetch('http://localhost:5000/api/news');
    const data = await res.json();
    setNews(data);
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="flex flex-row justify-between px-14 py-6 bg-gray-100 min-h-screen gap-10">
      <div className="w-2/3">
        <h1 className="text-4xl font-semibold text-[#00CD00] mb-8">
          Chào Mừng Bạn Đến với Hệ Thống An Toàn Vệ Sinh Thực Phẩm Thành Phố Đà
          Nẵng
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
          BẢN TIN
        </h2>

        <div className="flex flex-col gap-6">
          {news.map((n, i) => (
            <div
              key={i}
              className="flex flex-row gap-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={n.AnhBia}
                alt={n.TieuDe}
                className="w-48 h-32 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2 hover:text-[#00CD00] transition-colors duration-300">
                    {n.TieuDe}
                  </h3>
                  <p className="text-gray-600 mb-2">{n.Mota}</p>
                  <p className="text-sm text-gray-500">
                    Tác Giả:{' '}
                    <span className="font-medium">{n.TenNguoiDung}</span>
                  </p>
                </div>
                <p className="text-sm text-gray-400">
                  Ngày cập nhật: {formatDate(n.NgayTao)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
            TIN ĐỌC NHIỀU
          </h2>
          <ul className="space-y-4">
            {news.map((n, i) => (
              <li key={i}>
                <a href="#" className="block">
                  <div className="flex justify-between items-center border-b pb-2">
                    <h3 className="font-semibold text-gray-800 hover:text-[#00CD00] transition-colors duration-300">
                      {n.TieuDe}
                    </h3>
                    <p className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-lg">
                      69 lượt xem
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
