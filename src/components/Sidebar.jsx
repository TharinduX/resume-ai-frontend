import React from 'react';
import Indicator from '../components/Indicator';

const Sidebar = ({ analyzedData }) => {
  return (
    <aside className='bg-gray-800 text-white w-1/4 p-6'>
      <h2 className='text-2xl font-semibold mb-6 text-center mt-10'>
        Analyzed Data
      </h2>
      {analyzedData ? (
        <div>
          <Indicator value={analyzedData.score} maxValue={100} />
          <p className='text-center text-xl text-white'>Matching Skills:</p>
          <div className='flex flex-wrap justify-center mt-2 mb-6'>
            {analyzedData.matchingSkills.map((skill, index) => (
              <span
                key={index}
                className='bg-green-800 text-white text-sm px-2 py-1 rounded-lg m-1'
              >
                {skill}
              </span>
            ))}
          </div>
          <p className='text-center text-xl text-white'>Un-Matching Skills:</p>
          <div className='flex flex-wrap justify-center mt-2 mb-6'>
            {analyzedData.unmatchingSkills.map((skill, index) => (
              <span
                key={index}
                className='bg-green-800 text-white text-sm px-2 py-1 rounded-lg m-1'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </aside>
  );
};

export default Sidebar;
