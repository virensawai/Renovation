import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Course Material', path: '/courses' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobile = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="navbar glass-nav">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            Dr. Nikhil Mhala
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `navbar-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
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

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `mobile-menu-link${isActive ? ' active' : ''}`
            }
            onClick={closeMobile}
          >
            {item.label}
          </NavLink>
        ))}

        <Link to="/contact" className="mobile-menu-cta shimmer-btn" onClick={closeMobile}>
          Schedule Appointment
        </Link>
      </div>
    </>
  );
}
