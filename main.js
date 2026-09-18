document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation classes to elements
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s`;
        
        // Add a class that triggers the CSS state change
        card.classList.add('animate-on-scroll');
        observer.observe(card);
    });

    const showcaseImage = document.querySelector('.showcase-image');
    if (showcaseImage) {
        showcaseImage.style.opacity = '0';
        showcaseImage.style.transform = 'scale(0.95)';
        showcaseImage.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        showcaseImage.classList.add('animate-on-scroll');
        observer.observe(showcaseImage);
    }

    // CSS rule for visible state
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-on-scroll.visible {
            opacity: 1 !important;
            transform: translateY(0) scale(1) !important;
        }
    `;
    document.head.appendChild(style);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 5%';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 5%';
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });
});
