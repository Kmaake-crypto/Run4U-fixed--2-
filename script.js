document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Deposit & Total Fee Calculator ---
    const itemPriceInput = document.getElementById('itemPrice');
    const depositVal = document.getElementById('depositVal');
    const totalVal = document.getElementById('totalVal');

    if (itemPriceInput) {
        itemPriceInput.addEventListener('input', () => {
            const price = parseFloat(itemPriceInput.value) || 0;
            const deposit = price * 0.50;
            const runnerFee = 100;
            const total = deposit + runnerFee;

            depositVal.innerText = `R${deposit.toFixed(2)}`;
            totalVal.innerText = `R${total.toFixed(2)}`;
        });
    }

    // --- 2. Gallery Filter Tabs ---
    const filterButtons = document.querySelectorAll('.tag-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-filter');

            // Show / Hide products based on category
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

});


