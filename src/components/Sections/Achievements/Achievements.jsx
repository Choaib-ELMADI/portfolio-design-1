import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Achievements.css';
import { achievements } from '../../../data';



const Achievements = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='app__achievements app__section'>
            <h3 data-aos="fade-up">Achievements</h3>
            <p className='first' data-aos="fade-up">
                Acceleration: A rapid increase in valuation and standards.
            </p>
            <div className='bar' data-aos="fade-up" />
            <p className='second' data-aos="fade-up">
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy 
                text.
            </p>
            <div className='app__achievements-achieve' data-aos="fade-up">
                {
                    achievements.map((a, i) => (
                        <div 
                            className='card' 
                            key={ `achievement-${ i }` }
                            style={{ 
                                background: a.background,
                                transform: (i === 1 || i === 3 ) ? 'translateY(3rem)' : '',
                            }}
                        >
                            <h1>{ a.title }</h1>
                            <p>{ a.desc }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Achievements;