// ACADEMIC COMPLIANCE: Enhanced script using external libraries
// DESIGN BRIEF REFERENCE: A2 Design Brief - Rachel Frappell Portfolio

// Initialize AOS (Animate On Scroll) library
AOS.init({ duration: 800, once: true });

// Initialize ClipboardJS for Discord copy functionality
new ClipboardJS('[data-clipboard-text]').on('success', () => {
    Swal.fire({ title: 'Copied!', text: 'Discord ID copied to clipboard', icon: 'success', timer: 2000 });
});







// Progress bar functionality
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;
    
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    progressBar.style.width = scrollPercent + '%';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            const nav = document.querySelector('.nav');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        mobileMenuToggle.setAttribute('aria-expanded', nav.classList.contains('active'));
    });
}

// Contact form modal functionality using SweetAlert2
document.getElementById('openContactBtn')?.addEventListener('click', () => showContactForm());
document.getElementById('startRebellionBtn')?.addEventListener('click', () => showContactForm());

// Show contact form using SweetAlert2 (replaces custom modal)
function showContactForm() {
    Swal.fire({
        title: 'Get In Touch',
        html: `
            <form id="swalContactForm">
                <input type="text" id="swalName" class="swal2-input" placeholder="Your Name" required>
                <input type="email" id="swalEmail" class="swal2-input" placeholder="Your Email" required>
                <input type="text" id="swalSubject" class="swal2-input" placeholder="Subject" required>
                <textarea id="swalMessage" class="swal2-textarea" placeholder="Your Message" rows="4" required></textarea>
            </form>
        `,
        showCancelButton: true,
        confirmButtonText: 'Send Message',
        preConfirm: () => {
            const name = document.getElementById('swalName').value;
            const email = document.getElementById('swalEmail').value;
            const subject = document.getElementById('swalSubject').value;
            const message = document.getElementById('swalMessage').value;
            if (!name || !email || !subject || !message) {
                Swal.showValidationMessage('Please fill in all fields');
                return false;
            }
            return { name, email, subject, message };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Success!', 'Message sent successfully!', 'success');
        }
    });
}

// Visual novel project info using SweetAlert2
function showVisualNovelInfo() {
    Swal.fire({
        title: 'Visual Novel Game',
        text: 'Visual Novel Game project details coming soon! This project demonstrates my narrative design and interactive storytelling skills in game development.',
        icon: 'info',
        confirmButtonText: 'Got it!'
    });
}

// Add scroll event listener for progress bar
window.addEventListener('scroll', updateProgressBar);

// Add scroll event listener for scroll-to-top button
window.addEventListener('scroll', updateScrollToTopButton);

// Initialize progress bar on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize everything immediately
    updateProgressBar();
    
    // Add some interactive enhancements
    addInteractiveEnhancements();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Add particle effects
    addParticleEffects();
    
    // Add scroll-triggered animations
    addScrollAnimations();
    
    // Initialize scroll-to-top button
    initScrollToTopButton();
});



// Add scroll-triggered animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .contact-card');
    animateElements.forEach(el => observer.observe(el));
}

// Typing effect for hero title
function initTypingEffect() {
    const titleLines = document.querySelectorAll('.title-line');
    if (!titleLines.length) return;
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        setTimeout(() => {
            typeText(line, text, 0, 100);
        }, index * 1000);
    });
}

// Type text character by character
function typeText(element, text, index, speed) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeText(element, text, index + 1, speed), speed);
    }
}

// Add particle effects to hero section
function addParticleEffects() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        createParticle(heroSection);
    }
}

// Create individual particle
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--accent-color);
        border-radius: 50%;
        opacity: 0.6;
        pointer-events: none;
        animation: float 6s infinite linear;
    `;
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 6000);
}

// Add interactive enhancements
function addInteractiveEnhancements() {
    // Add hover effects to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on a button or link
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            
            // Add a subtle click effect
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        });
    });
    

    
    // Initialize animated stats
    initAnimatedStats();
    
    // Add project card interactions
    addProjectCardInteractions();
}

// Animated stats counter
function initAnimatedStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                if (finalValue.includes('+') || finalValue.includes('.')) {
                    // Handle special cases like "1.2M+" or "B.C.A"
                    target.textContent = finalValue;
                } else {
                    // Animate numeric values
                    animateNumber(target, 0, parseInt(finalValue), 2000);
                }
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Animate number counting
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (difference * progress));
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Add project card interactions
function addProjectCardInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Project cards now have subtle CSS-only hover effects
        // No JavaScript manipulation needed
    });
}

 

// Scroll to top button functionality
function initScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Update scroll-to-top button visibility
function updateScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;
    
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
} 