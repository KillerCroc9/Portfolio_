// Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth hover effects and interactions
    const cards = document.querySelectorAll('.domain-card');
    
    cards.forEach(card => {
        // Track mouse movement for subtle 3D effect
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const rotateX = deltaY * 5;
            const rotateY = deltaX * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add keyboard navigation support
    cards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
            
            // Arrow key navigation
            if (e.key === 'ArrowRight' && index < cards.length - 1) {
                cards[index + 1].focus();
            }
            
            if (e.key === 'ArrowLeft' && index > 0) {
                cards[index - 1].focus();
            }
        });
    });
    
    // Add subtle parallax effect to background particles
    document.addEventListener('mousemove', function(e) {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.05;
            const x = (mouseX - 0.5) * 100 * speed;
            const y = (mouseY - 0.5) * 100 * speed;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Add intersection observer for animation on scroll (for mobile)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Smooth scroll for any internal links (future-proofing)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Track analytics for domain selection
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const domain = this.classList.contains('unreal-card') ? 'Unreal Engine' : 'Generative AI';
            
            // Google Analytics tracking (if available)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'domain_selection', {
                    'event_category': 'Navigation',
                    'event_label': domain,
                    'value': 1
                });
            }
        });
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        width: 0;
        height: 0;
        pointer-events: none;
        animation: ripple-animation 0.6s ease-out;
    }
    
    @keyframes ripple-animation {
        to {
            width: 500px;
            height: 500px;
            margin-left: -250px;
            margin-top: -250px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
