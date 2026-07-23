import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section" aria-label="About Rachel">
      <div className="container">
        <h2 className="section-title">ABOUT</h2>
        
        <article className="about-content">
          <header className="about-header">
            <h3 className="about-subtitle">Creative Arts (Bond University)</h3>
            <div className="about-badge">Unreal • Photogrammetry • Virtual Production</div>
          </header>
          
          <div className="about-info" role="region" aria-label="Personal Information">
            <div className="info-item">
              <span className="info-icon" aria-hidden="true">📍</span>
              <span className="info-text">Gold Coast, QLD</span>
            </div>
            <div className="info-item">
              <span className="info-icon" aria-hidden="true">🎓</span>
              <span className="info-text">Bachelor of Creative Arts — Graduated Jun 2026</span>
            </div>
            <div className="info-item">
              <span className="info-icon" aria-hidden="true">🎯</span>
              <span className="info-text">Digital locations • scan-informed assets • previs</span>
            </div>
          </div>
          
          <div className="about-description">
            <p>
              Creative arts graduate with hands-on experience in Unreal Engine environments, photogrammetry-based workflows,
              virtual production, 3D modelling, film production, web design, and interactive media.
            </p>
            <p>
              I’m especially interested in <strong>digital locations</strong>, <strong>scan-informed assets</strong>, and <strong>practical-to-digital workflows</strong>:
              taking real-world references through capture/cleanup into cinematic, production-ready scenes.
            </p>
            <p>
              Seeking an industry placement with Myriad Studios, with a focus on environment work, previs, and VFX/game production pipelines.
            </p>
          </div>
          
          <section className="skills-grid" aria-label="Skills and Expertise">
            <article className="skill-card">
              <h4 className="skill-title">UNREAL ENVIRONMENTS</h4>
              <p className="skill-description">
                Virtual environments, Sequencer, lighting, animated plates, and digital actor integration.
              </p>
            </article>
            
            <article className="skill-card">
              <h4 className="skill-title">PHOTOGRAMMETRY WORKFLOWS</h4>
              <p className="skill-description">
                Scaniverse-style capture, troubleshooting geometry/texture issues, and reconstruction awareness.
              </p>
            </article>
            
            <article className="skill-card">
              <h4 className="skill-title">3D & GAME TOOLS</h4>
              <p className="skill-description">
                Maya, Unity (intro), introductory C#, asset preparation, cinematic scene construction.
              </p>
            </article>
            
            <article className="skill-card">
              <h4 className="skill-title">CREATIVE SOFTWARE</h4>
              <p className="skill-description">
                Photoshop, Illustrator, InDesign — posters, magazines, and publication layout.
              </p>
            </article>
            
            <article className="skill-card">
              <h4 className="skill-title">PRODUCTION &amp; WORKFLOW</h4>
              <p className="skill-description">
                Storytelling, previs thinking, collaboration, documentation, and practical-to-digital translation.
              </p>
            </article>
          </section>
        </article>
      </div>
    </section>
  );
};

export default About; 