import React from 'react';

import './Introduction.css';
import { useStateContext } from '../../../StateContext/StateContext';



const Introduction = () => {
  const { selectedColor } = useStateContext();
  return (
    <div className='app__intro' id='home'>
      <h3>Introduction</h3>
      <p>
        I'm a <span 
          style={{ 
            textDecoration: `underline 4px ${ selectedColor }`,
            letterSpacing: '-2px'
          }}
        >Creative</span> Developer & Technology <span 
          style={{ 
            textDecoration: `underline 4px ${ selectedColor }`, 
            letterSpacing: '-2px'
          }}
        >Passionate</span>.
      </p>
      <div className='bar' />
    </div>
  );
};

export default Introduction;