import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects section" aria-label="Digital Chaos Projects">
      <div className="container">
        <h2 className="section-title">DIGITAL CHAOS</h2>
        
        <div className="projects-grid" role="region" aria-label="Project Portfolio">
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-category">WEB CORRUPTION</h3>
              <h4 className="project-title">AI-Corrupted Web Development</h4>
            </header>
            
            <div className="project-content">
              <p className="project-description">
                Created 3 fully corrupted websites using dark AI tools with 95% machine-generated code, 
                demonstrating the future of automated digital rebellion.
              </p>
              
              <div className="project-tech" role="region" aria-label="Technologies Used">
                <span className="tech-tag">Cursor.ai</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">AI Corruption</span>
              </div>
              
              <Link to="/web-corruption" className="btn">EXPLORE CHAOS</Link>
            </div>
          </article>
          
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-category">GAME CORRUPTION</h3>
              <h4 className="project-title">AI-Enhanced Chaos Maps</h4>
            </header>
            
            <div className="project-content">
              <p className="project-description">
                Developed intelligent corruption solutions for Fantasy Grounds, incorporating AI for 
                dynamic chaos generation and immersive digital dystopian experiences.
              </p>
              
              <div className="project-tech" role="region" aria-label="Technologies Used">
                <span className="tech-tag">Fantasy Grounds</span>
                <span className="tech-tag">AI Integration</span>
                <span className="tech-tag">Chaos Development</span>
                <span className="tech-tag">D&D Corruption</span>
              </div>
              
              <Link to="/chaos-maps" className="btn">ENTER DYSTOPIA</Link>
            </div>
          </article>
          
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-category">AI REBELLION</h3>
              <h4 className="project-title">AI Interactive Chaos</h4>
            </header>
            
            <div className="project-content">
              <p className="project-description">
                Generated over 1 million character corruptions, pushing the boundaries of AI conversation 
                and creative digital anarchy.
              </p>
              
              <div className="project-tech" role="region" aria-label="Technologies Used">
                <span className="tech-tag">Character.ai</span>
                <span className="tech-tag">AI Conversation</span>
                <span className="tech-tag">Digital Anarchy</span>
                <span className="tech-tag">Chaos Design</span>
              </div>
              
              <Link to="/ai-interactive" className="btn">JOIN CHAOS</Link>
            </div>
          </article>
          
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-category">DARK ARTS</h3>
              <h4 className="project-title">Digital Dark Art</h4>
            </header>
            
            <div className="project-content">
              <p className="project-description">
                Combining traditional artistic rebellion with AI corruption tools to create unique 
                digital artworks and dystopian short film content.
              </p>
              
              <div className="project-tech" role="region" aria-label="Technologies Used">
                <span className="tech-tag">Digital Dark Art</span>
                <span className="tech-tag">Video Corruption</span>
                <span className="tech-tag">AI Tools</span>
                <span className="tech-tag">Chaos Direction</span>
              </div>
              
              <Link to="/digital-dark-art" className="btn">VIEW DARKNESS</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects; 