document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');

    // Sample data: Replace with your actual data source
    const menuItems = [
        { id: 1, name: 'Margherita', description: 'Classic cheese and tomato pizza', price: '$10.00' },
        { id: 2, name: 'Pepperoni', description: 'Spicy pepperoni and cheese', price: '$12.00' },
        { id: 3, name: 'Vegetarian', description: 'Loaded with fresh vegetables', price: '$11.00' },
        // Add more items as needed
    ];

    function renderMenu(items) {
        menuContainer.innerHTML = ''; // Clear existing content
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';

            itemElement.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
                <button class="order-btn" data-id="${item.id}">Order Now</button>
            `;

            menuContainer.appendChild(itemElement);
        });

        // Attach event listeners to order buttons
        document.querySelectorAll('.order-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.getAttribute('data-id');
                handleOrder(itemId);
            });
        });
    }

    function handleOrder(itemId) {
        const item = menuItems.find(item => item.id == itemId);
        if (item) {
            alert(`You have ordered: ${item.name}`);
            // Implement further actions, like adding to cart or placing an order
        }
    }

    // Initial rendering of the menu
    renderMenu(menuItems);
});
