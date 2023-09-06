import React from 'react';
import { FaCheckCircle, FaWindowClose } from 'react-icons/fa';

const Role = ({ icon, skills }) => {
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl'>{icon}</div>
          <h1 className='font-semibold text-2xl mb-4'>Job Role</h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          Its important to include the job role you are applying for in your
          resume.
        </p>
        <p className='text-sm font-semibold text-gray-500 mb-4'>
          Ensure that the job role is clearly mentioned in your resume. This
          will increase the chances of getting selected.
        </p>
        <div className='flex gap-5 w-full justify-center'>
          <div className='bg-green-200 p-6 rounded-lg w-full'>
            <p className='text-lg text-center font-semibold text-green-800 mb-4'>
              Your Job Role Found, Good Job!
            </p>
            <div className='items-center flex flex-col gap-2 '>
              <div className='capitalize text-2xl font-bold text-green-800'>
                Role: {skills.ROLE[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
