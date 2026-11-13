/**
 * utils.js — shared helpers: toast notification & scroll-reveal.
 */

/* ---------- Toast ---------- */
let toastTimer;

function showToast(message, duration = 3500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ---------- Scroll reveal ---------- */
let revealObserver;

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal:not(.visible)');

  // Fallback for very old browsers
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('visible'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1 });
  }

  targets.forEach((el) => revealObserver.observe(el));
}
