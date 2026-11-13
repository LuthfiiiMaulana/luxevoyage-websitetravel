/**
 * navbar.js — sticky navbar style on scroll + mobile menu toggle.
 */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
