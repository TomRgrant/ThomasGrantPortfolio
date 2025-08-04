import React, { useEffect, useRef } from "react";
import "../Styles/LandingPage.css";

function LandingPage() {
  const gridRef = useRef(null);

  useEffect(() => {
  const grid = gridRef.current;

  function createHexes() {
    // Clear any old hexes
    grid.innerHTML = '';

    const hexCount = window.innerWidth > 500 ? 12 : 7;

    for (let i = 0; i < hexCount; i++) {
      const hex = document.createElement('div');
      hex.classList.add('hex');
      hex.style.left = `${Math.random() * 100}%`;
      hex.style.top = `${Math.random() * 100}%`;
      hex.style.animationDuration = `${8 + Math.random() * 5}s`;
      hex.style.width = `${20 + Math.random() * 20}px`;
      hex.style.height = `${20 + Math.random() * 20}px`;
      grid.appendChild(hex);
    }
  }

  createHexes();

  // Add a resize listener
  window.addEventListener('resize', createHexes);

  return () => {
    window.removeEventListener('resize', createHexes);
  };
}, []);




  return (
    <>
      

      <div className="landing-wrapper">
        <h1 className="hero fade-in">
          Hi, I'm <span>Thomas Grant</span>
        </h1>
        <p className="fade-in delay-1 hero-sub">
          A curious full-stack developer solving real problems with clean code.
        </p>
        <button className="cta fade-in delay-2" onClick={() => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }} >
          View My Work
        </button>

        <div className="social-links fade-in delay-3">
          <a
            href="https://github.com/TomRgrant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            {/* GitHub Icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon" aria-hidden="true">
              <path d="M12 0C5.372 0 0 5.372 0 12a12 12 0 008.207 11.44c.6.11.82-.26.82-.58 0-.29-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.755-1.334-1.755-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.306.763-1.606-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 013.003-.404c1.02.005 2.05.138 3.002.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.628-5.48 5.922.43.37.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.216.694.825.576A12.006 12.006 0 0024 12c0-6.628-5.372-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/thomasgrant0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            {/* LinkedIn Icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon" aria-hidden="true">
              <path d="M4.98 3.5C4.98 5.43 3.4 7 1.5 7S-2 5.43-2 3.5 0.6 0 2.5 0 4.98 1.57 4.98 3.5zM.25 8h4.5v12h-4.5v-12zM10 8h4.25v1.75h.06c.59-1.1 2.03-2.26 4.18-2.26 4.48 0 5.31 2.95 5.31 6.79v7.72h-4.5v-6.85c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.78-2.63 3.62v6.96h-4.5v-12z"/>
            </svg>
          </a>
        </div>
        {/* Hex Grid Overlay */}
      <div className="hex-grid" id="hexGrid" ref={gridRef}></div>
      </div>
    </>
  );
}

export default LandingPage;
