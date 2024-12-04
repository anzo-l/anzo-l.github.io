// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.nav-container').style.background = 'rgba(26, 26, 26, 0.95)';
    } else {
        document.querySelector('.nav-container').style.background = 'rgba(26, 26, 26, 0.95)';
    }
});