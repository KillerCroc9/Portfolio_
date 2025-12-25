// =============================================================================
// GSAP ADVANCED ANIMATIONS
// =============================================================================
// This file contains all GSAP-powered animations for the portfolio

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Initialize GSAP plugins
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Checks if animations should run based on user preference
 */
function shouldAnimate() {
    return !prefersReducedMotion && typeof gsap !== 'undefined';
}

/**
 * Initialize all animations
 */
function initAnimations() {
    if (!shouldAnimate()) {
        console.log('Animations disabled: User prefers reduced motion or GSAP not loaded');
        return;
    }

    initHeroAnimations();
    initNavbarAnimations();
    initSectionAnimations();
    initCardAnimations();
    initTimelineAnimations();
    initSkillTagAnimations();
    initParallaxEffects();
    initHoverAnimations();
    initScrollIndicator();
    initSmoothScroll();
}

// =============================================================================
// HERO SECTION ANIMATIONS
// =============================================================================

function initHeroAnimations() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Set initial states
    gsap.set('.hero-title', { opacity: 0, y: 100, scale: 0.8 });
    gsap.set('.hero-subtitle', { opacity: 0, y: 50 });
    gsap.set('.hero-description', { opacity: 0, y: 50 });
    gsap.set('.hero-buttons .btn', { opacity: 0, y: 50, scale: 0.8 });
    gsap.set('.hero-scroll', { opacity: 0, y: 20 });

    // Create timeline for hero entrance
    const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out' }
    });

    heroTimeline
        .to('.hero-title', {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'elastic.out(1, 0.8)'
        })
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, '-=0.6')
        .to('.hero-description', {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, '-=0.6')
        .to('.hero-buttons .btn', {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.4)'
        }, '-=0.4')
        .to('.hero-scroll', {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, '-=0.3');

    // Floating animation for hero scroll indicator
    gsap.to('.hero-scroll', {
        y: '+=10',
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
    });
}

// =============================================================================
// NAVBAR ANIMATIONS
// =============================================================================

function initNavbarAnimations() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Animate navbar on scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'navbar-scrolled', targets: '.navbar' },
        onEnter: () => {
            gsap.to('.navbar', {
                backgroundColor: 'rgba(15, 15, 35, 0.98)',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
                duration: 0.3
            });
        },
        onLeaveBack: () => {
            gsap.to('.navbar', {
                backgroundColor: 'rgba(15, 15, 35, 0.95)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                duration: 0.3
            });
        }
    });

    // Animate nav items on load
    gsap.from('.nav-menu li', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.5
    });

    gsap.from('.nav-controls > *', {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.8
    });
}

// =============================================================================
// SECTION ANIMATIONS
// =============================================================================

function initSectionAnimations() {
    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'top 30%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Animate section subtitles
    gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
        gsap.from(subtitle, {
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Animate about section text
    const aboutText = document.querySelectorAll('.about-text p');
    aboutText.forEach((p, index) => {
        gsap.from(p, {
            scrollTrigger: {
                trigger: p,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
}

// =============================================================================
// CARD ANIMATIONS
// =============================================================================

function initCardAnimations() {
    // Animate expertise items
    gsap.utils.toArray('.expertise-item').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            rotateX: 45,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 80,
            scale: 0.8,
            duration: 0.9,
            delay: index * 0.15,
            ease: 'back.out(1.4)'
        });
    });

    // Animate video cards
    gsap.utils.toArray('.video-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateY: 15,
            duration: 0.8,
            delay: index * 0.12,
            ease: 'power3.out'
        });
    });

    // Animate award cards
    gsap.utils.toArray('.award-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            rotateZ: index % 2 === 0 ? -5 : 5,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'elastic.out(1, 0.5)'
        });
    });

    // Animate skill categories
    gsap.utils.toArray('.skill-category').forEach((category, index) => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: category,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: index % 2 === 0 ? -80 : 80,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Animate generative AI project sections
    gsap.utils.toArray('.gen-project').forEach((project, index) => {
        gsap.from(project, {
            scrollTrigger: {
                trigger: project,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power3.out'
        });

        // Animate images within each project
        const images = project.querySelectorAll('.gen-image, .gen-image-single');
        images.forEach((img, imgIndex) => {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                scale: 0.8,
                rotation: imgIndex % 2 === 0 ? -10 : 10,
                duration: 0.8,
                delay: imgIndex * 0.1,
                ease: 'back.out(1.4)'
            });
        });
    });
}

// =============================================================================
// TIMELINE ANIMATIONS
// =============================================================================

function initTimelineAnimations() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    // Animate timeline line
    gsap.from('.timeline::before', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
        },
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none'
    });

    // Animate timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        const isEven = index % 2 === 0;
        
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: isEven ? -100 : 100,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Animate timeline marker
        const marker = item.querySelector('.timeline-marker');
        if (marker) {
            gsap.from(marker, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                scale: 0,
                rotation: 360,
                duration: 0.6,
                delay: 0.3,
                ease: 'back.out(2)'
            });
        }

        // Animate list items with stagger
        const listItems = item.querySelectorAll('ul li');
        gsap.from(listItems, {
            scrollTrigger: {
                trigger: item,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.5
        });
    });
}

// =============================================================================
// SKILL TAG ANIMATIONS
// =============================================================================

function initSkillTagAnimations() {
    gsap.utils.toArray('.skill-category').forEach(category => {
        const tags = category.querySelectorAll('.skill-tag');
        
        gsap.from(tags, {
            scrollTrigger: {
                trigger: category,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(1.7)',
            delay: 0.3
        });
    });

    // Animate tech tags in projects
    gsap.utils.toArray('.project-card').forEach(card => {
        const tags = card.querySelectorAll('.tech-tag');
        
        gsap.from(tags, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out',
            delay: 0.5
        });
    });
}

// =============================================================================
// PARALLAX EFFECTS
// =============================================================================

function initParallaxEffects() {
    // Hero parallax
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        opacity: 0.3,
        ease: 'none'
    });

    // Section backgrounds parallax
    gsap.utils.toArray('section').forEach(section => {
        const bg = section.querySelector('.section-bg');
        if (bg) {
            gsap.to(bg, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: -100,
                ease: 'none'
            });
        }
    });
}

// =============================================================================
// HOVER ANIMATIONS
// =============================================================================

function initHoverAnimations() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Card 3D tilt effect
    const cards = document.querySelectorAll('.project-card, .video-card, .award-card, .expertise-item');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(this, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });

    // Icon button animations
    const iconButtons = document.querySelectorAll('.icon-btn');
    iconButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.15,
                rotation: 360,
                duration: 0.4,
                ease: 'back.out(1.7)'
            });
        });

        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
}

// =============================================================================
// SCROLL INDICATOR
// =============================================================================

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.hero-scroll');
    if (!scrollIndicator) return;

    // Bounce animation
    gsap.to('.hero-scroll i', {
        y: 10,
        duration: 0.8,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
    });

    // Hide on scroll
    ScrollTrigger.create({
        start: 'top -100',
        onEnter: () => {
            gsap.to('.hero-scroll', {
                opacity: 0,
                duration: 0.5
            });
        },
        onLeaveBack: () => {
            gsap.to('.hero-scroll', {
                opacity: 1,
                duration: 0.5
            });
        }
    });
}

// =============================================================================
// SMOOTH SCROLL
// =============================================================================

function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (!target) return;

            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power3.inOut'
            });
        });
    });
}

// =============================================================================
// MODAL ANIMATIONS
// =============================================================================

function animateModalOpen(modal) {
    if (!shouldAnimate()) {
        modal.style.display = 'block';
        return;
    }

    gsap.set(modal, { display: 'block', opacity: 0 });
    gsap.set('.modal-content', { scale: 0.8, y: 50 });

    const tl = gsap.timeline();
    tl.to(modal, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
    })
    .to('.modal-content', {
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.4)'
    }, '-=0.2');
}

function animateModalClose(modal) {
    if (!shouldAnimate()) {
        modal.style.display = 'none';
        return;
    }

    const tl = gsap.timeline({
        onComplete: () => {
            modal.style.display = 'none';
        }
    });

    tl.to('.modal-content', {
        scale: 0.8,
        y: 50,
        duration: 0.3,
        ease: 'power2.in'
    })
    .to(modal, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
    }, '-=0.1');
}

// =============================================================================
// CONTACT FORM ANIMATIONS
// =============================================================================

function initContactFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach((group, index) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Contact info items
    const contactItems = document.querySelectorAll('.contact-item');
    gsap.from(contactItems, {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
    });
}

// =============================================================================
// FOOTER ANIMATIONS
// =============================================================================

function initFooterAnimations() {
    gsap.from('.footer-section', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    gsap.from('.social-links a', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0,
        rotation: 360,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
}

// =============================================================================
// EDUCATION ANIMATIONS
// =============================================================================

function initEducationAnimations() {
    gsap.utils.toArray('.education-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
}

// =============================================================================
// INITIALIZE ON LOAD
// =============================================================================

// Wait for DOM and GSAP to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    // DOM is already loaded
    if (typeof gsap !== 'undefined') {
        initAnimations();
    } else {
        // Wait for GSAP to load
        window.addEventListener('load', initAnimations);
    }
}

// Export functions for use in other files
if (typeof window !== 'undefined') {
    window.portfolioAnimations = {
        animateModalOpen,
        animateModalClose,
        shouldAnimate
    };
}

// Initialize additional animations after main content loads
window.addEventListener('load', () => {
    if (shouldAnimate()) {
        initContactFormAnimations();
        initFooterAnimations();
        initEducationAnimations();
    }
});

// =============================================================================
// CONSOLE MESSAGE
// =============================================================================

if (shouldAnimate()) {
    console.log('%c🎨 GSAP Animations Loaded', 'color: #88ce02; font-size: 16px; font-weight: bold;');
    console.log('%cAdvanced animations powered by GSAP', 'color: #88ce02; font-size: 12px;');
} else {
    console.log('%c⚡ Animations Disabled', 'color: #ffa500; font-size: 14px; font-weight: bold;');
    console.log('%cUser prefers reduced motion or GSAP not available', 'color: #ffa500; font-size: 12px;');
}
