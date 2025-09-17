document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect with color inversion
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Smooth scrolling with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 90;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Create mobile menu
    const createMobileMenu = () => {
        const container = document.querySelector('.header .container');
        const nav = document.querySelector('.nav');

        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-toggle';
        menuButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        container.appendChild(menuButton);

        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuButton.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuButton.classList.remove('active');
            });
        });
    };

    createMobileMenu();

    // Simple parallax - removed heavy animations

    // Removed magnetic cursor effect for better performance

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`お問い合わせありがとうございます。\n\nお名前: ${name}\nメール: ${email}\n\n内容を確認次第、ご連絡させていただきます。`);

            this.reset();
        });
    }

    // Advanced reveal animations with stagger
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -80px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 50);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Simplified CSS for reveal animation
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .gallery-item, .info-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .service-card.revealed, .gallery-item.revealed, .info-item.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Observe elements
    const elementsToReveal = document.querySelectorAll('.service-card, .gallery-item, .info-item');
    elementsToReveal.forEach(element => {
        revealObserver.observe(element);
    });

    // Simplified gallery hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.02)';
            item.style.zIndex = '10';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.zIndex = '1';
        });
    });

    // Removed custom cursor for better performance

    // Hero content animation on load
    window.addEventListener('load', () => {
        const heroContent = document.querySelector('.hero-content');
        const heroImagesAnim = document.querySelectorAll('.hero-img-container');

        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(40px)';

            setTimeout(() => {
                heroContent.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 200);
        }

        heroImagesAnim.forEach((img, index) => {
            img.style.opacity = '0';
            img.style.transform += ' scale(0.8)';

            setTimeout(() => {
                img.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                img.style.opacity = '1';
                img.style.transform = img.style.transform.replace('scale(0.8)', 'scale(1)');
            }, 400 + (index * 150));
        });
    });

    // Removed section transitions for better performance
});