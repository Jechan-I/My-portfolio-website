import React from 'react';
import '../styles/About.css';
import myImg from '../Assets/myImg.jpg';

const About = () => {
            return (
                <section id="about" className="container">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <img src={myImg} alt="Portfolio" className="about-image" />
                        <div className="about-text">
                            <p>
                                I'm a passionate Front-End Developer with a love for creating beautiful, intuitive, and high-performance web applications. With a strong foundation in JavaScript,React,Typescript,Node.js,HTML5 and modern CSS, I enjoy turning complex problems into simple, elegant solutions.
                            </p>
                             <p>
                                When I'm not coding, you can find me exploring the latest web technologies, contributing to open-source projects, or trading forex market. I'm always eager to learn and grow as a developer and as a person.
                            </p>
                        </div>
                    </div>
                </section>
            );
        };
export default About;