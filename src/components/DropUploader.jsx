import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjsLib from 'pdfjs-dist';
import { useLocation, useNavigate } from 'react-router-dom';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const DropUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const extractPdfText = async (file) => {
    try {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onload = async (e) => {
          const arrayBuffer = e.target.result;
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          const numPages = pdf.numPages;
          let pdfText = '';

          for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map((item) => item.str)
              .join(' ');
            pdfText += pageText + ' ';
          }

          resolve(pdfText);
        };

        reader.readAsArrayBuffer(file);
      });
    } catch (error) {
      throw error;
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);

      try {
        const pdfText = await extractPdfText(file);
        console.log('Extracted PDF Text:', pdfText);

        setUploadedFile(null);
        console.log('PDF text extraction completed');
        navigate('/job-description', { state: { pdfText } });
      } catch (error) {
        console.error('Error:', error);
      }
    },
    [navigate]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className='border-2 border-dashed cursor-pointer border-gray-400 p-20'
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {uploadedFile ? (
        <p className='text-center text-gray-600'>
          Uploaded File: {uploadedFile.name}
        </p>
      ) : (
        <>
          <p className='text-center text-lg text-gray-600'>
            Drag & drop a PDF file here or click to select
          </p>
          <p className='text-center text-sm text-gray-400'>
            (Only PDF files less than 2MB will be accepted)
          </p>
        </>
      )}
      {uploadProgress > 0 && (
        <div className='mt-4 text-center'>
          <p className='font-semibold'>Upload Progress:</p>
          <div className='relative pt-1'>
            <div className='flex mb-2 items-center justify-between'>
              <div className='text-center'>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-800 bg-teal-200'>
                  {uploadProgress}%
                </span>
              </div>
            </div>
            <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200'>
              <div
                style={{ width: `${uploadProgress}%` }}
                className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-800'
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropUploader;
