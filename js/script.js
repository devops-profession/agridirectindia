document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav a');

  // Toggle menu
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside (on the overlay area)
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      menuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Set year dynamically in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Simple contact form alert
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks! We'll get back to you shortly.");
    form.reset();
  });
}
