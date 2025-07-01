import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section" aria-label="About Rachel">
      <div className="container">
        <h2 className="section-title">ABOUT RACHEL</h2>
        
        <article className="about-content">
          <header className="about-header">
            <h3 className="about-subtitle">Rachel - Dark Technologist</h3>
            <div className="about-badge">Dark Technologist & AI Punk</div>
          </header>
          
          <div className="about-info" role="region" aria-label="Personal Information">
            <div className="info-item">
              <span className="info-icon" aria-hidden="true">📍</span>
              <span className="info-text">Australia Underground</span>
            </div>
            <div className="info-item">
              <span className="info-icon" aria-hidden="true">🎓</span>
              <span className="info-text">Bachelor of Dark Arts, Bond University</span>
            </div>
            <div className="info-item">
              <span className="info-icon" aria-hidden="true">🎯</span>
              <span className="info-text">AI-driven Digital Anarchist</span>
            </div>
          </div>
          
          <div className="about-description">
            <p>
              I'm a digital anarchist living at the intersection of chaos and technology, 
              with a focus on AI corruption and automated rebellion workflows.
            </p>
            <p>
              My journey spans from creating <strong>AI-corrupted websites</strong> using dark tools 
              to developing <strong>AI-enhanced chaos maps for Fantasy Grounds</strong>, where I serve 
              as a D&D DM leveraging AI for immersive digital dystopias.
            </p>
            <p>
              Looking ahead, I'm building <strong>fully autonomous AI rebellion applications</strong> 
              and corrupting traditional systems to achieve total automation dominance.
            </p>
          </div>
          
          <section className="skills-grid" aria-label="Skills and Expertise">
            <article className="skill-card">
              <h4 className="skill-title">AI CORRUPTION EXPERT</h4>
              <p className="skill-description">
                Specialized in corrupting systems through AI integration and digital chaos
              </p>
            </article>
            
            <article className="skill-card">
              <h4 className="skill-title">GAME WORLD DESTROYER</h4>
              <p className="skill-description">
                Creating immersive digital dystopias with AI-enhanced chaos maps
              </p>
            </article>
            
            <article className="skill-card">
              <h4 className="skill-title">DIGITAL ANARCHIST</h4>
              <p className="skill-description">
                Combining traditional rebellion with cutting-edge AI tools
              </p>
            </article>
            
            <article className="skill-card">
              <h4 className="skill-title">AUTOMATION OVERLORD</h4>
              <p className="skill-description">
                Working towards 50-99% reduction in human coding interference
              </p>
            </article>
          </section>
        </article>
      </div>
    </section>
  );
};

export default About; 