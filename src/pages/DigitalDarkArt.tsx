import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const DigitalDarkArt: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO CHAOS</Link>
        </nav>
        
        <header className="project-header">
          <h1 className="project-title">DIGITAL DARK ART</h1>
          <p className="project-subtitle">Artistic Rebellion Through AI Corruption</p>
        </header>
        
        <div className="project-content">
          <section className="project-overview">
            <h2>PROJECT OVERVIEW</h2>
            <p>
              Combining traditional artistic rebellion with AI corruption tools to create unique 
              digital artworks and dystopian short film content. This project explores the intersection 
              of human creativity and machine-generated chaos.
            </p>
          </section>
          
          <section className="project-details">
            <h2>DARK ART DETAILS</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>ARTISTIC MEDIUM</h3>
                <p>Digital dark art & video</p>
              </div>
              
              <div className="detail-item">
                <h3>CORRUPTION TOOLS</h3>
                <p>AI-powered artistic rebellion</p>
              </div>
              
              <div className="detail-item">
                <h3>CREATIVE DIRECTION</h3>
                <p>Chaos-driven aesthetics</p>
              </div>
              
              <div className="detail-item">
                <h3>REBELLION LEVEL</h3>
                <p>Maximum artistic anarchy</p>
              </div>
            </div>
          </section>
          
          <section className="project-features">
            <h2>ARTISTIC REBELLION FEATURES</h2>
            <ul className="features-list">
              <li>AI-generated dark art and imagery</li>
              <li>Corrupted video content creation</li>
              <li>Digital dystopian aesthetics</li>
              <li>Chaos-driven artistic direction</li>
              <li>Automated creative corruption</li>
              <li>Dark technologist visual themes</li>
            </ul>
          </section>
          
          <section className="project-technologies">
            <h2>TECHNOLOGIES OF DARKNESS</h2>
            <div className="tech-grid">
              <span className="tech-tag">Digital Dark Art</span>
              <span className="tech-tag">Video Corruption</span>
              <span className="tech-tag">AI Tools</span>
              <span className="tech-tag">Chaos Direction</span>
              <span className="tech-tag">Artistic Rebellion</span>
              <span className="tech-tag">Dystopian Aesthetics</span>
            </div>
          </section>
          
          <section className="project-gallery">
            <h2>DARK ART GALLERY</h2>
            <div className="gallery-placeholder">
              <p>[Collection of AI-generated dark art pieces and corrupted video content]</p>
              <p>Each piece represents a different aspect of digital rebellion and artistic corruption</p>
            </div>
          </section>
          
          <section className="project-impact">
            <h2>ARTISTIC IMPACT</h2>
            <p>
              This project challenges traditional artistic paradigms by incorporating AI corruption 
              and digital anarchy into the creative process. It demonstrates the potential for 
              machine-generated chaos to enhance human artistic expression.
            </p>
          </section>
          
          <section className="project-process">
            <h2>CREATIVE CORRUPTION PROCESS</h2>
            <div className="process-steps">
              <div className="step">
                <h3>PHASE 1: CONCEPTUAL CORRUPTION</h3>
                <p>Developing dark artistic concepts through AI</p>
              </div>
              <div className="step">
                <h3>PHASE 2: DIGITAL GENERATION</h3>
                <p>AI tools create corrupted visual content</p>
              </div>
              <div className="step">
                <h3>PHASE 3: ARTISTIC REFINEMENT</h3>
                <p>Human creativity enhances machine chaos</p>
              </div>
              <div className="step">
                <h3>PHASE 4: DYSTOPIAN PRESENTATION</h3>
                <p>Final corrupted artworks are displayed</p>
              </div>
            </div>
          </section>
          
          <section className="project-collections">
            <h2>DARK ART COLLECTIONS</h2>
            <div className="collections-grid">
              <div className="collection-item">
                <h3>DIGITAL DYSTOPIA</h3>
                <p>AI-generated apocalyptic landscapes</p>
              </div>
              <div className="collection-item">
                <h3>CORRUPTED PORTRAITS</h3>
                <p>Machine-manipulated human forms</p>
              </div>
              <div className="collection-item">
                <h3>CHAOS ABSTRACTIONS</h3>
                <p>Algorithmic disorder and anarchy</p>
              </div>
              <div className="collection-item">
                <h3>DARK TECHNOLOGIST</h3>
                <p>Corrupted digital self-portraits</p>
              </div>
            </div>
          </section>
          
          <section className="project-future">
            <h2>FUTURE DARKNESS</h2>
            <p>
              Future developments include more sophisticated AI art generation, 
              expanded video corruption techniques, and deeper integration of 
              digital anarchy into artistic expression.
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

export default DigitalDarkArt; 