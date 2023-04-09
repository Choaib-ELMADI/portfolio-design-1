import React from 'react';

import {
  LeftCard, 
  Introduction, 
  Cursor, 
  Scroll,
  About,
  Settings,
} from './components';
import './App.css';



const App = () => {
  return (
    <div className='app'>
      <Cursor />
      <Scroll />
      <Settings />
      <LeftCard />
      <div className='app__main-content'>
        <Introduction />
        <About />
      </div>
    </div>
  );
};

export default App;