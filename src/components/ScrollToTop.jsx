import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTopButton.css';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Route-change scroll behavior (existing)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Floating button visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top-btn${isVisible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        keyboard_arrow_up
      </span>
    </button>
  );
}

