import React from 'react';
import '../styles/Projects.css';
import portfolioData from '../data/portfolioData';

const Projects = () => {
    return (
        <section id="projects" className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {Array.isArray(portfolioData.projects) && portfolioData.projects.map(project => (
                    <div className="project-card" key={project.title}>
                        <img src={project.imageUrl} alt={project.title} className="project-image" loading="lazy" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {Array.isArray(project.tags) && project.tags.map(tag => (
                                    <span className="project-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;