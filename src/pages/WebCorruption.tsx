import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const WebCorruption: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO HOME</Link>
        </nav>
        
        <header className="project-header">
          <h1 className="project-title">VIRTUAL PRODUCTION ENVIRONMENT (BOND)</h1>
          <p className="project-subtitle">Underwater Facility — LED Volume / Physical-to-Digital Workflow</p>
        </header>
        
        <div className="project-content">
          <section className="project-overview">
            <h2>PROJECT OVERVIEW</h2>
            <p>
              Built an abandoned underwater facility environment for a multimedia short film, designed to integrate a physical actor with a
              digital environment for a large LED virtual production workflow. Developed lighting, animated environmental plates, creature silhouettes,
              and shot material for cinematic use.
            </p>
          </section>
          
          <section className="project-details">
            <h2>PROJECT DETAILS</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>PRIMARY TOOL</h3>
                <p>Unreal Engine (environment build)</p>
              </div>
              
              <div className="detail-item">
                <h3>OUTPUT</h3>
                <p>Environment + plates + shot-ready sequences</p>
              </div>
              
              <div className="detail-item">
                <h3>FOCUS</h3>
                <p>Lighting, atmosphere, continuity</p>
              </div>
              
              <div className="detail-item">
                <h3>CONTEXT</h3>
                <p>Bond University — virtual production environment</p>
              </div>
            </div>
          </section>
          
          <section className="project-features">
            <h2>KEY CONTRIBUTIONS</h2>
            <ul className="features-list">
              <li>Environment layout and set dressing for an underwater facility</li>
              <li>Lighting development to support cinematic readability</li>
              <li>Animated environmental plates for background motion</li>
              <li>Creature silhouettes and atmospheric storytelling elements</li>
              <li>Shot material prepared for a large LED volume workflow</li>
            </ul>
          </section>
          
          <section className="project-technologies">
            <h2>TOOLS & SKILLS</h2>
            <div className="tech-grid">
              <span className="tech-tag">Unreal Engine</span>
              <span className="tech-tag">Sequencer</span>
              <span className="tech-tag">Scene lighting</span>
              <span className="tech-tag">Animated plates</span>
              <span className="tech-tag">Digital actor integration</span>
              <span className="tech-tag">Virtual production thinking</span>
            </div>
          </section>
          
          <section className="project-gallery">
            <h2>GALLERY</h2>
            <div className="gallery-placeholder">
              <p>[Add screenshots / turntables / short clips from the environment + LED workflow plates]</p>
              <p>If you have stills, I can help lay this out as a real gallery grid.</p>
            </div>
          </section>
          
          <section className="project-impact">
            <h2>IMPACT</h2>
            <p>
              Strengthened practical-to-digital workflow skills: building environments with clear lighting intent, continuity awareness,
              and cinematic usability for shot work.
            </p>
          </section>
          
          <section className="project-future">
            <h2>NEXT ITERATION</h2>
            <p>
              Expand the scene with additional scan-informed detail, refine materials for close-ups, and produce a tighter set of
              curated shot breakdowns (layout → lighting → final).
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

export default WebCorruption; 