import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      <span
        className={`material-symbols-outlined theme-toggle-icon ${isDark ? 'icon-exit' : 'icon-enter'}`}
        aria-hidden="true"
      >
        light_mode
      </span>
      <span
        className={`material-symbols-outlined theme-toggle-icon ${isDark ? 'icon-enter' : 'icon-exit'}`}
        aria-hidden="true"
      >
        dark_mode
      </span>
    </button>
  );
}
