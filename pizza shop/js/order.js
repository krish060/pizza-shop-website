document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('order-form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const pizza = document.getElementById('pizza').value;
        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;

        // Handle form submission (e.g., send data to server)
        console.log(`Order Details: Pizza - ${pizza}, Quantity - ${quantity}, Address - ${address}`);

        alert('Order placed successfully!');
    });
});
