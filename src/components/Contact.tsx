import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section" aria-label="Contact Information">
      <div className="container">
        <h2 className="section-title">CONTACT</h2>
        
        <div className="contact-grid" role="region" aria-label="Contact Methods">
          <article className="contact-card">
            <div className="contact-icon" aria-hidden="true">📧</div>
            <h3 className="contact-title">EMAIL</h3>
            <p className="contact-description">
              Best for placement opportunities and project enquiries
            </p>
            <a href="mailto:rachelfrappell18@gmail.com" className="btn" aria-label="Email Rachel">EMAIL ME</a>
          </article>
          
          <article className="contact-card">
            <div className="contact-icon" aria-hidden="true">📞</div>
            <h3 className="contact-title">PHONE</h3>
            <p className="contact-description">
              Gold Coast, QLD (AEST)
            </p>
            <a href="tel:+61417740323" className="btn" aria-label="Call Rachel">CALL</a>
          </article>
          
          <article className="contact-card">
            <div className="contact-icon" aria-hidden="true">📁</div>
            <h3 className="contact-title">PORTFOLIO</h3>
            <p className="contact-description">
              Selected work across environments, design, and interactive media
            </p>
            <a href="#projects" className="btn" aria-label="Jump to Projects section">VIEW WORK</a>
          </article>
        </div>
        
        <article className="contact-cta" role="region" aria-label="Call to Action">
          <h3 className="cta-title">AVAILABLE FOR INDUSTRY PLACEMENT</h3>
          <p className="cta-description">
            I’m looking for opportunities in virtual production, digital locations, scan-informed assets, and previs.
            If you’d like to see specific examples (UE scenes, scans, or design work), I’m happy to share.
          </p>
          <nav className="cta-buttons" aria-label="Call to Action Navigation">
            <a href="mailto:rachelfrappell18@gmail.com" className="btn" aria-label="Email Rachel">EMAIL</a>
            <a href="#projects" className="btn btn-secondary" aria-label="View projects">VIEW PROJECTS</a>
          </nav>
        </article>
      </div>
      
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              © 2026 Rachel Frappell.
            </p>
            <p className="footer-subtext">
              Unreal environments • photogrammetry workflows • virtual production • digital design.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact; 