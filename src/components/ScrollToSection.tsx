import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ScrollToSectionProps {
  to: string; // e.g. '#projects'
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({ to, className, children, ariaLabel }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const sectionId = to.replace('#', '');
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Wait for navigation, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={to} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollToSection; 