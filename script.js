// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
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

// Ensure smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});