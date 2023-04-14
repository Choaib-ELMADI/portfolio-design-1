import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import './Testimonials.css';
import { testimonials } from '../../../data';



const Testimonials = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(0);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='app__testimonials app__section'>
            <h3 data-aos="fade-up">Testimonials</h3>
            <p className='first' data-aos="fade-up">
                What my customers
                are saying about me?
            </p>
            <div className='bar' data-aos="fade-up" />
            <div className='app__testimonials-item' data-aos="fade-up">
               <div className='testimonial'>
                    <button 
                        className='previous'
                        disabled={ selectedTestimonial <= 0 }
                        onClick={ () => setSelectedTestimonial(selectedTestimonial => selectedTestimonial-1) }
                    ><BsChevronLeft size={ 14 } /></button>
                    <p>" { testimonials[selectedTestimonial].testimonial } "</p>
                    <button 
                        className='next'
                        disabled={ selectedTestimonial >= testimonials.length - 1 }
                        onClick={ () => setSelectedTestimonial(selectedTestimonial => selectedTestimonial+1) }
                    ><BsChevronRight size={ 14 } /></button>
                </div>
               <div className='user'>
                    <h1>{  testimonials[selectedTestimonial].name }</h1>
                    <h3>{  testimonials[selectedTestimonial].company }</h3>
               </div>
            </div>
        </div>
    );
};

export default Testimonials;
