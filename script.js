// Mithila Yoga — minimal interactions

// Mobile nav toggle
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.section, .figure-card, .pillar-card, .space-card, .visit-card, .program-card, .info-card, .gallery-card');
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => io.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Nav background blur on scroll
const navEl = document.querySelector('.nav');
if (navEl) {
  const onScroll = () => {
    if (window.scrollY > 24) navEl.classList.add('scrolled');
    else navEl.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
