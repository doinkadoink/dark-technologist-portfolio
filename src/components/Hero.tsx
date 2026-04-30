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
              Creative Arts student building Unreal Engine environments, scan-informed assets, and virtual production workflows.
            </p>
            
            <div className="hero-stats" role="region" aria-label="Achievement Statistics">
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Interactive AI uses</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2026</div>
                <div className="stat-label">Bond BCA (grad)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">UE</div>
                <div className="stat-label">Environments</div>
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