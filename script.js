// =============================================================================
// NAVIGATION
// =============================================================================

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// =============================================================================
// THEME TOGGLE
// =============================================================================

const THEME_STORAGE_KEY = 'theme_preference';

/**
 * Gets the current theme from localStorage or system preference
 */
function getCurrentTheme() {
    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored) {
            return stored;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
    } catch (error) {
        console.error('Error reading theme preference:', error);
    }
    
    return 'dark';
}

/**
 * Sets the theme and saves preference
 */
function setTheme(theme) {
    try {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        
        // Update theme toggle button icon
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            const icon = themeBtn.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fas fa-moon';
                    themeBtn.setAttribute('title', 'Switch to light theme');
                } else {
                    icon.className = 'fas fa-sun';
                    themeBtn.setAttribute('title', 'Switch to dark theme');
                }
            }
        }
        
        // Track analytics event
        trackEvent('Theme', 'Change', theme);
    } catch (error) {
        console.error('Error saving theme preference:', error);
    }
}

/**
 * Toggles between light and dark themes
 */
function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    showNotification(`Switched to ${newTheme} theme`, 'info', 2000);
}

/**
 * Initializes theme on page load
 */
function initTheme() {
    const theme = getCurrentTheme();
    setTheme(theme);
    
    // Add event listener to theme toggle button
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
}

// Initialize theme
initTheme();

// =============================================================================
// ANALYTICS TRACKING
// =============================================================================

/**
 * Tracks custom events to analytics platforms
 */
function trackEvent(category, action, label, value) {
    // Google Analytics 4
    if (typeof gtag === 'function') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
    
    // Plausible Analytics
    if (typeof plausible === 'function') {
        plausible(action, {
            props: {
                category: category,
                label: label,
                value: value
            }
        });
    }
    
    // Log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Analytics Event:', { category, action, label, value });
    }
}

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

// Video Modal Functionality - Temporarily Disabled
/* 
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
// 1. Place video files in the "Video And Description" folder
// 2. Update the url values below with the relative path to the video file
// 3. Update title and description to match your projects
// =============================================================================

const videoData = {
    video1: {
        title: 'Drimon Controller - Dragon Movement & Abilities',
        description: 'This video showcases our dragons\' core movement system, featuring smooth flying and a set of basic abilities. We introduce the four elemental dragon types - Ice, Earth, Fire, and Lightning - and demonstrate their unique special powers, including instant teleportation and invisibility.',
        url: 'Video And Description/Drimon Controller.mp4',
        type: 'local'
    },
    video2: {
        title: 'Dance Plugin - Animation Controller & VFX System',
        description: 'Kids can host fun dance parties with synchronized animations and dynamic DMX-style light effects. The animation controller and VFX systems (DMX Plugin) are built independently, allowing artists and developers to work in parallel without blocking each other.',
        url: 'Video And Description/Dance Plugin.mp4',
        type: 'local'
    },
    video3: {
        title: 'Crowd Showcase - Interactive Dragon Experience',
        description: 'Multiple cute dragon types that kids can interact with in real time. They receive live updates on their devices and can watch their dragons play, eat, push objects, level up, and grow. Features include a talking dragon module for personal interactions, an active combat system in development, and console support for PS5 and Nintendo Switch.',
        url: 'Video And Description/Crowd Showcase.mp4',
        type: 'local'
    },
    video4: {
        title: 'Dragons On Air – Live Park Broadcast System',
        description: 'Unreal Engine · Real-Time Rendering · Park Media Integration\n\nThis system features a cast of hand-crafted Dragons characters brought to life in Unreal Engine and broadcast across theme park screens — from cafeterias to lounge areas.\n\n🔹 Scripted Play & World Exploration\nDragons engage in playful, story-rich scenes — exploring environments, dancing, and performing activities in looping real-time sequences.\n\n🔹 Seamless Park-Wide Broadcast\nDisplayed on TVs and screens throughout the park, the Dragons add a continuous layer of ambient storytelling to enhance the visitor atmosphere.\n\n🔹 Optimized Unreal Pipeline\nAll characters, animations, and environments are rendered and sequenced in Unreal Engine — designed for smooth playback and aesthetic consistency across multiple displays.\n\n🔹 Living Digital Presence\nRather than static signage or looping ads, Dragons offer a subtle, always-moving visual world that adds personality and charm to physical park spaces.',
        url: 'https://www.youtube.com/watch?v=C00zGXMSzhg',
        type: 'youtube'
    },
    video5: {
        title: 'AI Rendering Plugin for Unreal Engine Demo',
        description: 'Advanced AI rendering plugin demonstration for Unreal Engine, showcasing cutting-edge real-time rendering capabilities and AI-driven workflow integration for enhanced visual quality and performance optimization.',
        url: 'https://www.youtube.com/watch?v=l9VfiII_DP8',
        type: 'youtube'
    },
    video6: {
        title: 'Tech Art Portfolio – Blender · Unreal Engine · Real-Time Rendering',
        description: 'Showcasing a fusion of procedural artistry, AI-driven workflows, and real-time rendering tools across Blender and Unreal Engine.\n\n🔹 Geo Nodes to Vertex Animation: Procedural motion built in Blender using geometry nodes, exported to Unreal as performant vertex animations.\n\n🔹 MoCap to Meta Human Targeting Tool: Streamlined mocap data processing and custom targeting solutions for flexible animation retargeting.\n\n🔹 Shader Systems & LUTs: Custom Unreal materials with LUT-based grading and layered shader blending.\n\n🔹 Rendering Pipelines: Optimized real-time rendering flows, including custom post-process and LOD management.\n\n🔹 Crowd Systems: Efficient vertex-animated crowd systems for large-scale scenes.\n\n🔹 3D Modeling & Environment Art: Stylized and photoreal 3D assets integrated into immersive world-building pipelines.',
        url: 'https://www.youtube.com/watch?v=S--HI8G9OLA',
        type: 'youtube'
    },
    video7: {
        title: 'Real Estate Video Furniture Swap',
        description: 'AI-powered real estate visualization showcasing dynamic furniture style transformations. Using generative AI to swap and customize interior design elements, demonstrating automated virtual staging capabilities for property marketing.',
        url: 'https://www.youtube.com/watch?v=PSnfUz9hrjQ',
        type: 'youtube'
    },
    video8: {
        title: 'The Promise Unkept',
        description: 'AI-generated animated short film demonstrating character consistency and narrative storytelling through generative video technology. Showcases advanced AI video generation techniques with cohesive visual style and compelling narrative.',
        url: 'https://www.youtube.com/watch?v=643ba2nN2Jk',
        type: 'youtube'
    },
    video9: {
        title: 'Market Videos Automation with Custom Voice',
        description: 'Automated marketing video generation system featuring custom AI voice synthesis. End-to-end pipeline for creating professional marketing content with personalized voiceovers, demonstrating AI-driven content automation for business applications.',
        url: 'https://www.youtube.com/watch?v=y03qlguaX1c',
        type: 'youtube'
    },
    video10: {
        title: 'Real Estate Visualization',
        description: 'AI-powered real estate video showcase featuring architectural visualization and property presentation. Demonstrates generative AI capabilities for creating engaging property tours and marketing materials.',
        url: 'https://www.youtube.com/watch?v=yGvD7qlnTxw',
        type: 'youtube'
    },
    video11: {
        title: 'Furniture Styles Swap',
        description: 'Interactive furniture style transformation using generative AI. Showcases the ability to instantly visualize different interior design styles and furniture arrangements, perfect for real estate staging and interior design visualization.',
        url: 'https://www.youtube.com/watch?v=Muv_8_re9ZY',
        type: 'youtube'
    }
};

// =============================================================================
// VIDEO MODAL INTERACTIONS
// =============================================================================

// Get YouTube player element
const youtubePlayer = document.getElementById('youtubePlayer');

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
            
            // Track video view
            trackEvent('Video', 'View', video.title);
            
            videoTitle.textContent = video.title;
            videoDesc.textContent = video.description;
            
            // Handle YouTube videos
            if (video.type === 'youtube') {
                // Extract YouTube ID from URL
                const youtubeIdMatch = video.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
                if (youtubeIdMatch && youtubeIdMatch[1]) {
                    videoPlayer.style.display = 'none';
                    youtubePlayer.style.display = 'block';
                    youtubePlayer.src = `https://www.youtube.com/embed/${youtubeIdMatch[1]}?autoplay=1`;
                }
            } else {
                // Handle local videos
                youtubePlayer.style.display = 'none';
                videoPlayer.style.display = 'block';
                videoPlayer.src = video.url;
            }
            
            // Use GSAP animation if available
            if (window.portfolioAnimations && window.portfolioAnimations.animateModalOpen) {
                window.portfolioAnimations.animateModalOpen(modal);
            } else {
                modal.style.display = 'block';
            }
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close video modal
closeModal.addEventListener('click', () => {
    videoPlayer.pause(); // Pause the video
    videoPlayer.src = ''; // Clear video source
    youtubePlayer.src = ''; // Clear YouTube iframe
    
    // Use GSAP animation if available
    if (window.portfolioAnimations && window.portfolioAnimations.animateModalClose) {
        window.portfolioAnimations.animateModalClose(modal);
    } else {
        modal.style.display = 'none';
    }
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        videoPlayer.pause(); // Pause the video
        videoPlayer.src = '';
        youtubePlayer.src = ''; // Clear YouTube iframe
        
        // Use GSAP animation if available
        if (window.portfolioAnimations && window.portfolioAnimations.animateModalClose) {
            window.portfolioAnimations.animateModalClose(modal);
        } else {
            modal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        videoPlayer.pause(); // Pause the video
        videoPlayer.src = '';
        youtubePlayer.src = ''; // Clear YouTube iframe
        
        // Use GSAP animation if available
        if (window.portfolioAnimations && window.portfolioAnimations.animateModalClose) {
            window.portfolioAnimations.animateModalClose(modal);
        } else {
            modal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    }
});
*/

// =============================================================================
// SCROLL ANIMATIONS
// =============================================================================

// Animate elements on scroll - Handled by GSAP in animations.js
// This observer is kept for fallback when GSAP animations are disabled
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Only apply if GSAP animations are not active
        if (entry.isIntersecting && (!window.portfolioAnimations || !window.portfolioAnimations.shouldAnimate || !window.portfolioAnimations.shouldAnimate())) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.querySelectorAll('.video-card, .project-card, .timeline-item, .expertise-item').forEach(el => {
    // Only set initial state if GSAP is not handling animations
    if (!window.portfolioAnimations || !window.portfolioAnimations.shouldAnimate || !window.portfolioAnimations.shouldAnimate()) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
    observer.observe(el);
});

// =============================================================================
// LAZY LOADING IMAGES
// =============================================================================

/**
 * Lazy loads images when they come into viewport
 */
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load the image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                // Add loaded class for fade-in effect
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
                
                // Stop observing this image
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
    
    // Also observe images with loading="lazy" attribute
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
lazyLoadImages();

// =============================================================================
// CONTACT FORM
// =============================================================================

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');

// Selector for visible form fields (excludes hidden fields)
const VISIBLE_FIELD_SELECTOR = 'input:not([type="hidden"]), textarea';

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

    // Skip validation if no error element exists
    if (!errorElement) {
        return true;
    }

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
contactForm.querySelectorAll(VISIBLE_FIELD_SELECTOR).forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
        if (field.classList.contains('invalid')) {
            validateField(field);
        }
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields (excluding hidden fields)
    const fields = contactForm.querySelectorAll(VISIBLE_FIELD_SELECTOR);
    let isFormValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });
    
    if (isFormValid) {
        // Get form data
        const formData = new FormData(contactForm);
        
        // Track form submission attempt
        trackEvent('Contact Form', 'Submit', 'Attempt');
        
        // Disable submit button to prevent multiple submissions
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // =============================================================================
        // FORMSUBMIT EMAIL INTEGRATION
        // =============================================================================
        // Submit form to FormSubmit API
        // FormSubmit is a free service for static websites to handle form submissions
        // No registration required - just verify your email on first use
        // Learn more at: https://formsubmit.co/
        // =============================================================================
        
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            // FormSubmit may return either a 200 OK with JSON or a 3xx redirect after successful submission
            // We treat both as successful since the email has been sent
            if (response.ok || (response.status >= 300 && response.status < 400)) {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                
                // Track successful submission
                trackEvent('Contact Form', 'Submit', 'Success');
                
                // Show success message
                const currentLang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'en';
                const successMsg = (typeof getTranslation === 'function') ? getTranslation('form.success_message', currentLang) : 
                                  'Thank you for your message! I will get back to you soon.';
                showNotification(successMsg, 'success', 4000);
                
                // Reset form
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
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                
                // Track submission error
                trackEvent('Contact Form', 'Submit', 'Error');
                
                // Show error message
                const currentLang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'en';
                const errorMsg = (typeof getTranslation === 'function') ? getTranslation('form.submission_error', currentLang) : 
                                'Failed to send message. Please try again or contact me directly via email.';
                showNotification(errorMsg, 'error', 5000);
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            
            // Track submission error
            trackEvent('Contact Form', 'Submit', 'Error');
            
            // Show error message
            const currentLang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'en';
            const errorMsg = (typeof getTranslation === 'function') ? getTranslation('form.submission_error', currentLang) : 
                            'Failed to send message. Please try again or contact me directly via email.';
            showNotification(errorMsg, 'error', 5000);
        });
    } else {
        // Track validation error
        trackEvent('Contact Form', 'Validation Error', 'Field validation failed');
        
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

// Parallax effect for hero section - Handled by GSAP in animations.js
// This is kept as fallback when GSAP is disabled
window.addEventListener('scroll', () => {
    if (!window.portfolioAnimations || !window.portfolioAnimations.shouldAnimate || !window.portfolioAnimations.shouldAnimate()) {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled * 0.002);
        }
    }
});

// =============================================================================
// PAGE LOAD ANIMATION
// =============================================================================

// Add loading animation - Simplified as GSAP handles most animations
window.addEventListener('load', () => {
    // Only apply if GSAP is not handling animations
    if (!window.portfolioAnimations || !window.portfolioAnimations.shouldAnimate || !window.portfolioAnimations.shouldAnimate()) {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    }
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
console.log('%c👾 KillerCroc9 - Team Lead - Unreal Developer', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in collaborating? Let\'s build something amazing!', 'color: #764ba2; font-size: 14px;');
