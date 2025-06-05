// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} /> {/* Default route */}
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;