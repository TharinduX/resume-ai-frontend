import React from 'react';

const JobDescription = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-r from-teal-800 to-teal-700 flex items-center justify-center space-x-6'>
      <div className='text-white flex flex-col gap-3 mb-5 p-10 max-w-2xl'>
        <h1 className='font-bold text-4xl'>
          Are you looking to match your resume with a specific job?
        </h1>
        <p className='text-xl text-teal-400'>
          Paste your job description here and we will match it.
        </p>
        <hr />
        <p className='text-md text-gray-300 mt-5'>
          We can generate a report wich skills are matching and wich are not. We
          can also give you some tips on how to improve your resume.
        </p>
      </div>
      <div className='max-w-3xl bg-white rounded-lg shadow p-10 justify-center  mx-auto '>
        <div>
          <textarea
            className='shadow-inner w-full h-full p-5'
            placeholder='Paste your job description here'
            name='job_description'
            id='job_description'
            cols='60'
            rows='10'
          ></textarea>
          <div className='flex gap-2'>
            <button className='bg-gray-200 py-2 px-4 rounded-lg mt-4 hover:bg-gray-300'>
              Skip this step
            </button>
            <button className='bg-teal-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-teal-800'>
              Yes, I do
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
