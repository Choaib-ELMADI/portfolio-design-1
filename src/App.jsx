import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { 
  Cursor, Scroll, Settings, ScrollBars, Menu, LoadingPage, 

  LeftCard, Introduction, About, Achievements, 
  Services, Experience, Skills, Portfolio, Customers, Testimonials, Contact, 

  Canva,
} from './components';
import { useStateContext } from './StateContext/StateContext';
import './App.css';
import './AppSection.css';



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
      <Menu />
      {/* <Canva /> */}

      <LeftCard />

      <div className='app__main-content'>
        <Introduction />
        <About />
        <Achievements />
        <Services />
        <Experience />
        <Skills />
        <Portfolio />
        <Customers />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default App;