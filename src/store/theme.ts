// Dark theme only - no theme switching needed
export const initializeTheme = () => {
  // Always set to dark theme
  document.documentElement.setAttribute('data-theme', 'dark');
  document.documentElement.classList.add('dark');
};