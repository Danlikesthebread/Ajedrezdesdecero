const form = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Por favor, complete todos los campos.';
        errorMessage.style.display = 'block';
        return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        errorMessage.style.display = 'block';
        return;
    }

    window.location.href = 'index.html'});