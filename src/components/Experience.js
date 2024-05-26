import React from 'react';
import './Experience.css';
import Typewriter from './Typewriter';
const Experience = () => {
    return (
        <section id="experience" className="experience">
        <h2><Typewriter text = "Experience"></Typewriter></h2>
        <ul>
            <li><strong>CS Tutor</strong> - <em>theCoderSchool</em> (2020 - 2021)</li>
            <ul style={{ listStyleType: 'circle' }}>
                <li>Tutored high school students in C++ and Python</li>
                <li>Collaborated with a team to deliver weekly presentations on coding</li>
            </ul>
            <br />
            <li><strong>Hackathon Staff</strong> - <em>Saddleback College</em> (2022 - 2023)</li>
            <ul style={{ listStyleType: 'circle' }}>
                <li>Assisted in organizing and managing hackathon events</li>
                <li>Provided technical support and mentorship to participants</li>
            </ul>
            <br/>
            <li><strong>Sports Betting Analysis</strong></li>
            <ul style={{ listStyleType: 'circle' }}>
                <li>Developed a program to analyse the best sports props to bet on.</li>
                <li>Used python and machine learning to collect and process data</li>
                <li>Has a 70% hit rate</li>
            </ul>
        </ul>
    </section>
    );
};

export default Experience;