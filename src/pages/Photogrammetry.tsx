import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ProjectPages.css';

const Photogrammetry: React.FC = () => {
  return (
    <div className="project-page">
      <div className="container">
        <nav className="project-nav">
          <Link to="/" className="back-link">← BACK TO HOME</Link>
        </nav>

        <header className="project-header">
          <h1 className="project-title">PHOTOGRAMMETRY → DIGITAL LOCATIONS</h1>
          <p className="project-subtitle">Scan-Informed Environments in Unreal Engine</p>
        </header>

        <div className="project-content">
          <section className="project-overview">
            <h2>PROJECT OVERVIEW</h2>
            <p>
              Used Scaniverse-style capture workflows and Unreal Engine to turn real-world spatial references into usable digital environments.
              The focus is on practical problem-solving: scan issues, missing geometry, texture problems, lighting integration, and continuity.
            </p>
          </section>

          <section className="project-details">
            <h2>PROJECT DETAILS</h2>

            <div className="detail-grid">
              <div className="detail-item">
                <h3>WORKFLOW</h3>
                <p>Capture → cleanup awareness → Unreal assembly</p>
              </div>

              <div className="detail-item">
                <h3>PRIMARY GOAL</h3>
                <p>Production-usable digital locations</p>
              </div>

              <div className="detail-item">
                <h3>TROUBLESHOOTING</h3>
                <p>Geometry gaps, texture issues, lighting continuity</p>
              </div>

              <div className="detail-item">
                <h3>OUTPUT</h3>
                <p>Scene-ready environments for cinematic use</p>
              </div>
            </div>
          </section>

          <section className="project-features">
            <h2>KEY CONTRIBUTIONS</h2>
            <ul className="features-list">
              <li>Scan capture planning and capture constraints awareness</li>
              <li>Identifying common scan failure points (coverage, occlusion, reflective surfaces)</li>
              <li>Lighting integration for cohesive scene look</li>
              <li>Continuity thinking for shot-to-shot consistency</li>
              <li>Environment assembly and cinematic usability checks</li>
            </ul>
          </section>

          <section className="project-technologies">
            <h2>TOOLS & SKILLS</h2>
            <div className="tech-grid">
              <span className="tech-tag">Photogrammetry principles</span>
              <span className="tech-tag">Scaniverse-style capture</span>
              <span className="tech-tag">Unreal Engine</span>
              <span className="tech-tag">Lighting</span>
              <span className="tech-tag">Continuity</span>
              <span className="tech-tag">Environment assembly</span>
            </div>
          </section>

          <section className="project-gallery">
            <h2>GALLERY</h2>
            <div className="gallery-placeholder">
              <p>[Add: scan previews, problem cases (missing geo/texture), and final Unreal scene screenshots]</p>
              <p>I can help you format these into “Before / After” panels for quick readability.</p>
            </div>
          </section>

          <section className="project-impact">
            <h2>IMPACT</h2>
            <p>
              Demonstrates a strong practical-to-digital mindset: using real-world capture as a foundation and making it reliable for production use.
            </p>
          </section>

          <section className="project-process">
            <h2>PROCESS</h2>
            <div className="process-steps">
              <div className="step">
                <h3>STEP 1: CAPTURE</h3>
                <p>Plan coverage and capture real-world spatial references</p>
              </div>
              <div className="step">
                <h3>STEP 2: CLEANUP AWARENESS</h3>
                <p>Identify scan issues and what needs fixing/rebuilding</p>
              </div>
              <div className="step">
                <h3>STEP 3: UNREAL ASSEMBLY</h3>
                <p>Reconstruct the location and block shots for usability</p>
              </div>
              <div className="step">
                <h3>STEP 4: LIGHTING & CONTINUITY</h3>
                <p>Match scene lighting and check continuity across angles</p>
              </div>
            </div>
          </section>

          <section className="project-future">
            <h2>NEXT ITERATION</h2>
            <p>
              Build a small set of “scan-to-scene” case studies with consistent breakdowns (capture notes, fixes, final renders),
              and expand into more complex locations.
            </p>
          </section>
        </div>

        <footer className="project-footer">
          <Link to="/" className="btn">RETURN HOME</Link>
        </footer>
      </div>
    </div>
  );
};

export default Photogrammetry;
