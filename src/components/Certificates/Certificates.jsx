import { FiAward, FiExternalLink, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { certifications } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import './Certificates.css';

export default function Certificates() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="certificates" className="section" aria-label="Certificates and Credentials">
      <div
        className={`container reveal${isVisible ? ' visible' : ''}`}
        ref={ref}
      >
        <span className="section-label">Certificates</span>
        <h2 className="section-heading">Verified credentials & honors</h2>

        <div className="certificates-grid">
          {certifications.map((cert, index) => {
            const hasValidUrl =
              cert.credentialUrl &&
              typeof cert.credentialUrl === 'string' &&
              cert.credentialUrl.trim() !== '' &&
              !cert.credentialUrl.includes('TODO');

            return (
              <div key={index} className="certificate-card">
                <div className="certificate-card-top">
                  <div className="certificate-issuer-tag">
                    <FiAward className="certificate-icon" size={16} />
                    <span>{cert.issuer}</span>
                  </div>
                  {cert.issueDate && (
                    <span className="certificate-date">
                      <FiCalendar size={13} />
                      {cert.issueDate}
                    </span>
                  )}
                </div>

                <h3 className="certificate-name">{cert.name}</h3>

                {cert.description && (
                  <p className="certificate-description">{cert.description}</p>
                )}

                <div className="certificate-footer">
                  <div className="certificate-status">
                    <FiCheckCircle size={14} className="status-icon" />
                    <span>Verified Credential</span>
                  </div>

                  {hasValidUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-btn"
                      aria-label={`View certificate for ${cert.name}`}
                    >
                      <span>View Certificate</span>
                      <FiExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="certificate-btn disabled" title="Credential ID available on request">
                      <span>Credential on File</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
