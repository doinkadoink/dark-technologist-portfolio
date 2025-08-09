// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add hover effects to tech tags
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add glow effect to buttons on hover
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.5)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.3)';
    });
});

// Add counter animation to stats
function animateCounter(element, target, suffix, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = start.toFixed(1) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toFixed(1) + suffix;
        }
    }
    
    updateCounter();
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                // Handle different number formats
                if (text.includes('M')) {
                    // For numbers like "1.2M+"
                    const number = parseFloat(text.replace(/[^\d.]/g, ''));
                    const suffix = text.includes('+') ? 'M+' : 'M';
                    animateCounter(stat, number, suffix);
                } else if (text.includes('%')) {
                    // For percentages like "95%"
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    animateCounter(stat, number, '%');
                } else {
                    // For regular numbers like "3"
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    const suffix = text.includes('+') ? '+' : '';
                    animateCounter(stat, number, suffix);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Update aria-expanded attribute for accessibility
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
        
        // Prevent body scroll when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (mobileMenuToggle && !nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// Close mobile menu on window resize to desktop size
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileMenuToggle) {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenuToggle) {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// Contact Form Modal Functions
function openContactForm() {
    console.log('Opening contact form...');
    const modal = document.getElementById('contactFormModal');
    
    if (!modal) {
        console.error('Contact form modal not found!');
        return;
    }
    
    modal.style.display = 'flex';
    // Force reflow before adding class for smooth animation
    modal.offsetHeight;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    console.log('Contact form opened successfully');
}

function closeContactForm() {
    const modal = document.getElementById('contactFormModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
    
    // Reset form
    document.getElementById('contactForm').reset();
    hideFormStatus();
}

function showFormStatus(message, type) {
    const statusDiv = document.getElementById('formStatus');
    statusDiv.textContent = message;
    statusDiv.className = `form-status ${type}`;
    statusDiv.style.display = 'block';
}

function hideFormStatus() {
    const statusDiv = document.getElementById('formStatus');
    statusDiv.style.display = 'none';
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);
    
    // Show loading status
    showFormStatus('Sending encrypted message...', 'loading');
    
    try {
        // For now, we'll use Formspree (free service for handling form submissions)
        // You'll need to replace this URL with your actual Formspree endpoint
        // Alternative: Use EmailJS or implement your own backend
        
        const response = await fetch('https://formspree.io/f/xyzplykg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formObject.name,
                email: formObject.email,
                subject: formObject.subject,
                message: formObject.message,
                _replyto: formObject.email,
                _subject: `Dark Tech Portfolio Contact: ${formObject.subject}`
            })
        });
        
        if (response.ok) {
            showFormStatus('Message sent successfully! Expect a response from the dark side soon.', 'success');
            setTimeout(() => {
                closeContactForm();
            }, 3000);
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error sending form:', error);
        showFormStatus('Failed to send message. Please try again or contact directly via Discord.', 'error');
    }
});

// Close modal when clicking outside of it
document.getElementById('contactFormModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeContactForm();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('contactFormModal');
        if (modal.style.display === 'flex') {
            closeContactForm();
        }
    }
});

// Copy Discord username to clipboard
function copyDiscordUsername() {
    const discordId = '389694826456547328';
    
    // Use the modern clipboard API if available
    if (navigator.clipboard) {
        navigator.clipboard.writeText(discordId).then(() => {
            showDiscordCopyStatus('Discord ID copied to clipboard!', 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(discordId);
        });
    } else {
        fallbackCopyTextToClipboard(discordId);
    }
}

// Fallback for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showDiscordCopyStatus('Discord ID copied to clipboard!', 'success');
    } catch (err) {
        showDiscordCopyStatus('Failed to copy. Please manually copy: 389694826456547328', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Show copy status message
function showDiscordCopyStatus(message, type) {
    // Remove any existing status message
    const existingStatus = document.querySelector('.discord-copy-status');
    if (existingStatus) {
        existingStatus.remove();
    }
    
    // Create new status message
    const statusDiv = document.createElement('div');
    statusDiv.className = `discord-copy-status ${type}`;
    statusDiv.textContent = message;
    statusDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
        border: 1px solid ${type === 'success' ? '#00ff00' : '#ff0000'};
        color: ${type === 'success' ? '#00ff00' : '#ff0000'};
        padding: 1rem;
        border-radius: 5px;
        z-index: 1001;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(100px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(statusDiv);
    
    // Animate in
    setTimeout(() => {
        statusDiv.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        statusDiv.style.transform = 'translateY(100px)';
        setTimeout(() => {
            if (statusDiv.parentNode) {
                statusDiv.parentNode.removeChild(statusDiv);
            }
        }, 300);
    }, 3000);
}

// Make functions globally available for onclick handlers
window.openContactForm = openContactForm;
window.closeContactForm = closeContactForm;
window.copyDiscordUsername = copyDiscordUsername;

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up event listeners...');
    
    // Contact form buttons
    const openContactBtn = document.getElementById('openContactBtn');
    const startRebellionBtn = document.getElementById('startRebellionBtn');
    
    if (openContactBtn) {
        openContactBtn.addEventListener('click', function() {
            console.log('Open contact button clicked');
            openContactForm();
        });
        console.log('Open contact button listener added');
    } else {
        console.error('Open contact button not found');
    }
    
    if (startRebellionBtn) {
        startRebellionBtn.addEventListener('click', function() {
            console.log('Start rebellion button clicked');
            openContactForm();
        });
        console.log('Start rebellion button listener added');
    } else {
        console.error('Start rebellion button not found');
    }
}); 