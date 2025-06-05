// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

import ProfileImg from '../assets/j.jpg';
import PortfolioImg1 from '../assets/project1.jpg';
import PortfolioImg2 from '../assets/project2.png';
import PortfolioImg3 from '../assets/project3.png';

function AboutMe() {
  const portfolioItems = [
    {
      title: 'Digital Shelf',
      image: PortfolioImg2,
      url: 'https://digital-shelf.onrender.com/',
      repoUrl: 'https://github.com/devinmenge/digital-shelf',
      description: 'A web app that lets you search games, add them to your collection, and write reviews.',
    },
    {
      title: 'Taskmaster',
      image: PortfolioImg3,
      url: 'https://devinmenge.github.io/project-1/',
      repoUrl: 'https://github.com/devinmenge/project-1',
      description: 'A day planner that lets you create and edit tasks, saving to local storage.',
    },
  ];

  return (
    <div className="about-me-container">
      {/* Image and Text Section */}
      <div className="about-me-content">
        <div className="profile-image">
          <img src={ProfileImg} alt="Devin" />
        </div>
        <div className="about-me-text">
          <h1 className="about-me-title">Devin Menge</h1>
          <h2 className="about-me-subheader">UConn Engineering Coding Boot Camp</h2>
          <h2 className="about-me-subheader">CompTIA A+</h2>
          <p className="about-me-body">
            Hello! I’m a help desk specialist with 2+ years of IT experience, 
            now transitioning into web development with skills in HTML, CSS, 
            JavaScript, and React. Please check out my resume and portfolio. 
            I am excited for any opportunities where I can continue to learn and grow!
          </p>
          <ul className="social-links">
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FaFileAlt />
              </a>
            </li>
            <li>
              <a href="https://github.com/devinmenge" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/devinmenge/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:devinmenge@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-container">
        <h1 className="about-me-title">Portfolio</h1>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-text-box">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="portfolio-title-link">
                      <h3 className="portfolio-title">{item.title}</h3>
                    </a>
                    <p className="portfolio-description">{item.description}</p>
                    <a href={item.repoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-repo-link">
                      <div className="portfolio-repo-icon">
                        <FaGithub />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="about-me-subheader">More coming soon!</h2>
    </div>
  );
}

export default AboutMe;