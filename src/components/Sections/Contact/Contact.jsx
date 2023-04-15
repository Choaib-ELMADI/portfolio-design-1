import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { FcCheckmark } from 'react-icons/fc';

import './Contact.css';
import { useStateContext } from '../../../StateContext/StateContext';



const Contact = () => {
    const formRef = useRef();
    const contactRef = useRef();
    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            number: '',
            message: '',
        }
    );
    const [sent, setSent] = useState(false);
    const [color, setColor] = useState('#e4e4e4');
    const { selectedColor } = useStateContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_rbyqrrj', 
            'template_z4t83ye',
            {
              from_name: form.name,
              to_name: 'Choaib ELMADI',
              from_email: form.email,
              to_email: 'choaib1996elmadi@gmail.com',
              message: form.message,
            },
            'BzsAxBDR2VcTFgclc',
        ).then(() => {
            console.log(form);
            alert("Thank You! I will get back to you as soon as possible.");
            setSent(true);
            setForm({
              name: '',
              email: '',
              number: '',
              message: '',
            });
        }, (error) => {
            console.log(error);
            alert("Something went wrong.");
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         setIsSectionVisible(entry.isIntersecting);
    //         console.log('contact entry.isIntersecting ==> ', entry.isIntersecting);
    //         console.log('contact isSectionVisible ==> ', isSectionVisible);
    //         // console.log('contact', isSectionVisible);
    //         // if (isSectionVisible) setVisibleSection('contact');
    //         // else setVisibleSection(null);
    //         // console.log(visibleSection);
    //     });
    //     observer.observe(contactRef.current);
    // }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div 
            className='app__contact app__section' 
            id='contact'
            ref={ contactRef }
        >
            <h3 data-aos="fade-up">Contact</h3>
            <p className='first' data-aos="fade-up">
                Let's get in touch.
            </p>
            <div className='bar' data-aos="fade-up" />
            <p className='second' data-aos="fade-up">
                Fill out my form below and send me an email.
            </p>
            <div className='form-container'>
                <form
                    ref={ formRef }
                    onSubmit={ handleSubmit }
                >
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='* Name'
                        data-aos="fade-up"
                        value={ form.name }
                        onChange={ handleChange }
                        required
                    />
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='* E-mail'
                        data-aos="fade-up"
                        value={ form.email }
                        onChange={ handleChange }
                        required
                    />
                    <input 
                        type='text' 
                        name='number' 
                        placeholder='Number'
                        data-aos="fade-up"
                        value={ form.number }
                        onChange={ handleChange }
                    />
                    <textarea 
                        name='message' 
                        placeholder='* Message'
                        data-aos="fade-up"
                        rows={ 3 }
                        value={ form.message }
                        onChange={ handleChange }
                        required
                    ></textarea>
                    <div className='submitting'>
                        <button 
                            type='submit' 
                            data-aos="fade-up"
                            onPointerEnter={ () => setColor(selectedColor) }
                            onPointerLeave={ () => setColor('#e4e4e4') }
                            style={{ color, transition: '.2s', borderBottom: `2px solid ${ selectedColor }` }}
                        >
                            Send
                        </button>
                        <p className='note'>
                            <span style={{ color: selectedColor }}>* </span>
                            Marked fields are 
                            <span style={{ color: selectedColor }}> required </span>
                            to fill.
                        </p>
                    </div>

                </form>
                {
                    sent &&
                    <div className='sent'>
                        <h2>Your Message has been sent!</h2>
                        <FcCheckmark size={ 60 } />
                    </div>
                }
            </div>
        </div>
    );
};

export default Contact;
