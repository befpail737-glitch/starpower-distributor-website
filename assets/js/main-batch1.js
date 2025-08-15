// Add this new code to the bottom of main.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Nav Toggle (from Batch 1)
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => mainNav.classList.toggle('active'));
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop form from submitting normally
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formStatus.textContent = 'Please fill out all required fields.';
                formStatus.style.color = 'red';
                return;
            }

            // Here you would typically send the data to a server endpoint
            // For this static example, we'll just show a success message.
            formStatus.textContent = 'Thank you for your inquiry! We will be in touch shortly.';
            formStatus.style.color = 'green';
            contactForm.reset();
        });
    }
});