import React from 'react';
import './Header.css';

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
            <a href="#home" aria-label="Rachel - Dark Technologist Home">
              <span className="logo-text">R</span>
              <span className="logo-full">RACHEL</span>
            </a>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Main Navigation">
            <ul className="nav-list">
              <li><a href="#home" className="nav-link" aria-label="Go to Home section">HOME</a></li>
              <li><a href="#about" className="nav-link" aria-label="Go to About section">ABOUT</a></li>
              <li><a href="#projects" className="nav-link" aria-label="Go to Projects section">PROJECTS</a></li>
              <li><a href="#contact" className="nav-link" aria-label="Go to Contact section">CONTACT</a></li>
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