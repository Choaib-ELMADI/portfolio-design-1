import React from 'react';

import { LeftCard, Introduction, Cursor, Scroll, About, Settings } from './components';
import './App.css';
import { useStateContext } from './StateContext/StateContext';



const App = () => {
  const { selectedColor } = useStateContext();

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