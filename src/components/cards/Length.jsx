import React from 'react';

const Length = ({ icon, word_count }) => {
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl'>{icon}</div>
          <h1 className='font-semibold text-2xl mb-4'>Resume Length</h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          The length of your resume should be based on the relevant experience
          you have for a job, the number of years of experience, and the job
          you’re applying for.
        </p>
        <p className='text-sm font-semibold text-gray-500'>
          For 95% of applicants, a one-page resume is more than enough to
          communicate relevant information to the hiring manager. For positions
          in the medical world, expanding the length to accommodate all
          experiences can be beneficial.
        </p>
        <div className='mt-4'>
          {word_count < 400 ? (
            <div className='bg-yellow-200 p-6 rounded-lg '>
              <div className='flex gap-2 items-start '>
                <p className='text-lg font-semibold text-yellow-800 mb-2'>
                  Your resume is too short.
                </p>
                <p className='bg-yellow-300 items-center flex px-3 rounded-lg text-yellow-800'>
                  {word_count} words
                </p>
              </div>
              <p className='text-sm text-red-800'>
                The ideal resume size is between 400 and 800 words, anything
                below 400 is considered too short. Think of other relevant
                sections and experiences you may include.
              </p>
            </div>
          ) : word_count >= 400 && word_count <= 800 ? (
            <div className='bg-green-200 p-6 rounded-lg'>
              <div className='flex gap-2 items-start '>
                <p className='text-lg font-semibold text-green-800 mb-2'>
                  Your resume length is ideal, Good job!.
                </p>
                <p className='bg-green-300 items-center flex px-3 rounded-lg text-green-800'>
                  {word_count} words
                </p>
              </div>
              <p className='text-sm text-green-800'>
                This means that your resume is easy to read and understand by
                the ATS. This increases the chance of getting your resume seen
                by recruiters.
              </p>
            </div>
          ) : (
            <div className='bg-red-200 p-6 rounded-lg'>
              <p className='text-lg font-semibold text-red-800 mb-2'>
                Your resume length is too long!
              </p>
              <p className='text-sm text-red-800'>
                Your resume is too long. To make it ATS-compatible, consider
                removing unnecessary details and keeping it within the ideal
                range of 400 - 800 words.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Length;
