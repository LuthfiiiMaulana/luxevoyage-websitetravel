/**
 * auth.js — demo login / register / logout.
 * No backend: any non-empty credentials succeed.
 */

let currentUser = '';

function switchTab(tab) {
  const isLogin = tab === 'login';
  document.querySelectorAll('.tab-switch button').forEach((btn, i) => {
    btn.classList.toggle('active', isLogin ? i === 0 : i === 1);
  });
  document.getElementById('login-form').classList.toggle('hidden', !isLogin);
  document.getElementById('register-form').classList.toggle('hidden', isLogin);
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) {
    showToast('Silakan isi email dan kata sandi');
    return;
  }
  currentUser = email.split('@')[0];
  enterSite();
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  if (!name || !email || !pass) {
    showToast('Harap isi semua kolom');
    return;
  }
  currentUser = name.split(' ')[0];
  enterSite();
}

function enterSite() {
  const loginPage = document.getElementById('login-page');
  loginPage.style.transition = 'opacity 0.8s';
  loginPage.style.opacity = '0';

  setTimeout(() => {
    loginPage.style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
    document.getElementById('nav-username').textContent = '👤 ' + currentUser;
    initSite();
  }, 800);
}

function doLogout() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('main-site').style.display = 'none';

  const loginPage = document.getElementById('login-page');
  loginPage.style.display = 'flex';
  loginPage.style.opacity = '1';

  document.getElementById('login-email').value = '';
  document.getElementById('login-pass').value = '';
  window.scrollTo(0, 0);
}

/** Submit login/register forms with the Enter key. */
function initAuth() {
  document.querySelectorAll('#login-form input').forEach((input) => {
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });
  });
  document.querySelectorAll('#register-form input').forEach((input) => {
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doRegister(); });
  });
}
