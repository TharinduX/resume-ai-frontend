import React from 'react';

const MatchingSkills = ({ icon, job_description }) => {
  return (
    <div className='mb-5 shadow-md'>
      <div className='bg-white p-6 rounded-md'>
        <div className='flex gap-2'>
          <div className='text-3xl'>{icon}</div>
          <h1 className='font-semibold text-2xl mb-4'>
            Job Description Skills
          </h1>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          We've meticulously analyzed the job description and extracted the key
          skills demanded by the role. These skills are presented to you for a
          quick overview. Understanding the specific skills the job entails can
          help you gauge if it aligns with your expertise and career goals.
        </p>
        <div className='w-full flex flex-col gap-2'>
          <div className='bg-gray-100 p-6 rounded-lg text-center w-full'>
            <h1 className='font-semibold text-xl mb-4'>Matching Skills</h1>
            <p className='text-sm text-gray-500 mb-4'>
              These matching skills are a clear indicator that you possess the
              qualifications and expertise that the job demands. Seeing a strong
              alignment in this section is a positive sign, suggesting that
              you're well-suited for the job. It's your green light to
              confidently pursue this opportunity.
            </p>
            {job_description.matching_keywords.length ? (
              <div className='flex flex-wrap justify-center mt-2 mb-6'>
                {job_description.matching_keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className='bg-teal-700 text-white text-sm px-2 py-1 rounded-lg m-1'
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : (
              <div className='flex w-full justify-center mb-4'>
                <div className='text-red-800 bg-red-100 p-6 rounded-lg flex flex-col items-center'>
                  <div className='flex items-center gap-2 mb-2'>
                    <FaWindowClose />
                    <span className='text-lg font-semibold'>
                      Matching skills not found in your resume!
                    </span>
                  </div>
                  <span className='text-sm'>
                    No any matched skills job description & your resume. Its
                    time to learn and add these skills to your resume and
                    increase the chances of getting hired.
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className='bg-gray-100 p-6 rounded-lg text-center w-full'>
            <h1 className='font-semibold text-xl mb-4'>Unmatching Skills</h1>
            <p className='text-sm text-gray-500 mb-4'>
              Consider adding these skills to your resume to enhance your
              chances of standing out to employers. This section provides
              valuable insights into areas where you can further develop your
              qualifications and become an even stronger candidate for the job.
            </p>
            {job_description.unmatched_keywords.length ? (
              <div className='flex flex-wrap justify-center mt-2 mb-6'>
                {job_description.unmatched_keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className='bg-teal-700 text-white text-sm px-2 py-1 rounded-lg m-1'
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : (
              <div className='flex w-full justify-center mb-4'>
                <div className='text-red-800 bg-red-100 p-6 rounded-lg flex flex-col items-center'>
                  <div className='flex items-center gap-2 mb-2'>
                    <FaWindowClose />
                    <span className='text-lg font-semibold'>Error!</span>
                  </div>
                  <span className='text-sm'>
                    We are unable to find any unmatched skills. This is because
                    of the lack of data in your job description or resume.
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

export default MatchingSkills;
