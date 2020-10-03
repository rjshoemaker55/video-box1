import React from 'react';
import Video from '../components/Video';
import VideoInfo from '../components/VideoInfo';

const VideoScreen = () => {
  return (
    <div className='video-screen-wrapper'>
      <Video />
      <VideoInfo />
    </div>
  );
};

export default VideoScreen;
