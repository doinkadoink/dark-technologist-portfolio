import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import SEOHead from './components/SEOHead';
import Home from './pages/Home';
import WebCorruption from './pages/WebCorruption';
import Photogrammetry from './pages/Photogrammetry';
import AIInteractive from './pages/AIInteractive';
import DigitalDarkArt from './pages/DigitalDarkArt';
import NightKind from './components/NightKind';
import { ShopifyProvider } from './shopify/ShopifyContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ShopifyProvider>
      <Router>
        <div className="App">
          <SEOHead />
          <LoadingScreen />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-corruption" element={<WebCorruption />} />
            <Route path="/chaos-maps" element={<Navigate to="/photogrammetry" replace />} />
            <Route path="/photogrammetry" element={<Photogrammetry />} />
            <Route path="/ai-interactive" element={<AIInteractive />} />
            <Route path="/digital-dark-art" element={<DigitalDarkArt />} />
            <Route path="/nightkind" element={<NightKind />} />
          </Routes>
          <ScrollToTop />
        </div>
      </Router>
    </ShopifyProvider>
  );
}

export default App; 