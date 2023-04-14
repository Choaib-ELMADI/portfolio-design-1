import React, { useState } from 'react';

import images from '../../../constants/images';
import { useStateContext } from '../../../StateContext/StateContext';
import './LeftCard.css';
import './LeftCardSmall.css';



const LeftCard = () => {
  const { visible, isMobile } = useStateContext();

  return (
    <>
      {
        !isMobile ?
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
        </div> : 
        <div className={ visible ? 'app__leftcard-small' : 'app__leftcard-small skew' }>
          <div className="profile">
              <img src={ images.profile } draggable={ false } alt="Choaib-ELMADI" />
              <div className='title'>
                <h1>Choaib ELMADI</h1>
                <span />
              </div>
            </div>
        </div>
      }
    </>
  );
};

export default LeftCard;