document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Handle form submission (e.g., send data to server)
        console.log(`Contact Details: Name - ${name}, Email - ${email}, Message - ${message}`);

        alert('Message sent successfully!');
    });

    // Google Maps integration
    window.initMap = function() {
        // Initialize Google Map with your coordinates
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.712776, lng: -74.005974 }, // Example coordinates
            zoom: 12
        });
    };
});
