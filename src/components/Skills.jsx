import React from 'react';
import '../styles/Skills.css';
import portfolioData from '../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="container">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {Array.isArray(portfolioData.skills) && portfolioData.skills.map(skill => (
                    <div className="skill-card" key={skill.name}>
                        <img src={skill.icon} alt={skill.name} />
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Skills;