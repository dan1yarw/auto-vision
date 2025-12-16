// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the car gallery
    initCarGallery();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize filter buttons
    initFilterButtons();
    
    // Initialize scroll-based navigation highlighting
    initScrollNavigation();
});

// Car data - Original design with proper images
const cars = [
    {
        id: 1,
        name: "Camry 80",
        brand: "Toyota",
        image: "https://gang-motors.ru/wp-content/uploads/2024/07/01a45692-c192-446b-963d-901799af39b4-1.jpeg",
        description: "Toyota — Drive Your Dream.",
        horsepower: 232,
        acceleration: 6.7,
        topSpeed: 230,
        price: "$28,400"
    },
    {
        id: 2,
        name: "Mercedes E63 AMG",
        brand: "Mercedes Benz",
        image: "https://i.pinimg.com/1200x/7f/48/65/7f486558439d85144bc4639a9c425b9f.jpg",
        description: "The Mercedes E63 represents the peak of Mercedes's V6 production cars as a sedan.",
        horsepower: 612,
        acceleration: 3.4,
        topSpeed: 270,
        price: "$114,000"
    },
    {
        id: 3,
        name: "Porsche 911 Turbo S",
        brand: "Porsche",
        image: "https://i.pinimg.com/1200x/fd/5e/d4/fd5ed4ee3c81762b0950b78b8f8bd60d.jpg",
        description: "The 911 Turbo S combines everyday usability with extreme performance.",
        horsepower: 640,
        acceleration: 2.6,
        topSpeed: 322,
        price: "$260,500"
    },
    {
        id: 4,
        name: "M5 Competition",
        brand: "BMW",
        image: "https://i.pinimg.com/1200x/63/24/8a/63248a5825b8d9aa277cbbe2edb5026d.jpg",
        description: "BMW M5 F90 — looks like a suit, hits like a supercar.",
        horsepower: 625,
        acceleration: 2.8,
        topSpeed: 315,
        price: "$121,900"
    },
    {
        id: 5,
        name: "Ferrari 488 Pista",
        brand: "Ferrari",
        image: "https://i.pinimg.com/1200x/e0/29/00/e029004e1f4dd44b354d45c8e20d4d53.jpg",
        description: "The 488 Pista is a track-focused version of the 488 GTB with enhanced aerodynamics.",
        horsepower: 711,
        acceleration: 2.85,
        topSpeed: 211,
        price: "$350,000"
    },
    {
        id: 6,
        name: "Lamborghini Huracán EVO",
        brand: "Lamborghini",
        image: "https://i.pinimg.com/1200x/0f/b7/b3/0fb7b3ec97bd9e0d322bc18a60fb09e1.jpg",
        description: "The Huracán EVO represents the evolution of the most successful V10-powered Lamborghini.",
        horsepower: 631,
        acceleration: 2.9,
        topSpeed: 202,
        price: "$261,274"
    },
    {
        id: 7,
        name: "Porsche Taycan Turbo S",
        brand: "Porsche",
        image: "https://i.pinimg.com/1200x/b7/fc/04/b7fc0499de4897ffd9e6620c208bb177.jpg",
        description: "Porsche's first all-electric sports car sets new standards for electric performance.",
        horsepower: 750,
        acceleration: 2.6,
        topSpeed: 161,
        price: "$187,400"
    },
    {
        id: 8,
        name: "M5 F10",
        brand: "BMW",
        image: "https://i.pinimg.com/1200x/ec/d5/c3/ecd5c3bd2d9bf0590cfcc990b4a298b2.jpg",
        description: "The P1 is McLaren's hypercar that combines a twin-turbo V8 with an electric motor.",
        horsepower: 903,
        acceleration: 2.8,
        topSpeed: 217,
        price: "$48,000"
    },
    {
        id: 9,
        name: "LX570",
        brand: "Lexus",
        image: "https://i.pinimg.com/1200x/ca/b6/95/cab69572860d487329f591bf9fccb1e1.jpg",
        description: "The Lexus LX570 embodies understated luxury, commanding presence, and effortless power in one refined SUV.",
        horsepower: 383,
        acceleration: 7.7,
        topSpeed: 210,
        price: "$107,000"
    },
    {
        id: 10,
        name: "IS350 f-sport",
        brand: "Lexus",
        image: "https://i.pinimg.com/1200x/7d/80/57/7d8057205298c2ceae09d4e88790a7c1.jpg",
        description: "The IS350 F SPORT is the ultimate expression of performance, precision, and aggressive luxury in the Lexus IS lineup.",
        horsepower: 312,
        acceleration: 5.6,
        topSpeed: 230,
        price: "$48,000"
    }
];

// Initialize car gallery
function initCarGallery() {
    const carsGrid = document.querySelector('.cars-grid');
    
    // Clear existing content
    carsGrid.innerHTML = '';
    
    // Create car cards
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = `car-card ${car.brand}`;
        carCard.innerHTML = `
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image">
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <p>${car.description}</p>
                <div class="car-specs">
                    <div class="spec">
                        <i class="fas fa-horse-head"></i>
                        <span>${car.horsepower} HP</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>${car.acceleration}s 0-100</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-bolt"></i>
                        <span>${car.topSpeed} kmh</span>
                    </div>
                </div>
                <div class="car-price">${car.price}</div>
            </div>
        `;
        carsGrid.appendChild(carCard);
    });
    
    // Animate car cards on load
    setTimeout(() => {
        const carCards = document.querySelectorAll('.car-card');
        carCards.forEach((card, index) => {
            card.style.animation = `fadeInUp 0.8s ease ${index * 0.1}s forwards`;
        });
    }, 500);
}

// Initialize scroll animations
function initScrollAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.8s ease forwards`;
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    const elementsToAnimate = document.querySelectorAll('.section-title, .about-text, .about-image, .contact-info, .contact-form');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.padding = '1rem 0';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.padding = '1.5rem 0';
        }
    });
}

// Initialize navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Initialize filter buttons
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter cars
            const filter = button.getAttribute('data-filter');
            filterCars(filter);
        });
    });
}

// Filter cars by brand
function filterCars(filter) {
    const carCards = document.querySelectorAll('.car-card');
    
    carCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
            card.style.display = 'block';
            // Add animation
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize scroll-based navigation highlighting
function initScrollNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        // Scroll to gallery section
        document.querySelector('#gallery').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
    
    // Add hover effect to hero image container
    const floatingCar = document.querySelector('.floating-car');
    floatingCar.addEventListener('mouseenter', () => {
        floatingCar.style.transform = 'scale(1.02)';
        floatingCar.style.boxShadow = '0 25px 60px rgba(138, 43, 226, 0.3)';
    });
    
    floatingCar.addEventListener('mouseleave', () => {
        floatingCar.style.transform = 'scale(1)';
        floatingCar.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.5)';
    });
});