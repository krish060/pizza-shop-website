// JavaScript to handle interactive elements if needed
document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Additional interactive features can be added here
});
