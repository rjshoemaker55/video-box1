import React from 'react';
import { createUseStyles } from 'react-jss';
import { colors } from '../utilities/colors';

const Result = (props) => {
  const { videoId, title, thumbnail, channelTitle, openVideo } = props;

  const useStyles = createUseStyles({
    resultWrapper: {
      transitionDuration: '.3s',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, .5)',
        cursor: 'pointer',
      },
    },
    videoImage: {
      width: '100%',
      height: 'auto',
    },
    infoWrapper: {
      padding: '5px;',
    },
    videoTitle: {
      fontSize: '20px',
      color: colors.lemon,
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    channelTitle: {
      fontSize: '18px',
      color: colors.beige,
    },
  });

  const classes = useStyles();

  return (
    <div
      className={classes.resultWrapper}
      key={videoId}
      onClick={() => openVideo(videoId)}
    >
      <img src={thumbnail.url} className={classes.videoImage} />

      <div className={classes.infoWrapper}>
        <div className={classes.videoTitle}>{title}</div>
        <div className={classes.channelTitle}>{channelTitle}</div>
      </div>
    </div>
  );
};

export default Result;
