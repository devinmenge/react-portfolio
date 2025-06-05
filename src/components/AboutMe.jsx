// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // Import icons

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
    },
    {
      title: 'Taskmaster',
      image: PortfolioImg3,
      url: 'https://devinmenge.github.io/project-1/',
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
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-item"
            >
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <h2 className="about-me-subheader">More coming soon!</h2>
    </div>
  );
}

export default AboutMe;