document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
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

    // Copy Bitcoin address functionality
    const copyButton = document.querySelector('.btn-copy');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const address = document.querySelector('.address').textContent;
            navigator.clipboard.writeText(address).then(() => {
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            });
        });
    }

    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your submission! We will get back to you soon.');
            form.reset();
        });
    });

    // Donation card selection
    const donationCards = document.querySelectorAll('.donation-card');
    donationCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove highlight from all cards
            donationCards.forEach(c => {
                c.classList.remove('highlight');
                c.querySelector('.btn').textContent = 'Select';
            });
            
            // Add highlight to clicked card
            this.classList.add('highlight');
            this.querySelector('.btn').textContent = 'Selected';
            
            // Show confirmation (in a real app, this would proceed to payment)
            setTimeout(() => {
                alert(`Thank you for selecting the ${this.querySelector('h3').textContent} option. You'll be redirected to payment.`);
            }, 500);
        });
    });

    // Sticky header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
});