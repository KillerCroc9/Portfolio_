// =============================================================================
// NAVIGATION
// =============================================================================

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Notification function for accessible user feedback
function showNotification(message, type = 'info', duration = 3000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.textContent = message;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after duration
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

hamburger.addEventListener('click', () => {
    const isExpanded = navMenu.classList.contains('active');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
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

// =============================================================================
// VIDEO MODAL
// =============================================================================

// Video Modal Functionality
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDesc = document.getElementById('videoDesc');
const closeModal = document.querySelector('.close-modal');

// =============================================================================
// VIDEO DATA CONFIGURATION
// =============================================================================
// CUSTOMIZATION: Update these video entries with your actual project videos
// To add your own videos:
// 1. Upload videos to YouTube or Vimeo
// 2. Get the embed URL (e.g., https://www.youtube.com/embed/YOUR_VIDEO_ID)
// 3. Replace the url values below
// 4. Update title and description to match your projects
// =============================================================================

const videoData = {
    video1: {
        title: 'Drimon Controller - Dragon Movement & Abilities',
        description: 'This video showcases our dragons' core movement system, featuring smooth flying and a set of basic abilities. We introduce the four elemental dragon types - Ice, Earth, Fire, and Lightning - and demonstrate their unique special powers, including instant teleportation and invisibility.',
        url: '' // Video will be uploaded to YouTube - URL to be added
    },
    video2: {
        title: 'Dance Plugin - Animation Controller & VFX System',
        description: 'Kids can host fun dance parties with synchronized animations and dynamic DMX-style light effects. The animation controller and VFX systems (DMX Plugin) are built independently, allowing artists and developers to work in parallel without blocking each other.',
        url: '' // Video will be uploaded to YouTube - URL to be added
    },
    video3: {
        title: 'Crowd Showcase - Interactive Dragon Experience',
        description: 'Multiple cute dragon types that kids can interact with in real time. They receive live updates on their devices and can watch their dragons play, eat, push objects, level up, and grow. Features include a talking dragon module for personal interactions, an active combat system in development, and console support for PS5 and Nintendo Switch.',
        url: '' // Video will be uploaded to YouTube - URL to be added
    }
};

// =============================================================================
// VIDEO MODAL INTERACTIONS
// =============================================================================

// Open video modal
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-video');
        const video = videoData[videoId];
        
        if (video) {
            // Check if video URL is provided
            if (!video.url) {
                showNotification('Video coming soon! This video is not yet available.', 'info');
                return;
            }
            
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

// =============================================================================
// SCROLL ANIMATIONS
// =============================================================================

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

// =============================================================================
// CONTACT FORM
// =============================================================================

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');

// Form validation functions
function validateEmail(email) {
    // Use browser's built-in email validation
    const input = document.createElement('input');
    input.type = 'email';
    input.value = email;
    return input.checkValidity();
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('data-field-name') || field.placeholder || 'This field';
    const errorElement = document.getElementById(`${field.name}Error`);
    let isValid = true;
    let errorMessage = '';

    // Clear previous error
    errorElement.textContent = '';
    field.classList.remove('invalid');

    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${fieldName} is required`;
    } else if (field.type === 'email' && value && !validateEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    } else if (field.hasAttribute('minlength')) {
        const minLength = parseInt(field.getAttribute('minlength'));
        if (value.length > 0 && value.length < minLength) {
            isValid = false;
            errorMessage = `${fieldName} must be at least ${minLength} characters`;
        }
    }

    if (!isValid) {
        field.classList.add('invalid');
        errorElement.textContent = errorMessage;
    }

    return isValid;
}

// Add real-time validation
contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
        if (field.classList.contains('invalid')) {
            validateField(field);
        }
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    const fields = contactForm.querySelectorAll('input, textarea');
    let isFormValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });
    
    if (isFormValid) {
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // =============================================================================
        // FORM SUBMISSION CUSTOMIZATION
        // =============================================================================
        // CUSTOMIZATION: Replace this section with actual form submission logic
        // Options:
        // 1. Use a form service like Formspree, FormSubmit, or Netlify Forms
        // 2. Send to your own backend API endpoint
        // 3. Use EmailJS for client-side email sending
        // Example with fetch API:
        // fetch('YOUR_API_ENDPOINT', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // }).then(response => { ... });
        // =============================================================================
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        showNotification('Thank you for your message! I will get back to you soon.', 'success', 4000);
        contactForm.reset();
        
        // Clear any validation states
        fields.forEach(field => {
            field.classList.remove('invalid');
            const errorElement = document.getElementById(`${field.name}Error`);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    } else {
        // Focus on the first invalid field
        const firstInvalid = contactForm.querySelector('.invalid');
        if (firstInvalid) {
            firstInvalid.focus();
        }
    }
});

// =============================================================================
// ACTIVE NAVIGATION STATE
// =============================================================================

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

// =============================================================================
// PARALLAX EFFECTS
// =============================================================================

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled * 0.002);
    }
});

// =============================================================================
// PAGE LOAD ANIMATION
// =============================================================================

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// =============================================================================
// OPTIONAL ENHANCEMENTS
// =============================================================================

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

// =============================================================================
// DEVELOPER CONSOLE MESSAGE
// =============================================================================

// Console message for developers
console.log('%c👾 Abdul Muqeet - Lead Unreal Developer', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in collaborating? Let\'s build something amazing!', 'color: #764ba2; font-size: 14px;');
