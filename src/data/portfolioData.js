import ecommerceImg from '../Assets/ecommerce.png';
import portfolioImg from '../Assets/portfolio.png';
import fintrackImg from '../Assets/fintrackImg.png';

const portfolioData = {
            projects: [
                {
                    title: "E-Commerce Platform",
                    description: "A fully responsive e-commerce website built with React, featuring product filtering, a shopping cart, and a mock checkout process.",
                    tags: ["React", "JavaScript", "CSS", "API"],
                    imageUrl: ecommerceImg,
                    liveUrl: "https://e-commerce-website-omega-silk.vercel.app/",
                    codeUrl: "https://github.com/Jechan-I/E-Commerce-website",
                },
                {
                    title: "Personal Finance Tracker",
                    description: "A complete personal finance tracker web application built with React, Zustand, React Router, and pure CSS3",
                    tags: ["React", "JavaScript", "CSS3", "React Router", "Zustand"],
                    imageUrl: fintrackImg,
                    liveUrl: "https://personal-finance-tracker-black-one.vercel.app/",
                    codeUrl: "https://github.com/Jechan-I/Personal-Finance-Tracker",
                },
                
                {
                    title: "Portfolio Website",
                    description: "The very portfolio you are looking at. Designed to be clean, modern, and fully responsive to showcase my skills and projects.",
                    tags: ["React", "CSS", "Responsive Design"],
                    imageUrl: portfolioImg,
                    liveUrl: "https://my-portfolio-website-delta-swart.vercel.app/",
                    codeUrl: "https://github.com/Jechan-I/My-portfolio-website",
                }
            ],
            skills: [
                { name: "HTML5", icon: "https://placehold.co/50x50/e74c3c/ffffff?text=HTML" },
                { name: "CSS3", icon: "https://placehold.co/50x50/3498db/ffffff?text=CSS" },
                { name: "JavaScript", icon: "https://placehold.co/50x50/f1c40f/ffffff?text=JS" },
                { name: "React", icon: "https://placehold.co/50x50/61DAFB/ffffff?text=React" },
                { name: "Git", icon: "https://placehold.co/50x50/f05032/ffffff?text=Git" },
            ]
            ,
            social: {
                github: 'https://github.com/Jechan-I',
                linkedin: 'https://www.linkedin.com/in/ntabujr?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhBddaD2sSoK37JpXGlXBCw%3D%3D',
                twitter: 'https://twitter.com/your-username'
            }
        };

export default portfolioData;
