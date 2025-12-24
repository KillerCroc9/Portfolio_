// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// Video Modal Functionality
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDesc = document.getElementById('videoDesc');
const closeModal = document.querySelector('.close-modal');

// Video data (placeholder - replace with actual YouTube/Vimeo video IDs)
const videoData = {
    video1: {
        title: 'AI-Powered Game Mechanics',
        description: 'This video demonstrates how we implemented procedural content generation using advanced AI algorithms in real-time gameplay. We explore neural networks for dynamic level generation, AI-driven enemy behaviors, and adaptive difficulty systems that respond to player skill.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
    },
    video2: {
        title: 'Generative AI Pipeline',
        description: 'A comprehensive walkthrough of building a complete generative AI system for dynamic character and environment creation. Learn about our custom pipeline for generating 3D assets, textures, and animations using stable diffusion and GANs.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
    },
    video3: {
        title: 'Leading Innovation',
        description: 'How we integrated AI into our game development pipeline and achieved breakthrough results. This case study showcases our journey from traditional development to AI-enhanced workflows, including team training and project outcomes.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
    },
    video4: {
        title: 'Multiplayer Game Architecture',
        description: 'Deep dive into scalable multiplayer game systems with AI-enhanced matchmaking. We cover server architecture, latency optimization, anti-cheat systems, and how machine learning improves player matching and game balance.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
    }
};

// Open video modal
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-video');
        const video = videoData[videoId];
        
        if (video) {
            videoTitle.textContent = video.title;
            videoDesc.textContent = video.description;
            videoPlayer.src = video.url;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close video modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    videoPlayer.src = ''; // Stop video playback
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        videoPlayer.src = '';
        document.body.style.overflow = 'auto';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.querySelectorAll('.video-card, .project-card, .timeline-item, .expertise-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled * 0.002);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Dynamic typing effect for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const heroSubtitle = document.querySelector('.hero-subtitle');
// const originalText = heroSubtitle.textContent;
// typeWriter(heroSubtitle, originalText, 80);

// Console message for developers
console.log('%c👾 Game Dev & Gen AI Portfolio', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in collaborating? Let\'s build something amazing!', 'color: #764ba2; font-size: 14px;');
