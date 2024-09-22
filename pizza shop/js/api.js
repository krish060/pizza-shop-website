// Base URL for your API
const API_BASE_URL = 'https://example.com/api';

// Function to fetch blog posts
async function fetchBlogPosts() {
    try {
        const response = await fetch(`${API_BASE_URL}/blog-posts`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to submit contact form data
async function submitContactForm(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to submit an order
async function submitOrder(orderData) {
    try {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Fetch blog posts when the page loads
    fetchBlogPosts().then(posts => {
        console.log('Fetched blog posts:', posts);
        // Update the UI with the fetched blog posts
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = {
            name: contactForm.querySelector('#name').value,
            email: contactForm.querySelector('#email').value,
            message: contactForm.querySelector('#message').value,
        };

        const result = await submitContactForm(formData);
        console.log('Contact form submission result:', result);
        // Update the UI based on the result
    });

    // Handle order submission
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', async event => {
            event.preventDefault();
            const orderData = {
                item: orderForm.querySelector('#item').value,
                quantity: orderForm.querySelector('#quantity').value,
                address: orderForm.querySelector('#address').value,
            };

            const result = await submitOrder(orderData);
            console.log('Order submission result:', result);
            // Update the UI based on the result
        });
    }
});
