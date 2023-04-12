import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsChevronUp } from 'react-icons/bs';

import './Services.css';
const services = [
    {
        title: 'Title 1',
        desc: 'This is a description This is a description This is a description This is a description',
    },
    {
        title: 'Title 2',
        desc: 'This is a description This is a description This is a description This is a description',
    },
    {
        title: 'Title 3',
        desc: 'This is a description This is a description This is a description This is a description',
    },
];



const Services = () => {
    const [activeService, setActiveService] = useState(null);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='app__services app__section'>
            <h3 data-aos="fade-up">Services</h3>
            <p className='first' data-aos="fade-up">
                What I can do
            </p>
            <div className='bar' data-aos="fade-up" />
            <p className='second' data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur.
                adipiscing elit. Aenean et elementum purus.
            </p>
            <ul className='app__services-services'>
                {
                    services.map((s, i) => (
                        <li
                            className={ activeService === s.title ? 'service active' : 'service' } 
                            key={ `service-${ i }` }
                        >
                            <div 
                                className='service-title'
                                onClick={ () => {
                                    if (activeService === s.title) {
                                        setActiveService(null);
                                    } else {
                                        setActiveService(s.title);
                                    }
                                }}
                            >
                                <h3>{ s.title }</h3>
                                <label><BsChevronUp size={ 22 } /></label>
                            </div>
                            <div className='service-description'>
                                <p>{ s.desc }</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Services;