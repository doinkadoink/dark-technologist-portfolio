import React from 'react';
import './Header.css';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">R</span>
            <span className="logo-full">RACHEL</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">HOME</a></li>
              <li><a href="#about" className="nav-link">ABOUT</a></li>
              <li><a href="#projects" className="nav-link">PROJECTS</a></li>
              <li><a href="#contact" className="nav-link">CONTACT</a></li>
            </ul>
          </nav>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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