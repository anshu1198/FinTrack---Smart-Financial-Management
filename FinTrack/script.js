 // Initialize spending chart
const ctx = document.getElementById('spendingChart')?.getContext('2d');
if (ctx) {
    const spendingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Spending',
                data: [3200, 3400, 3100, 3500, 3300, 3507],
                backgroundColor: '#17c3b2',
                borderRadius: 8,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Password visibility toggle
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        button.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
    });
});

// Password strength indicator
const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.querySelector('.strength-text span');

if (passwordInput && strengthBar && strengthText) {
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strength = 0;
        
        // Length check
        if (password.length >= 8) strength += 25;
        
        // Uppercase check
        if (password.match(/[A-Z]/)) strength += 25;
        
        // Lowercase check
        if (password.match(/[a-z]/)) strength += 25;
        
        // Number/Special char check
        if (password.match(/[0-9]/) || password.match(/[^A-Za-z0-9]/)) strength += 25;

        strengthBar.style.width = `${strength}%`;
        strengthBar.style.backgroundColor = 
            strength <= 25 ? '#fe6d73' :
            strength <= 50 ? '#ffb86c' :
            strength <= 75 ? '#17c3b2' :
            '#17c3b2';

        strengthText.textContent = 
            strength <= 25 ? 'Weak' :
            strength <= 50 ? 'Fair' :
            strength <= 75 ? 'Good' :
            'Strong';
    });
}

// Add animation for stats card on scroll
const statsCard = document.querySelector('.stats-card');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    { threshold: 0.1 }
);

if (statsCard) {
    statsCard.style.opacity = 0;
    statsCard.style.transform = 'translateY(20px)';
    statsCard.style.transition = 'all 0.6s ease-out';
    observer.observe(statsCard);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});