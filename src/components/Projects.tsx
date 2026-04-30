import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects section" aria-label="Projects">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="projects-grid" role="region" aria-label="Project Portfolio">
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-category">VIRTUAL PRODUCTION</h3>
              <h4 className="project-title">Underwater Facility Environment (Bond)</h4>
            </header>
            
            <div className="project-content">
              <p className="project-description">
                Built an abandoned underwater facility environment for a multimedia short film, integrating a physical actor with a digital set
                for a large LED virtual production workflow.
              </p>
              
              <div className="project-tech" role="region" aria-label="Technologies Used">
                <span className="tech-tag">Unreal Engine</span>
                <span className="tech-tag">Sequencer</span>
                <span className="tech-tag">Lighting</span>
                <span className="tech-tag">LED VP workflow</span>
              </div>
              
              <Link to="/web-corruption" className="btn">VIEW DETAILS</Link>
            </div>
          </article>
          
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-category">DIGITAL LOCATIONS</h3>
              <h4 className="project-title">Photogrammetry → Unreal Environments</h4>
            </header>
            
            <div className="project-content">
              <p className="project-description">
                Used Scaniverse-style capture workflows and Unreal Engine to turn real-world spatial references into usable digital environments,
                troubleshooting missing geometry, texture issues, lighting, and continuity.
              </p>
              
              <div className="project-tech" role="region" aria-label="Technologies Used">
                <span className="tech-tag">Photogrammetry</span>
                <span className="tech-tag">Scan capture</span>
                <span className="tech-tag">Unreal Engine</span>
                <span className="tech-tag">Scene continuity</span>
              </div>
              
              <Link to="/chaos-maps" className="btn">VIEW DETAILS</Link>
            </div>
          </article>
          
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-category">INTERACTIVE MEDIA</h3>
              <h4 className="project-title">Character AI Creator</h4>
            </header>
            
            <div className="project-content">
              <p className="project-description">
                Created interactive character systems with 1M+ user interactions, demonstrating audience awareness, iteration,
                dialogue logic, and long-term creative maintenance.
              </p>
              
              <div className="project-tech" role="region" aria-label="Technologies Used">
                <span className="tech-tag">Interactive systems</span>
                <span className="tech-tag">Dialogue logic</span>
                <span className="tech-tag">Iteration</span>
                <span className="tech-tag">Audience insight</span>
              </div>
              
              <Link to="/ai-interactive" className="btn">VIEW DETAILS</Link>
            </div>
          </article>
          
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-category">DESIGN & WEB</h3>
              <h4 className="project-title">Portfolio Websites (2025)</h4>
            </header>
            
            <div className="project-content">
              <p className="project-description">
                Designed and developed two portfolio-style websites using visual identity, accessible layout thinking, HTML, CSS,
                and beginner JavaScript.
              </p>
              
              <div className="project-tech" role="region" aria-label="Technologies Used">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript (basic)</span>
                <span className="tech-tag">Figma</span>
              </div>
              
              <Link to="/digital-dark-art" className="btn">VIEW DETAILS</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects; 