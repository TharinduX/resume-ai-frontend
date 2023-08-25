import React from 'react';
import { FaCheckCircle, FaWindowClose } from 'react-icons/fa';

const Contact = ({ icon, contact }) => {
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl'>{icon}</div>
          <h1 className='font-semibold text-2xl mb-4'>Contact Information</h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          It's important that potential employers and recruiters can easily
          reach you, so ensure you've included your email address at the bare
          minimum. You can optionally include a mobile number too.
        </p>
        <p className='text-sm font-semibold text-gray-500 mb-4'>
          If you have a portfolio website or LinkedIn it makes sense to add it
          to your resume, so recruiters can see more information about your
          experience.
        </p>
        <div className='bg-gray-100 p-6 rounded-lg text-center'>
          <div className='flex items-center w-full justify-center gap-3'>
            {contact.phone ? (
              <div className='bg-green-200 text-green-800 px-4 py-3 rounded-lg flex gap-2 items-center'>
                <FaCheckCircle />
                <div className='font-semibold'>Phone Number:</div>
                <div>{contact.phone}</div>
              </div>
            ) : (
              <div className='bg-red-200 text-red-800 px-4 py-3 rounded-lg flex gap-2 items-center'>
                <FaWindowClose />
                <div className='font-semibold'>Phone Number:</div>
                <div>Not found</div>
              </div>
            )}
            {contact.email ? (
              <div className='bg-green-200 text-green-800 px-4 py-3 rounded-lg flex gap-2 items-center'>
                <FaCheckCircle />
                <div className='font-semibold'>Email:</div>
                <div>{contact.email}</div>
              </div>
            ) : (
              <div className='bg-red-200 text-red-800 px-4 py-3 rounded-lg flex gap-2 items-center'>
                <FaWindowClose />
                <div className='font-semibold'>Email:</div>
                <div>Not found</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
