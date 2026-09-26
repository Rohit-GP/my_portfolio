import { useState, useCallback } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, socialLinks } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import './Contact.css';

const ICON_MAP = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  leetcode: SiLeetcode,
};

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
      );
    },
    [formData]
  );

  return (
    <section id="contact" className="section" aria-label="Contact me">
      <div
        className={`container reveal${isVisible ? ' visible' : ''}`}
        ref={ref}
      >
        <span className="section-label">Contact</span>
        <h2 className="section-heading">Let's connect</h2>

        <div className="contact-inner">
          <div className="contact-text">
            <p className="contact-description">
              I'm always open to discussing new projects, collaborations, or
              opportunities. Whether you have a question or just want to say
              hello - feel free to reach out.
            </p>

            <div className="contact-socials">
              {socialLinks.map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={link.name}
                    title={link.name}
                  >
                    {Icon ? <Icon size={20} /> : link.name[0]}
                  </a>
                );
              })}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="form-input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form-submit">
              <FiSend size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
