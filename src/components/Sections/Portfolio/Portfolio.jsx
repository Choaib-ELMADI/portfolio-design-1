import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { BsChevronLeft, BsChevronRight, BsInfoCircle } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './Portfolio.css';
import { projects } from '../../../data';



const Portfolio = () => {
    const [vueGallery, setVueGallery] = useState(false);
    const [vueDetails, setVueDetails] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='app__portfolio app__section'>
            <h3 data-aos="fade-up">Portfolio</h3>
            <p className='first' data-aos="fade-up">
                Selected Work
            </p>
            <div className='bar' data-aos="fade-up" />
            <p className='second' data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur.
                adipiscing elit. Aenean et elementum purus.
            </p>
            <div className='app__portfolio-projects'>
                {
                    projects.map((project, i) => (
                        <div 
                            key={ `project-${ i+1 }` } 
                            className='app__projects-item' 
                            data-aos="fade-up"
                            onClick={ () => {
                                setVueGallery(true);
                                setSelectedProject(project.id);
                            }}
                        >
                            <img src={ project.background } alt={ `project-${ i+1 }` } draggable={ false } />
                            <div className='project-title'>
                                <h2>{ project.title }</h2>
                                <label><AiOutlineArrowRight size={ 18 } /></label>
                            </div>
                        </div>  
                    ))
                }
            </div>
            {
                vueGallery &&
                <motion.div
                    className='app__project-gallery'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "linear",
                        delay: .2,
                        duration: .5,
                    }}
                >
                    <div className='app__project-gallery-left-controls'>
                        <label onClick={ () => setVueGallery(false) }><IoClose size={ 30 } /></label>
                        <label><BsChevronLeft size={ 30 } /></label>
                        <label />
                    </div>
                    <div className='images-container'></div>
                    <div className='app__project-gallery-right-controls'>
                        <label 
                            onClick={ () => setVueDetails(!vueDetails) }
                            className='app__gallery-toggle-details'
                        >
                            <BsInfoCircle size={ 28 } />
                        </label>
                        <label><BsChevronRight size={ 30 } /></label>
                        <label />
                    </div>
                    <div className={ vueDetails ? 'app__project-gallery-details active' : 'app__project-gallery-details' }>
                        <h1>
                            Frame Manufacturer
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever since the 
                            1500s, when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </motion.div>
            }
        </div>
    );
};

export default Portfolio;
