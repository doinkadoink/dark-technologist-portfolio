import React, { useEffect } from 'react';
import ProductGrid from './shopify/ProductGrid';
import CartIcon from './shopify/CartIcon';
import './NightKind.css';

const NightKind: React.FC = () => {
  useEffect(() => {
    const progressBar = document.getElementById('progressBar');
    
    const updateProgressBar = () => {
      if (progressBar) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  return (
    <div className="nightkind-page">
      <header className="nightkind-header" role="banner">
        <div className="progress-bar" id="progressBar" aria-hidden="true"></div>
        <div className="container">
          <div className="header-content">
            <div className="header-logo">
              <a href="/" aria-label="Rachel - Dark Technologist Home" className="header-logo-link">
                <span className="header-logo-text" aria-label="Rachel's logo">R</span>
                <span className="header-logo-full" aria-label="RACHEL">ACHEL</span>
              </a>
            </div>
            
            <nav className="nav" role="navigation" aria-label="Main navigation">
              <ul className="header-nav-list">
                <li><a href="/#home" className="header-nav-link" aria-label="Go to home section">HOME</a></li>
                <li><a href="/#about" className="header-nav-link" aria-label="Go to about section">ABOUT</a></li>
                <li><a href="/#projects" className="header-nav-link" aria-label="Go to projects section">PROJECTS</a></li>
                <li><a href="/#contact" className="header-nav-link" aria-label="Go to contact section">CONTACT</a></li>
              </ul>
            </nav>
            
            <CartIcon />
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <span className="logo-emoji">🦇</span>
          </div>
          <h1 className="hero-title">NIGHTKIND</h1>
          <p className="hero-mission">
            Alt-gothic conservation aesthetic merging nocturnal imagery with wildlife activism. 
            Supporting bat conservation through ethical commerce and subcultural community.
          </p>
          <div className="hero-buttons">
            <a href="https://bats.org.au" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              SUPPORT BATS QLD
            </a>
            <a href="#shop" className="btn btn-secondary">
              SHOP COLLECTION
            </a>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🦇</div>
              <h3 className="mission-title">Conservation</h3>
              <p className="mission-description">
                Direct funding for Bats QLD conservation efforts, supporting bat rescue, 
                rehabilitation, and habitat protection programs across Queensland.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">⚡</div>
              <h3 className="mission-title">Alt-Culture</h3>
              <p className="mission-description">
                Merging subcultural aesthetics with environmental activism, creating 
                a community that celebrates nocturnal beauty and alternative fashion.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">🌙</div>
              <h3 className="mission-title">Community</h3>
              <p className="mission-description">
                Building a global network of bat enthusiasts, conservation supporters, 
                and alt-gothic culture advocates through ethical commerce and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-section" id="shop">
        <div className="container">
          <h2 className="section-title">NIGHTKIND COLLECTION</h2>
          <p className="section-subtitle">
            Every purchase directly supports bat conservation efforts. 
            Wear the night. Protect the darkness. 🦇
          </p>
          <ProductGrid />
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Mission</h3>
              <p>
                NightKind exists to bridge the gap between alternative culture and wildlife conservation, 
                proving that style and substance can coexist in the fight for environmental protection.
              </p>
            </div>
            
            <div className="footer-section">
              <div className="bat-facts">
                <h3>Bat Facts</h3>
                <p>
                  Bats are essential pollinators and pest controllers, contributing billions 
                  to global agriculture annually. They're also the only mammals capable of true flight.
                </p>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Impact</h3>
              <p>
                Every purchase directly supports Bats QLD's vital work in bat rescue, 
                rehabilitation, and habitat protection across Queensland.
              </p>
            </div>
          </div>
          
          <a href="/#projects" className="return-btn">RETURN TO CHAOS</a>
        </div>
      </footer>
    </div>
  );
};

export default NightKind;
