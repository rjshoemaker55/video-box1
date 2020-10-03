import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { getPageContent, setPageContent } from '../redux/slices/contentSlice';
import { mockResults } from '../mockResults';
import Result from '../components/Result';
import { colors } from '../utilities/colors';
const axios = require('axios');

const useStyles = createUseStyles({
  //! Mobile styling
  resultsWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '5px',
    padding: '5px',
    backgroundColor: colors.marroon,
  },
  //! Tablet styling - 768px and above
  '@media screen and (min-width: 768px) and (max-width: 991px)': {
    resultsWrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: '5px',
      padding: '5px',
    },
  },
  //! Laptop/desktop styling - 992px and above
  '@media screen and (min-width: 992px)': {
    resultsWrapper: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  },
});

const Results = (props) => {
  const [resultList, setResultList] = useState([]);
  const pageContent = useSelector(getPageContent);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (!pageContent.content.data) return;
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: process.env.REACT_APP_API_KEY,
          part: 'snippet',
          type: 'video',
          q: pageContent.content.data,
          maxResults: 25,
        },
      })
      .then((res) => res)
      .then((data) => setResultList(data.data.items));

    // setResultList(mockResults().items);
  }, [pageContent]);

  const openVideo = (id) => {
    dispatch(
      setPageContent({
        component: 'VideoScreen',
        data: resultList.filter((result) => result.id.videoId === id)[0],
      })
    );
  };

  return (
    <div className={classes.resultsWrapper}>
      {resultList.map((result) => (
        <Result
          key={result.id.videoId}
          videoId={result.id.videoId}
          thumbnail={result.snippet.thumbnails.default}
          channelTitle={result.snippet.channelTitle}
          title={result.snippet.title}
          openVideo={openVideo}
        />
      ))}
    </div>
  );
};

export default Results;
