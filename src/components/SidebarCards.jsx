import React from 'react';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

const SidebarCards = ({ data }) => {
  return (
    <div className='p-2 rounded-lg flex flex-col gap-3 w'>
      <div className='bg-teal-700 p-3 shadow-md rounded-lg'>
        <div className='flex justify-between'>
          <h1 className='text-white'>ATS Parse Rate</h1>
          <div className='bg-white px-2 text-teal-700 rounded-md'>
            {data.atsParseRate}%
          </div>
        </div>
      </div>
      <div className='bg-teal-700 p-3 shadow-md rounded-lg'>
        <div className='flex justify-between'>
          <h1 className='text-white'>File Format</h1>
          <div className='bg-white px-2 text-teal-700 rounded-md'>PDF</div>
        </div>
      </div>
      {data.sections.unavailable.length ? (
        <div className='bg-yellow-600 p-3 shadow-md rounded-lg'>
          <div className='flex justify-between'>
            <h1 className='text-white'>Essential Sections</h1>
            <div className='text-white text-xl'>
              <FaInfoCircle />
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-teal-700 p-3 shadow-md rounded-lg'>
          <div className='flex justify-between'>
            <h1 className='text-white'>Essential Sections</h1>
            <div className='text-white text-xl'>
              <FaCheckCircle />
            </div>
          </div>
        </div>
      )}
      {data.contact.phone && data.contact.email ? (
        <div className='bg-teal-700 p-3 shadow-md rounded-lg'>
          <div className='flex justify-between'>
            <h1 className='text-white'>Contact Info</h1>
            <div className='text-white text-xl'>
              <FaCheckCircle />
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-yellow-600 p-3 shadow-md rounded-lg'>
          <div className='flex justify-between'>
            <h1 className='text-white'>Contact Info</h1>
            <div className='text-white text-xl'>
              <FaInfoCircle />
            </div>
          </div>
        </div>
      )}
      {data.cvSkillsList.EDUCATION &&
      data.cvSkillsList.TECHNICAL &&
      data.cvSkillsList.SOFT ? (
        <div className='bg-teal-700 p-3 shadow-md rounded-lg'>
          <div className='flex justify-between'>
            <h1 className='text-white'>Skills</h1>
            <div className='text-white text-xl'>
              <FaCheckCircle />
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-yellow-600 p-3 shadow-md rounded-lg'>
          <div className='flex justify-between'>
            <h1 className='text-white'>Skills</h1>
            <div className='text-white text-xl'>
              <FaInfoCircle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarCards;
