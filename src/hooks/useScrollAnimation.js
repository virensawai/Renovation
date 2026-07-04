import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies IntersectionObserver-based
 * scroll animations to elements with scroll animation classes.
 *
 * Supports:
 * - .animate-on-scroll       → fade up (translateY)
 * - .animate-on-scroll-left  → slide in from left (translateX)
 * - .animate-on-scroll-right → slide in from right (translateX)
 *
 * Respects prefers-reduced-motion by skipping observer setup.
 * Call this hook in any page component that needs scroll animations.
 */
export default function useScrollAnimation(dependencies = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const root = containerRef.current || document;
    const selector = '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right';
    const elements = root.querySelectorAll(selector);

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
  }, dependencies);

  return containerRef;
}
