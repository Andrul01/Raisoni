 

// Add this script to your HTML file to make the website responsive.
// This script makes the navigation menu collapse on smaller screens.
const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});