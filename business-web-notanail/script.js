// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`お問い合わせありがとうございます。\n\nお名前: ${name}\nメール: ${email}\n\n内容を確認次第、ご連絡させていただきます。`);
    
    this.reset();
});

// Lazy loading for gallery images
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                img.style.opacity = '1';
            }, 100);
            
            observer.unobserve(img);
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item img').forEach(img => {
    imageObserver.observe(img);
});

// Mobile menu toggle (for future implementation)
function createMobileMenu() {
    const header = document.querySelector('.header .container');
    const nav = document.querySelector('.nav');
    
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    menuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        position: relative;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block !important;
            }
            .mobile-menu-toggle span {
                display: block;
                width: 25px;
                height: 2px;
                background: #4a4a4a;
                margin: 5px 0;
                transition: 0.3s;
            }
            .nav {
                display: none;
                position: absolute;
                top: 80px;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .nav.active {
                display: flex !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    header.appendChild(menuButton);
    
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Initialize mobile menu
createMobileMenu();

// Parallax effect for hero images
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImages = document.querySelectorAll('.hero-img-container');
    const heroCircle = document.querySelector('.hero-circle');
    const heroJapaneseBg = document.querySelector('.hero-japanese-bg');
    
    if (scrolled < 600) {
        heroImages.forEach((img, index) => {
            const speed = 0.5 + (index * 0.1);
            img.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        if (heroCircle) {
            heroCircle.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.5}deg) scale(${1 + scrolled * 0.0005})`;
        }
        
        if (heroJapaneseBg) {
            heroJapaneseBg.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroJapaneseBg.style.opacity = Math.max(0.05 - scrolled * 0.0001, 0);
        }
    }
});

// Animate hero images on load
window.addEventListener('load', () => {
    const heroImages = document.querySelectorAll('.hero-img-container');
    heroImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.8) translateY(30px)';
            img.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1) translateY(0)';
            }, 100);
        }, index * 150);
    });
    
    // Animate text elements
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(-30px)';
        heroContent.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
        }, 300);
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .gallery-item, .info-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', animateOnScroll);