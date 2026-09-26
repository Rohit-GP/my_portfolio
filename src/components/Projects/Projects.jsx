import { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { projects } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import './Projects.css';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-card">
      <div className="project-header">
        <h3 className="project-name">{project.name}</h3>
        <span className="project-timeline">{project.timeline}</span>
      </div>

      <p className="project-summary">{project.summary}</p>

      <div className="project-stack">
        {project.stack.map((tech) => (
          <span key={tech} className="project-tag">{tech}</span>
        ))}
      </div>

      {/* Expandable details */}
      <div className={`project-details${expanded ? ' open' : ''}`}>
        <div className="project-details-inner">
          {project.role && (
            <div className="project-detail-section">
              <div className="project-detail-label">Role</div>
              <p className="project-detail-text">{project.role}</p>
            </div>
          )}
          {project.challenge && (
            <div className="project-detail-section">
              <div className="project-detail-label">Challenge</div>
              <p className="project-detail-text">{project.challenge}</p>
            </div>
          )}
          {project.highlights && project.highlights.length > 0 && (
            <div className="project-detail-section">
              <div className="project-detail-label">Highlights</div>
              <div className="project-highlights">
                {project.highlights.map((h, i) => (
                  <p key={i} className="project-highlight">{h}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="project-actions">
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.name} GitHub repository`}
            >
              <FiGithub size={14} />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.name} live demo`}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>

        <button
          className="project-toggle"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-label={expanded ? 'Hide details' : 'View details'}
        >
          {expanded ? (
            <>
              Hide details <FiChevronUp size={14} style={{ verticalAlign: 'middle' }} />
            </>
          ) : (
            <>
              View details <FiChevronDown size={14} style={{ verticalAlign: 'middle' }} />
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default function Projects() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="projects" className="section" aria-label="Featured projects">
      <div
        className={`container reveal${isVisible ? ' visible' : ''}`}
        ref={ref}
      >
        <span className="section-label">Projects</span>
        <h2 className="section-heading">Things I've built</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
