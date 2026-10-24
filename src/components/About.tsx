import React, { useState, useEffect, useRef } from 'react';

export const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    certs: 0,
    languages: 0,
    batch: 0,
  });
  const [imgError, setImgError] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate statistics counters
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setStats({
              projects: Math.floor(ease * 3),
              certs: Math.floor(ease * 3),
              languages: Math.floor(ease * 5),
              batch: Math.floor(ease * 2025),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setStats({
                projects: 3,
                certs: 3,
                languages: 5,
                batch: 2025,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} style={{ overflow: 'visible' }}>
      {/* Wave Morph Divider */}
      <div className="hero-wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vin-noir-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B0000" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#4A0404" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8B0000" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path className="wave-fill" d="M 0 60 C 360 30, 360 90, 720 60 C 1080 30, 1080 90, 1440 60 L 1440 100 L 0 100 Z" />
          <path className="wave-stroke" d="M 0 60 C 360 30, 360 90, 720 60 C 1080 30, 1080 90, 1440 60" />
        </svg>
      </div>

      <div className="container">
        <div className="about-grid">
          {/* Story Side */}
          <div className="about-story">
            <span className="section-label">// 01 — ABOUT ME</span>
            <h2 className="section-title">
              The Person Behind<br />the Code.
            </h2>
            <p>
              I'm Gavutham MS, a Computer Science Engineering student at P A College of Engineering and Technology,
              Pollachi — Batch 2025–2029.
            </p>
            <p>
              I don't wait to be taught — I build to learn. My projects aren't assignments, they're answers to real
              problems I noticed around me: people spending hours formatting resumes, delivery systems wasting fuel, and
              volunteers being mismatched with community disaster tasks.
            </p>
            <p>
              I work at the intersection of software and systems thinking. Whether it's training an ML model, designing a
              modern responsive UI, or optimizing a graph-routing algorithm, I care about the outcome — not just the code.
            </p>

            <div className="skill-pills">
              <span className="skill-pill">Python</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">HTML/CSS</span>
              <span className="skill-pill">C/C++</span>
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">Cybersecurity ↗</span>
            </div>
          </div>

          {/* Visual & Stats Side */}
          <div className="about-visual">
            <div className="profile-frame">
              {!imgError ? (
                <img
                  src="/profile.jpg"
                  alt="Gavutham MS"
                  className="profile-photo"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="profile-placeholder">GM</div>
              )}
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <h3 className="stat-number">{stats.projects}</h3>
                <p>Projects Built</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">{stats.certs}</h3>
                <p>Certificates</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">{stats.languages}+</h3>
                <p>Languages</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">{stats.batch}</h3>
                <p>Batch Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
