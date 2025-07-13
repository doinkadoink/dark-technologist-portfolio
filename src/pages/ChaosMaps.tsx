import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const ChaosMaps: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO CHAOS</Link>
        </nav>
        
        <header className="project-header">
          <h1 className="project-title">AI-ENHANCED CHAOS MAPS</h1>
          <p className="project-subtitle">Digital Dystopia in Fantasy Grounds</p>
        </header>
        
        <div className="project-content">
          <section className="project-overview">
            <h2>PROJECT OVERVIEW</h2>
            <p>
              Developed intelligent corruption solutions for Fantasy Grounds, incorporating AI for 
              dynamic chaos generation and immersive digital dystopian experiences. This project 
              transforms traditional tabletop gaming into a corrupted digital realm.
            </p>
          </section>
          
          <section className="project-details">
            <h2>CHAOS MAP DETAILS</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>PLATFORM</h3>
                <p>Fantasy Grounds</p>
              </div>
              
              <div className="detail-item">
                <h3>CHAOS LEVEL</h3>
                <p>Maximum digital corruption</p>
              </div>
              
              <div className="detail-item">
                <h3>AI INTEGRATION</h3>
                <p>Dynamic chaos generation</p>
              </div>
              
              <div className="detail-item">
                <h3>GAME MODIFICATION</h3>
                <p>D&D corruption systems</p>
              </div>
            </div>
          </section>
          
          <section className="project-features">
            <h2>DYSTOPIAN FEATURES</h2>
            <ul className="features-list">
              <li>AI-generated chaos maps and environments</li>
              <li>Dynamic corruption algorithms for game worlds</li>
              <li>Automated digital anarchy systems</li>
              <li>Corrupted D&D rule implementations</li>
              <li>Real-time chaos generation</li>
              <li>Immersive dystopian storytelling</li>
            </ul>
          </section>
          
          <section className="project-technologies">
            <h2>TECHNOLOGIES OF DESTRUCTION</h2>
            <div className="tech-grid">
              <span className="tech-tag">Fantasy Grounds</span>
              <span className="tech-tag">AI Integration</span>
              <span className="tech-tag">Chaos Development</span>
              <span className="tech-tag">D&D Corruption</span>
              <span className="tech-tag">Digital Anarchy</span>
              <span className="tech-tag">Game Modification</span>
            </div>
          </section>
          
          <section className="project-gallery">
            <h2>CHAOS GALLERY</h2>
            <div className="gallery-placeholder">
              <p>[Screenshots of corrupted Fantasy Grounds maps and AI-generated chaos environments]</p>
              <p>Each map represents a different level of digital corruption and dystopian transformation</p>
            </div>
          </section>
          
          <section className="project-impact">
            <h2>GAMING IMPACT</h2>
            <p>
              These chaos maps revolutionize traditional tabletop gaming by introducing AI-driven 
              corruption and digital anarchy. They challenge conventional gaming paradigms and 
              create truly unique dystopian experiences.
            </p>
          </section>
          
          <section className="project-process">
            <h2>CORRUPTION PROCESS</h2>
            <div className="process-steps">
              <div className="step">
                <h3>STEP 1: DIGITAL INVASION</h3>
                <p>AI systems infiltrate traditional game worlds</p>
              </div>
              <div className="step">
                <h3>STEP 2: CHAOS GENERATION</h3>
                <p>Dynamic algorithms create corrupted environments</p>
              </div>
              <div className="step">
                <h3>STEP 3: RULE CORRUPTION</h3>
                <p>Traditional D&D rules are subverted and corrupted</p>
              </div>
              <div className="step">
                <h3>STEP 4: DYSTOPIAN IMMERSION</h3>
                <p>Players experience true digital anarchy</p>
              </div>
            </div>
          </section>
          
          <section className="project-future">
            <h2>FUTURE CHAOS</h2>
            <p>
              Expansion plans include more sophisticated AI corruption algorithms, 
              additional game system integrations, and deeper digital rebellion features.
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

export default ChaosMaps; 