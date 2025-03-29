const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

// Form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Message sent successfully!');
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(0, 46, 77, 0.9)';
  } else {
    header.style.backgroundColor = 'var(--primary-color)';
  }
});

// Image error handling
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.onerror = () => {
    img.src = 'https://via.placeholder.com/300?text=Image+Not+Available';
  };
});