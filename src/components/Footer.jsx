import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="footer-brand">
          Dr. Nikhil Mhala
        </Link>

        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} Dr. Nikhil Mhala. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
