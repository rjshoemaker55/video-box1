import React from 'react';
import { useSelector } from 'react-redux';
import { getPageContent } from '../redux/slices/contentSlice';
import Results from './Results';
import VideoScreen from './VideoScreen';
import Navbar from '../components/Navbar';

const Landing = () => {
  const pageContent = useSelector(getPageContent);

  return (
    <>
      <Navbar />
      <div className='landing-wrapper'>
        {pageContent.content.component === 'Results' ? (
          <Results />
        ) : (
          pageContent.content.component === 'VideoScreen' && <VideoScreen />
        )}
      </div>
    </>
  );
};

export default Landing;
