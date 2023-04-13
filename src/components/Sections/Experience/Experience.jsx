import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Experience.css';
import { experiences } from '../../../data';



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
                    {
                        experiences.map((exp, i) => (
                            <div key={ `experience-${ i+1 }` } className='app__experiences-item' data-aos="fade-up">
                                <h3>{ exp.company && exp.date }</h3>
                                <h1>{ exp.title }</h1>
                                <p>{ exp.desc }</p>
                            </div>  
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Experience;
