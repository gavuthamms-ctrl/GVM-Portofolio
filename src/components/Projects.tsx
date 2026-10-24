import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects">
      <div className="container">
        <span className="section-label">// 03 — PROJECTS</span>
        <h2 className="section-title">Things I've Actually Built.</h2>
        <p className="projects-subtitle">Real problems. Real code. Real outcomes.</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="card project-card">
              <div className={`project-color-strip bg-gradient-to-r ${project.stripClass}`} />
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-one-liner">{project.oneLiner}</p>

                <div className="project-divider" />

                <div className="project-spec">
                  <strong>The Problem</strong>
                  <p>{project.problem}</p>
                </div>
                <div className="project-spec">
                  <strong>The Outcome</strong>
                  <p>{project.outcome}</p>
                </div>

                {project.badge && (
                  <div className="project-badge">
                    <i className={`fa-solid ${project.badge.icon}`} /> {project.badge.text}
                  </div>
                )}

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <i className="fa-brands fa-github" /> GitHub
                  </a>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details <i className="fa-solid fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DYNAMIC DETAILS MODAL POPUP */}
      <div
        className={`modal-overlay ${selectedProject ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedProject(null);
        }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!selectedProject}
      >
        {selectedProject && (
          <div className="modal-box">
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark" />
            </button>

            <div className={`modal-strip bg-gradient-to-r ${selectedProject.stripClass}`} />

            <div className="modal-content-wrap">
              <div className="modal-header-section">
                <span className="tag">{selectedProject.tags.join(' · ')}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="project-one-liner">{selectedProject.oneLiner}</p>
              </div>

              <h4 className="modal-desc-heading">Executive Abstract</h4>
              <p className="modal-desc-text">{selectedProject.description}</p>

              <div className="modal-spec-grid">
                <div className="modal-spec-item">
                  <strong>Key Engineering Decision</strong>
                  <p>{selectedProject.engineering}</p>
                </div>
                <div className="modal-spec-item">
                  <strong>Outcome &amp; Impact</strong>
                  <p>{selectedProject.outcome}</p>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa-brands fa-github" /> View Repository
                </a>
                <button
                  className="btn btn-ghost"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
