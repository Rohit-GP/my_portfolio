/* ============================================================
   profile.js - Single source of truth for all portfolio content
   Extracted from Rohit GP's resume.
   ============================================================ */

export const personalInfo = {
  name: 'Rohit GP',
  initials: 'GPR',
  title: 'Full-Stack Developer',
  titles: [
    'Full-Stack Developer',
    'Java & Spring Boot Developer',
    'React Developer',
    'Agentic AI Builder',
  ],
  location: 'Chennai, India',
  email: 'gp.rohit1201@gmail.com',
  photo: '/profile.jpg',
  intro: 'Building intelligent, production-grade systems with clean architecture and modern tooling.',
  bio: 'Undergraduate engineer building robust full-stack systems with Java, Spring Boot, and React - and exploring the frontier of agentic AI with FastAPI, LangGraph, and event-driven pipelines. Passionate about clean architecture, system observability, and turning complex problems into maintainable, well-tested software.',
  resumeUrl: '/resume.pdf',
};

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/rohit-gp',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rohit-gp',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=gp.rohit1201@gmail.com&su=Portfolio%20Inquiry",
    icon: 'email',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Rohit_GP/',
    icon: 'leetcode',
  },
];

/**
 * Skills - flat array.
 * category: drives tab filters (Featured / Languages / Frameworks / Databases / Infrastructure / Core / Tools)
 * level:    proficiency tier (Core | Working | Learning) - independent of category
 * icon:     key for react-icons lookup
 * custom:   key for inline SVG fallback when no matching react-icon exists
 * invert:   boolean - render icon inverted in dark mode (e.g. GitHub mark)
 */
export const skills = [
  // Languages
  { name: 'Java', category: 'Languages', level: 'Strong', icon: 'java' },
  { name: 'Python', category: 'Languages', level: 'Strong', icon: 'python' },
  { name: 'SQL', category: 'Languages', level: 'Strong', custom: 'database' },
  { name: 'JavaScript', category: 'Languages', level: 'Working', icon: 'javascript' },
  { name: 'C++', category: 'Languages', level: 'Working', icon: 'cpp' },
  { name: 'C', category: 'Languages', level: 'Working', icon: 'c' },
  { name: 'HTML5', category: 'Languages', level: 'Strong', icon: 'html5' },
  { name: 'CSS3', category: 'Languages', level: 'Strong', icon: 'css3' },

  // Frameworks & Libraries
  { name: 'Spring Boot', category: 'Frameworks', level: 'Strong', icon: 'spring' },
  { name: 'Spring Security', category: 'Frameworks', level: 'Working', icon: 'spring' },
  { name: 'FastAPI', category: 'Frameworks', level: 'Working', custom: 'api' },
  { name: 'React', category: 'Frameworks', level: 'Strong', icon: 'react' },
  { name: 'LangGraph', category: 'Frameworks', level: 'Learning', custom: 'brain' },
  { name: 'JDBC', category: 'Frameworks', level: 'Working', custom: 'plug' },
  { name: 'NumPy', category: 'Frameworks', level: 'Learning', icon: 'numpy' },
  { name: 'Pandas', category: 'Frameworks', level: 'Learning', icon: 'pandas' },
  { name: 'Scikit-Learn', category: 'Frameworks', level: 'Learning', icon: 'scikitlearn' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 'Working', icon: 'postgresql' },
  { name: 'MySQL', category: 'Databases', level: 'Working', icon: 'mysql' },

  // Infrastructure
  { name: 'Redis', category: 'Infrastructure', level: 'Learning', icon: 'redis' },
  { name: 'Docker', category: 'Infrastructure', level: 'Learning', icon: 'docker' },

  // Core concepts
  { name: 'OOP', category: 'Core', level: 'Strong', custom: 'layers' },
  { name: 'DSA', category: 'Core', level: 'Strong', custom: 'tree' },
  { name: 'RESTful APIs', category: 'Core', level: 'Working', custom: 'api' },
  { name: 'JWT Authentication', category: 'Core', level: 'Working', custom: 'lock' },

  // Tools
  { name: 'Git', category: 'Tools', level: 'Strong', icon: 'git' },
  { name: 'GitHub', category: 'Tools', level: 'Strong', icon: 'github', invert: true },
  { name: 'VS Code', category: 'Tools', level: 'Strong', icon: 'vscode' },
];

/** Skills shown in the "Featured" tab */
export const featuredSkills = [
  'Java', 'Python', 'React', 'Spring Boot', 'FastAPI',
  'Docker', 'PostgreSQL', 'LangGraph', 'JavaScript', 'Redis',
  'Git', 'Spring Security',
];

export const projects = [
  {
    name: 'InfraPilot',
    timeline: 'Aug 2026 – Sep 2026',
    stack: ['Python', 'FastAPI', 'LangGraph', 'React', 'Redis Streams', 'PostgreSQL', 'Docker'],
    summary: 'Explainable Agentic NOC prototype for automated network, application, and system diagnostics.',
    role: 'Sole Developer',
    challenge: 'Building a multi-agent diagnostic system with deterministic fallbacks when LLM reasoning is unavailable.',
    highlights: [
      'Built an explainable Agentic NOC prototype for automated network, application, and system diagnostics using structured evidence and multi-agent reasoning.',
      'Developed an event-driven pipeline with FastAPI, Redis Streams, and LangGraph agents for evidence analysis, validation, and root-cause diagnosis.',
      'Containerized the multi-service platform with Docker Compose and implemented deterministic fallbacks for reliable diagnosis when LLM reasoning is unavailable.',
    ],
    github: 'https://github.com/Rohit-GP/infrapilot',
    live: null, // TODO: add project live URL if available
  },
  {
    name: 'BlogApp',
    timeline: 'Feb 2026 – Mar 2026',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL', 'REST APIs'],
    summary: 'Full-stack blogging platform with stateless JWT authentication and role-based access control.',
    role: 'Sole Developer',
    challenge: 'Designing a normalized database schema and integrating Spring Data JPA/JDBC for reliable data persistence.',
    highlights: [
      'Engineered a full-stack blogging platform with stateless JWT authentication and Spring Security, implementing role-based access control for protected REST endpoints.',
      'Designed a normalized MySQL database schema and integrated Spring Data JPA/JDBC for reliable relational data persistence and application-level data access.',
    ],
    github: 'https://github.com/Rohit-GP/blog-app', 
    live: null, // TODO: add project live URL if available
  },
];

export const experience = [
  {
    company: 'Saveetha Speakers Forum',
    role: 'Event Organizer / Administrator',
    location: 'Chennai, India',
    dates: '2024 – 2025',
    highlights: [
      'Coordinated logistics, cross-team communication, and administration for campus events and workshops, supporting on-schedule execution and participant management.',
    ],
  },
  {
    company: 'RETECH Solutions Pvt Ltd',
    role: 'Machine Learning Intern',
    location: 'Chennai, India',
    dates: '2024 – Present',
    highlights: [
      'Studied machine learning fundamentals and algorithms, practiced object detection techniques, and developed a small-scale object detection project using YOLOv8, strengthening practical skills in computer vision and model implementation.',
    ],
  },
];

export const education = [
  {
    institution: 'Saveetha Engineering College',
    degree: 'Bachelor of Technology in Information Technology',
    location: 'Chennai, India',
    dates: 'Expected May 2028',
    gpa: '9.48 / 10.0',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Java Full Stack Development',
    ],
  },
];

/**
 * certifications - each entry is one certificate.
 * Fields: name, issuer, issueDate, description, credentialUrl
 * If credentialUrl is null, no link is rendered on the card.
 */
export const certifications = [
  {
    name: 'Oracle Certified Professional: Java SE 21 Developer',
    issuer: 'Oracle University',
    issueDate: 'Dec 2025',
    description: 'Demonstrated proficiency in core Java, OOP, memory management, JPMS, Streams API, and concurrency.',
    credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=DD1A5DC320120C113874BF7F7D12EEB98C861E798FD9DF87823704056000F766', 
  },

  {
    name: 'Google AI Essentials',
    issuer: 'Google (Coursera)',
    issueDate: 'Nov 2024',
    description: 'Demonstrated knowledge of generative AI, prompt engineering, responsible AI, and practical AI applications.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/5R71TZE52041', 
  },
];

export const stats = [
  { label: 'CGPA', value: '9.48', suffix: '/ 10' },
  { label: 'LeetCode Problems', value: '250', suffix: '+' },
  { label: 'Certifications', value: '2', suffix: '' },
  { label: 'Projects', value: '2', suffix: '+' },
];
