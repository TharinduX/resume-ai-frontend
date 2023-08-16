import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Uploader from './pages/Uploader';
import JobDescription from './pages/JobDescription';
import Loading from './pages/Loading';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Uploader />} />
        <Route path='/job-description' element={<JobDescription />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;