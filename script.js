document.addEventListener('DOMContentLoaded', function() {
    // Improved Theme Toggle with Professional Colors
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Professional Dark Theme Colors
    const darkThemeColors = {
        '--primary-color': '#3a86ff',  // Bright blue
        '--secondary-color': '#2b2d42',  // Dark navy
        '--accent-color': '#ff5a5f',  // Coral accent
        '--light-color': '#1a1a2e',  // Very dark blue
        '--dark-color': '#f8f9fa',  // Light gray text
        '--text-color': '#e6e6e6',  // Light gray
        '--text-light': '#b8b8b8',  // Gray
        '--white': '#16213e',  // Dark blue
        '--black': '#ffffff',  // White
        '--shadow': '0 5px 15px rgba(0, 0, 0, 0.3)'
    };
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.setAttribute('data-theme', 'dark');
        applyDarkTheme();
    }
    
    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            removeDarkTheme();
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            applyDarkTheme();
        }
    });
    
    function applyDarkTheme() {
        Object.entries(darkThemeColors).forEach(([property, value]) => {
            document.documentElement.style.setProperty(property, value);
        });
    }
    
    function removeDarkTheme() {
        Object.keys(darkThemeColors).forEach(property => {
            document.documentElement.style.removeProperty(property);
        });
    }
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Typing Animation
    const typed = new Typed('.typing', {
        strings: ['Web Developer', 'Graphic Designer', 'Software Developer', 'Forex Trader', 'Problem Solver'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    const typed2 = new Typed('.typing-2', {
        strings: ['Web Developer', 'Graphic Designer', 'Software Developer', 'Forex Trader', 'Problem Solver'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // Certificate Slider - Fixed Navigation
    const certificateSlider = document.querySelector('.certificate-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (certificateSlider) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.certificate-item');
        const totalSlides = slides.length;
        
        function updateSlider() {
            const slideWidth = slides[0].clientWidth + 20; // Include gap
            certificateSlider.scrollTo({
                top: 0,
                left: currentSlide * slideWidth,
                behavior: 'smooth'
            });
            
            // Disable buttons at extremes
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }
        
        nextBtn.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlider();
            }
        });
        
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        });
        
        // Initialize
        updateSlider();
    }
    
    // Review Slider - Fixed Navigation
    const reviewSlider = document.querySelector('.review-slider');
    const prevReview = document.querySelector('.prev-review');
    const nextReview = document.querySelector('.next-review');
    
    if (reviewSlider) {
        let currentReview = 0;
        const reviews = document.querySelectorAll('.review-item');
        const totalReviews = reviews.length;
        
        function updateReviewSlider() {
            const reviewWidth = reviews[0].clientWidth + 20; // Include gap
            reviewSlider.scrollTo({
                top: 0,
                left: currentReview * reviewWidth,
                behavior: 'smooth'
            });
            
            // Disable buttons at extremes
            prevReview.disabled = currentReview === 0;
            nextReview.disabled = currentReview === totalReviews - 1;
        }
        
        nextReview.addEventListener('click', () => {
            if (currentReview < totalReviews - 1) {
                currentReview++;
                updateReviewSlider();
            }
        });
        
        prevReview.addEventListener('click', () => {
            if (currentReview > 0) {
                currentReview--;
                updateReviewSlider();
            }
        });
        
        // Initialize
        updateReviewSlider();
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            this.reset();
        });
    }
    
    // Download CV Button
    const downloadBtn = document.querySelector('My Resume.pdf');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('CV download functionality will be implemented soon!');
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .skills-content, .certificates-content, .projects-content, .timeline-item, .review-item, .blog-item, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.about-content, .skills-content, .certificates-content, .projects-content, .timeline-item, .review-item, .blog-item, .contact-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // Simple Project Card Hover Effects
    const projectCards = document.querySelectorAll('.project-item');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});