import React, { useEffect, useState } from 'react';
import { Blurhash } from "react-blurhash";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useStateContext } from '../../../StateContext/StateContext';
import { IoClose } from 'react-icons/io5';
import { BsChevronLeft, BsChevronRight, BsInfoCircle } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './Portfolio.css';
import { projects } from '../../../data';
const initialLoadingState = [
    {
        title: 'image1',
        loaded: 0,
    },
    {
        title: 'image2',
        loaded: 0,
    },
    {
        title: 'image3',
        loaded: 0,
    },
    {
        title: 'image4',
        loaded: 0,
    }
];



const Portfolio = () => {
    const [vueGallery, setVueGallery] = useState(false);
    const [vueDetails, setVueDetails] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [index, setIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [portfolioLoaded, setPortfolioLoaded] = useState(initialLoadingState);
    const { isMobile } = useStateContext();

    const handleProjectClicked = (project) => {
        setVueGallery(true);
        setSelectedProject(project);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    const handleIndex = (index, amount) => {
        setIndex(index => index += amount);
    };

    const handlePortfolioLoaded = (t) => {
        const newState = portfolioLoaded.map(obj => {
            return (obj.title === t) ? { title: obj.title, loaded: 1 } : obj
        });
        setPortfolioLoaded(newState);
    };
        
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
                            onClick={ () => handleProjectClicked(project) }
                        >
                            <div style={{ display: !portfolioLoaded[i].loaded ? '' : 'none' }}>
                                <Blurhash 
                                    width={ !isMobile ? 500 : 320 }
                                    height={ 228 }
                                    hash={ project.backgroundHash }
                                />
                            </div>
                            <img 
                                style={{ display: portfolioLoaded[i].loaded ? '' : 'none' }} 
                                src={ project.background } 
                                alt={ `project-${ i }` }
                                draggable={ false }
                                onLoad={ () => handlePortfolioLoaded(portfolioLoaded[i].title) }
                            />
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
                        <label 
                            onClick={ () => {
                                setVueGallery(false);
                                setLoading(false);
                            }}
                            className='gallery-icon'
                        >
                            <IoClose size={ 30 } />
                        </label>
                        <button 
                            onClick={ (index) => handleIndex(index, -1) }
                            className='gallery-icon'
                            style={{
                                background: 'transparent',
                                color: '#e4e4e4',
                                border: '0',
                                outline: 'none'
                            }}
                            disabled={ index <= 0 }
                        >
                            <BsChevronLeft size={ 30 } />
                        </button>
                        <label />
                    </div>
                    <div className='images-container-wrapper'>
                        <div className='images-container'>
                            <div className={ loading ? 'loading-images active' : 'loading-images'} />
                            <div className={ loading ? 'image' : 'image active'}>
                                <div style={{ display: !imageLoaded ? '' : 'none' }}>
                                    <Blurhash 
                                        width={ 700 }
                                        height={ 320 }
                                        hash={ selectedProject.hashes[index] }
                                    />
                                </div>
                                <img 
                                    style={{ display: imageLoaded ? '' : 'none' }} 
                                    src={ selectedProject.pictures[index] } 
                                    alt={ `project-details-${ index }` }
                                    onLoad={ () => setImageLoaded(true) }
                                />
                            </div>
                        </div>
                    </div>
                    <div className='app__project-gallery-right-controls'>
                        <label 
                            onClick={ () => setVueDetails(!vueDetails) }
                            className='app__gallery-toggle-details gallery-icon'
                            style={{
                                zIndex: 999,
                            }}
                        >
                            <BsInfoCircle size={ 28 } />
                        </label>
                        <button 
                            onClick={ (index) => handleIndex(index, 1) }
                            className='gallery-icon'
                            style={{
                                background: 'transparent',
                                color: '#e4e4e4',
                                border: '0',
                                outline: 'none'
                            }}
                            disabled={ index >= selectedProject.pictures.length-1 }
                        >
                            <BsChevronRight size={ 30 } />
                        </button>
                        <label />
                    </div>
                    <div className={ vueDetails ? 'app__project-gallery-details active' : 'app__project-gallery-details' }>
                        <div className='gallery-details-content'>
                            <h1>{ selectedProject.detailsTitle }</h1>
                            <p>{ selectedProject.detailsDesc }</p>
                        </div>
                    </div>
                </motion.div>
            }
        </div>
    );
};

export default Portfolio;
