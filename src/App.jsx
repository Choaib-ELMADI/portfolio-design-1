import React from 'react';

import {
  LeftCard, 
  Introduction, 
  Cursor, 
  Scroll 
} from './components';
import './App.css';



const App = () => {
  return (
    <div className='app'>
      <Cursor />
      <Scroll />
      <LeftCard />
      <div className='app__main-content'>
        <Introduction />
      </div>
    </div>
  );
};

export default App;