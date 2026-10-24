import React from 'react';
import { certificationsData, hackathonsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <span className="section-label">// 04 — ACHIEVEMENTS</span>
        <h2 className="section-title">Milestones &amp; Recognition.</h2>

        <div className="achievements-grid">
          {/* Certifications Column */}
          <div className="certs-col">
            <h3 className="certs-title">
              <i className="fa-solid fa-award" /> Professional Certifications
            </h3>

            {certificationsData.map((cert) => (
              <div key={cert.id} className="card cert-card">
                <i className={`fa-solid ${cert.icon} cert-icon`} />
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>Issued by: {cert.issuer}</p>
                  {cert.verified && (
                    <span className="verified-badge">
                      <i className="fa-solid fa-shield-check" /> Verified
                    </span>
                  )}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--accent-primary)',
                      marginTop: '8px',
                      textDecoration: 'none',
                      opacity: 0.8,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
                  >
                    {cert.linkText}{' '}
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      style={{ fontSize: '9px' }}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Hackathons Column */}
          <div className="hacks-col">
            <h3 className="hackathons-title">
              <i className="fa-solid fa-laptop-code" /> Hackathons &amp; Events{' '}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  fontWeight: 400,
                  marginLeft: '10px',
                }}
              >
                3 events
              </span>
            </h3>

            {hackathonsData.map((hack) => (
              <div key={hack.id} className="card hack-card">
                <div className="hack-header">
                  <span className="hack-org">{hack.org}</span>
                  <span className="hack-type">{hack.type}</span>
                </div>
                <h4>{hack.title}</h4>
                <p className="hack-project">
                  {hack.project} <strong>{hack.highlight}</strong> {hack.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
