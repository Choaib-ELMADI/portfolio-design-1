import React, { useState, useEffect } from 'react';

import './Scroll.css';



const Scroll = () => {
    const [visible, setVisible] = useState(true);

    const scrolling = () => {
      if (window.scrollY > 80) {
          setVisible(false);
      } else {
        setVisible(true);
      }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrolling);
    }, [])
    

    return (
        <div className={ visible ? 'app__scroll' : 'app__scroll hidden'}>
            <div className='bar'>
                <div className='progress'></div>
            </div>
            <h5>scroll</h5>
        </div>
    );
};

export default Scroll;