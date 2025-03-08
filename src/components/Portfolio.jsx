// src/components/Portfolio.js
import React from 'react';
import './Portfolio.css';
import PortfolioImg1 from '../assets/project1.jpg'
import PortfolioImg2 from '../assets/project2.jpg'
import PortfolioImg3 from '../assets/project3.jpg'

function Portfolio() {
  // Array of portfolio items
  const portfolioItems = [
    {
      title: 'Project 1',
      image: PortfolioImg1, // Replace with your image path in the public folder
      url: 'https://example.com/project1', // Replace with your project URL
    },
    {
      title: 'Project 2',
      image: PortfolioImg2,
      url: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      image: PortfolioImg3,
      url: 'https://example.com/project3',
    },
  ];

  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
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
  );
}

export default Portfolio;