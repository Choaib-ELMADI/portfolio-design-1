import React from 'react';

import './Scroll.css';
import { useStateContext } from '../../../StateContext/StateContext';



const Scroll = () => {
    const { visible, selectedColor } = useStateContext();

    return (
        <div className={ visible ? 'app__scroll' : 'app__scroll hidden'}>
            <div className='bar'>
                <div className='progress' style={{ background: selectedColor }}></div>
            </div>
            <h5 style={{ color: selectedColor }}>scroll</h5>
        </div>
    );
};

export default Scroll;