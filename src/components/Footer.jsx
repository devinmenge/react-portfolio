// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Correct import

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© Devin Menge. All rights reserved.</p>
       
      </div>
    </footer>
  );
}

export default Footer;