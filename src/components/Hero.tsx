import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">DARK</span>
              <span className="title-line">TECHNOLOGIST</span>
            </h1>
            
            <p className="hero-tagline">
              Corrupting reality through AI integration and digital rebellion
            </p>
            
            <div className="hero-stats">
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
            
            <div className="hero-buttons">
              <a href="#projects" className="btn">EXPLORE CHAOS</a>
              <a href="#contact" className="btn btn-secondary">JOIN REBELLION</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
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