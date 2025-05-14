// Smooth scroll active nav (basic version)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// THEME SWITCHER (Switch style)
(function() {
  const root = document.documentElement;
  function getSwitchInput() {
    return document.getElementById('theme-switch-input');
  }
  const darkTheme = {
    '--bg': '#181a1b',
    '--text': '#f2f2f2',
    '--card-bg': '#23272a',
    '--card-shadow': '0 2px 8px rgba(0,0,0,0.25)',
    '--nav-bg': '#23272a',
    '--footer-bg': '#23272a',
    '--tag-bg': '#222',
    '--tag-text': '#fff',
    '--btn-bg': '#333',
    '--btn-text': '#fff',
  };
  const lightTheme = {
    '--bg': '#fff',
    '--text': '#222',
    '--card-bg': '#f8f8f8',
    '--card-shadow': '0 2px 8px rgba(0,0,0,0.08)',
    '--nav-bg': '#fff',
    '--footer-bg': '#f8f8f8',
    '--tag-bg': '#f2f2f2',
    '--tag-text': '#333',
    '--btn-bg': '#f2f2f2',
    '--btn-text': '#333',
  };
  function setTheme(theme) {
    const vars = theme === 'dark' ? darkTheme : lightTheme;
    Object.entries(vars).forEach(([k,v]) => root.style.setProperty(k, v));
    document.body.setAttribute('data-theme', theme);
    const switchInput = getSwitchInput();
    if (switchInput) switchInput.checked = theme === 'dark';
  }
  function getPreferredTheme() {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function toggleTheme() {
    const switchInput = getSwitchInput();
    if (!switchInput) return;
    const newTheme = switchInput.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  document.addEventListener('DOMContentLoaded', function() {
    const switchInput = getSwitchInput();
    if (switchInput) {
      switchInput.addEventListener('change', toggleTheme);
      setTheme(getPreferredTheme());
    }
  });
})();