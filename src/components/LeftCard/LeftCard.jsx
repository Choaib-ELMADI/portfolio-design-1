import React from 'react';

import images from '../../constants/images';
import './LeftCard.css';



const LeftCard = () => {
  return (
    <div className='app__leftcard'>
      <div className="image-container">
        <div className='border border-1' />
        <div className='border border-2' />
        <div className='border border-3' />
        <img src={ images.profile } alt="Choaib-ELMADI" />
      </div>
    </div>
  );
};

export default LeftCard;