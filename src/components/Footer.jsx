// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Correct import

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 My Website. All rights reserved.</p>
        <ul className="social-links">
         
        <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/devinmenge/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
          </li>

          <li>
            <a href="mailto:devinmenge@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;