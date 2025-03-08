// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';

function Header() {
  return (
    <header>
      <h1><Link to="/">My Website</Link></h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li> {/* Changed from /portfolio */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;