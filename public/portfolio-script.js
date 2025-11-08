// Language Switcher
let currentLang = 'es';

// YouTube API configuration
const SUPABASE_URL = 'https://kxlupxdmbotgojyfpalh.supabase.co';

// Fetch YouTube data from secure edge function
async function fetchYouTubeData() {
    const subscriberElement = document.getElementById('subscriberCount');
    
    try {
        const response = await fetch(`${SUPABASE_URL}/functions/v1/get-latest-video`);
        
        if (response.ok) {
            const data = await response.json();
            
            // Update subscriber count
            if (subscriberElement && data.subscriberCount) {
                subscriberElement.textContent = formatNumber(data.subscriberCount);
            }
            
            // Update latest video
            const videoIframe = document.querySelector('.youtube-section iframe');
            if (videoIframe && data.videoId) {
                videoIframe.src = `https://www.youtube.com/embed/${data.videoId}`;
            }
            return;
        }
        
        subscriberElement.textContent = 'N/A';
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
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

// Fetch on load and every 5 minutes
fetchYouTubeData();
setInterval(fetchYouTubeData, 300000);

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