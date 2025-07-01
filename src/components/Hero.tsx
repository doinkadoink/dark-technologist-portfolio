import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero" aria-label="Hero Section">
      <div className="container">
        <article className="hero-content">
          <header className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">DARK</span>
              <span className="title-line">TECHNOLOGIST</span>
            </h1>
            
            <p className="hero-tagline">
              Corrupting reality through AI integration and digital rebellion
            </p>
            
            <div className="hero-stats" role="region" aria-label="Achievement Statistics">
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">AI Corruptions</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Dark Sites</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Machine Code</div>
              </div>
            </div>
            
            <nav className="hero-buttons" aria-label="Primary Navigation">
              <a href="#projects" className="btn">EXPLORE CHAOS</a>
              <a href="#contact" className="btn btn-secondary">JOIN REBELLION</a>
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