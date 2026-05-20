import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const SPOTIFY_ON_AND_ON =
  'https://open.spotify.com/track/5mfGEs5n647v4WE3K5YmBy?si=3d71d934301c47ec';
const FLYTHROUGH_VIDEO = `${process.env.PUBLIC_URL}/on-on-on-on-flythrough.mp4`;

const Photogrammetry: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO HOME</Link>
        </nav>

        <header className="project-header">
          <h1 className="project-title">on &amp; on &amp; on &amp; on</h1>
          <p className="project-subtitle">
            ~54 sec · 3 weeks · Scaniverse (iPhone) → Unreal Engine (PC) · home flythrough
          </p>
        </header>

        <div className="project-content">
          <section className="project-overview">
            <div className="video-wrap" style={{ marginBottom: '1rem' }}>
              <video
                controls
                playsInline
                loop
                preload="metadata"
                style={{ width: '100%', maxHeight: '70vh', display: 'block', borderRadius: '8px' }}
                aria-label="Unreal Engine flythrough of a photogrammetry scan of Rachel's home, edited to loop seamlessly to the chorus of on and on."
              >
                <source src={FLYTHROUGH_VIDEO} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '1.25rem' }}>
              Music:{' '}
              <a href={SPOTIFY_ON_AND_ON} target="_blank" rel="noopener noreferrer">
                “on &amp; on”
              </a>{' '}
              by piri &amp; Tommy Villiers — timed to the main chorus; loops start-to-finish.
            </p>
            <h2>WHAT IT IS</h2>
            <p>
              A <strong>3D scan of my house</strong> captured on iPhone with <strong>Scaniverse</strong>, brought into{' '}
              <strong>Unreal Engine on PC</strong> for cleanup, then recorded as a cinematic flythrough through the interior.
            </p>
            <p>
              The cut is built around the <strong>main chorus</strong> of the track — designed to{' '}
              <strong>loop seamlessly</strong> (~54 seconds) from first frame to last.
            </p>
          </section>

          <section className="project-process">
            <h2>WORKFLOW</h2>
            <div className="process-steps">
              <div className="step">
                <h3>CAPTURE</h3>
                <p>Room-by-room Scaniverse coverage on iPhone — paths planned to reduce holes and mismatched geometry.</p>
              </div>
              <div className="step">
                <h3>UNREAL CLEANUP</h3>
                <p>Mesh cleanup, materials, lighting, and a flythrough path that reads naturally at house scale.</p>
              </div>
              <div className="step">
                <h3>EDIT &amp; LOOP</h3>
                <p>In-engine recording, grading, and chorus-aligned motion so the loop point is invisible.</p>
              </div>
            </div>
          </section>

          <section className="project-technologies">
            <h2>TOOLS &amp; SKILLS</h2>
            <div className="tech-grid">
              <span className="tech-tag">Scaniverse</span>
              <span className="tech-tag">iPhone capture</span>
              <span className="tech-tag">Photogrammetry</span>
              <span className="tech-tag">Unreal Engine</span>
              <span className="tech-tag">Flythrough</span>
              <span className="tech-tag">Seamless loop</span>
            </div>
          </section>

          <section className="project-impact">
            <h2>BROADER PRACTICE</h2>
            <p>
              Part of my <strong>digital locations</strong> work: real-world capture as foundation, then production-minded cleanup for lighting, continuity, and shot planning.
            </p>
          </section>
        </div>

        <footer className="project-footer" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Link to="/" className="btn">RETURN HOME</Link>
          <a className="btn" href={SPOTIFY_ON_AND_ON} target="_blank" rel="noopener noreferrer">
            LISTEN ON SPOTIFY
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Photogrammetry;
