document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle - Default Light Mode
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Only activate dark mode if previously selected
    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when clicking links
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

    // Certificate Slider
    const certificateSlider = document.querySelector('.certificate-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (certificateSlider) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.certificate-item');
        const totalSlides = slides.length;
        
        function updateSlider() {
            const slideWidth = slides[0].clientWidth + 20;
            certificateSlider.scrollTo({
                top: 0,
                left: currentSlide * slideWidth,
                behavior: 'smooth'
            });
            
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
        
        updateSlider();
    }

    // Review Slider
    const reviewSlider = document.querySelector('.review-slider');
    const prevReview = document.querySelector('.prev-review');
    const nextReview = document.querySelector('.next-review');
    
    if (reviewSlider) {
        let currentReview = 0;
        const reviews = document.querySelectorAll('.review-item');
        const totalReviews = reviews.length;
        
        function updateReviewSlider() {
            const reviewWidth = reviews[0].clientWidth + 20;
            reviewSlider.scrollTo({
                top: 0,
                left: currentReview * reviewWidth,
                behavior: 'smooth'
            });
            
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
    const downloadBtn = document.querySelector('.download-cv');
    
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