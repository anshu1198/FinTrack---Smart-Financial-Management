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

// Simulate login
document.getElementById('signinForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Hardcoded credentials for simulation
    const validEmail = "user@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
        alert("Login successful! Redirecting to dashboard...");
        // Simulate redirection
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});