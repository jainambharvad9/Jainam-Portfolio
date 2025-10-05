document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize dark mode toggle
    initDarkModeToggle();
    
    // Initialize text animations
    animateText();
});

function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        // Add a slight delay based on the element's position
        const delay = element.style.animationDelay || '0s';
        element.style.transitionDelay = delay;
        observer.observe(element);
    });
}

function animateText() {
    const textElements = document.querySelectorAll('.animate-text');
    
    textElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.1}s`;
        setTimeout(() => {
            element.classList.add('active');
        }, 300);
    });
}

function initDarkModeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;
    
    // Check for saved theme preference or use default dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(`${savedTheme}-mode`);
    updateThemeIcon(themeIcon, savedTheme);
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
            updateThemeIcon(themeIcon, 'light');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon(themeIcon, 'dark');
        }
    });
}

function updateThemeIcon(iconElement, theme) {
    if (theme === 'dark') {
        iconElement.className = 'fas fa-sun';
    } else {
        iconElement.className = 'fas fa-moon';
    }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effects for skill cards
const skillCards = document.querySelectorAll('.skill-card, .project-card, .interest-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});