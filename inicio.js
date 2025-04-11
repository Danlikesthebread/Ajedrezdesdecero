const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || password === '') {
        errorMessage.textContent = 'Por favor, ingrese tanto el correo electrónico como la contraseña.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        errorMessage.style.display = 'block';
        return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
        errorMessage.style.display = 'block';
        return;
    }



    window.location.href = 'index.html'; 
});