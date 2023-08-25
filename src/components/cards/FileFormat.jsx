import React from 'react';

const FileFormat = ({ size, fileFormat, icon }) => {
  size = (size / 1024 / 1024).toFixed(2);
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl'>{icon}</div>
          <h1 className='font-semibold text-2xl mb-4'>File Format & Size</h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          When you’re uploading your resume in platforms like Indeed, you’re
          likely to meet a file size limit. Ideally, your resume should be less
          than 2MB in size. Anything larger will most likely not be accepted on
          majority of platforms.
        </p>
        <p className='text-sm font-semibold text-gray-500 mb-4'>
          Your file type also plays an important role in ATS screening. PDF
          files are preferred as the text can be easily read by the applicant
          tracking system. Avoid DOCX, PNG or JPG files.
        </p>
        <div className='bg-yellow-100 p-6 rounded-lg'>
          <p className='text-lg font-semibold text-yellow-800 mb-2'>
            Your resume size is {size} MB and your file format is {fileFormat}.
          </p>
          <p className='text-sm text-yellow-800'>
            Modern ATS checkers can read PDFs well. Although you can still
            upload DOCX and other formats everywhere, PDF is the recommended
            format and will cause the least problems when your resume is read
            and evaluated by the machine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileFormat;
