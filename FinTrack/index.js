// Handle the Subscribe button click
document.getElementById('subscribeButton').addEventListener('click', function () {
    const emailInput = document.getElementById('newsletterEmail');
    const subscriptionMessage = document.getElementById('subscriptionMessage');

    // Get the email value
    const email = emailInput.value.trim();

    // Validate the email input
    if (!email) {
        subscriptionMessage.style.color = 'red';
        subscriptionMessage.textContent = 'Please enter your email address.';
        subscriptionMessage.style.display = 'block';
        return;
    }

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        subscriptionMessage.style.color = 'red';
        subscriptionMessage.textContent = 'Please enter a valid email address.';
        subscriptionMessage.style.display = 'block';
        return;
    }

    // Display success message
    subscriptionMessage.style.color = 'green';
    subscriptionMessage.textContent = 'Thank you for subscribing!';
    subscriptionMessage.style.display = 'block';

    // Clear the email input
    emailInput.value = '';
});

// Handle mobile menu toggle (if applicable)
const mobileMenuButton = document.querySelector('.mobile-menu-btn');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
}