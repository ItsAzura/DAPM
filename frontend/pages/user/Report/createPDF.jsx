import React, { useEffect, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import GeneratePDF from '../../../components/GeneratePDF';
import Loading from '../../../components/loading/Loading';

const CreatePDF = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  const fetchReport = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/reports/report/${id}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await res.json();
      console.log('API Response:', result); // Log the result to see the data structure
      setData(result);
      setLoading(false); // Data loaded successfully
    } catch (error) {
      console.error('Fetch error:', error);
      setLoading(false); // Stop loading even if there's an error
    }
  };

  useEffect(() => {
    fetchReport();
  }, [id]);

  console.log('Data:', data); // Log the data to see what is being set

  return (
    <div className="w-full pl-10 pr-2">
      {loading ? (
        <Loading />
      ) : (
        <PDFViewer className="w-full h-[600px]">
          <GeneratePDF data={data} />
        </PDFViewer>
      )}
    </div>
  );
};

export default CreatePDF;
