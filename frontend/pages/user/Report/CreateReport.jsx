import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const CreateReport = () => {
  const { id } = useParams();

  const [IdKeHoach, setIdKeHoach] = useState('');
  const [NoiDung, setNoiDung] = useState('');
  const [file, setFile] = useState('');
  const [filePath, setFilePath] = useState('');
  const [CoViPham, setCoViPham] = useState(false);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    return data.filePath;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let uploadedFilePath = '';

    if (file) {
      uploadedFilePath = await handleUpload();
      setFilePath(uploadedFilePath);
    }

    const formData = {
      IdKeHoach,
      NoiDung,
      HinhAnhMinhChung: uploadedFilePath,
      CoViPham,
    };

    console.log(formData);

    try {
      const res = await fetch('http://localhost:5000/api/reports/report/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      toast.success('Tạo báo cáo thành công');
    } catch (error) {
      console.log(error);
      toast.error('Tạo báo cáo thất bại');
    }
  };

  useEffect(() => {
    setIdKeHoach(id);
  }, [id]);

  return (
    <div className="pl-14">
      <h1 className="py-6 text-4xl font-semibold text-[#0cb306]">
        Tạo Báo Cáo
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-2/3 p-4 flex flex-col border bg-white rounded-md shadow-dashboard gap-4"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="IdKeHoach" className="font-semibold">
            Mã Kế Hoạch
          </label>
          <input
            type="text"
            id="IdKeHoach"
            name="IdKeHoach"
            value={IdKeHoach}
            className="p-2 border border-gray-300 rounded-md"
            readOnly
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="NoiDung" className="font-semibold">
            Nội Dung
          </label>
          <textarea
            id="NoiDung"
            name="NoiDung"
            value={NoiDung}
            onChange={(e) => setNoiDung(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="file" className="font-semibold">
            Hình Ảnh Minh Chứng
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="CoViPham" className="font-semibold">
            Có Vi Phạm Không ?
          </label>
          <select
            id="CoViPham"
            name="CoViPham"
            value={CoViPham}
            onChange={(e) => setCoViPham(e.target.value === 'true')}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="true">Có</option>
            <option value="false">Không</option>
          </select>
        </div>
        <button
          type="submit"
          className="p-2 bg-[#0cb306] text-white rounded-md w-1/4 "
        >
          Tạo Báo Cáo
        </button>
      </form>
    </div>
  );
};

export default CreateReport;
