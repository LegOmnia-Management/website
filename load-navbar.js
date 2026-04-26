// Load navbar dynamically from navbar-component.html
document.addEventListener('DOMContentLoaded', async function() {
  try {
    // Fetch the navbar component
    const response = await fetch('navbar-component.html');
    if (!response.ok) throw new Error('Failed to load navbar');

    const navbarHTML = await response.text();

    // Find the navbar container or insert before first section
    let container = document.getElementById('navbar-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'navbar-container';
      document.body.insertBefore(container, document.body.firstChild);
    }

    // Insert the navbar HTML
    container.innerHTML = navbarHTML;

    // Initialize navbar functionality
    initializeNavbar();

  } catch (error) {
    console.error('Error loading navbar:', error);
  }
});

function initializeNavbar() {
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar && window.scrollY > 10) {
      navbar.classList.add('scrolled');
    }
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcons(newTheme);
    });
  }

  // Restore saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);
}

function updateThemeIcons(theme) {
  const sunIcon = document.querySelector('.theme-icon-sun');
  const moonIcon = document.querySelector('.theme-icon-moon');
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}
