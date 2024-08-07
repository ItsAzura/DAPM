// src/components/PDFPreview.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFPreview = ({ fileUrl }) => {
  return (
    <div>
      {fileUrl && (
        <div style={{ height: '500px' }}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={fileUrl} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default PDFPreview;
