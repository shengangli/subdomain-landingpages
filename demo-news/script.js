// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !navMenu?.contains(e.target)) {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Smooth scroll for navigation links
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

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('.newsletter-input');
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        // Simulate form submission
        showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
        emailInput.value = '';
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Load more articles
const loadMoreBtn = document.querySelector('.load-more');
const newsList = document.querySelector('.news-list');

loadMoreBtn?.addEventListener('click', function() {
    // Simulate loading more articles
    this.textContent = 'Loading...';
    this.disabled = true;

    setTimeout(() => {
        const newArticles = generateArticles(3);
        newArticles.forEach(article => {
            newsList.appendChild(article);
        });

        this.textContent = 'Load More Articles';
        this.disabled = false;

        // Animate new articles
        const addedArticles = newsList.querySelectorAll('.news-item:nth-last-child(-n+3)');
        addedArticles.forEach((article, index) => {
            article.style.opacity = '0';
            article.style.transform = 'translateY(20px)';
            setTimeout(() => {
                article.style.transition = 'all 0.5s ease';
                article.style.opacity = '1';
                article.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 1000);
});

// Generate sample articles
function generateArticles(count) {
    const articles = [];
    const sampleData = [
        {
            category: 'Technology',
            title: 'Breakthrough in Renewable Energy Storage Technology',
            excerpt: 'Scientists develop new battery technology that could revolutionize renewable energy storage.',
            author: 'Alex Johnson',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=200&h=150&fit=crop'
        },
        {
            category: 'Business',
            title: 'Global Markets React to New Trade Agreement',
            excerpt: 'International trade deal promises to boost economic growth across participating nations.',
            author: 'Maria Garcia',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop'
        },
        {
            category: 'Health',
            title: 'Major Advance in Cancer Treatment Research',
            excerpt: 'Clinical trials show promising results for new immunotherapy approach.',
            author: 'Dr. Robert Chen',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop'
        }
    ];

    for (let i = 0; i < count; i++) {
        const data = sampleData[i % sampleData.length];
        const article = document.createElement('article');
        article.className = 'news-item';
        article.innerHTML = `
            <div class="news-image">
                <img src="${data.image}" alt="News">
            </div>
            <div class="news-content">
                <span class="news-category">${data.category}</span>
                <h3 class="news-title">${data.title}</h3>
                <p class="news-excerpt">${data.excerpt}</p>
                <div class="news-meta">
                    <span>${data.author}</span>
                    <span>•</span>
                    <span>Just now</span>
                </div>
            </div>
        `;
        articles.push(article);
    }

    return articles;
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">×</button>
        </div>
    `;

    document.body.appendChild(notification);

    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 400px;
        }

        .notification.success {
            border-left: 4px solid #10B981;
        }

        .notification.error {
            border-left: 4px solid #EF4444;
        }

        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .notification-message {
            flex: 1;
            color: #374151;
            font-size: 0.875rem;
        }

        .notification-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #6B7280;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .notification-close:hover {
            color: #374151;
        }

        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;

    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add mobile menu styles dynamically
const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            z-index: 999;
            animation: slideDown 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }

        body.menu-open {
            overflow: hidden;
        }

        @keyframes slideDown {
            from {
                transform: translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`;
document.head.appendChild(mobileMenuStyles);

// Search functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn?.addEventListener('click', () => {
    const searchModal = createSearchModal();
    document.body.appendChild(searchModal);

    const searchInput = searchModal.querySelector('.search-modal-input');
    searchInput?.focus();

    // Close modal on escape or click outside
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.remove();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.querySelector('.search-modal')) {
            document.querySelector('.search-modal').remove();
        }
    });
});

// Create search modal
function createSearchModal() {
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
        <div class="search-modal-content">
            <div class="search-modal-header">
                <h3>Search Articles</h3>
                <button class="search-modal-close">×</button>
            </div>
            <div class="search-modal-body">
                <input type="text" class="search-modal-input" placeholder="Search for news, topics, or authors...">
                <div class="search-suggestions">
                    <p class="suggestion-label">Popular searches:</p>
                    <div class="suggestion-tags">
                        <span class="suggestion-tag">Climate Change</span>
                        <span class="suggestion-tag">Technology</span>
                        <span class="suggestion-tag">Elections</span>
                        <span class="suggestion-tag">Economy</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .search-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-top: 100px;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }

        .search-modal-content {
            background: white;
            border-radius: 12px;
            width: 90%;
            max-width: 600px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.3s ease;
        }

        .search-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #E5E7EB;
        }

        .search-modal-header h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #111827;
        }

        .search-modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #6B7280;
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            transition: all 0.2s;
        }

        .search-modal-close:hover {
            background: #F3F4F6;
            color: #111827;
        }

        .search-modal-body {
            padding: 1.5rem;
        }

        .search-modal-input {
            width: 100%;
            padding: 1rem;
            font-size: 1rem;
            border: 2px solid #E5E7EB;
            border-radius: 8px;
            outline: none;
            transition: all 0.2s;
        }

        .search-modal-input:focus {
            border-color: #0066FF;
        }

        .search-suggestions {
            margin-top: 1.5rem;
        }

        .suggestion-label {
            font-size: 0.875rem;
            color: #6B7280;
            margin-bottom: 0.75rem;
        }

        .suggestion-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .suggestion-tag {
            padding: 0.5rem 1rem;
            background: #F3F4F6;
            border-radius: 20px;
            font-size: 0.875rem;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s;
        }

        .suggestion-tag:hover {
            background: #0066FF;
            color: white;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;

    if (!document.querySelector('#search-modal-styles')) {
        modalStyles.id = 'search-modal-styles';
        document.head.appendChild(modalStyles);
    }

    // Close button functionality
    const closeBtn = modal.querySelector('.search-modal-close');
    closeBtn?.addEventListener('click', () => modal.remove());

    // Handle search input
    const searchInput = modal.querySelector('.search-modal-input');
    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = e.target.value.trim();
            if (searchTerm) {
                showNotification(`Searching for "${searchTerm}"...`, 'success');
                modal.remove();
            }
        }
    });

    // Handle suggestion tags
    const suggestionTags = modal.querySelectorAll('.suggestion-tag');
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', () => {
            searchInput.value = tag.textContent;
            searchInput.focus();
        });
    });

    return modal;
}

// Initialize animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.featured-card, .news-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add hover effect for article cards
document.querySelectorAll('.featured-card, .news-item, .trending-item').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        showNotification('Opening article...', 'success');
    });
});