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
 * level:    proficiency tier (Proficient | Working | Exploring) - independent of category
 * icon:     key for react-icons lookup
 * custom:   key for inline SVG fallback when no matching react-icon exists
 * invert:   boolean - render icon inverted in dark mode (e.g. GitHub mark)
 */
export const skills = [
  // Languages
  { name: 'Java', category: 'Languages', level: 'Proficient', icon: 'java' },
  { name: 'Python', category: 'Languages', level: 'Proficient', icon: 'python' },
  { name: 'SQL', category: 'Languages', level: 'Proficient', custom: 'database' },
  { name: 'JavaScript', category: 'Languages', level: 'Working', icon: 'javascript' },
  { name: 'C++', category: 'Languages', level: 'Working', icon: 'cpp' },
  { name: 'C', category: 'Languages', level: 'Working', icon: 'c' },
  { name: 'HTML5', category: 'Languages', level: 'Proficient', icon: 'html5' },
  { name: 'CSS3', category: 'Languages', level: 'Proficient', icon: 'css3' },

  // Frameworks & Libraries
  { name: 'Spring Boot', category: 'Frameworks', level: 'Proficient', icon: 'spring' },
  { name: 'Spring Security', category: 'Frameworks', level: 'Working', icon: 'spring' },
  { name: 'FastAPI', category: 'Frameworks', level: 'Working', custom: 'api' },
  { name: 'React', category: 'Frameworks', level: 'Proficient', icon: 'react' },
  { name: 'LangGraph', category: 'Frameworks', level: 'Exploring', custom: 'brain' },
  { name: 'JDBC', category: 'Frameworks', level: 'Working', custom: 'plug' },
  { name: 'NumPy', category: 'Frameworks', level: 'Exploring', icon: 'numpy' },
  { name: 'Pandas', category: 'Frameworks', level: 'Exploring', icon: 'pandas' },
  { name: 'Scikit-Learn', category: 'Frameworks', level: 'Exploring', icon: 'scikitlearn' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 'Working', icon: 'postgresql' },
  { name: 'MySQL', category: 'Databases', level: 'Working', icon: 'mysql' },

  // Infrastructure
  { name: 'Redis', category: 'Infrastructure', level: 'Exploring', icon: 'redis' },
  { name: 'Docker', category: 'Infrastructure', level: 'Exploring', icon: 'docker' },

  // Core concepts
  { name: 'OOP', category: 'Core', level: 'Proficient', custom: 'layers' },
  { name: 'DSA', category: 'Core', level: 'Proficient', custom: 'tree' },
  { name: 'RESTful APIs', category: 'Core', level: 'Working', custom: 'api' },
  { name: 'JWT Authentication', category: 'Core', level: 'Working', custom: 'lock' },

  // Tools
  { name: 'Git', category: 'Tools', level: 'Proficient', icon: 'git' },
  { name: 'GitHub', category: 'Tools', level: 'Proficient', icon: 'github', invert: true },
  { name: 'VS Code', category: 'Tools', level: 'Proficient', icon: 'vscode' },
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
    summary: 'Evidence-driven infrastructure diagnostics platform that transforms network, application, and system probe results into explainable root-cause hypotheses.',
    role: 'Backend & AI Reasoning Developer',
    challenge: 'Developing the AI reasoning and diagnosis pipeline while integrating asynchronous diagnostic results with the backend and maintaining evidence-backed, explainable outputs.',
    highlights: [
      'Built a LangGraph diagnosis workflow with specialist agents that analyze network, system, and application evidence, validate findings, and produce ranked root-cause hypotheses with confidence scores and recommendations.',
      'Connected the diagnostics engine, Redis Streams, and FastAPI backend for asynchronous diagnosis jobs, PostgreSQL persistence, and real-time status updates over WebSockets.',
      'Built the React operator dashboard for managing targets and diagnosis jobs, viewing live progress and history, and inspecting evidence, hypotheses, confidence, and recommendations.',
      'Implemented JWT authentication and role-based authorization, including admin-only user management and remediation approvals; added cloud LLM explanations with deterministic fallback.'
    ],
    github: 'https://github.com/Rohit-GP/infrapilot',
    live: null, 
  },
  {
    name: 'BlogApp',
    timeline: 'Feb 2026 – Mar 2026',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL', 'REST APIs'],
    summary: 'Full-stack blogging platform with stateless JWT authentication and role-based access control.',
    role: 'Full-Stack Developer - Team Project',
    challenge: 'Contributing across the frontend, backend, authentication, and database layers while integrating the components into a cohesive full-stack application.',
    highlights: [
      'Developed and integrated frontend and backend features using React, Spring Boot, and REST APIs for core blogging functionality.',
      'Implemented stateless JWT authentication and Spring Security with role-based access control for securing protected application features and REST endpoints.',
      'Designed and integrated the MySQL data layer using Spring Data JPA/JDBC, contributing across application logic, data persistence, and full-stack integration.'
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
