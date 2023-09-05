import React from 'react';
import { FaCheckCircle, FaWindowClose } from 'react-icons/fa';

const Sections = ({ icon, sections }) => {
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl' key={icon}>
            {icon}
          </div>
          <h1 className='font-semibold text-2xl mb-4'>Essential Sections</h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          It’s important to include those three required sections — Experience,
          Education, and Skills in your resume.
        </p>
        <p className='text-sm font-semibold text-gray-500 mb-4'>
          Ensure that they are properly formatted and every single element is
          clearly outlined (degree, institution, education dates, company names,
          job titles, employment dates, bullets with responsibilities and
          achievements, and skills).
        </p>
        <div className='flex gap-5 w-full justify-center'>
          <div className='bg-green-200 p-6 rounded-lg w-full'>
            <p className='text-lg text-center font-semibold text-green-800 mb-4'>
              We’ve found the following essential section(s):
            </p>
            <div className='items-center flex flex-col gap-2 '>
              {sections.available.map((section, index) => (
                <div
                  className='flex bg-green-800 w-2/3 text-white  rounded-lg p-2 text-center justify-center gap-3 items-center'
                  key={index}
                >
                  <div className='capitalize'>{section} section</div>
                  <FaCheckCircle />
                </div>
              ))}
            </div>
          </div>
          {sections.unavailable.length === 0 ? null : (
            <div className='bg-red-200 p-6 rounded-lg w-full'>
              <p className='text-lg font-semibold text-center text-red-800 mb-4'>
                Although, you are missing essential section(s):
              </p>
              <div className='items-center flex flex-col'>
                {sections.unavailable.map((section, index) => (
                  <div
                    className='flex bg-red-800 w-2/3 text-white  rounded-lg p-2 text-center justify-center gap-3 items-center'
                    key={index}
                  >
                    <div className='capitalize'>{section} section</div>
                    <FaWindowClose />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sections;
