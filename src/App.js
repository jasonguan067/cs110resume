import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import Experience from './components/Experience';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <EducationSkills />
            <Experience />
            <Extracurriculars />
            <Footer />
        </div>
    );
}

export default App;