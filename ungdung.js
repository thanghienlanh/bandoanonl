let cart = {};

function themVaoGioHang(itemName, itemPrice, itemImage) {
    if (cart[itemName]) {
        cart[itemName].quantity += 1;
    } else {
        cart[itemName] = {
            price: itemPrice,
            quantity: 1,
            image: itemImage
        };
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = '';
    let totalItems = 0;
    let totalPrice = 0;

    for (const [itemName, itemData] of Object.entries(cart)) {
        totalItems += itemData.quantity;
        totalPrice += itemData.price * itemData.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <div class="cart-item-image">
                <img src="${itemData.image}" alt="${itemName}">
            </div>
            <div class="cart-item-details">
                <p>${itemName}</p>
                <p>Giá: ${itemData.price}đ</p>
                <p>Số lượng: ${itemData.quantity}</p>
            </div>
        `;
        cartItemsDiv.appendChild(itemDiv);
    }

    cartTotal.innerText = `Tổng số sản phẩm: ${totalItems} - Tổng giá: ${totalPrice}đ`;
}

function displayUsername() {
    const username = localStorage.getItem('loggedInUsername');
    const welcomeMessage = document.getElementById('welcome-message');

    if (username) {
        welcomeMessage.innerText = `Xin chào, ${username}!`;
    } else {
        welcomeMessage.innerText = 'Xin chào, bạn!';
    }
}

window.onload = function() {
    displayUsername();
};

function updateCartHeader() {
    let totalItems = 0;
    for (const itemData of Object.values(cart)) {
        totalItems += itemData.quantity;
    }

    const cartHeader = document.querySelector('.cart-header');
    cartHeader.innerText = `Giỏ hàng / ${totalItems} sản phẩm`;
}

function showCart() {
    document.getElementById('cart-section').style.display = 'block';
    document.getElementById('tra-sua').style.display = 'none';
}

function hideCart() {
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('tra-sua').style.display = 'block';
}
