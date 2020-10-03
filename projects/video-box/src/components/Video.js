import React from 'react';
import { useSelector } from 'react-redux';
import { getPageContent } from '../redux/slices/contentSlice';
import { createUseStyles } from 'react-jss';
import { colors } from '../utilities/colors';

const useStyles = createUseStyles({
  videoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
});

const Video = () => {
  const video = useSelector(getPageContent).content.data;
  const classes = useStyles();

  let width = window.innerWidth;
  let height = window.innerHeight;

  return (
    <div className={classes.videoWrapper}>
      <iframe
        title='Youtube'
        id='ytplayer'
        type='text/html'
        width={width}
        // height={(width / 16) * 9}
        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&origin=http://example.com`}
        frameBorder='0'
        allow='autoplay'
        allowfullscreen='allowfullscreen'
        mozallowfullscreen='mozallowfullscreen'
        msallowfullscreen='msallowfullscreen'
        oallowfullscreen='oallowfullscreen'
        webkitallowfullscreen='webkitallowfullscreen'
      ></iframe>
    </div>
  );
};

export default Video;
