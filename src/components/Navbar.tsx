import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay for mobile & tablet when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* FIXED LOGO */}
      <div className="logo-wrapper">
        <div className="inner">
          <a href="#hero" className="logo-btn" aria-label="Home" onClick={closeMenu}>
            <span className="logo-badge-custom">G</span>
            <span>Gavutham</span>
          </a>
        </div>
      </div>

      {/* FIXED BURGER BUTTON */}
      <div className="burger-wrapper">
        <div className="inner">
          <button
            className={`burger-btn ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* NAVIGATION MENU PANEL */}
      <div
        className={`menu-panel ${isOpen ? 'open' : ''}`}
        id="menu-panel"
        role="dialog"
        aria-label="Navigation menu"
      >
        <nav>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="menu-contact">
          <a href={`mailto:${personalInfo.collegeEmail}`} className="menu-email">
            {personalInfo.collegeEmail}
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="menu-email">
            {personalInfo.phone}
          </a>
          <div className="menu-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={personalInfo.resumeFile} download="Gavutham_MS_Resume.pdf">
              Resume
            </a>
          </div>
        </div>

        <div style={{ marginTop: '24px' }}>
          <a href="#contact" className="menu-cta-btn" onClick={closeMenu}>
            <span className="menu-cta-bg"></span>
            <span className="menu-cta-text">Let's talk</span>
            <span className="menu-cta-circle">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
