import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mojblbkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        const detail =
          data && data.errors
            ? data.errors.map((err: { message: string }) => err.message).join(', ')
            : `Status ${response.status}`;
        setErrorMessage(detail);
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network or connection issue');
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`Contact from ${formData.name || 'Visitor'} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="contact-glow-bg" />

      <div className="container">
        <div className="contact-wrap">
          <div className="contact-form-card card">
            {/* Form */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              style={{
                opacity: status === 'success' ? 0 : 1,
                pointerEvents: status === 'success' ? 'none' : 'auto',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
                <span className="section-label">// 05 — CONTACT</span>
                <h2
                  className="section-title"
                  style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '8px' }}
                >
                  Let's Build Something Impactful.
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px' }}>
                  Whether you have an internship opportunity, a freelance project, or just want to
                  talk tech — I'm ready.
                </p>
              </div>

              {status === 'error' && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(139, 0, 0, 0.2)',
                    border: '1px solid rgba(139, 0, 0, 0.4)',
                    color: '#F4F1E8',
                    fontSize: '13px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <p>
                    <strong>Could not submit via Formspree:</strong> {errorMessage || 'Please try direct email.'}
                  </p>
                  <button
                    type="button"
                    onClick={openMailtoFallback}
                    className="btn btn-ghost"
                    style={{ alignSelf: 'flex-start', padding: '6px 16px', fontSize: '11px' }}
                  >
                    <i className="fa-solid fa-envelope" /> Open Email Client Instead
                  </button>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Tell me about the opportunity or project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary"
                style={{ marginTop: '10px', width: '100%', height: '50px' }}
              >
                {status === 'loading' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <i className="fa-solid fa-paper-plane" />
                  </>
                )}
              </button>
            </form>

            {/* Dynamic Success Screen overlay */}
            <div
              className={`form-success-overlay ${status === 'success' ? 'active' : ''}`}
              id="successOverlay"
            >
              <div className="success-icon">
                <i className="fa-solid fa-check" />
              </div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-text">
                Thank you for reaching out. I've received your request and will get back to you
                shortly.
              </p>
              <button className="btn btn-ghost" onClick={resetForm}>
                Send Another Message
              </button>
            </div>
          </div>

          {/* Direct links */}
          <div className="direct-connect">
            <h4>Or Connect Directly</h4>
            <div className="direct-grid">
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="direct-link">
                <i className="fa-solid fa-phone" /> {personalInfo.phone}
              </a>
              <a href={`mailto:${personalInfo.email}`} className="direct-link">
                <i className="fa-solid fa-envelope" /> {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-link"
              >
                <i className="fa-brands fa-linkedin" /> linkedin.com/in/gavuthamms
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-link"
              >
                <i className="fa-brands fa-github" /> github.com/gavuthamms-ctrl
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
