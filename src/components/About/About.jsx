import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './About.css';



const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='app__about'>
            <h3 data-aos="fade-up">About</h3>
            <p className='first' data-aos="fade-up">
                My approach to building the tech brands of tomorrow.
            </p>
            <div className='bar' data-aos="fade-up" />
            <p className='second' data-aos="fade-up">
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap 
                into electronic typesetting.
            </p>
        </div>
    );
};

export default About;