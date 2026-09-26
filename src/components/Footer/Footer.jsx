import { personalInfo } from '../../data/profile';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <span>© {year} {personalInfo.name}</span>
        <span className="footer-separator">·</span>
        <span>
          Built with <span className="footer-accent">React</span> +{' '}
          <span className="footer-accent">Vite</span>
        </span>
        <span className="footer-separator">·</span>
        <span>Last updated Sep 2026</span>
      </div>
    </footer>
  );
}
