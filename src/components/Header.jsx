import React from 'react';
import '../styles/Header.css'
import portfolioData from '../data/portfolioData';

const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <nav className="navbar">
                <a href="#hero" className="nav-logo">Home </a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="nav-social">
                    {portfolioData.social && portfolioData.social.github && (
                        <a className="social-link" href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.71 5.41-5.29 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
                            </svg>
                        </a>
                    )}
                    {portfolioData.social && portfolioData.social.linkedin && (
                        <a className="social-link" href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5c0 1.66 1.34 3 2.98 3H5c1.64 0 3-1.34 3-3 0-1.65-1.36-3-3.02-3zM2.4 21.5H7.6V9H2.4v12.5zM9.5 9h5v1.7h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.1 3.4 6.1 7.8V21.5h-5.2v-6.3c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21.5H9.5V9z"/>
                            </svg>
                        </a>
                    )}
                </div>
            </nav>
        </header>
    );
};
export default Header;