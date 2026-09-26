import { FiMapPin } from 'react-icons/fi';
import { experience } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import './Experience.css';

export default function Experience() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="experience" className="section" aria-label="Work experience">
      <div
        className={`container reveal${isVisible ? ' visible' : ''}`}
        ref={ref}
      >
        <span className="section-label">Experience</span>
        <h2 className="section-heading">Where I've contributed</h2>

        <div className="experience-timeline">
          {experience.map((exp, i) => (
            <article key={i} className="experience-item">
              <div className="experience-meta">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company">@ {exp.company}</span>
                <span className="experience-dates">{exp.dates}</span>
              </div>

              <div className="experience-location">
                <FiMapPin size={12} />
                {exp.location}
              </div>

              <div className="experience-highlights">
                {exp.highlights.map((h, j) => (
                  <p key={j} className="experience-highlight">{h}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
