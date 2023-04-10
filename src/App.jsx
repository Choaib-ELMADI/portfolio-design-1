import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { LeftCard, Introduction, Cursor, Scroll, About, Settings, ScrollBars, Canva, LoadingPage } from './components';
import './App.css';
import { useStateContext } from './StateContext/StateContext';



const App = () => {
  const { selectedColor } = useStateContext();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={ `app ${ selectedColor }` }>
      <Cursor />
      <Scroll />
      <Settings />
      <ScrollBars />
      <LoadingPage />
      {/* <Canva /> */}

      <LeftCard />

      <div className='app__main-content'>
        <Introduction />
        <About />
      </div>
    </div>
  );
};

export default App;