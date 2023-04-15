import React, { useRef, useEffect, useState } from 'react';

import './About.css';



const About = () => {
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    // const [visibleSection, setVisibleSection] = useState();
    const aboutRef = useRef(null);

    const callBackFunction = (entries) => {
        const entry = entries[0];
        setIsSectionVisible(entry.isIntersecting);
    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };

    useEffect(() => {
        // const observer = new IntersectionObserver((entries) => {
        //     const entry = entries[0];
        //     console.log('about entry.isIntersecting ==> ', entry.isIntersecting);
        //     setIsSectionVisible(prev => entry.isIntersecting);
        //     console.log('about isSectionVisible ==> ', isSectionVisible);
        //     // console.log('about', isSectionVisible);
        //     // if (isSectionVisible) setVisibleSection('about');
        //     // else setVisibleSection(null);
        //     // console.log(visibleSection);
        // });
        // observer.observe(aboutRef.current);


        const observer = new IntersectionObserver(callBackFunction, options);
        if (aboutRef.current) {
            observer.observe(aboutRef.current);
            console.log("about visible ==> ", isSectionVisible);
        }
        
        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        }
    }, [aboutRef, options]);

    return (
        <div 
            className='app__about app__section' 
            id='about'
            ref={ aboutRef }
        >
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