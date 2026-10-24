import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-badge">G</span>
          <span>{personalInfo.name}</span>
        </div>

        <p className="footer-quote">{personalInfo.quote}</p>

        <div className="footer-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer-social-icon"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope" />
          </a>
        </div>

        <p className="footer-copy">
          &copy; 2025 Gavutham MS &middot; Built with intent.
        </p>
      </div>
    </footer>
  );
};
