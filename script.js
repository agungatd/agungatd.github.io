// Fade-in on Scroll
const sections = document.querySelectorAll('.section-fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    rootMargin: '-100px 0px -100px 0px' // Adjust as needed
});

sections.forEach(section => {
    observer.observe(section);
});

// Hero Animation on Load
window.addEventListener('load', () => {
  document.getElementById('hero').classList.add('is-visible');
});