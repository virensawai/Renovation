import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext(undefined);

/**
 * Determines the initial theme:
 * 1. Check localStorage for saved preference
 * 2. Fall back to OS preference via matchMedia
 * 3. Default to 'light'
 */
function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') return saved;

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to <html> and persist to localStorage
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);

    // Update the meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#0F172A' : '#1a5276'
      );
    }
  }, [theme]);

  // Listen for OS preference changes (only applies when no saved pref)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const saved = localStorage.getItem('theme');
      if (!saved) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access theme state and toggle function.
 * Must be used within a <ThemeProvider>.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
