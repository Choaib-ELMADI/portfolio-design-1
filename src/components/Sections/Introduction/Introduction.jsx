import React from 'react';

import './Introduction.css';
import { useStateContext } from '../../../StateContext/StateContext';



const Introduction = () => {
  const { selectedColor } = useStateContext();
  return (
    <div className='app__intro' id='home'>
      <h3>Introduction</h3>
      <p>
        I'm a<span style={{ color: selectedColor }}> Creative </span>Developer & Technology<span style={{ color: selectedColor }}> Passionate</span>.
      </p>
      <div className='bar' />
    </div>
  );
};

export default Introduction;