import React from 'react';

import { LeftCard, Introduction } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
        <LeftCard />
        <div className='app__main-content'>
          <Introduction />
        </div>
    </div>
  );
};

export default App;