import React from 'react';
import '../styles/Footer.css';
import portfolioData from '../data/portfolioData';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p>&copy; {new Date().getFullYear()} Jechan. All Rights Reserved.</p>
                <div className="footer-social">
                    {portfolioData.social && portfolioData.social.github && (
                        <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    )}
                    {portfolioData.social && portfolioData.social.linkedin && (
                        <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    )}
                </div>
            </div>
        </footer>
    );
};
export default Footer;