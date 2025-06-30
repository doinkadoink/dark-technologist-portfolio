import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">JOIN THE REBELLION</h2>
        
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3 className="contact-title">ENCRYPTED COMMUNICATION</h3>
            <p className="contact-description">
              Drop me an encrypted line for dark collaborations
            </p>
            <a href="mailto:rachel@darktech.com" className="btn">SEND ENCRYPTED MESSAGE</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <h3 className="contact-title">PROFESSIONAL NETWORK</h3>
            <p className="contact-description">
              Connect for underground professional opportunities
            </p>
            <a href="https://linkedin.com/in/rachel-darktech" className="btn">JOIN NETWORK</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">🎮</div>
            <h3 className="contact-title">DISCORD UNDERGROUND</h3>
            <p className="contact-description">
              Chat about AI corruption, dark gaming, and tech rebellion
            </p>
            <a href="https://discord.gg/darktech" className="btn">ENTER UNDERGROUND</a>
          </div>
        </div>
        
        <div className="contact-cta">
          <h3 className="cta-title">READY TO CORRUPT THE SYSTEM?</h3>
          <p className="cta-description">
            Whether you're interested in AI corruption, dark technology, or revolutionary web solutions, 
            I'd love to hear about your rebellious project and explore how we can bring chaos to life.
          </p>
          <div className="cta-buttons">
            <a href="mailto:rachel@darktech.com" className="btn">START REBELLION</a>
            <a href="#projects" className="btn btn-secondary">VIEW CHAOS</a>
          </div>
        </div>
      </div>
      
      <footer className="footer">
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