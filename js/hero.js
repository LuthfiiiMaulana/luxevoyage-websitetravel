/**
 * hero.js — auto-rotating hero background slideshow.
 */

const HERO_INTERVAL_MS = 5000;
let heroTimer = null;

function initHeroSlider() {
  if (heroTimer) return; // already running (e.g. after re-login)

  const slides = document.querySelectorAll('.hero-bg-slide');
  if (slides.length < 2) return;

  let index = 0;
  heroTimer = setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, HERO_INTERVAL_MS);
}
