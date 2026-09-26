import { education } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import './Education.css';

export default function Education() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="education" className="section" aria-label="Education">
      <div
        className={`container reveal${isVisible ? ' visible' : ''}`}
        ref={ref}
      >
        <span className="section-label">Education</span>
        <h2 className="section-heading">Academic background</h2>

        <div className="education-cards">
          {education.map((edu, i) => (
            <div key={i} className="education-card">
              <div className="education-card-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                </div>
                {edu.gpa && (
                  <span className="education-gpa-badge">
                    CGPA: <strong>{edu.gpa}</strong>
                  </span>
                )}
              </div>

              <div className="education-meta">
                <span className="education-dates">{edu.dates}</span>
                <span className="education-bullet">•</span>
                <span className="education-location">{edu.location}</span>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="education-coursework-section">
                  <p className="education-coursework-label">
                    Relevant Coursework
                  </p>
                  <div className="education-coursework">
                    {edu.coursework.map((c) => (
                      <span key={c} className="coursework-tag">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
