// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css'; // Import the new stylesheet
import ProfileImg from '../assets/j.jpg'

function AboutMe() {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <p>
      <img src={ProfileImg} alt="Devin" style={{ width: '300px', height: 'auto' }} />
      </p>
      <p>Hello! I am a current help desk specialist looking to move into the world of coding.          
        Please check out my portfolio and resume.          
        I am excited for new job opportunities in this field          
        where I can continue to learn.</p>
    </div>
  );
}

export default AboutMe;