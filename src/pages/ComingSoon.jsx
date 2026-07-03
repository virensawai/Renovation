import { Link } from 'react-router-dom';
import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <main className="coming-soon-page">
      <div className="cs-container">
        {/* Centerpiece SVG Illustration */}
        <div className="cs-illustration-wrapper">
          <img
            src="/Hand coding-amico.svg"
            alt="Collaboration and Coding Illustration"
            className="cs-illustration"
          />
        </div>

        {/* Main Title */}
        <h1 className="cs-title">Coming Soon</h1>

        {/* Description */}
        <p className="cs-description description">
          We're working hard to bring you new and exciting content. This section
          of Prof. Nikhil Mhala's Course Portal is currently under construction.
        </p>

        {/* Subheading */}
        <h2 className="cs-subtitle-heading">Launching Soon</h2>

        {/* Subtitle */}
        <p className="cs-subtitle subtitle">
          Stay tuned for updates on course materials, research publications, and
          more!
        </p>

        {/* Home Link */}
        <div className="cs-home-link-wrapper">
          <Link to="/" className="cs-home-link home-link">
            ← Back to Home Page
          </Link>
        </div>
      </div>
    </main>
  );
}
