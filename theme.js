// theme.js — shared across all pages
// Saves preference to localStorage and applies on load

(function () {
  const STORAGE_KEY = 'sg_theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    // Update any toggle buttons on the page
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    });
  }

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  }

  function toggleTheme() {
    const current = getTheme();
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Apply immediately on script load (prevents flash)
  applyTheme(getTheme());

  // Expose globally
  window.SG = window.SG || {};
  window.SG.toggleTheme = toggleTheme;
  window.SG.getTheme = getTheme;
  window.SG.applyTheme = applyTheme;
})();
