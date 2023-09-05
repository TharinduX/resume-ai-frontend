import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ATS from '../components/cards/ATS';
import FileFormat from '../components/cards/FileFormat';
import Indicator from '../components/Indicator';
import SidebarCards from '../components/SidebarCards';
import Sections from '../components/cards/Sections';
import MatchingSkills from '../components/cards/MatchingSkills';
import Length from '../components/cards/Length';
import {
  FcReading,
  FcDocument,
  FcHighPriority,
  FcCellPhone,
  FcDiploma2,
  FcFinePrint,
} from 'react-icons/fc';
import { FaRegCopy, FaRedo, FaCheck } from 'react-icons/fa';
import Loading from './Loading';
import Contact from './../components/cards/Contact';
import Skills from '../components/cards/Skills';

const Dashboard = () => {
  const location = useLocation();
  const [processedData, setProcessedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { uuid } = useParams();
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const copyURLToClipboard = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        setIsLinkCopied(true);
        setTimeout(() => {
          setIsLinkCopied(false);
        }, 1000);
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  };

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

  const [activeTab, setActiveTab] = useState('analyze'); // Default active tab is 'analyze'

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='h-screen w-full bg-gradient-to-r from-teal-800 to-teal-700 flex flex-col items-center justify-center p-10'>
          {processedData && (
            <div className='flex gap-5 w-full h-full'>
              <aside className='bg-white rounded-md p-6 w-1/4'>
                <div className='p-3'>
                  <h1 className='text-2xl text-center font-bold mb-8'>
                    Resume Analyzer
                  </h1>
                  <Indicator value={processedData.overall_score} />
                  <SidebarCards />
                </div>
              </aside>
              <main className='bg-gray-200 rounded-md p-6 w-3/4 relative overflow-y-auto pt-0'>
                <div className='items-center mb-4 bg-white p-6 w-full sticky top-0 z-10'>
                  <div className='flex justify-between items-center'>
                    <div>
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
                    <div>
                      <button
                        className='px-4 py-2 rounded-lg ml-2 bg-teal-700 text-white'
                        onClick={() => {
                          window.location.href = '/';
                        }}
                      >
                        <span className='flex gap-2 items-center'>
                          <FaRedo />
                          Retry
                        </span>
                      </button>
                      <button
                        className={`px-4 py-2 rounded-lg ml-2 bg-gray-300 text-gray-600 ${
                          isLinkCopied ? 'bg-teal-700 text-white ' : ''
                        }`}
                        onClick={copyURLToClipboard}
                      >
                        <span className='flex gap-2 items-center'>
                          {isLinkCopied ? <FaCheck /> : <FaRegCopy />}
                          {isLinkCopied ? 'Copied' : 'Copy Link'}
                        </span>
                      </button>
                    </div>
                  </div>
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
                      <Skills
                        icon={<FcDiploma2 />}
                        skills={processedData.cvSkillsList}
                      />
                      <Length
                        icon={<FcFinePrint />}
                        word_count={processedData.word_count}
                      />
                      {processedData.job_description.text && (
                        <MatchingSkills
                          icon={<FcFinePrint />}
                          job_description={processedData.job_description}
                        />
                      )}
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
