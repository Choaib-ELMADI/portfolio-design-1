import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Experience.css';



const Experience = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='app__experiences app__section'>
            <h3 data-aos="fade-up">Resume</h3>
            <p className='first' data-aos="fade-up">
                Experiences
            </p>
            <div className='bar' data-aos="fade-up" />
            <p className='second' data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur.
                adipiscing elit. Aenean et elementum purus.
            </p>
            <div className='app__experiences-timeline'>
                <div className='line' />
                <div className='app__experiences-container'>
                    <div className='app__experiences-item' data-aos="fade-up">
                        <h3>Company Date</h3>
                        <h1>Specificity</h1>
                        <p>
                            Lorem, ipsum dolor 
                            sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className='app__experiences-item' data-aos="fade-up">
                        <h3>Company Date</h3>
                        <h1>Specificity</h1>
                        <p>
                            Lorem, ipsum dolor 
                            sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className='app__experiences-item' data-aos="fade-up">
                        <h3>Company Date</h3>
                        <h1>Specificity</h1>
                        <p>
                            Lorem, ipsum dolor 
                            sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;