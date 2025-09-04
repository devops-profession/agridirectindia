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
