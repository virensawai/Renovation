import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies IntersectionObserver-based
 * scroll animations to elements with the class "animate-on-scroll".
 * Call this hook in any page component that needs scroll animations.
 */
export default function useScrollAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current || document;
    const elements = root.querySelectorAll('.animate-on-scroll');

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return containerRef;
}
