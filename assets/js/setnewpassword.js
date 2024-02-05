const toggleNewPassword = document.getElementById('toggleNewPassword');
const newPassword = document.getElementById('newPassword');

toggleNewPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    newPassword.setAttribute('type', type);
    // toggle the eye slash icon
    toggleNewPassword.classList.toggle('icon-eye-slash');
    toggleNewPassword.classList.toggle('icon-eye');
});

const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPassword = document.getElementById('confirmPassword');

toggleConfirmPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    // toggle the eye slash icon
    toggleConfirmPassword.classList.toggle('icon-eye-slash');
    toggleConfirmPassword.classList.toggle('icon-eye');
});
