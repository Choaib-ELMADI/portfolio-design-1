import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Customers.css';
import { customers } from '../../../data';



const Customers = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='app__customers app__section'>
            <h3 data-aos="fade-up">Customers</h3>
            <p className='first' data-aos="fade-up">
                Selected Clients
            </p>
            <div className='bar' data-aos="fade-up" />
            <div className='app__customers-container'>
                {
                    customers.map(c => (
                        <div key={ c.name } className='app__customer' data-aos="fade-up">
                            <img src={ c.logo } alt={ c.name } />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Customers;
