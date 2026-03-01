/* Premium Course Landing Page - JavaScript */

// ===== UTILITY FUNCTIONS =====
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ===== ANIMATED COUNTERS =====
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.closest('.stat-item').querySelector('.stat-label').textContent.includes('אחוז') ? '%' : '+');
        }
    };

    updateCounter();
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate counters when stats come into view
            if (entry.target.classList.contains('hero-stats')) {
                $$('.stat-number').forEach(counter => {
                    if (!counter.dataset.animated) {
                        counter.dataset.animated = 'true';
                        animateCounter(counter);
                    }
                });
            }

            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    $$('.problem-card, .workflow-step, .timeline-module, .value-card, .hero-stats').forEach(el => {
        scrollObserver.observe(el);
    });
});

// ===== MOBILE STICKY CTA =====
let lastScroll = 0;
const mobileStickyCta = $('#mobileStickyCta');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const pricing Section = $('#pricing');

    if (!pricingSection) return;

    const pricingTop = pricingSection.offsetTop;
    const pricingBottom = pricingTop + pricingSection.offsetHeight;

    // Show CTA when scrolled past hero, hide when in pricing section
    if (currentScroll > 800 && (currentScroll < pricingTop || currentScroll > pricingBottom)) {
        mobileStickyCta?.classList.add('visible');
    } else {
        mobileStickyCta?.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL =====
function scrollToEnroll() {
    const pricing = $('#pricing');
    if (pricing) {
        pricing.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== VIDEO MODAL =====
function openVideoModal() {
    const modal = $('#videoModal');
    const video = $('#courseVideo');

    // Replace with actual YouTube video ID
    const videoId = 'YOUR_VIDEO_ID_HERE';
    video.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = $(`#${modalId}`);
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Stop video when closing
    if (modalId === 'videoModal') {
        $('#courseVideo').src = '';
    }
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        $$('.modal.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// ===== SYSTEM SHOWCASE MODAL =====
const systemSteps = {
    1: {
        title: 'העלאת רשימת אורחים',
        desc: 'העלו קובץ אקסל קיים או הוסיפו אורחים ידנית. המערכת מאפשרת לכם לארגן את כל המידע במקום אחד - שמות, טלפונים, כתובות מייל, וכמות מוזמנים לכל אורח.',
        image: './assets/system-screenshots/step1.jpg'
    },
    2: {
        title: 'איתור כפילויות אוטומטי',
        desc: 'המערכת מזהה באופן חכם אורחים כפולים על בסיס שם, טלפון או מייל. תוכלו לאשר מיזוגים או לשמור רשומות נפרדות בלחיצה אחת.',
        image: './assets/system-screenshots/step2.jpg'
    },
    3: {
        title: 'שליחת הודעות SMS ו-WhatsApp',
        desc: 'שלחו הודעות מותאמות אישית לכל האורחים בבת אחת או בקבוצות. המערכת מאפשרת תבניות מוכנות, שליחה מתוזמנת, ומעקב אחרי סטטוס ההודעות.',
        image: './assets/system-screenshots/step3.jpg'
    },
    4: {
        title: 'עדכון סטטוסים בזמן אמת',
        desc: 'צפו במי אישר הגעה, מי סירב, ומי עדיין לא השיב. המערכת מעדכנת אוטומטית כשאורח לוחץ על הלינק באישור ההגעה.',
        image: './assets/system-screenshots/step4.jpg'
    },
    5: {
        title: 'ניתוח ודוחות מפורטים',
        desc: 'קבלו תמונה מלאה עם גרפים וסטטיסטיקות: אחוז אישורים, כמות סירובים, תחזית אורחים סופית, ועוד. ייצאו דוחות לאקסל או PDF.',
        image: './assets/system-screenshots/step5.jpg'
    },
    6: {
        title: 'תכנון הושבה ויזואלי',
        desc: 'צרו מפת הושבה עם גרירה ושחרור פשוטה. הוסיפו שולחנות, שנו צורות, וסדרו אורחים בקלות. המערכת שומרת הכל אוטומטית.',
        image: './assets/system-screenshots/step6.jpg'
    },
    7: {
        title: 'ניהול האירוע ביום עצמו',
        desc: 'במסך האירוע תוכלו לעדכן הגעות בזמן אמת, לראות מי הגיע ומי לא, לבדוק הושבה, ולנהל שינויים דינמיים במהלך האירוע.',
        image: './assets/system-screenshots/step7.jpg'
    }
};

function openSystemModal(step) {
    const modal = $('#systemModal');
    const data = systemSteps[step];

    $('#systemStepTitle').textContent = data.title;
    $('#systemStepDesc').textContent = data.desc;
    $('#systemScreenshot').src = data.image;
    $('#systemScreenshot').alt = data.title;

    // Handle image load error - show placeholder
    $('#systemScreenshot').onerror = function() {
        this.style.display = 'none';
        this.insertAdjacentHTML('afterend', `
            <div style="aspect-ratio: 16/9; background: linear-gradient(135deg, #f0f9fb, #e6f2f4); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--primary-teal); font-size: 18px; font-weight: 600;">
                תמונת מסך - ${data.title}
            </div>
        `);
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== TESTIMONIALS SLIDER =====
let currentTestimonial = 0;
const testimonialTrack = $('.testimonial-track');
const testimonialSlides = $$('.testimonial-slide');
const totalTestimonials = testimonialSlides.length;

function updateTestimonialPosition() {
    if (!testimonialTrack) return;
    testimonialTrack.style.transform = `translateX(${currentTestimonial * 100}%)`;

    // Update dots
    $$('.slider-dots .dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;

    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;

    updateTestimonialPosition();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
}

// Auto-play testimonials
let testimonialInterval = setInterval(() => {
    moveTestimonial(1);
}, 7000);

// Pause on hover
$('.testimonials-slider')?.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

$('.testimonials-slider')?.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 7000);
});

// Touch support for testimonials
let touchStartX = 0;
let touchEndX = 0;

$('.testimonials-slider')?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

$('.testimonials-slider')?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleTestimonialSwipe();
});

function handleTestimonialSwipe() {
    if (touchEndX < touchStartX - 50) moveTestimonial(1);
    if (touchEndX > touchStartX + 50) moveTestimonial(-1);
}

// ===== FAQ ACCORDION =====
function toggleFaq(button) {
    const faqItem = button.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const isActive = faqItem.classList.contains('active');

    // Close all FAQs
    $$('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Open clicked FAQ if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

// ===== ENROLLMENT HANDLING =====
function handleEnroll() {
    // Track conversion event
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout');
    }

    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'begin_checkout',
            'value': 1997,
            'currency': 'ILS'
        });
    }

    // Redirect to payment page or open payment modal
    // Replace with actual payment URL
    const paymentUrl = 'https://your-payment-link.com';

    // Option 1: Redirect
    // window.location.href = paymentUrl;

    // Option 2: Open in new tab
    // window.open(paymentUrl, '_blank');

    // Option 3: Show WhatsApp for manual purchase
    const message = encodeURIComponent('היי! אני מעוניין להירשם לקורס "מתחתנים בקלות". אשמח לפרטים נוספים.');
    const whatsappNumber = '972501234567'; // Replace with actual number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// ===== ANALYTICS TRACKING =====
// Track scroll depth
let maxScroll = 0;
const scrollMilestones = [25, 50, 75, 100];
const reachedMilestones = new Set();

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (window.pageYOffset / windowHeight) * 100;

    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        scrollMilestones.forEach(milestone => {
            if (scrollPercent >= milestone && !reachedMilestones.has(milestone)) {
                reachedMilestones.add(milestone);

                if (typeof dataLayer !== 'undefined') {
                    dataLayer.push({
                        'event': 'scroll_depth',
                        'scroll_percent': milestone
                    });
                }
            }
        });
    }
});

// Track time on page
let timeOnPage = 0;
setInterval(() => {
    timeOnPage += 10;

    // Track engagement at 30s, 1min, 2min, 5min
    const engagementMilestones = [30, 60, 120, 300];
    engagementMilestones.forEach(milestone => {
        if (timeOnPage === milestone && typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'time_on_page',
                'seconds': milestone
            });
        }
    });
}, 10000);

// Track CTA clicks
$$('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const ctaText = btn.textContent.trim();
        const ctaLocation = btn.closest('section')?.className || 'unknown';

        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'cta_click',
                'cta_text': ctaText,
                'cta_location': ctaLocation
            });
        }
    });
});

// Track video plays
if ($('#courseVideo')) {
    let videoPlayed = false;
    window.addEventListener('message', (event) => {
        if (event.data === 'play' && !videoPlayed) {
            videoPlayed = true;

            if (typeof fbq !== 'undefined') {
                fbq('track', 'ViewContent', {
                    content_name: 'Course Preview Video',
                    content_type: 'video'
                });
            }

            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'video_play',
                    'video_name': 'course_preview'
                });
            }
        }
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Lazy load images when they come into view
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
        }
    });
});

$$('img[data-src]').forEach(img => imageObserver.observe(img));

// ===== ACCESSIBILITY =====
// Add keyboard navigation for modals
document.addEventListener('keydown', (e) => {
    const activeModal = $('.modal.active');

    if (activeModal && e.key === 'Tab') {
        // Trap focus within modal
        const focusableElements = activeModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }
    }
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🎉 Premium Course Landing Page Loaded', 'color: #1e9baa; font-size: 16px; font-weight: bold;');
    console.log('%cAll interactions and animations ready', 'color: #666; font-size: 12px;');

    // Initialize any third-party libraries here if needed

    // Add smooth reveal for hero
    $('.hero-premium')?.classList.add('loaded');
});

// ===== EXPOSE FUNCTIONS TO GLOBAL SCOPE =====
window.scrollToEnroll = scrollToEnroll;
window.openVideoModal = openVideoModal;
window.closeModal = closeModal;
window.openSystemModal = openSystemModal;
window.moveTestimonial = moveTestimonial;
window.goToTestimonial = goToTestimonial;
window.toggleFaq = toggleFaq;
window.handleEnroll = handleEnroll;
