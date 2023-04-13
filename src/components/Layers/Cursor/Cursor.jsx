import React, { useState, useEffect } from 'react';

import './Cursor.css';
import { useStateContext } from '../../../StateContext/StateContext';



const Cursor = () => {
    const [position, setPosition] = useState({ x: -15, y: -15 });
    const [hidden, setHidden] = useState(false);
    const [pulse, setPulse] = useState(false);
    const { selectedColor } = useStateContext();

    useEffect(() => {
        const handleMouseMove = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', () => setHidden(false));
        document.addEventListener('mouseleave', () => setHidden(true));
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseenter', () => setHidden(false));
          document.removeEventListener('mouseleave', () => setHidden(true));
        };
    }, []);

    useEffect(() => {
        const handlePulse = () => {
            setPulse(pulse => !pulse);
            setTimeout(() => {
                setPulse(false);
            }, 250);
        };
    
        window.addEventListener('click', handlePulse);

        return () => {
            window.removeEventListener('click', handlePulse);
        };
    }, [pulse]);
    

    return (
        <div 
            className={ `${ hidden ? 'app__cursor hidden' : 'app__cursor' }` }
            style={{
                left: `${ position.x }px`,
                top: `${ position.y }px`,
                borderColor: selectedColor,
            }}
        >
            <div className={ pulse ? 'cursor-point pulse' : 'cursor-point' } style={{ background: selectedColor }} />
        </div>
    );
};

export default Cursor;