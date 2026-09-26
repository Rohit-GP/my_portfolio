import { FiMapPin } from 'react-icons/fi';
import { personalInfo, stats } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import './About.css';

const FOCUS_AREAS = [
  'Full-Stack Development',
  'Java & Spring Boot',
  'Agentic AI',
  'Event-Driven Systems',
  'System Observability',
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="section" aria-label="About me">
      <div
        className={`container reveal${isVisible ? ' visible' : ''}`}
        ref={ref}
      >
        <span className="section-label">About</span>
        <h2 className="section-heading">Get to know me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-bio">{personalInfo.bio}</p>

            <div className="about-focus">
              <span className="about-focus-title">Focus Areas</span>
              <div className="about-focus-list">
                {FOCUS_AREAS.map((area) => (
                  <span key={area} className="about-focus-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-location">
              <FiMapPin size={14} />
              {personalInfo.location}
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">
                  {stat.value}
                  {stat.suffix && (
                    <span className="stat-suffix">{stat.suffix}</span>
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
