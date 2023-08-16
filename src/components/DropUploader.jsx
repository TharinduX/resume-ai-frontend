import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Simulating a file upload progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setUploadProgress(progress);
      }

      // You can replace the setTimeout logic above with actual file upload logic
      // using fetch or any other library to communicate with your server

      setUploadProgress(0);
      setUploadedFile(null);
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }, []);

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
            Drag & drop a file here or click to select
          </p>
          <p className='text-center text-sm text-gray-400'>
            (Only pdf and docx will be accepted)
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
