import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const WebCorruption: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO CHAOS</Link>
        </nav>
        
        <header className="project-header">
          <h1 className="project-title">AI-CORRUPTED WEB DEVELOPMENT</h1>
          <p className="project-subtitle">Digital Rebellion Through Machine-Generated Chaos</p>
        </header>
        
        <div className="project-content">
          <section className="project-overview">
            <h2>PROJECT OVERVIEW</h2>
            <p>
              Created 3 fully corrupted websites using dark AI tools with 95% machine-generated code, 
              demonstrating the future of automated digital rebellion. Each site represents a different 
              aspect of digital anarchy and AI corruption.
            </p>
          </section>
          
          <section className="project-details">
            <h2>DIGITAL CORRUPTION DETAILS</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>AI CORRUPTION LEVEL</h3>
                <p>95% machine-generated code</p>
              </div>
              
              <div className="detail-item">
                <h3>WEBSITES CREATED</h3>
                <p>3 fully functional corrupted sites</p>
              </div>
              
              <div className="detail-item">
                <h3>CORRUPTION TOOLS</h3>
                <p>Cursor.ai, React, TypeScript</p>
              </div>
              
              <div className="detail-item">
                <h3>REBELLION STATUS</h3>
                <p>Active digital anarchy</p>
              </div>
            </div>
          </section>
          
          <section className="project-features">
            <h2>CORRUPTION FEATURES</h2>
            <ul className="features-list">
              <li>AI-powered code generation and corruption</li>
              <li>Automated digital rebellion systems</li>
              <li>Dark technologist aesthetic integration</li>
              <li>Chaos-driven user experience design</li>
              <li>Machine learning enhanced corruption</li>
              <li>Automated content generation</li>
            </ul>
          </section>
          
          <section className="project-technologies">
            <h2>TECHNOLOGIES OF CHAOS</h2>
            <div className="tech-grid">
              <span className="tech-tag">Cursor.ai</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">AI Corruption</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Digital Anarchy</span>
            </div>
          </section>
          
          <section className="project-gallery">
            <h2>CORRUPTION GALLERY</h2>
            <div className="gallery-placeholder">
              <p>[Screenshots and demos of corrupted websites will be displayed here]</p>
              <p>Each corrupted site showcases different aspects of AI-driven digital rebellion</p>
            </div>
          </section>
          
          <section className="project-impact">
            <h2>DIGITAL IMPACT</h2>
            <p>
              These corrupted websites demonstrate the potential for AI to generate functional, 
              rebellious digital experiences. They challenge traditional web development paradigms 
              and showcase the future of automated digital creation.
            </p>
          </section>
          
          <section className="project-future">
            <h2>FUTURE CORRUPTIONS</h2>
            <p>
              Plans for expanding the corruption include more sophisticated AI integration, 
              advanced chaos algorithms, and deeper digital rebellion systems.
            </p>
          </section>
        </div>
        
        <footer className="project-footer">
          <Link to="/" className="btn">RETURN TO CHAOS</Link>
        </footer>
      </div>
    </div>
  );
};

export default WebCorruption; 