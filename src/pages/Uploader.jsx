import React from 'react';
import DropUploader from '../components/DropUploader';

const Uploader = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-r from-teal-800 to-teal-700 flex items-center justify-center space-x-6'>
      <div className='text-white flex flex-col gap-3 mb-5 p-10 max-w-2xl w-2/3'>
        <h1 className='font-bold text-5xl '>
          AI-Powered Job Application Analyzer
        </h1>
        <p className='text-xl text-teal-400'>
          with Personalized Career Guidance Platform
        </p>
        <hr />
        <p className='text-md text-gray-300 mt-5'>
          Our AI-powered platform aims to equip job seekers with the resources
          and direction they require to optimize their applications, increase
          their chances of success.
        </p>
      </div>
      <div className='max-w-3xl bg-white rounded-lg shadow-md p-10 justify-center  mx-auto w-1/3'>
        <div>
          <DropUploader />
        </div>
      </div>
    </div>
  );
};

export default Uploader;
