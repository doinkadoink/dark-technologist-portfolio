import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import SEOHead from './components/SEOHead';
import Home from './pages/Home';
import WebCorruption from './pages/WebCorruption';
import ChaosMaps from './pages/ChaosMaps';
import AIInteractive from './pages/AIInteractive';
import DigitalDarkArt from './pages/DigitalDarkArt';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <SEOHead />
        <LoadingScreen />
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-corruption" element={<WebCorruption />} />
          <Route path="/chaos-maps" element={<ChaosMaps />} />
          <Route path="/ai-interactive" element={<AIInteractive />} />
          <Route path="/digital-dark-art" element={<DigitalDarkArt />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App; 