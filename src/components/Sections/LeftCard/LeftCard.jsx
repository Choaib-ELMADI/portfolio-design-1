import React, { useState, useEffect } from 'react';

import images from '../../../constants/images';
import { useStateContext } from '../../../StateContext/StateContext';
import './LeftCard.css';
import './LeftCardSmall.css';

const glitchEffect1 = {
  feTurbulence: {
    baseFrequency: "0.607,0",
    numOctaves: "1",
    type: "turbulence",
  },
  animate: {
    values: "0;1000",
  },
};
const noiseEffect = {
  feTurbulence: {
      baseFrequency: "0.7,0.8",
      numOctaves: "1",
      type: "fractalNoise",
  },
  animate: {
      values: "0;100",
  },
};
const glitchEffect2 = {
  feTurbulence: {
    baseFrequency: "0,0.23",
    numOctaves: "1",
    type: "turbulence",
  },
  animate: {
    values: "0;0",
  }
};



const LeftCard = () => {
  const [effect, setEffect] = useState("none");
  const { selectedColor, visible, isMobile, selectedEffect } = useStateContext();

  useEffect(() => {
    switch (selectedEffect) {
      case "glitch 1":
        setEffect(glitchEffect1);
        break;
      case "glitch 2":
        setEffect(glitchEffect2);
        break;
      case "noise":
        setEffect(noiseEffect);
        break;
      default:
        setEffect("none");
        break;
    };
  }, [selectedEffect]);

  return (
    <>
      {
        !isMobile ?
        <div className='app__leftcard'>
          <div className="image-container">
            <div className='border border-1' />
            <div className='border border-2' />
            <div className='border border-3' />

            <svg style={{ display: 'none' }}>
              <defs>
                <filter id="noise">
                  <feTurbulence
                    baseFrequency={ effect?.feTurbulence?.baseFrequency }
                    type={ effect?.feTurbulence?.type }
                    numOctaves={ effect?.feTurbulence?.numOctaves }

                    seed="0"
                    result="static"   
                  >
                    <animate
                      animate= { effect?.animate?.values }

                      attributeName="seed"
                      dur="800ms"
                      repeatCount="1" 
                      begin="profile.mouseenter"  
                    />
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="static">
                    <animate
                      attributeName="scale"
                      values="0;40;0"
                      dur="800ms"
                      repeatCount="1" 
                      begin="profile.mouseenter"                           
                    />
                  </feDisplacementMap>
                </filter>  
              </defs>
            </svg>

            <div className="profile" id="profile" style={{ pointerEvents: effect === "none" ? 'none' : '' }}>
              <img src={ images.profile } draggable={ false } alt="Choaib-ELMADI" />
              <div className='title'>
                <h2>Choaib ELMADI</h2>
                <span />
              </div>
            </div>
          </div>
        </div> : 
        <div 
          className={ visible ? 'app__leftcard-small' : 'app__leftcard-small skew' }
          style={{ zIndex: visible ? 1 : -1 }}
        >
          <svg style={{ display: 'none' }}>
            <defs>
              <filter id="noise">
                <feTurbulence
                  baseFrequency={ effect?.feTurbulence?.baseFrequency }
                  type={ effect?.feTurbulence?.type }
                  numOctaves={ effect?.feTurbulence?.numOctaves }
                  seed="0"
                  result="static"   
                >
                  <animate
                    animate= { effect?.animate?.values }
                    attributeName="seed"
                    dur="800ms"
                    repeatCount="1" 
                    begin="profile.mouseenter"  
                  />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="static">
                  <animate
                    attributeName="scale"
                    values="0;40;0"
                    dur="800ms"
                    repeatCount="1" 
                    begin="profile.mouseenter"                           
                  />
                </feDisplacementMap>
              </filter>  
            </defs>
          </svg>

          <div 
            className="profile" 
            id='profile' 
            style={{ pointerEvents: (effect === "none" || !visible) ? 'none' : '' }}
          >
              <img src={ images.profile } draggable={ false } alt="Choaib-ELMADI" />
              <div className='title'>
                <h1 >Choaib ELMADI</h1>
                <span style={{ background: selectedColor }} />
              </div>
          </div>
        </div>
      }
    </>
  );
};

export default LeftCard;