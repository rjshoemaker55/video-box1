import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './js/components/pages/Landing';

import './App.css';

const App = () => {
  return (
    <div id='wrap'>
      <Router>
        <Route exact path='/' component={Landing} />
      </Router>
    </div>
  );
};

export default App;
