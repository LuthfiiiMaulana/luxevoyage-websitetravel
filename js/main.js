/**
 * main.js — application entry point.
 * Wires up modules once the DOM is ready; initSite() runs after login.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initNavbar();
  initBooking();
});

/** Starts animations that only matter once the main site is visible. */
function initSite() {
  initHeroSlider();
  initOceanCanvas();
  initScrollReveal();
}
