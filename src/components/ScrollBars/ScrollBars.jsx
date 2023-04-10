import React, { useState, useEffect } from 'react';

import { useStateContext } from '../../StateContext/StateContext';
import './ScrollBars.css';

const noneBarStyles = {
    parent: {
        display: 'none',
    },
};
const topBarStyles = {
    parent: {
        height:' 3.5px',
        width: '100%',
    },
};
const rightBarStyles = {
    parent: {
        width: '3.5px',
        height: '100vh',
    },
};



const ScrollBars = () => {
    const [height, setHeight] = useState(0);
    const [styles, setStyles] = useState(noneBarStyles);
    const { selectedColor, selectedBar } = useStateContext();

    useEffect(() => {
        switch (selectedBar) {
            case "top bar":
                setStyles(topBarStyles);
                break;
            case "right bar":
                setStyles(rightBarStyles);
                break;
            default:
                setStyles(noneBarStyles);
                break;
        };
    }, [selectedBar]);
    
    useEffect(() => {
        const handleScroll = () => {
            const pageHeight = document.body.scrollHeight;
            const scrollPosi = window.scrollY;
            const progress   = (((scrollPosi * 2) / pageHeight) * 100).toFixed(2);
            setHeight(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
      <div className='app__scrollbar' style={ styles.parent }>
        <div 
            className='progress-bar' 
            style={{ 
                width: selectedBar === "top bar" ? `${ height }%` : 'inherit',
                height: selectedBar === "right bar" ? `${ height }%` : 'inherit',
                background: selectedColor,
            }}
        ></div>
      </div>
    );
};

export default ScrollBars;