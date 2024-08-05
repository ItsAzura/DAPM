import React, { useEffect } from 'react';
import { useState } from 'react';

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

  console.log(news[1]);
  return (
    <div className="flex flex-row">
      <div className="w-2/3 pl-14">
        <h1 className=" py-6 text-4xl font-semibold">
          Chào Mừng Bạn Đến với Hệ Thống An Toàn Vệ Sinh Thực Phẩm Thành Phố Đà
          Nẵng
        </h1>

        <h2 className="text-xl font-semibold mb-4 ">BẢN TIN</h2>
        <div className="flex flex-col gap-4">
          {news.map((n, i) => (
            <div key={i} className="flex flex-row gap-4 border-b pb-2">
              <img src={news[i].AnhBia} alt="" className="w-52 h-32 rounded" />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{news[i].TieuDe}</h3>
                <p>{news[i].Mota}</p>
                <p>Tác Giả: {news[i].TenNguoiDung}</p>
                <p>Ngày cập nhật: {formatDate(news[i].NgayTao)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 pr-4 mt-32">
        <div className="w-4/5 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">TIN ĐỌC NHIỀU</h2>
          <ul className="w-full space-y-4">
            {news.map((n, i) => (
              <li key={i}>
                <a href="#" className="w-full flex space-x-4">
                  <div className="w-full flex flex-row justify-between items-center border-b pb-2">
                    <h3 className="font-semibold">{news[i].TieuDe}</h3>
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
