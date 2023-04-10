import React from 'react';

import { LeftCard, Introduction, Cursor, Scroll, About, Settings, ScrollBars } from './components';
import './App.css';
import { useStateContext } from './StateContext/StateContext';



const App = () => {
  const { selectedColor } = useStateContext();

  return (
    <div className={ `app ${ selectedColor }` }>
      <Cursor />
      <Scroll />
      <Settings />
      <ScrollBars />
      <LeftCard />
      <div className='app__main-content'>
        <Introduction />
        <About />
      </div>
    </div>
  );
};

export default App;