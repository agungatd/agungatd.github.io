// Navbar hide/show on scroll
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
        // Scroll down
        navbar.classList.add('hidden');
    } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
        // Scroll up
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-image, .project-card, .contact-form', '.skill-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===================================== Populate project cards
const projects = [
    // {"title": "x", "description": "x", "image": "#", "githubUrl": "#", "liveUrl": "#"},
    {"title": "Real-time Analytics Platform", "description": "A scalable platform processing hundreds of events per second using Kafka, Flink, and Pinot with sub-second latency for analytics queries.", "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", "githubUrl": "#", "liveUrl": "#"},
    {"title": "E-Commerce Data Lakehouse", "description": "A comprehensive data engineering project built on the medallion architecture, utilizing Iceberg for a scalable and reliable data lakehouse.", "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "githubUrl": "https://github.com/agungatd/End-to-end-E-commerce-Data-Lakehouse", "liveUrl": "#"},
    {"title": "Bird Species Image Classification", "description": "A deep learning portfolio project using a convolutional neural network.", "image": "https://images.unsplash.com/photo-1595495529320-dd1f14f6b907?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "githubUrl": "https://github.com/agungatd/Bird-Species-Image-Classification", "liveUrl": "#"},
    {"title": "My Portfolio Website", "description": "A website to showcase my project portfolio.", "image": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "githubUrl": "https://github.com/agungatd/my-portfolio-website", "liveUrl": "#"},
    // {"title": "x", "description": "x", "image": "#", "githubUrl": "#", "liveUrl": "#"},
];

function createProjectCard(title, description, image, githubUrl, liveUrl) {
    const card = document.createElement('div');
    card.className = 'project-card';
    const cardImgDiv = document.createElement('div');
    cardImgDiv.className = 'project-image';
    
    const cardImage = document.createElement('img');
    cardImage.src = image;
    cardImage.alt = title;
    cardImgDiv.appendChild(cardImage);
    
    const cardBody = document.createElement('div');
    cardBody.className = 'project-info';
    
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    
    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    
    const cardLinks = document.createElement('div');
    cardLinks.className = 'project-links';
    
    const githubLink = document.createElement('a');
    githubLink.href = githubUrl;
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.innerHTML = '<i class="fab fa-github"></i>';
    cardLinks.appendChild(githubLink);
    
    if (liveUrl !== '#') {
        const liveLink = document.createElement('a');
        liveLink.href = liveUrl;
        liveLink.target = '_blank';
        liveLink.rel = 'noopener noreferrer';
        liveLink.innerHTML = '<i class="fas fa-external-link-alt"></i>';
        cardLinks.appendChild(liveLink);
    }
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardLinks);
    
    card.appendChild(cardImgDiv);
    card.appendChild(cardBody);
    console.log(card);
    return card;
}

function populateProjectCards() {
    const projectContainer = document.getElementsByClassName('projects-grid');
    projectContainer.innerHTML = '';
    
    projects.forEach(project => {
        const card = createProjectCard(project.title, project.description, project.image, project.githubUrl, project.liveUrl);
        projectContainer[0].appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', populateProjectCards);

// ===================================== Populate tech items
// Sample JSON data (could come from an API or local file)
const techData = [
    {"icon_class": "fab fa-python tech-icon", "tech_name": "Python"},
    {"icon_class": "fas fa-database tech-icon", "tech_name": "SQL"},
    {"icon_class": "fas fa-bolt tech-icon", "tech_name": "Apache Spark"},
    {"icon_class": "fas fa-aws tech-icon", "tech_name": "AWS"},
    {"icon_class": "fas fa-wind tech-icon", "tech_name": "Apache Airflow"},
    {"icon_class": "fas fa-stream tech-icon", "tech_name": "Apache Kafka"},
    {"icon_class": "fas fa-docker tech-icon", "tech_name": "Docker"},
    {"icon_class": "fas fa-icicles tech-icon", "tech_name": "Apache Iceberg"},
    {"icon_class": "fas fa-database tech-icon", "tech_name": "Clickhouse"},
    {"icon_class": "fas fa-table tech-icon", "tech_name": "dbt"},
    {"icon_class": "fas fa-code-branch tech-icon", "tech_name": "Git"},
    {"icon_class": "fab fa-linux tech-icon", "tech_name": "Linux"},
    {"icon_class": "fas fa-server tech-icon", "tech_name": "Databricks"},
    // Add more items as needed
];

// Function to create a single tech item
function createTechItem(iconClass, techName) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'tech-item';
    
    const icon = document.createElement('i');
    icon.className = `${iconClass}`;
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'tech-name';
    nameSpan.textContent = techName;
    
    itemDiv.appendChild(icon);
    itemDiv.appendChild(nameSpan);
    
    return itemDiv;
}

// Function to populate all tech items
function populateTechItems() {
    // populate top tech items
    const topContainer = document.getElementsByClassName('tech-scroll-top');
    topContainer.innerHTML = '';
    techData.forEach(tech => {
        const item = createTechItem(tech.icon_class, tech.tech_name);
        topContainer[0].appendChild(item);
    });
    
    // populate bottom tech items
    const bottomContainer = document.getElementsByClassName('tech-scroll-bottom');
    bottomContainer.innerHTML = '';
    const reverseTechData = techData.reverse();
    reverseTechData.forEach(tech => {
        const item = createTechItem(tech.icon_class, tech.tech_name);
        bottomContainer[0].appendChild(item);
    });
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', populateTechItems);

// Initialize animations for skills
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Form submission
// const contactForm = document.getElementById('contactForm');
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Here you would typically send the form data to a server
//     alert('Thank you for your message! I will get back to you soon.');
//     contactForm.reset();
// });

// // Smooth scroll
// const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 800
// });

// Dark mode toggle
window.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-slider');
    const icon = themeToggle.querySelector('i');
    console.log(icon);
    
    // Check for saved user preference, if any
    const currentTheme = localStorage.getItem('theme');
    
    // If the current theme in localStorage is "dark"...
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Listen for a click on the theme toggle
    themeToggle.addEventListener('click', function() {

        // Toggle between light and dark
        if (document.body.getAttribute('data-theme') !== 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('theme-icon.fas.fa-moon', 'theme-icon.fas.fa-sun');
        } else {
            document.body.removeAttribute('data-theme');
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('theme-icon.fas.fa-sun', 'theme-icon.fas.fa-moon');
        }
    });
    
    // Optional: Check for system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDarkScheme.matches && !currentTheme) {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.setAttribute('data-theme', 'dark');
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                document.body.removeAttribute('data-theme');
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        }
    });
});

