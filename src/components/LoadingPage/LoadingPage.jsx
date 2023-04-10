import React, { useState, useEffect } from 'react';

import './LoadingPage.css';



const LoadingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className={ loading ? 'app__loading-page' : 'app__loading-page hidden'}>
            <div className='title-container'>
                <h1>Choaib ELMADI</h1>
            </div>
            <div className='loading-progress'>
                <div className='progress-value'></div>
            </div>
        </div>
    );
};

export default LoadingPage;