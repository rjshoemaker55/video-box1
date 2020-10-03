import React from 'react';
import { useSelector } from 'react-redux';
import { getPageContent } from '../redux/slices/contentSlice';

const VideoInfo = () => {
  const video = useSelector(getPageContent).content.data;

  const {
    id,
    snippet: { channelId, channelTitle, description, publishedAt, title },
  } = video;

  return (
    <div className='video-info-wrapper'>
      <h3>{title}</h3>
      <h4>{channelTitle}</h4>
      <h5>{publishedAt}</h5>
      <p>{description}</p>
    </div>
  );
};

export default VideoInfo;
