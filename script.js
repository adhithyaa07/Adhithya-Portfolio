const toggleBtn = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('icon-moon');
const sunIcon = document.getElementById('icon-sun');
const root = document.documentElement;

// On load: respect a saved preference, otherwise respect the OS setting
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (saved === 'dark' || (!saved && prefersDark)) {
    root.classList.add('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
}

toggleBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    moonIcon.style.display = isDark ? 'none' : 'block';
    sunIcon.style.display = isDark ? 'block' : 'none';
});
