import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="nf-container">
        <div className="nf-code">404</div>
        <h1 className="nf-title">Page Not Found</h1>
        <p className="nf-description">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link to="/" className="nf-home-link shimmer-btn">
          <span className="material-symbols-outlined">home</span>
          Back to Home
        </Link>
        <hr className="nf-divider" />
        <p className="nf-suggestion">
          Looking for course materials? Visit the{' '}
          <Link to="/">Course Materials</Link> page, or{' '}
          <Link to="/contact">get in touch</Link>.
        </p>
      </div>
    </main>
  );
}
