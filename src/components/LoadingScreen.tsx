import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-text">R</span>
        </div>
        <div className="loading-title">
          <span className="title-line">DARK</span>
          <span className="title-line">TECHNOLOGIST</span>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="loading-text">INITIALIZING CHAOS...</div>
      </div>
      
      <div className="loading-background">
        <div className="grid-overlay"></div>
        <div className="glow-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 