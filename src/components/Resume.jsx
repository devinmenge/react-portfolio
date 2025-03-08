// src/components/Resume.js
import React from 'react';
import './Resume.css'; // We'll create this stylesheet for component-specific styling
import ResumeViewer from '../assets/resume.pdf'

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <p>View my resume below or download it for a closer look.</p>
      
      {/* Download link */}
      <a href={ResumeViewer} download className="download-link">
        Download Resume
      </a>

      {/* Embedded PDF viewer */}
      <div className="pdf-viewer">
        <embed
          src={ResumeViewer}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
}

export default Resume;