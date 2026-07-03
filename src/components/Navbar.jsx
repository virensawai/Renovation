import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Course Material', path: '/courses' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobile = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobile = () => setIsMobileMenuOpen(false);

  const checkIsActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    if (path === '/#research') {
      return location.pathname === '/' && location.hash === '#research';
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav className="navbar glass-nav">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            Dr. Nikhil Mhala
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navItems.map((item) => {
              const active = checkIsActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`navbar-link${active ? ' active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link to="/contact" className="navbar-cta shimmer-btn">
            Schedule Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-btn"
            onClick={toggleMobile}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
              menu
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay${isMobileMenuOpen ? ' open' : ''}`}
        onClick={closeMobile}
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu${isMobileMenuOpen ? ' open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMobile} aria-label="Close menu">
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
            close
          </span>
        </button>

        {navItems.map((item) => {
          const active = checkIsActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-menu-link${active ? ' active' : ''}`}
              onClick={closeMobile}
            >
              {item.label}
            </Link>
          );
        })}

        <Link to="/contact" className="mobile-menu-cta shimmer-btn" onClick={closeMobile}>
          Schedule Appointment
        </Link>
      </div>
    </>
  );
}
