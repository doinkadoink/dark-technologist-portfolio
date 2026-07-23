import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const AIInteractive: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO HOME</Link>
        </nav>
        
        <header className="project-header">
          <h1 className="project-title">CHARACTER.AI — @DOINKADOINK</h1>
          <p className="project-subtitle">Personal creator · ~3 years of bot curation · 1.7M+ interactions (live on Character.AI)</p>
        </header>
        
        <div className="project-content">
          <section className="project-overview">
            <h2>PROJECT OVERVIEW</h2>
            <p>
              I author and maintain a library of Character.AI bots as a <strong>personal content creator</strong>: shaping dialogue, revising definitions as the product changes,
              and growing an on-platform fanbase. Totals (including <strong>1.7M+</strong> account-level interactions) and the full character roster update on Character.AI itself.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <a href="https://character.ai/profile/Doinkadoink" target="_blank" rel="noopener noreferrer" className="btn">
                Open live profile — character.ai/profile/Doinkadoink
              </a>
            </p>
          </section>
          
          <section className="project-details">
            <h2>HIGHLIGHTS</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>INTERACTIONS</h3>
                <p>1.7M+ on the live profile (updates as users chat)</p>
              </div>
              
              <div className="detail-item">
                <h3>FOCUS</h3>
                <p>Dialogue structure & iteration</p>
              </div>
              
              <div className="detail-item">
                <h3>STRENGTH</h3>
                <p>Audience awareness & maintenance</p>
              </div>
              
              <div className="detail-item">
                <h3>OUTPUT</h3>
                <p>Interactive character experiences</p>
              </div>
            </div>
          </section>
          
          <section className="project-features">
            <h2>KEY CONTRIBUTIONS</h2>
            <ul className="features-list">
              <li>Designed character interaction loops and narrative tone</li>
              <li>Structured dialogue logic for consistency</li>
              <li>Iterated based on user engagement patterns</li>
              <li>Maintained long-running creative system over time</li>
              <li>Balanced clarity, personality, and user experience</li>
            </ul>
          </section>
          
          <section className="project-technologies">
            <h2>TOOLS & SKILLS</h2>
            <div className="tech-grid">
              <span className="tech-tag">Interactive design</span>
              <span className="tech-tag">Dialogue logic</span>
              <span className="tech-tag">Iteration</span>
              <span className="tech-tag">User feedback response</span>
              <span className="tech-tag">Documentation</span>
              <span className="tech-tag">Creative maintenance</span>
            </div>
          </section>
          
          <section className="project-gallery">
            <h2>LIVE SHOWCASE</h2>
            <div className="gallery-placeholder">
              <p>
                Character cards, voices, scenes, and per-bot stats are hosted on Character.AI — this React page only summarizes the practice.
              </p>
            </div>
          </section>
          
          <section className="project-impact">
            <h2>IMPACT</h2>
            <p>
              Shows practical creative-system thinking: building something people return to, improving it over time, and communicating clearly
              through constraints and consistent interaction design.
            </p>
          </section>
          
          <section className="project-methodology">
            <h2>PROCESS</h2>
            <div className="methodology-steps">
              <div className="step">
                <h3>PHASE 1: CONCEPT</h3>
                <p>Define character intent, tone, and interaction goals</p>
              </div>
              <div className="step">
                <h3>PHASE 2: STRUCTURE</h3>
                <p>Build dialogue logic for consistency and clarity</p>
              </div>
              <div className="step">
                <h3>PHASE 3: ITERATION</h3>
                <p>Refine based on user engagement and feedback</p>
              </div>
              <div className="step">
                <h3>PHASE 4: MAINTENANCE</h3>
                <p>Ongoing updates and long-term creative upkeep</p>
              </div>
            </div>
          </section>
          
          <section className="project-statistics">
            <h2>METRICS</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>INTERACTIONS</h3>
                <p>1.7M+ (see live profile)</p>
              </div>
              <div className="stat-item">
                <h3>ITERATION</h3>
                <p>Continuous refinements over time</p>
              </div>
              <div className="stat-item">
                <h3>CORE SKILL</h3>
                <p>Audience awareness</p>
              </div>
              <div className="stat-item">
                <h3>DELIVERABLE</h3>
                <p>Interactive character experiences</p>
              </div>
            </div>
          </section>
          
          <section className="project-future">
            <h2>NEXT ITERATION</h2>
            <p>
              Create a formal case-study write-up with a small set of curated examples and a breakdown of iteration decisions (what changed and why).
            </p>
          </section>
        </div>
        
        <footer className="project-footer">
          <a href="https://character.ai/profile/Doinkadoink" target="_blank" rel="noopener noreferrer" className="btn">
            CHARACTER.AI PROFILE
          </a>
          <Link to="/" className="btn" style={{ marginLeft: '12px' }}>RETURN HOME</Link>
        </footer>
      </div>
    </div>
  );
};

export default AIInteractive; 