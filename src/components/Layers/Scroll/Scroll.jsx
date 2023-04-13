import React from 'react';

import './Scroll.css';
import { useStateContext } from '../../../StateContext/StateContext';



const Scroll = () => {
    const { visible } = useStateContext();

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