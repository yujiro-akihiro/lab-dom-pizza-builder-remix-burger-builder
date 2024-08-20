// script.js

// Constants for pricing
const basePrice = 5;
const ingredients = {
    beefPatty: { name: 'Beef Patty', price: 2 },
    chickenPatty: { name: 'Chicken Patty', price: 2 },
    veganPatty: { name: 'Vegan Patty', price: 2 },
    cheese: { name: 'Cheese', price: 1 },
    lettuce: { name: 'Lettuce', price: 0.5 },
    tomato: { name: 'Tomato', price: 0.5 },
    onion: { name: 'Onion', price: 0.5 },
    ketchup: { name: 'Ketchup', price: 0.5 },
    chiliSauce: { name: 'Chili Sauce', price: 0.5 },
    bbqSauce: { name: 'BBQ Sauce', price: 0.5 }
};

// Initial state
const state = {
    beefPatty: false,
    chickenPatty: false,
    veganPatty: false,
    cheese: false,
    lettuce: false,
    tomato: false,
    onion: false,
    ketchup: false,
    chiliSauce: false,
    bbqSauce: false
};

// Function to render the burger based on state
function renderEverything() {
    renderPatty();
    renderCheese();
    renderLettuce();
    renderTomato();
    renderOnion();
    renderSauce();
    renderPrice();
    updateButtons();
}

// Function to render patties
function renderPatty() {
    document.querySelector('.patty.beef').style.display = state.beefPatty ? 'block' : 'none';
    document.querySelector('.patty.chicken').style.display = state.chickenPatty ? 'block' : 'none';
    document.querySelector('.patty.vegan').style.display = state.veganPatty ? 'block' : 'none';
}

// Function to render cheese
function renderCheese() {
    document.querySelector('.cheese').style.display = state.cheese ? 'block' : 'none';
}

// Function to render lettuce
function renderLettuce() {
    document.querySelector('.lettuce').style.display = state.lettuce ? 'block' : 'none';
}

// Function to render tomato
function renderTomato() {
    document.querySelector('.tomato').style.display = state.tomato ? 'block' : 'none';
}

// Function to render onion
function renderOnion() {
    document.querySelector('.onion').style.display = state.onion ? 'block' : 'none';
}

// Function to render sauces
function renderSauce() {
    document.querySelector('.sauce.ketchup').style.display = state.ketchup ? 'block' : 'none';
    document.querySelector('.sauce.chili').style.display = state.chiliSauce ? 'block' : 'none';
    document.querySelector('.sauce.bbq').style.display = state.bbqSauce ? 'block' : 'none';
}

// Function to update price list and total price
function renderPrice() {
    const priceList = document.querySelector('.price ul');
    priceList.innerHTML = ''; // Clear previous price list

    let totalPrice = basePrice;

    for (const [key, value] of Object.entries(ingredients)) {
        if (state[key]) {
            totalPrice += value.price;
            const listItem = document.createElement('li');
            listItem.textContent = `${value.name}: $${value.price.toFixed(2)}`;
            priceList.appendChild(listItem);
        }
    }

    const totalElement = document.querySelector('.price strong');
    totalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to update button active states
function updateButtons() {
    document.querySelectorAll('.btn').forEach(button => {
        button.classList.toggle('active', state[button.dataset.ingredient]);
    });
}

// Initial render
renderEverything();

// Event listeners for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const ingredient = this.dataset.ingredient;
        state[ingredient] = !state[ingredient];
        renderEverything();
    });
});
