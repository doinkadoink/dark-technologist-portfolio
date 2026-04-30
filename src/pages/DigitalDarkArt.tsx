import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const DigitalDarkArt: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO HOME</Link>
        </nav>
        
        <header className="project-header">
          <h1 className="project-title">PORTFOLIO WEBSITES (2025)</h1>
          <p className="project-subtitle">Visual Identity • Accessible Layout • HTML/CSS • Beginner JavaScript</p>
        </header>
        
        <div className="project-content">
          <section className="project-overview">
            <h2>PROJECT OVERVIEW</h2>
            <p>
              Designed and developed two portfolio-style websites in 2025, focusing on visual identity, clear information hierarchy,
              and accessible layout thinking. This work complements my environment/film practice by improving how projects are presented,
              documented, and communicated.
            </p>
          </section>
          
          <section className="project-details">
            <h2>PROJECT DETAILS</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>DELIVERABLE</h3>
                <p>Two portfolio-style websites</p>
              </div>
              
              <div className="detail-item">
                <h3>FRONT-END</h3>
                <p>HTML, CSS, beginner JavaScript</p>
              </div>
              
              <div className="detail-item">
                <h3>DESIGN</h3>
                <p>UI/UX thinking, layout, accessibility</p>
              </div>
              
              <div className="detail-item">
                <h3>TOOLS</h3>
                <p>Figma + design system basics</p>
              </div>
            </div>
          </section>
          
          <section className="project-features">
            <h2>KEY CONTRIBUTIONS</h2>
            <ul className="features-list">
              <li>Information hierarchy for “quick scan” readability</li>
              <li>Consistent visual identity across pages</li>
              <li>Accessible layout thinking (spacing, contrast, clarity)</li>
              <li>Responsive structure for desktop and mobile</li>
              <li>Basic JavaScript for interactivity</li>
            </ul>
          </section>
          
          <section className="project-technologies">
            <h2>TOOLS & SKILLS</h2>
            <div className="tech-grid">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript (basic)</span>
              <span className="tech-tag">Figma</span>
              <span className="tech-tag">UI/UX</span>
              <span className="tech-tag">Accessibility</span>
            </div>
          </section>
          
          <section className="project-gallery">
            <h2>GALLERY</h2>
            <div className="gallery-placeholder">
              <p>[Add: screenshots of the two sites (home, project page, contact), plus a mobile view]</p>
              <p>If you share the links or images, I can build a proper gallery with captions.</p>
            </div>
          </section>
          
          <section className="project-impact">
            <h2>IMPACT</h2>
            <p>
              Stronger presentation and documentation makes environment/film work easier to understand quickly—especially for studio placement,
              where clarity and structure matter.
            </p>
          </section>
          
          <section className="project-process">
            <h2>PROCESS</h2>
            <div className="process-steps">
              <div className="step">
                <h3>PHASE 1: CONTENT + STRUCTURE</h3>
                <p>Define sections and the story each page needs to tell</p>
              </div>
              <div className="step">
                <h3>PHASE 2: WIREFRAMES</h3>
                <p>Layout planning and hierarchy checks</p>
              </div>
              <div className="step">
                <h3>PHASE 3: BUILD</h3>
                <p>Implement with HTML/CSS and add small JS interactions</p>
              </div>
              <div className="step">
                <h3>PHASE 4: REFINEMENT</h3>
                <p>Accessibility checks, spacing/typography polish, and responsive tweaks</p>
              </div>
            </div>
          </section>
          
          <section className="project-future">
            <h2>NEXT ITERATION</h2>
            <p>
              Consolidate projects into consistent case-study templates (overview, tools, breakdowns, gallery, learnings) to make the portfolio
              more studio-ready.
            </p>
          </section>
        </div>
        
        <footer className="project-footer">
          <Link to="/" className="btn">RETURN HOME</Link>
        </footer>
      </div>
    </div>
  );
};

export default DigitalDarkArt; 