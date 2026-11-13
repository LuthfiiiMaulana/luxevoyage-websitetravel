/**
 * search.js — switch between Flights / Hotel / Car tabs in the search box.
 */

function setTab(btn, type) {
  document.querySelectorAll('.search-tab').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  ['flights', 'hotel', 'car'].forEach((name) => {
    const panel = document.getElementById('search-fields-' + name);
    if (panel) panel.classList.toggle('hidden', name !== type);
  });
}
