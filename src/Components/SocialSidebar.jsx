import React from 'react';
import '../Styles/SocialSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialSidebar = () => (
  <nav className="social-sidebar" aria-label="Social Links">
    <a
      href="https://github.com/TomRgrant"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/thomasgrant0/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="#contact" aria-label="Contact Email">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <div className="line" />
  </nav>
);

export default SocialSidebar;
