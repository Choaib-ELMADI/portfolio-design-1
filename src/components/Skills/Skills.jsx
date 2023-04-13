import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Skills.css';
import { skills } from '../../data';



const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='app__skills app__section'>
            <h3 data-aos="fade-up">Skills</h3>
            <p className='first' data-aos="fade-up">
                Skills I have collected
                over the years and days.
            </p>
            <div className='bar' data-aos="fade-up" />
            <div className='app__skills-skills'>
                {
                    skills.map((skill, i) => (
                        <div key={ `skills-${ i+1 }` } className='app__skills-item' data-aos="fade-up">
                            <div className='skill-title'>
                                <h3>{ skill.title }</h3>
                                <div className='skill-category'>
                                    { skill.category }
                                </div>
                            </div>
                            <div className='app__skills-item-progress'>
                                <div className='app__skills-item-progress-value' style={{ width: skill.progress }}></div>
                            </div>
                            <div 
                                className='percentage' 
                                style={{ 
                                    left: skill.progress
                                }}
                            >
                                { skill.progress }
                            </div>
                        </div>  
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;
