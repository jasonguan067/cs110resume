import React from 'react';
import './EducationSkills.css';
import Typewriter from './Typewriter';

const EducationSkills = () => {
    return (
        <section id="education-skills" className="education-skills">
            <h2><Typewriter text = "Education & Skills"></Typewriter></h2>
            <div>
                <h3>Education</h3>
                <ul>
                    <li>El Toro High School: <strong>2016-2020</strong></li>
                    <li>University of California Riverside: <strong>2020-2024</strong> </li>
                </ul>
            </div>
            <div>
                <h3>Skills</h3>
                <ul>
                    <li> Python </li>
                    <li> C++</li>
                    <li> Javascript</li>
                    <li>Scikit-learn</li>
                    <li> React</li>
                    <li> HTML/CSS</li>
                </ul>
            </div>
        </section>
    );
};

export default EducationSkills;