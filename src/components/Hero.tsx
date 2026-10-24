import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealImgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const imgLayer = revealImgRef.current;
    if (!canvas || !imgLayer) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SPOTLIGHT_R = 250;
    let animId: number;
    let autoPan = true;
    const mouse = { x: -999, y: -999 };
    const smooth = { x: -999, y: -999 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      autoPan = false;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      autoPan = false;
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const loop = (timestamp: number) => {
      if (autoPan) {
        const cx = canvas.width / 2;
        const cy = canvas.height * 0.45;
        smooth.x = cx + Math.sin(timestamp * 0.0012) * 120;
        smooth.y = cy + Math.cos(timestamp * 0.0008) * 40;
      } else {
        if (smooth.x === -999) {
          smooth.x = mouse.x;
          smooth.y = mouse.y;
        } else {
          smooth.x += (mouse.x - smooth.x) * 0.08;
          smooth.y += (mouse.y - smooth.y) * 0.08;
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (smooth.x !== -999) {
        const grad = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, SPOTLIGHT_R);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.35, 'rgba(255,255,255,1)');
        grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
        grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
        grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.beginPath();
        ctx.arc(smooth.x, smooth.y, SPOTLIGHT_R, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        try {
          const dataUrl = canvas.toDataURL();
          imgLayer.style.webkitMaskImage = `url(${dataUrl})`;
          imgLayer.style.maskImage = `url(${dataUrl})`;
          imgLayer.style.webkitMaskSize = '100% 100%';
          imgLayer.style.maskSize = '100% 100%';
        } catch {
          // In case of restricted canvas read
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const headlineWords = personalInfo.headline.split(' ');
  const taglineWords = personalInfo.tagline.split(' ');

  return (
    <section id="hero">
      {/* Giant background texture word */}
      <div className="hero-big-text creator-text-animate">
        <h2>BUILD</h2>
      </div>

      {/* Dual Layer Voxel Art Image */}
      <div
        className="hero-base-img hero-image-animate"
        style={{ backgroundImage: "url('/voxel_base_new.png')" }}
      />
      <div
        className="hero-reveal-img"
        ref={revealImgRef}
        style={{ backgroundImage: "url('/voxel_reveal_new.png')" }}
      />
      <canvas id="reveal-canvas" ref={canvasRef} style={{ display: 'none' }} />

      {/* Content Overlays */}
      <div className="hero-content">
        <div className="hero-top-row cta-animate" style={{ animationDelay: '1.8s' }}>
          <div className="status-badge" style={{ pointerEvents: 'auto' }}>
            <span className="pulse-dot mr-2"></span>
            {personalInfo.status}
          </div>
        </div>

        <div className="hero-content-inner">
          <h1 className="hero-name-headline" id="name-headline">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className="word-reveal"
                style={{ animationDelay: `${1.35 + i * 0.08}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="hero-tagline-secondary" id="tagline-secondary">
            {taglineWords.map((word, i) => (
              <span
                key={i}
                className="word-reveal"
                style={{ animationDelay: `${1.75 + i * 0.04}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </p>

          <div className="cta-btn-wrapper cta-animate" style={{ animationDelay: '2.0s' }}>
            <a href="#projects" className="cta-btn">
              <span className="cta-btn-bg"></span>
              <span className="cta-btn-text">View my work</span>
              <span className="cta-btn-circle">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        Scroll to explore
      </div>
    </section>
  );
};
