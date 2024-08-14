import React from 'react';
import { useState, useEffect } from 'react';

const ListNews = () => {
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
    <div className="w-2/3 pl-14">
      <h1 className="text-4xl font-semibold mb-6  text-[#00CD00] ">
        Danh Sách Tin Tức
      </h1>
      <div className="flex flex-col gap-4">
        {news.map((n, i) => (
          <div key={i} className="flex flex-row gap-4 border-b pb-2">
            <img src={news[i].AnhBia} alt="" className="w-52 h-32 rounded" />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{news[i].TieuDe}</h3>
              <p>{news[i].Mota}</p>
              <p>Ngày cập nhật: {formatDate(news[i].NgayTao)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNews;
