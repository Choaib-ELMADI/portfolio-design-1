import React, { useState, useEffect } from 'react';

import './ScrollBars.css';



const ScrollBars = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progressHeight = (window.scrollHeight / totalHeight) * 100;
            if (totalHeight) {
                setHeight(progressHeight);
            };
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);    

    return (
      <div className='app__scrollbar'>
        <div className='progress-bar' style={{ height }} ></div>
      </div>
    );
};

export default ScrollBars;