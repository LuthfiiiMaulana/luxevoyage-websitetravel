/**
 * booking.js — 4-step booking modal:
 *   1) passengers  2) personal details  3) payment  4) confirmation
 * Everything is simulated (no backend).
 */

const PRICING = {
  base: 12500000,        // first adult
  extraAdult: 10000000,  // each additional adult
  child: 7000000,        // each child (infants are free)
  fee: 750000,           // taxes & fees
};

const REQUIRED_FIELDS = ['f-firstname', 'f-lastname', 'f-email', 'f-phone', 'f-address'];

let currentStep = 1;
let bookingDest = '';
const passengerCounts = { adult: 1, child: 0, infant: 0 };

/* ---------- Open / close ---------- */
function openBookingModal(dest) {
  bookingDest = dest;
  document.getElementById('modal-title').textContent = 'Pesan – ' + dest;
  document.getElementById('modal-sub').textContent = 'Isi data Anda untuk melanjutkan pemesanan';
  currentStep = 1;
  updateStepUI();
  document.getElementById('booking-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('booking-modal').classList.remove('open');
  document.body.style.overflow = '';
  currentStep = 1;
  updateStepUI();
}

/* ---------- Steps ---------- */
function goStep(n) {
  if (n === 3 && currentStep === 2 && !validatePersonalDetails()) return;
  if (n === 3) fillSummary();
  currentStep = n;
  updateStepUI();
}

function updateStepUI() {
  for (let i = 1; i <= 4; i++) {
    const step = document.getElementById('bstep-' + i);
    const indicator = document.getElementById('step-ind-' + i);
    if (step) step.classList.toggle('active', i === currentStep);
    if (indicator) {
      indicator.classList.toggle('active', i === currentStep);
      indicator.classList.toggle('done', i < currentStep);
    }
  }
}

/* ---------- Step 1: passengers ---------- */
function changeCount(type, delta) {
  const min = type === 'adult' ? 1 : 0;
  passengerCounts[type] = Math.max(min, passengerCounts[type] + delta);
  document.getElementById(type + '-count').textContent = passengerCounts[type];
}

/* ---------- Step 2: validation ---------- */
function validatePersonalDetails() {
  let valid = true;

  REQUIRED_FIELDS.forEach((id) => {
    const input = document.getElementById(id);
    const empty = !input.value.trim();
    input.classList.toggle('field-error', empty);
    if (empty) valid = false;
  });
  if (!valid) {
    showToast('Lengkapi nama lengkap, email, telepon, dan alamat');
    return false;
  }

  const email = document.getElementById('f-email');
  const emailOk = /^\S+@\S+\.\S+$/.test(email.value.trim());
  email.classList.toggle('field-error', !emailOk);
  if (!emailOk) {
    showToast('Format email tidak valid');
    return false;
  }
  return true;
}

/* ---------- Step 3: summary & payment ---------- */
function calculateTotal() {
  const { adult, child } = passengerCounts;
  const subtotal = PRICING.base
    + (adult - 1) * PRICING.extraAdult
    + child * PRICING.child;
  return subtotal + PRICING.fee;
}

function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function fillSummary() {
  const { adult, child, infant } = passengerCounts;
  const first = document.getElementById('f-firstname').value.trim() || '—';
  const last = document.getElementById('f-lastname').value.trim();

  document.getElementById('sum-dest').textContent = bookingDest;
  document.getElementById('sum-pass').textContent =
    adult + ' Dewasa'
    + (child > 0 ? ', ' + child + ' Anak' : '')
    + (infant > 0 ? ', ' + infant + ' Bayi' : '');
  document.getElementById('sum-name').textContent = (first + ' ' + last).trim();
  document.getElementById('sum-total').textContent = formatRupiah(calculateTotal());
}

function selectPayment(el) {
  document.querySelectorAll('.pay-method').forEach((m) => m.classList.remove('selected'));
  el.classList.add('selected');
  const isCard = el.textContent.includes('Kartu');
  document.getElementById('card-form').style.display = isCard ? 'block' : 'none';
}

function processPayment(btn) {
  const payingByCard = document.getElementById('card-form').style.display !== 'none';
  if (payingByCard) {
    const digits = document.getElementById('card-num').value.replace(/\D/g, '');
    if (digits.length < 13) {
      showToast('Nomor kartu tidak valid');
      return;
    }
  }

  btn.textContent = '⏳ Memproses...';
  btn.disabled = true;

  setTimeout(() => {
    const ref = 'LXV-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('booking-ref').textContent = ref;
    goStep(4);
    btn.textContent = '🔒 Bayar Sekarang';
    btn.disabled = false;
    showToast('✅ Pemesanan berhasil dikonfirmasi!');
  }, 2000);
}

/* ---------- Input formatters ---------- */
function formatCard(input) {
  const digits = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = digits.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(input) {
  let digits = input.value.replace(/\D/g, '').substring(0, 4);
  if (digits.length >= 2) digits = digits.substring(0, 2) + '/' + digits.substring(2);
  input.value = digits;
}

/* ---------- Init ---------- */
function initBooking() {
  // Click on the dark backdrop closes the modal
  const modal = document.getElementById('booking-modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Clear error styling as the user types
  REQUIRED_FIELDS.forEach((id) => {
    document.getElementById(id).addEventListener('input', (e) => {
      e.target.classList.remove('field-error');
    });
  });

  // Dates cannot be in the past
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach((i) => i.setAttribute('min', today));
}
