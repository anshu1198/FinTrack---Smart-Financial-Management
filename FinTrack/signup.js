 // Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

// Password strength checker
document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text span');
    const warningMessage = document.querySelector('.password-warning');

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&#]/.test(password)) strength++;

    switch (strength) {
        case 1:
            strengthBar.style.width = '25%';
            strengthBar.style.background = 'red';
            strengthText.textContent = 'Weak';
            break;
        case 2:
            strengthBar.style.width = '50%';
            strengthBar.style.background = 'orange';
            strengthText.textContent = 'Moderate';
            break;
        case 3:
            strengthBar.style.width = '75%';
            strengthBar.style.background = 'yellow';
            strengthText.textContent = 'Strong';
            break;
        case 4:
            strengthBar.style.width = '100%';
            strengthBar.style.background = 'green';
            strengthText.textContent = 'Very Strong';
            break;
        default:
            strengthBar.style.width = '0';
            strengthText.textContent = 'Weak';
    }

    // Show warning if password is weak
    if (strength < 3) {
        warningMessage.style.display = 'block';
    } else {
        warningMessage.style.display = 'none';
    }
});

// Form submission simulation
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const termsAccepted = document.getElementById('termsCheckbox').checked;

    if (!termsAccepted) {
        alert('You must accept the Terms of Service and Privacy Policy.');
        return;
    }

    alert(`Account created successfully for ${firstName} ${lastName} with email: ${email}`);
    // Redirect to sign-in page
    window.location.href = 'signin.html';
});