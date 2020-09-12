import React, { useState } from 'react';
import Results from './Results';
const axios = require('axios');

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mainContent, setMainContent] = useState('');

  const buildUrl = (query) => {
    return `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKXbn-fL4CpKsPY4W4TZ3KVUTrh_5xE7c&part=snippet&q=${query}`;
  };

  const displayVideo = () => {};

  const searchVideos = () => {
    // TODO: Verify search query

    setMainContent(<Results query={searchQuery} displayVideo={displayVideo} />);
  };

  return (
    <div className='landing-wrapper'>
      <div className='main-header'>Videobox</div>
      <input
        className='search-bar'
        placeholder='Search'
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <button className='search-button' onClick={searchVideos}>
        Search
      </button>
      {mainContent}
    </div>
  );
};

export default Landing;
