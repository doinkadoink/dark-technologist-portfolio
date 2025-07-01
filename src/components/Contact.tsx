import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section" aria-label="Contact Information">
      <div className="container">
        <h2 className="section-title">JOIN THE REBELLION</h2>
        
        <div className="contact-grid" role="region" aria-label="Contact Methods">
          <article className="contact-card">
            <div className="contact-icon" aria-hidden="true">📧</div>
            <h3 className="contact-title">ENCRYPTED COMMUNICATION</h3>
            <p className="contact-description">
              Drop me an encrypted line for dark collaborations
            </p>
            <a href="mailto:rachel@darktech.com" className="btn" aria-label="Send encrypted email to Rachel">SEND ENCRYPTED MESSAGE</a>
          </article>
          
          <article className="contact-card">
            <div className="contact-icon" aria-hidden="true">💼</div>
            <h3 className="contact-title">PROFESSIONAL NETWORK</h3>
            <p className="contact-description">
              Connect for underground professional opportunities
            </p>
            <a href="https://linkedin.com/in/rachel-darktech" className="btn" aria-label="Connect with Rachel on LinkedIn" target="_blank" rel="noopener noreferrer">JOIN NETWORK</a>
          </article>
          
          <article className="contact-card">
            <div className="contact-icon" aria-hidden="true">🎮</div>
            <h3 className="contact-title">DISCORD UNDERGROUND</h3>
            <p className="contact-description">
              Chat about AI corruption, dark gaming, and tech rebellion
            </p>
            <a href="https://discord.gg/darktech" className="btn" aria-label="Join Rachel's Discord server" target="_blank" rel="noopener noreferrer">ENTER UNDERGROUND</a>
          </article>
        </div>
        
        <article className="contact-cta" role="region" aria-label="Call to Action">
          <h3 className="cta-title">READY TO CORRUPT THE SYSTEM?</h3>
          <p className="cta-description">
            Whether you're interested in AI corruption, dark technology, or revolutionary web solutions, 
            I'd love to hear about your rebellious project and explore how we can bring chaos to life.
          </p>
          <nav className="cta-buttons" aria-label="Call to Action Navigation">
            <a href="mailto:rachel@darktech.com" className="btn" aria-label="Start rebellion by contacting Rachel">START REBELLION</a>
            <a href="#projects" className="btn btn-secondary" aria-label="View chaos projects">VIEW CHAOS</a>
          </nav>
        </article>
      </div>
      
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              © 2024 Rachel. Built with AI-powered rebellion and dark passion.
            </p>
            <p className="footer-subtext">
              Designed to corrupt and showcase the future of dark creative technology.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact; 