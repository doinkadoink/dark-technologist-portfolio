import React from 'react';
import './Header.css';
import ScrollToSection from './ScrollToSection';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <ScrollToSection to="#home" ariaLabel="Rachel - Dark Technologist Home">
              <span className="logo-text">R</span>
              <span className="logo-full">RACHEL</span>
            </ScrollToSection>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Main Navigation">
            <ul className="nav-list">
              <li><ScrollToSection to="#home" className="nav-link" ariaLabel="Go to Home section">HOME</ScrollToSection></li>
              <li><ScrollToSection to="#about" className="nav-link" ariaLabel="Go to About section">ABOUT</ScrollToSection></li>
              <li><ScrollToSection to="#projects" className="nav-link" ariaLabel="Go to Projects section">PROJECTS</ScrollToSection></li>
              <li><ScrollToSection to="#contact" className="nav-link" ariaLabel="Go to Contact section">CONTACT</ScrollToSection></li>
            </ul>
          </nav>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
            <span className="menu-text">MENU</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 