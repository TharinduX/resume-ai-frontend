import React from 'react';
import { FaCheckCircle, FaWindowClose } from 'react-icons/fa';

const Skills = ({ icon, skills, cross }) => {
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl'>{icon}</div>
          <h1 className='font-semibold text-2xl mb-4'>Skills</h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          Recruiters typically look for job candidates with soft skills because
          they make someone more successful in the workplace. Someone can be
          excellent with technical, job-specific skills, but if they can't
          manage their time or work within a team, they may not be successful in
          the workplace.
        </p>
        <div className='w-full flex flex-col gap-2'>
          <div className='bg-gray-100 p-6 rounded-lg text-center w-full'>
            <h1 className='font-semibold text-xl mb-4'>Hard Skills</h1>
            <p className='text-sm text-gray-500 mb-4'>
              Hard skills are things that are quantifiable and verifiable —
              degrees or other professional qualifications, programming
              languages, and industry-specific methodologies. This doesn’t
              include soft skills like teamwork, leadership, and communication.
            </p>
            <h1 className='text-lg mb-4 text-gray-400'>- Education -</h1>
            {skills.EDUCATION ? (
              <div className='flex flex-wrap justify-center mt-2 mb-6'>
                {skills.EDUCATION.map((skill, index) => (
                  <span
                    key={index}
                    className='bg-teal-700 text-white text-sm px-2 py-1 rounded-lg m-1'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <div className='flex w-full justify-center mb-4'>
                <div className='text-red-800 bg-red-100 p-6 rounded-lg flex flex-col items-center'>
                  <div className='flex items-center gap-2 mb-2'>
                    <FaWindowClose />
                    <span className='text-lg font-semibold'>
                      Education details not found in your resume!
                    </span>
                  </div>
                  <span className='text-sm'>
                    Consider adding education details to increse the chances of
                    getting selected
                  </span>
                </div>
              </div>
            )}

            <h1 className='text-lg mb-4 text-gray-400'>- Technical Skills -</h1>
            {skills.TECHNICAL ? (
              <div className='flex flex-wrap justify-center mt-2 mb-6'>
                {skills.TECHNICAL.map((skill, index) => (
                  <span
                    key={index}
                    className='bg-teal-700 text-white text-sm px-2 py-1 rounded-lg m-1'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <div className='flex w-full justify-center mb-4'>
                <div className='text-red-800 bg-red-100 p-6 rounded-lg flex flex-col items-center'>
                  <div className='flex items-center gap-2 mb-2'>
                    <FaWindowClose />
                    <span className='text-lg font-semibold'>
                      Technical skills are not found in your resume!
                    </span>
                  </div>
                  <span className='text-sm'>
                    Consider adding technical skills to increse the chances of
                    getting selected
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className='bg-gray-100 p-6 rounded-lg text-center w-full'>
            <h1 className='font-semibold text-xl mb-4'>Soft Skills</h1>
            <p className='text-sm text-gray-500 mb-4'>
              Soft skills relate to how you work. Soft skills include
              interpersonal (people) skills, communication skills, listening
              skills, time management, problem-solving, leadership, and empathy,
              among others.
            </p>
            {skills.SOFT ? (
              <div className='flex flex-wrap justify-center mt-2 mb-6'>
                {skills.SOFT.map((skill, index) => (
                  <span
                    key={index}
                    className='bg-teal-700 text-white text-sm px-2 py-1 rounded-lg m-1'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <div className='flex w-full justify-center mb-4'>
                <div className='text-red-800 bg-red-100 p-6 rounded-lg flex flex-col items-center'>
                  <div className='flex items-center gap-2 mb-2'>
                    <FaWindowClose />
                    <span className='text-lg font-semibold'>
                      Soft skills are not found in your resume!
                    </span>
                  </div>
                  <span className='text-sm'>
                    Consider adding soft skills to increse the chances of
                    getting selected
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
