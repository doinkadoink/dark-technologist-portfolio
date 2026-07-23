import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero" aria-label="Hero Section">
      <div className="container">
        <article className="hero-content">
          <header className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">RACHEL</span>
              <span className="title-line">FRAPPELL</span>
            </h1>
            
            <p className="hero-tagline">
              Creative Arts graduate · Unreal Engine environments · Photogrammetry · Virtual production · Digital design
            </p>
            
            <div className="hero-stats" role="region" aria-label="Achievement Statistics">
              <div className="stat-item">
                <div className="stat-number">1.6M+</div>
                <div className="stat-label">Character AI</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Websites (2025)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">B.C.A.</div>
                <div className="stat-label">Bond graduate</div>
              </div>
            </div>
            
            <nav className="hero-buttons" aria-label="Primary Navigation">
              <a href="#projects" className="btn">VIEW WORK</a>
              <a href="#contact" className="btn btn-secondary">CONTACT</a>
            </nav>
          </header>
        </article>
      </div>
      
      <div className="hero-background" aria-hidden="true">
        <div className="grid-overlay"></div>
        <div className="glow-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 