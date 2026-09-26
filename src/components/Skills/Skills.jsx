import { useState, useMemo } from 'react';
import {
  SiPython, SiJavascript, SiHtml5, SiCss,
  SiReact, SiFastapi, SiSpringboot,
  SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiGit, SiGithub,
  SiNumpy, SiPandas, SiScikitlearn,
  SiCplusplus, SiC,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { skills, featuredSkills } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import './Skills.css';

/* Icon mapping for known skills */
const SKILL_ICONS = {
  python: SiPython,
  java: FaJava,
  javascript: SiJavascript,
  cpp: SiCplusplus,
  c: SiC,
  html5: SiHtml5,
  css3: SiCss,
  spring: SiSpringboot,
  fastapi: SiFastapi,
  react: SiReact,
  numpy: SiNumpy,
  pandas: SiPandas,
  scikitlearn: SiScikitlearn,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  redis: SiRedis,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
};

/* Custom SVG icons for skills and concepts */
const CUSTOM_ICONS = {
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7l-2 5 2 5" />
      <path d="M20 7l2 5-2 5" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5C5 7.15 5.14 7.77 5.4 8.33A5.5 5.5 0 0 0 3 13.5C3 16.54 5.46 19 8.5 19H9" />
      <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 .65-.14 1.27-.4 1.83A5.5 5.5 0 0 1 21 13.5c0 3.04-2.46 5.5-5.5 5.5H15" />
      <path d="M12 2v20" />
      <path d="M8 12h8" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 2v6" />
      <path d="M18 8v5a6 6 0 0 1-12 0V8z" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <line x1="12" y1="8" x2="6" y2="15" />
      <line x1="12" y1="8" x2="18" y2="15" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
};

function SkillIcon({ skill }) {
  if (skill.custom && CUSTOM_ICONS[skill.custom]) {
    return <span className="skill-custom-icon">{CUSTOM_ICONS[skill.custom]}</span>;
  }
  const Icon = SKILL_ICONS[skill.icon];
  if (Icon) {
    return <Icon size={26} className={skill.invert ? 'skill-invert' : ''} />;
  }
  return (
    <span className="skill-fallback-icon">
      {skill.name.charAt(0).toUpperCase()}
    </span>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('featured');
  const { ref, isVisible } = useReveal();

  // Extract unique categories in order of appearance
  const categories = useMemo(() => {
    const cats = [];
    skills.forEach((s) => {
      if (s.category && !cats.includes(s.category)) {
        cats.push(s.category);
      }
    });
    return cats;
  }, []);

  // Filter skills based on tab
  const filteredSkills = useMemo(() => {
    if (activeTab === 'featured') {
      return skills.filter((s) => featuredSkills.includes(s.name));
    }
    return skills.filter((s) => s.category === activeTab);
  }, [activeTab]);

  // Tab counts
  const getTabCount = (tabKey) => {
    if (tabKey === 'featured') {
      return skills.filter((s) => featuredSkills.includes(s.name)).length;
    }
    return skills.filter((s) => s.category === tabKey).length;
  };

  return (
    <section id="skills" className="section" aria-label="Technical skills">
      <div
        className={`container reveal${isVisible ? ' visible' : ''}`}
        ref={ref}
      >
        <span className="section-label">Skills</span>
        <h2 className="section-heading">Technologies & core competencies</h2>

        {/* Category Tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          <button
            role="tab"
            aria-selected={activeTab === 'featured'}
            className={`skills-tab${activeTab === 'featured' ? ' active' : ''}`}
            onClick={() => setActiveTab('featured')}
          >
            Featured <span className="tab-count">({getTabCount('featured')})</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeTab === cat}
              className={`skills-tab${activeTab === cat ? ' active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat} <span className="tab-count">({getTabCount(cat)})</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" role="tabpanel">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-top">
                <span className="skill-category-badge">{skill.category}</span>
                {skill.level && (
                  <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                )}
              </div>

              <div className="skill-icon">
                <SkillIcon skill={skill} />
              </div>

              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
