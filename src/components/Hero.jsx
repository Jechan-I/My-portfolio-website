import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Hi,I'm Jeremiah </h1>
                <p>A Creative Front-End Developer</p>
                <a href="#projects" className="hero-button">View My Work</a>
                <a href="#contact" className="hero-button">Let's Work Together</a>
            </div>
        </section>
    );
};
export default Hero;