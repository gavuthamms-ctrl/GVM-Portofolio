import React from 'react';
import { languagesData, focusAreas, marqueeTopics } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <span className="section-label">// 02 — SKILLS</span>
        <h2 className="section-title">What I Work With.</h2>

        {/* Language cards */}
        <div className="skills-grid">
          {languagesData.map((item, idx) => (
            <div key={idx} className="card skill-card">
              <div className="skill-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <h3 className="domain-title">Areas of Focus</h3>

        {/* Domain wide cards */}
        <div className="domains-grid">
          {focusAreas.map((area, idx) => (
            <div key={idx} className="card domain-card">
              <i className={`fa-solid ${area.icon}`}></i>
              <div className="domain-info">
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Marquee Strip */}
      <div className="marquee-container" style={{ marginTop: 'var(--space-3xl)' }}>
        <div className="marquee-content marquee-animation">
          <div className="marquee-items">
            <span className="marquee-title">Currently Exploring</span>
            {marqueeTopics.map((topic, i) => (
              <span key={`m1-${i}`} className="marquee-item">
                {topic}
              </span>
            ))}
          </div>
          <div className="marquee-items">
            <span className="marquee-title">Currently Exploring</span>
            {marqueeTopics.map((topic, i) => (
              <span key={`m2-${i}`} className="marquee-item">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
