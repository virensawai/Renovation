import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Course materias', path: '/courses' },
  { label: 'Attendance', path: '/attendance' },
  { label: 'Marks', path: '/marks' },
  { label: 'Assignment', path: '/assignment' },
  { label: 'Announcements', path: '/announcements' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
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

  // Scroll-direction detection: hide on scroll-down, show on scroll-up
  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setIsScrolled(currentScroll > 20);

    // Don't hide when mobile menu is open
    if (isMobileMenuOpen) return;

    if (currentScroll > 100 && currentScroll > handleScroll._lastScroll) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    handleScroll._lastScroll = currentScroll;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    handleScroll._lastScroll = 0;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMobile();
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navbarClasses = [
    'navbar',
    'glass-nav',
    isScrolled ? 'scrolled' : '',
    isHidden ? 'hidden' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navbarClasses}>
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

          {/* Actions Group (CTA / Mobile Menu & Theme Toggle) */}
          <div className="navbar-actions">
            {/* Desktop CTA */}
            <Link to="/contact" className="navbar-cta shimmer-btn">
              Schedule Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="navbar-mobile-btn"
              onClick={toggleMobile}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                menu
              </span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
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

        {/* Theme Toggle (Mobile) */}
        <div className="mobile-theme-toggle-wrapper">
          <ThemeToggle />
          <span className="mobile-theme-label">Toggle Theme</span>
        </div>

        {navItems.map((item, index) => {
          const active = checkIsActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-menu-link${active ? ' active' : ''}`}
              onClick={closeMobile}
              style={{ transitionDelay: isMobileMenuOpen ? `${(index + 1) * 50}ms` : '0ms' }}
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

