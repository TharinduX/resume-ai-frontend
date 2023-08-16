import React, { useState } from 'react';
import ATS from '../components/cards/ATS';
import FileFormat from '../components/cards/FileFormat';
import Indicator from '../components/Indicator';

const Dashboard = () => {
  const parseRateFromAPI = 80;
  const fileFormat = 'pdf';
  const size = 2;
  const value = 80;
  const [activeTab, setActiveTab] = useState('analyze'); // Default active tab is 'analyze'

  return (
    <div className='h-screen w-full bg-gradient-to-r from-teal-800 to-teal-700 flex flex-col items-center justify-center p-10'>
      <div className='flex gap-5 w-5/6 h-full'>
        <aside className='bg-white rounded-md p-6 w-1/4'>
          <div className='p-3'>
            <h1 className='text-2xl text-center font-bold mb-8'>
              Resume Analyzer
            </h1>
            <Indicator value={value} />
          </div>
        </aside>
        <main className='bg-gray-200 rounded-md p-6 w-3/4 relative overflow-y-auto'>
          <div className='flex items-center mb-4 bg-white p-6 w-full sticky top-0'>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'analyze'
                  ? 'bg-teal-700 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveTab('analyze')}
            >
              Analyze
            </button>
            <button
              className={`px-4 py-2 rounded-lg ml-2 ${
                activeTab === 'career'
                  ? 'bg-teal-700 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveTab('career')}
            >
              Career Guidance
            </button>
          </div>
          <div className='mt-1'>
            {activeTab === 'analyze' && (
              <>
                <ATS parseRate={parseRateFromAPI} />
                <FileFormat fileFormat={fileFormat} size={size} />
              </>
            )}
            {activeTab === 'career' && (
              <div>
                <p>Career Guidance Tab Content</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
