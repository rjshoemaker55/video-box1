import React, { useEffect, useState } from 'react';
const axios = require('axios');

const Results = (props) => {
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyCKXbn-fL4CpKsPY4W4TZ3KVUTrh_5xE7c',
          part: 'snippet',
          type: 'video',
          q: props.query,
        },
      })
      .then((res) => res)
      .then((data) => setResultList(data.data.items));
  }, []);
  return (
    <div className='results-wrapper'>
      {resultList.map((result) => {
        const id = result.id.videoId;
        const thumbnail = result.snippet.thumbnails.default;
        const { channelId, channelTitle, publishedAt, title } = result.snippet;

        return (
          <div className='result-wrapper' key={id}>
            <h3>{title}</h3>
            <img src={thumbnail.url} />
            <p>{channelTitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
