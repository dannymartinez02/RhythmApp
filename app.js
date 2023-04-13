const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const form = document.querySelector('form');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    errorMsg.textContent = 'Ingrese su correo electrónico y contraseña';
    errorMsg.style.display = 'block';
  } else if (!isValidEmail(emailInput.value)) {
    errorMsg.textContent = 'Ingrese un correo electrónico válido';
    errorMsg.style.display = 'block';
  } else {
    // Enviar solicitud de inicio de sesión al servidor
  }
});

function isValidEmail(email) {
  // Validar que el correo electrónico tenga un formato válido
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
