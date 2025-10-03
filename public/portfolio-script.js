// Language Switcher
let currentLang = 'es';

document.getElementById('langBtn').addEventListener('click', function() {
    // Toggle language
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Update button text
    document.getElementById('langText').textContent = currentLang === 'es' ? 'EN' : 'ES';
    
    // Get all elements with data-es and data-en attributes
    const elements = document.querySelectorAll('[data-es][data-en]');
    
    // Update each element's text content
    elements.forEach(element => {
        const esText = element.getAttribute('data-es');
        const enText = element.getAttribute('data-en');
        
        // Add fade effect
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.textContent = currentLang === 'es' ? esText : enText;
            element.style.opacity = '1';
        }, 200);
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll (optional)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add CSS for fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);