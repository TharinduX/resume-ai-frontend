import React from 'react';

const ATS = ({ parseRate, icon }) => {
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl'>{icon}</div>
          <h1 className='font-semibold text-2xl mb-4'>ATS Parse Rate</h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          An Applicant Tracking System commonly referred to as ATS is a system
          used by employers and recruiters to quickly scan a large number of job
          applications.
        </p>
        <p className='text-sm font-semibold text-gray-500'>
          A high parse rate of your resume ensures that the ATS can read your
          resume, experience, and skills. This increases the chance of getting
          your resume seen by recruiters.
        </p>
        <div className='mt-4'>
          <p className='font-semibold mb-2'>Parse Rate Progress:</p>
          <div className='relative pt-1'>
            <div className='flex mb-2 items-center justify-between'>
              <div>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200'>
                  {parseRate}%
                </span>
              </div>
            </div>
            <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200'>
              <div
                style={{ width: `${parseRate}%` }}
                className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-700'
              ></div>
            </div>
          </div>
          {parseRate < 80 ? (
            <div className='bg-red-200 p-6 rounded-lg'>
              <p className='text-lg font-semibold text-red-800 mb-2'>
                Your resume is not ATS friendly
              </p>
              <p className='text-sm text-red-800'>
                In order to make an ATS-compatible resume you should format your
                resume properly by sticking to a simple and structured design
                that’s easy to read, with clear headings and font type.
              </p>
            </div>
          ) : (
            <div className='bg-green-200 p-6 rounded-lg'>
              <p className='text-lg font-semibold text-green-800'>
                Your resume is ATS friendly. Good job!
              </p>
              <p className='text-sm text-green-800'>
                This means that your resume is easy to read and understand by
                the ATS. This increases the chance of getting your resume seen
                by recruiters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ATS;
