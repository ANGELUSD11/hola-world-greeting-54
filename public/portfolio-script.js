// Language Switcher
let currentLang = 'es';

// Channel ID - Cambia esto por tu ID de canal
const CHANNEL_ID = 'UCjHYcO_GQmLWasg1UDhLq9Q';

// Fetch subscriber count
async function fetchSubscriberCount() {
    const subscriberElement = document.getElementById('subscriberCount');
    
    try {
        // Intenta obtener el conteo de suscriptores
        const response = await fetch(`https://api.countapi.xyz/get/youtube/${CHANNEL_ID}`);
        
        if (response.ok) {
            const data = await response.json();
            if (data.value) {
                subscriberElement.textContent = formatNumber(data.value);
                return;
            }
        }
        
        // Si falla, muestra un número de ejemplo
        subscriberElement.textContent = 'N/A';
    } catch (error) {
        console.error('Error fetching subscriber count:', error);
        subscriberElement.textContent = 'N/A';
    }
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Fetch on load and every 10 seconds
fetchSubscriberCount();
setInterval(fetchSubscriberCount, 10000);

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