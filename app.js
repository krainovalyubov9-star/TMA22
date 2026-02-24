// ========================
// Telegram Web App
// ========================
const tg = window.Telegram.WebApp;
tg.expand();
tg.setBackgroundColor('#f9eef7');

// ========================
// ТОВАРЫ С КРАСИВЫМИ КАРТИНКАМИ (ИСПРАВЛЕННЫЕ ССЫЛКИ)
// ========================
const products = [
    // ВАЗЫ (6 шт) - фотографии ваз
    { id: 1, name: 'Ваза "Мрамор"', price: 2390, cat: 'vases', image: '"C:\Users\ххх\Desktop\тма\ваза мрамор.png"' },
    { id: 2, name: 'Ваза "Золотая нить"', price: 3150, cat: 'vases', image: 'https://images.pexels.com/photos/4682308/pexels-photo-4682308.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Ваза "Матовое стекло"', price: 1890, cat: 'vases', image: 'https://images.pexels.com/photos/5427571/pexels-photo-5427571.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Ваза "Керамика"', price: 2790, cat: 'vases', image: 'https://images.pexels.com/photos/8474837/pexels-photo-8474837.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Ваза "Розовый кварц"', price: 4200, cat: 'vases', image: 'https://images.pexels.com/photos/8474838/pexels-photo-8474838.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Ваза "Минимал"', price: 1550, cat: 'vases', image: 'https://images.pexels.com/photos/8474840/pexels-photo-8474840.jpeg?auto=compress&cs=tinysrgb&w=600' },

    // СВЕЧИ (6 шт) - красивые фото свечей
    { id: 7, name: 'Свеча "Лаванда"', price: 890, cat: 'candles', image: 'https://images.pexels.com/photos/11294162/pexels-photo-11294162.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, name: 'Свеча "Ваниль"', price: 990, cat: 'candles', image: 'https://images.pexels.com/photos/11294163/pexels-photo-11294163.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 9, name: 'Свеча "Сандал"', price: 1190, cat: 'candles', image: 'https://images.pexels.com/photos/11294164/pexels-photo-11294164.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 10, name: 'Набор мини-свечей', price: 1490, cat: 'candles', image: 'https://images.pexels.com/photos/11294165/pexels-photo-11294165.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 11, name: 'Свеча в стакане', price: 1350, cat: 'candles', image: 'https://images.pexels.com/photos/11294166/pexels-photo-11294166.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 12, name: 'Аромасвеча "Роза"', price: 1690, cat: 'candles', image: 'https://images.pexels.com/photos/11294167/pexels-photo-11294167.jpeg?auto=compress&cs=tinysrgb&w=600' },

    // ТЕКСТИЛЬ (5 шт) - пледы, подушки, текстиль
    { id: 13, name: 'Плед "Мятный"', price: 2890, cat: 'textile', image: 'https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 14, name: 'Подушка "Бархат"', price: 1790, cat: 'textile', image: 'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 15, name: 'Скатерть "Лён"', price: 2390, cat: 'textile', image: 'https://images.pexels.com/photos/3840443/pexels-photo-3840443.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 16, name: 'Покрывало "Шик"', price: 4590, cat: 'textile', image: 'https://images.pexels.com/photos/11294168/pexels-photo-11294168.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 17, name: 'Полотенца "Софт"', price: 1290, cat: 'textile', image: 'https://images.pexels.com/photos/11294169/pexels-photo-11294169.jpeg?auto=compress&cs=tinysrgb&w=600' },

    // КАРТИНЫ (5 шт) - постеры и картины
    { id: 18, name: 'Постер "Пионы"', price: 1890, cat: 'paintings', image: 'https://images.pexels.com/photos/11294170/pexels-photo-11294170.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 19, name: 'Картина "Абстракция"', price: 3990, cat: 'paintings', image: 'https://images.pexels.com/photos/11294171/pexels-photo-11294171.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 20, name: 'Модульная картина', price: 5490, cat: 'paintings', image: 'https://images.pexels.com/photos/11294172/pexels-photo-11294172.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 21, name: 'Постер "Золото"', price: 2100, cat: 'paintings', image: 'https://images.pexels.com/photos/11294173/pexels-photo-11294173.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 22, name: 'Арт "Луна"', price: 2750, cat: 'paintings', image: 'https://images.pexels.com/photos/11294174/pexels-photo-11294174.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

// Отзывы
const reviews = [
    { author: 'Алиса', text: 'Ваза "Мрамор" просто восторг! Качество супер, доставка быстрая 💜', rating: 5 },
    { author: 'Евгения', text: 'Свечи пахнут божественно, горят ровно. Буду заказывать ещё!', rating: 5 },
    { author: 'София', text: 'Плед невероятно мягкий, цвет точь-в-точь как на фото', rating: 5 },
    { author: 'Марина', text: 'Картина "Абстракция" стала изюминкой гостиной, все спрашивают где купила ✨', rating: 5 },
    { author: 'Ксения', text: 'Подушка "Бархат" — любовь с первой секунды', rating: 4 },
];

// ========================
// Корзина и функции
// ========================
let cart = [];

const productList = document.getElementById('productList');
const categoryTitle = document.getElementById('categoryTitle');
const backBtn = document.getElementById('backBtn');
const cartBtn = document.getElementById('cartBtn');
const cartPanel = document.getElementById('cartPanel');
const overlay = document.getElementById('overlay');
const closeCart = document.getElementById('closeCart');
const cartCount = document.getElementById('cartCount');
const cartItemsDiv = document.getElementById('cartItems');
const cartTotalSpan = document.getElementById('cartTotal');

// Показать все товары
function showAllProducts() {
    productList.innerHTML = '';
    products.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}" class="product-image" loading="lazy" onerror="this.src='https://via.placeholder.com/300x300/f3e7ff/8f4faa?text=Charm'">
            <div class="product-info">
                <h3>${prod.name}</h3>
                <div class="product-price">${prod.price} ₽</div>
                <button class="add-to-cart" data-id="${prod.id}"><i class="fas fa-cart-plus"></i> В корзину</button>
            </div>
        `;
        productList.appendChild(card);
    });

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = +e.target.closest('button').dataset.id;
            addToCart(id);
        });
    });

    categoryTitle.textContent = '✨ Все товары';
    backBtn.style.display = 'none';
}

// Показать категорию
function showCategory(cat) {
    if (cat === 'reviews') {
        showReviews();
        return;
    }

    const filtered = products.filter(p => p.cat === cat);
    productList.innerHTML = '';
    filtered.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}" class="product-image" loading="lazy" onerror="this.src='https://via.placeholder.com/300x300/f3e7ff/8f4faa?text=Charm'">
            <div class="product-info">
                <h3>${prod.name}</h3>
                <div class="product-price">${prod.price} ₽</div>
                <button class="add-to-cart" data-id="${prod.id}"><i class="fas fa-cart-plus"></i> В корзину</button>
            </div>
        `;
        productList.appendChild(card);
    });

    const catNames = { vases: 'Вазы', candles: 'Свечи', textile: 'Текстиль', paintings: 'Картины' };
    categoryTitle.textContent = catNames[cat] || cat;
    backBtn.style.display = 'inline-block';

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = +e.target.closest('button').dataset.id;
            addToCart(id);
        });
    });
}

function showReviews() {
    productList.innerHTML = '';
    reviews.forEach(r => {
        const revEl = document.createElement('div');
        revEl.className = 'review-card';
        revEl.innerHTML = `
            <div class="review-header">
                <i class="fas fa-user-circle"></i>
                <div><strong>${r.author}</strong> ${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
            </div>
            <p class="review-text">"${r.text}"</p>
        `;
        productList.appendChild(revEl);
    });

    categoryTitle.textContent = '💬 Отзывы';
    backBtn.style.display = 'inline-block';
}

// Корзина
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });

    updateCartUI();
    tg.HapticFeedback.impactOccurred('light');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    tg.HapticFeedback.impactOccurred('light');
}

function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">👜 Корзина пока пуста...</p>';
        cartTotalSpan.textContent = '0 ₽';
        return;
    }

    let html = '', total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item">
                <span>${item.name} x${item.quantity}</span>
                <span>${item.price * item.quantity} ₽ <i class="fas fa-trash" data-id="${item.id}" style="color:#d67ac0;margin-left:10px;cursor:pointer;"></i></span>
            </div>
        `;
    });

    cartItemsDiv.innerHTML = html;
    cartTotalSpan.textContent = total + ' ₽';

    document.querySelectorAll('.fa-trash').forEach(icon => {
        icon.addEventListener('click', (e) => {
            const id = +e.target.dataset.id;
            removeFromCart(id);
        });
    });
}

// События
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => showCategory(card.dataset.cat));
});

backBtn.addEventListener('click', showAllProducts);

cartBtn.addEventListener('click', () => {
    cartPanel.classList.add('open');
    overlay.classList.add('show');
});

function closeCartPanel() {
    cartPanel.classList.remove('open');
    overlay.classList.remove('show');
}

closeCart.addEventListener('click', closeCartPanel);
overlay.addEventListener('click', closeCartPanel);

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        tg.showPopup({ title: '👜 Корзина пуста', message: 'Добавьте товары перед оформлением', buttons: [{ type: 'ok' }] });
        return;
    }
    tg.showPopup({ title: '✨ Заказ оформлен!', message: 'Скоро свяжемся с вами', buttons: [{ type: 'ok' }] });
    cart = [];
    updateCartUI();
    closeCartPanel();
});

// Старт
showAllProducts();
updateCartUI();