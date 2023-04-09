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
        <div className="profile">
          <img src={ images.profile } draggable={ false } alt="Choaib-ELMADI" />
          <div className='title'>
            <h2>Choaib ELMADI</h2>
            <span />
          </div>
        </div>
        </div>
    </div>
  );
};

export default LeftCard;