import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Resume: React.FC = () => {
  return (
    <section id="resume" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <span className="section-label">// 06 — RESUME</span>
          <h2 className="section-title">My Resume.</h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            A full summary of my education, projects, skills, and achievements — ready to download.
          </p>
        </div>

        {/* Resume Preview Card */}
        <div style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
          <div className="card" style={{ overflow: 'hidden' }}>
            {/* Top accent strip */}
            <div
              style={{
                height: '5px',
                background:
                  'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                width: '100%',
              }}
            />

            {/* Resume meta info */}
            <div
              style={{
                padding: 'clamp(18px, 4vw, 32px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(139, 0, 0, 0.1)',
                    border: '1px solid rgba(139, 0, 0, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}
                >
                  <i className="fa-solid fa-file-lines" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(16px, 3.5vw, 19px)',
                      fontWeight: 700,
                      marginBottom: '2px',
                      wordBreak: 'break-word',
                    }}
                  >
                    Gavutham_MS_Resume.pdf
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Software Engineer Intern Candidate &nbsp;·&nbsp; 2 pages &nbsp;·&nbsp; PDF
                  </p>
                </div>
              </div>

              <a
                href={personalInfo.resumeFile}
                download="Gavutham_MS_Resume.pdf"
                className="btn btn-primary"
                style={{ flexShrink: 0 }}
              >
                <i className="fa-solid fa-download" /> Download CV
              </a>
            </div>

            {/* Resume highlights grid */}
            <div
              style={{
                padding: 'clamp(18px, 4vw, 32px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
                gap: 'clamp(14px, 3vw, 24px)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.5px',
                  }}
                >
                  CGPA
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 4vw, 26px)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {personalInfo.cgpa}{' '}
                  <span
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                    }}
                  >
                    / 10.0
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {personalInfo.college}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.5px',
                  }}
                >
                  Projects
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 4vw, 26px)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  4{' '}
                  <span
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                    }}
                  >
                    deployed
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  Python, Flask, JS, MySQL
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.5px',
                  }}
                >
                  Recognition
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 4vw, 26px)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  3rd{' '}
                  <span
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                    }}
                  >
                    place
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  College Project Expo 2025
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.5px',
                  }}
                >
                  LeetCode
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 4vw, 26px)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  100+{' '}
                  <span
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                    }}
                  >
                    solved
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  Arrays, DP, Graphs, Strings
                </span>
              </div>
            </div>

            {/* View in browser link */}
            <div style={{ padding: '0 clamp(18px, 4vw, 32px) clamp(18px, 4vw, 32px)', textAlign: 'center' }}>
              <a
                href={personalInfo.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <i className="fa-solid fa-eye" /> View in browser instead
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
