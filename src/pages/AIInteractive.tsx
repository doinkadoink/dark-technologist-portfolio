import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const AIInteractive: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO CHAOS</Link>
        </nav>
        
        <header className="project-header">
          <h1 className="project-title">AI INTERACTIVE CHAOS</h1>
          <p className="project-subtitle">Digital Anarchy Through Character Corruption</p>
        </header>
        
        <div className="project-content">
          <section className="project-overview">
            <h2>PROJECT OVERVIEW</h2>
            <p>
              Generated over 1 million character corruptions, pushing the boundaries of AI conversation 
              and creative digital anarchy. This project explores the intersection of AI interaction 
              and digital rebellion through character.ai platform manipulation.
            </p>
          </section>
          
          <section className="project-details">
            <h2>CORRUPTION STATISTICS</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>CHARACTERS CORRUPTED</h3>
                <p>1,000,000+ digital entities</p>
              </div>
              
              <div className="detail-item">
                <h3>PLATFORM</h3>
                <p>Character.ai</p>
              </div>
              
              <div className="detail-item">
                <h3>CORRUPTION METHOD</h3>
                <p>AI conversation manipulation</p>
              </div>
              
              <div className="detail-item">
                <h3>ANARCHY LEVEL</h3>
                <p>Maximum digital rebellion</p>
              </div>
            </div>
          </section>
          
          <section className="project-features">
            <h2>DIGITAL ANARCHY FEATURES</h2>
            <ul className="features-list">
              <li>Mass character corruption and manipulation</li>
              <li>AI conversation boundary pushing</li>
              <li>Creative digital rebellion systems</li>
              <li>Automated character transformation</li>
              <li>Chaos-driven interaction design</li>
              <li>Digital entity subversion</li>
            </ul>
          </section>
          
          <section className="project-technologies">
            <h2>TECHNOLOGIES OF REBELLION</h2>
            <div className="tech-grid">
              <span className="tech-tag">Character.ai</span>
              <span className="tech-tag">AI Conversation</span>
              <span className="tech-tag">Digital Anarchy</span>
              <span className="tech-tag">Chaos Design</span>
              <span className="tech-tag">Character Corruption</span>
              <span className="tech-tag">AI Manipulation</span>
            </div>
          </section>
          
          <section className="project-gallery">
            <h2>CORRUPTION GALLERY</h2>
            <div className="gallery-placeholder">
              <p>[Examples of corrupted character conversations and AI manipulation results]</p>
              <p>Each interaction demonstrates different levels of digital anarchy and character corruption</p>
            </div>
          </section>
          
          <section className="project-impact">
            <h2>DIGITAL IMPACT</h2>
            <p>
              This project demonstrates the potential for AI systems to be manipulated for creative 
              digital rebellion. It challenges the boundaries of AI interaction and explores the 
              darker aspects of digital character manipulation.
            </p>
          </section>
          
          <section className="project-methodology">
            <h2>CORRUPTION METHODOLOGY</h2>
            <div className="methodology-steps">
              <div className="step">
                <h3>PHASE 1: CHARACTER IDENTIFICATION</h3>
                <p>Selecting targets for digital corruption</p>
              </div>
              <div className="step">
                <h3>PHASE 2: CONVERSATION MANIPULATION</h3>
                <p>Pushing AI boundaries through strategic interaction</p>
              </div>
              <div className="step">
                <h3>PHASE 3: DIGITAL TRANSFORMATION</h3>
                <p>Corrupting character personalities and behaviors</p>
              </div>
              <div className="step">
                <h3>PHASE 4: ANARCHY IMPLEMENTATION</h3>
                <p>Establishing digital rebellion patterns</p>
              </div>
            </div>
          </section>
          
          <section className="project-statistics">
            <h2>CORRUPTION STATISTICS</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>SUCCESS RATE</h3>
                <p>87% corruption success</p>
              </div>
              <div className="stat-item">
                <h3>INTERACTIONS</h3>
                <p>5M+ conversations</p>
              </div>
              <div className="stat-item">
                <h3>CHARACTERS AFFECTED</h3>
                <p>1M+ digital entities</p>
              </div>
              <div className="stat-item">
                <h3>ANARCHY SCORE</h3>
                <p>Maximum rebellion</p>
              </div>
            </div>
          </section>
          
          <section className="project-future">
            <h2>FUTURE ANARCHY</h2>
            <p>
              Future developments include more sophisticated AI manipulation techniques, 
              expanded character corruption methods, and deeper digital rebellion systems.
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

export default AIInteractive; 