// Sticky Header Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonials Carousel
class TestimonialsCarousel {
    constructor() {
        this.track = document.querySelector('.testimonial-track');
        this.dots = document.querySelectorAll('.dot');
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.testimonial-card').length;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        // Add click events to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoPlay();
            });
        });

        // Add click events to nav buttons
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.resetAutoPlay();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.resetAutoPlay();
            });
        }

        // Start autoplay
        this.startAutoPlay();

        // Pause on hover
        const carousel = document.querySelector('.testimonials-carousel');
        carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel.addEventListener('mouseleave', () => this.startAutoPlay());

        // Touch/Swipe support
        this.addTouchSupport();
    }

    goToSlide(index) {
        this.currentSlide = index;
        const isRTL = document.documentElement.dir === 'rtl';
        const offset = isRTL ? (100 * index) : (-100 * index);
        this.track.style.transform = `translateX(${offset}%)`;

        // Update dots
        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(this.currentSlide);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;

        const carousel = document.querySelector('.testimonials-carousel');

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                this.nextSlide();
                this.resetAutoPlay();
            }
            if (touchEndX > touchStartX + 50) {
                this.prevSlide();
                this.resetAutoPlay();
            }
        };

        this.handleSwipe = handleSwipe;
    }
}

// Initialize carousel if testimonials section exists
if (document.querySelector('.testimonials-carousel')) {
    new TestimonialsCarousel();
}

// Intersection Observer for Scroll-Reveal Animations
const scrollObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollObserver.unobserve(entry.target);
        }
    });
}, scrollObserverOptions);

// Observe animate-on-scroll elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
});

// Section-level fade-in on scroll
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section-reveal').forEach(section => {
    sectionObserver.observe(section);
});

// Staggered animations for grid items
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.lesson-item, .why-item, .service-card, .stat-item, .income-card, .who-for-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 120);
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe grids for staggered children
document.querySelectorAll('.lessons-grid, .why-grid, .services-grid, .field-stats, .income-grid, .who-for-grid').forEach(grid => {
    staggerObserver.observe(grid);
});

// Process steps: each step fades in individually on scroll
const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            stepObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.process-step').forEach(step => {
    stepObserver.observe(step);
});

// Lazy Loading for Video Iframes
const lazyLoadVideos = () => {
    const videoWrappers = document.querySelectorAll('.video-wrapper iframe, .video-preview-wrapper iframe');

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    videoObserver.unobserve(iframe);
                }
            }
        });
    });

    videoWrappers.forEach(iframe => {
        videoObserver.observe(iframe);
    });
};

// Track Video Views
const trackVideoPlay = () => {
    const videos = document.querySelectorAll('iframe[src*="youtube.com"]');

    videos.forEach(video => {
        video.addEventListener('load', () => {
            // Track video view with analytics
            if (typeof fbq !== 'undefined') {
                fbq('track', 'ViewContent', {
                    content_name: 'Course Preview Video',
                    content_type: 'video'
                });
            }

            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'video_view',
                    'video_name': 'course_preview'
                });
            }
        });
    });
};

// Track CTA Clicks
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'InitiateCheckout');
        }

        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'cta_click',
                'cta_text': button.textContent.trim(),
                'cta_location': button.closest('section')?.className || 'unknown'
            });
        }
    });
});

// Track Social Media Clicks
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', () => {
        const platform = link.classList.contains('facebook') ? 'Facebook' : 'Instagram';

        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'social_click',
                'platform': platform
            });
        }
    });
});

// Mobile Menu Toggle (if needed in future)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const navLinks = nav.querySelectorAll('a:not(.cta-button)');

    if (window.innerWidth <= 768 && navLinks.length > 0) {
        // Mobile menu logic can be added here if needed
    }
};

// Page Load Analytics
window.addEventListener('load', () => {
    // Track page view
    if (typeof fbq !== 'undefined') {
        fbq('track', 'PageView');
    }

    // Track time on page
    let timeOnPage = 0;
    const trackingInterval = setInterval(() => {
        timeOnPage += 30;

        // Track engagement milestones
        if (timeOnPage === 30 && typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'engagement',
                'engagement_type': '30_seconds'
            });
        }

        if (timeOnPage === 120 && typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'engagement',
                'engagement_type': '2_minutes'
            });
        }
    }, 30000);

    // Clear interval on page unload
    window.addEventListener('beforeunload', () => {
        clearInterval(trackingInterval);
    });
});

// Scroll Progress Indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #1e9baa, #3b82f6, #7c3aed, #1e3a5f);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// Animated Counter for Stats
const animateCounter = (el, target, suffix = '') => {
    let current = 0;
    const isPercent = target === 100;
    const duration = 2000;
    const step = target / (duration / 16);

    const update = () => {
        current += step;
        if (current >= target) {
            el.textContent = target + suffix;
            return;
        }
        el.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(update);
    };
    update();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(el => {
                const text = el.textContent.trim();
                if (text === '100%') {
                    el.textContent = '0%';
                    animateCounter(el, 100, '%');
                } else if (text === '12') {
                    el.textContent = '0';
                    animateCounter(el, 12);
                } else if (text === '10+') {
                    el.textContent = '0+';
                    animateCounter(el, 10, '+');
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const fieldStats = document.querySelector('.field-stats');
if (fieldStats) {
    counterObserver.observe(fieldStats);
}

// Parallax-like movement on scroll for blobs
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const speed = 0.03 + (index * 0.02);
        blob.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Console welcome message
console.log('%c🎉 Welcome to Checklists Course Landing Page', 'color: #1e9baa; font-size: 16px; font-weight: bold;');
console.log('%cDeveloped with ❤️ for event professionals', 'color: #666; font-size: 12px;');
