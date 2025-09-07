// ====================
//  Part 1: Event Handling
// ====================

// Toggle Light/Dark Mode
const toggleModeBtn = document.getElementById('toggleModeBtn');
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

// ====================
//  Part 2: Interactive Elements
// ====================

// Counter Feature
let count = 0;
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  counterDisplay.textContent = count;
});

// ====================
//  Part 3: Form Validation
// ====================

const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

// Helper function to validate email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.textContent = '';

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Email validation
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    isValid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = 'Form submitted successfully!';
    form.reset();
  }
});
