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

    // Animation d'apparition au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Sélectionner tous les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-container');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation du header au défilement
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Formulaire de contact
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Votre message a été envoyé avec succès!');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Animation pour les compétences
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.skill-icon').classList.add('pulse');
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.skill-icon').classList.remove('pulse');
        });
    });

    // Animation pour la carte "À propos de moi"
    const aboutCard = document.querySelector('.animated-card');
    if (aboutCard) {
        aboutCard.addEventListener('mousemove', function(e) {
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            const centerX = this.offsetWidth / 2;
            const centerY = this.offsetHeight / 2;
            
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            
            this.style.transform = `translateY(-5px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
        });
        
        aboutCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    }
});

// Ajouter des animations CSS
const style = document.createElement('style');
style.textContent = `
    .animate {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .pulse {
        animation: pulse 0.8s infinite alternate;
    }
    
    @keyframes pulse {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.2);
        }
    }
    
    header.scrolled {
        padding: 10px 0;
        background-color: rgba(44, 62, 80, 0.95);
    }
`;
document.head.appendChild(style);

// Bon exemple
fetch('./data/info.json')
    .then(response => response.json())
    .then(data => {
        // traitement des données
    })
    .catch(error => console.error('Erreur de chargement:', error));