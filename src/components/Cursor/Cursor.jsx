import React, { useState, useEffect } from 'react';

import './Cursor.css';



const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y:0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', setHidden(false));
        document.addEventListener('mouseleave', setHidden(true));
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseenter', setHidden(false));
          document.removeEventListener('mouseleave', setHidden(true));
        };
    }, []);

    return (
        <div 
            className={ `${ hidden ? 'app__cursor hidden' : 'app__cursor' }` }
            style={{
                left: `${ position.x }px`,
                top: `${ position.y }px`,
            }}
        >
            <div className='cursor-point' />
        </div>
    );
};

export default Cursor;