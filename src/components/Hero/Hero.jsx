import { useState, useEffect, useCallback, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, socialLinks } from '../../data/profile';
import './Hero.css';

const ICON_MAP = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  leetcode: SiLeetcode,
};

function NetworkBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        {/* Nodes */}
        {[
          [100, 150], [300, 80], [500, 200], [700, 120], [900, 180],
          [1100, 100], [200, 400], [400, 350], [600, 450], [800, 380],
          [1000, 420], [150, 600], [350, 550], [550, 650], [750, 580],
          [950, 620], [50, 300], [1150, 300], [450, 500], [850, 250],
          [250, 250], [650, 300], [1050, 550], [100, 700], [500, 720],
        ].map(([cx, cy], i) => (
          <circle
            key={`n${i}`}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 4 : 3}
            fill="var(--color-accent)"
            opacity={0.6 + (i % 4) * 0.1}
          />
        ))}
        {/* Edges */}
        {[
          [100, 150, 300, 80], [300, 80, 500, 200], [500, 200, 700, 120],
          [700, 120, 900, 180], [900, 180, 1100, 100], [200, 400, 400, 350],
          [400, 350, 600, 450], [600, 450, 800, 380], [800, 380, 1000, 420],
          [150, 600, 350, 550], [350, 550, 550, 650], [550, 650, 750, 580],
          [750, 580, 950, 620], [100, 150, 200, 400], [300, 80, 400, 350],
          [500, 200, 600, 450], [700, 120, 800, 380], [900, 180, 1000, 420],
          [200, 400, 150, 600], [400, 350, 350, 550], [600, 450, 550, 650],
          [800, 380, 750, 580], [1000, 420, 950, 620], [50, 300, 100, 150],
          [50, 300, 200, 400], [1150, 300, 1100, 100], [1150, 300, 1000, 420],
          [250, 250, 400, 350], [450, 500, 350, 550], [650, 300, 500, 200],
          [650, 300, 800, 380], [850, 250, 700, 120], [850, 250, 1000, 420],
          [1050, 550, 950, 620], [100, 700, 150, 600], [500, 720, 550, 650],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={`e${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-accent)"
            strokeWidth="1"
            opacity={0.25}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  const { titles, name, intro, initials, photo, resumeUrl } = personalInfo;
  const [titleIndex, setTitleIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRef = useRef(null);
  const portraitRef = useRef(null);

  // Detect reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Rotate titles
  useEffect(() => {
    if (reducedMotion || isPaused || titles.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2400);

    return () => clearInterval(intervalRef.current);
  }, [reducedMotion, isPaused, titles]);

  const handleScrollToProjects = useCallback((e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleScrollToContact = useCallback((e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handlePortraitMove = useCallback((event) => {
    if (reducedMotion || !portraitRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    portraitRef.current.style.setProperty('--tilt-x', `${(-offsetY * 10).toFixed(2)}deg`);
    portraitRef.current.style.setProperty('--tilt-y', `${(offsetX * 14).toFixed(2)}deg`);
  }, [reducedMotion]);

  const handlePortraitLeave = useCallback(() => {
    if (!portraitRef.current) return;
    portraitRef.current.style.setProperty('--tilt-x', '0deg');
    portraitRef.current.style.setProperty('--tilt-y', '0deg');
  }, []);

  return (
    <section id="hero" className="hero section" aria-label="Introduction">
      <NetworkBackground />

      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hello, I'm</span>

          <h1 className="hero-name">
            {name.split(' ')[0]}{' '}
            <span className="accent">{name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <div
            className="hero-title"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            role="status"
            aria-live="polite"
          >
            <span className="hero-title-static">I'm a</span>
            <span className="hero-title-rotating">
              <span className="rotating-text" key={titleIndex}>
                {titles[reducedMotion ? 0 : titleIndex]}
              </span>
            </span>
          </div>

          <p className="hero-bio">{intro}</p>

          <div className="hero-ctas">
            <a
              href="#projects"
              className="hero-cta primary"
              onClick={handleScrollToProjects}
            >
              <FiArrowDown size={16} />
              View Projects
            </a>
            <a
              href="#contact"
              className="hero-cta secondary"
              onClick={handleScrollToContact}
            >
              Contact Me
            </a>
            <a
              href={resumeUrl}
              className="hero-cta secondary"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map((link) => {
              const Icon = ICON_MAP[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label={link.name}
                  title={link.name}
                >
                  {Icon ? <Icon size={18} /> : link.name[0]}
                </a>
              );
            })}
          </div>
        </div>

        <div
          className="hero-photo-wrapper"
          onMouseMove={handlePortraitMove}
          onMouseLeave={handlePortraitLeave}
        >
          {photo ? (
            <div className="hero-photo-shell" ref={portraitRef} aria-hidden="true">
              <img
                src={photo}
                alt={`${name} profile photo`}
                className="hero-photo"
              />
            </div>
          ) : (
            /* TODO: replace with real photo */
            <div className="hero-monogram" aria-hidden="true">
              <span className="hero-monogram-text">{initials}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
