import React from 'react';
import './About.css';
import Typewriter from './Typewriter';
const About = () => {
    return (
        <section id="about" className="about">
            <h2><Typewriter text = "About Me"></Typewriter></h2>
            <p>I am a dedicated software engineer with a strong background in various programming languages.</p>
            <p>I am deeply fascinated by UX design and making websites into engaging, user-friendly platforms. I enjoy staying updated with the latest trends in software and often participate in hackathons and coding challenges to improve my skills. In my free time, I contribute to open-source projects and exploring new techniques that can enhance web development. </p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </section>
    );
};

export default About;