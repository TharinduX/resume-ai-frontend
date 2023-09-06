import React from 'react';

const Experience = ({ icon, skills }) => {
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl'>{icon}</div>
          <h1 className='font-semibold text-2xl mb-4'>Experience</h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          Experience is the most important section of your resume. It is
          important to include your experience details in your resume.
        </p>
        <p className='text-sm font-semibold text-gray-500 mb-4'>
          Ensure that the experience details are clearly mentioned in your
          resume, this will increase the chances of getting selected. And this
          will give recruiter a clear idea about your experience.
        </p>
        <div className='flex gap-5 w-full justify-center'>
          <div className='bg-green-200 p-6 rounded-lg w-full'>
            <p className='text-lg text-center font-semibold text-green-800 mb-4'>
              You included your Experience!
            </p>
            <div className='items-center flex flex-col gap-2 '>
              <div className='capitalize text-2xl font-bold text-green-800'>
                {skills.EXP[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
