// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const navLinkItems = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const contactForm = document.getElementById('contactForm');
const skillProgressBars = document.querySelectorAll('.skill-progress');

// Theme Toggle - Start with Light Mode (Pink Theme)
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved theme preference - Default to Light Mode
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
} else {
    // Ensure light mode (pink theme) is active by default
    document.body.classList.remove('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

// Navigation between pages
navLinkItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target page from data attribute
        const targetPage = link.getAttribute('data-page');
        
        // Update active link
        navLinkItems.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
        
        // Show target page
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
                // Scroll to top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        
        // Animate skill bars when skills page is opened
        if (targetPage === 'skills') {
            setTimeout(() => {
                skillProgressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }, 300);
        }
    });
});

// Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        // For demo purposes, we'll just show an alert
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} as soon as possible.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active page based on URL hash or default to home
    const hash = window.location.hash.substring(1) || 'home';
    const activeLink = document.querySelector(`.nav-link[data-page="${hash}"]`);
    
    if (activeLink) {
        navLinkItems.forEach(item => item.classList.remove('active'));
        activeLink.classList.add('active');
        
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === hash) {
                page.classList.add('active');
            }
        });
    }
    
    // Animate skill bars on initial load if skills page is active
    if (hash === 'skills') {
        setTimeout(() => {
            skillProgressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }, 500);
    }
    
    // Handle assignment video button clicks
    // Handle assignment video button clicks
document.querySelectorAll('.assignment-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your YouTube video URL
        window.open('https://youtube.com/playlist?list=PLyF_jbkqpug7JwW0kEs19BqvJKwCiGnqT&si=aXNgsTlUV-jTfaZV', '_blank');
    });
});
document.querySelectorAll('.assignment-btn1').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your YouTube video URL
        window.open('https://youtu.be/37WJ4igr5ts?si=dfYYVkrwxnR1DNHU', '_blank');
    });
});
document.querySelectorAll('.assignment-btn2').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your YouTube video URL
        window.open('https://youtu.be/Mg57NFkZZuo?si=YU9SN58hVGri_hUc', '_blank');
    });
});
document.querySelectorAll('.assignment-btn3').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your YouTube video URL
        window.open('https://youtube.com/playlist?list=PLyF_jbkqpug7oioiLPsJmWNrr__PrSaqu&si=RmWtVCyhMjTP8TfO', '_blank');
    });
});
document.querySelectorAll('.assignment-btn4').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your YouTube video URL
        window.open('https://youtube.com/playlist?list=PLyF_jbkqpug7WIovz4I-3vTpjCeLnAJS4&si=ZS5_ew3OBmy72DgB', '_blank');
    });
});
document.querySelectorAll('.assignment-btn5').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your YouTube video URL
        window.open('https://youtu.be/KCnyLEtl6cQ?si=WFlbAxOcKxZYeUQm', '_blank');
    });
});
    
    // Handle YouTube channel button
    document.querySelector('.btn-primary[href="#"]').addEventListener('click', function(e) {
        if (this.querySelector('.fa-youtube')) {
            e.preventDefault();
            alert('This would redirect to your YouTube channel. Replace with actual link.');
        }
    });
});