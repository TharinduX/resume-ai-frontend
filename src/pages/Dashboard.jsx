import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ATS from '../components/cards/ATS';
import FileFormat from '../components/cards/FileFormat';
import Indicator from '../components/Indicator';
import SidebarCards from '../components/SidebarCards';
import Sections from '../components/cards/Sections';
import {
  FcReading,
  FcDocument,
  FcHighPriority,
  FcCellPhone,
} from 'react-icons/fc';
import Loading from './Loading';
import Contact from './../components/cards/Contact';

const Dashboard = () => {
  const location = useLocation();
  const [processedData, setProcessedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { uuid } = useParams();

  useEffect(() => {
    if (uuid) {
      fetch(`/api/get-result/${uuid}`)
        .then((response) => response.json())
        .then((data) => {
          setProcessedData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false);
        });
    }
  }, []);

  const parseRateFromAPI = 80;
  const fileFormat = 'pdf';
  const size = 2;
  const value = 80;
  const [activeTab, setActiveTab] = useState('analyze'); // Default active tab is 'analyze'

  const cvMatchingSkills = ['React', 'Node.js', 'Express.js', 'MongoDB'];
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='h-screen w-full bg-gradient-to-r from-teal-800 to-teal-700 flex flex-col items-center justify-center p-10'>
          {processedData && (
            <div className='flex gap-5 w-5/6 h-full'>
              <aside className='bg-white rounded-md p-6 w-1/4'>
                <div className='p-3'>
                  <h1 className='text-2xl text-center font-bold mb-8'>
                    Resume Analyzer
                  </h1>
                  <Indicator value={processedData.overall_score} />
                  <SidebarCards />
                  <h1 className='text-xl text-center font-semibold mb-6 mt-8'>
                    Your Resume Skills
                  </h1>
                  <div className='flex flex-wrap justify-center'>
                    {cvMatchingSkills.map((skill, index) => (
                      <span
                        key={index}
                        className='bg-teal-700 text-white text-sm px-2 py-1 rounded-lg m-1'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
              <main className='bg-gray-200 rounded-md p-6 w-3/4 relative overflow-y-auto pt-0'>
                <div className='flex items-center mb-4 bg-white p-6 w-full sticky top-0 z-10'>
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
                      <ATS
                        parseRate={processedData.atsParseRate}
                        icon={<FcReading />}
                      />
                      <FileFormat
                        fileFormat={processedData.file.type}
                        size={processedData.file.size}
                        icon={<FcDocument />}
                      />
                      <Sections
                        sections={processedData.sections}
                        icon={<FcHighPriority />}
                      />
                      <Contact
                        contact={processedData.contact}
                        icon={<FcCellPhone />}
                      />
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
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
