import React from 'react';
import './Extracurriculars.css';
import Typewriter from './Typewriter';
const Extracurriculars = () => {
    return (
        <section id="extracurriculars" className="extracurriculars">
            <h2><Typewriter text = "Extracurriculars"></Typewriter></h2>
            <ul>
                <li>
                    <strong>Hackathon Enthusiast</strong> - Participated in over 5hackathons, winning several awards for innovative solutions and teamwork.
                </li>
            
                <li>
                    <strong>Volunteer Web Developer</strong> - Designed and maintained websites for local non-profits, enhancing their online presence and user engagement.
                </li>
              
                <li>
                    <strong>Language Learner</strong> - Fluent in Chinese and currently learning Spanish.
                </li>
            </ul>
        </section>
    );
};

export default Extracurriculars;