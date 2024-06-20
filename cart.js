document.addEventListener('DOMContentLoaded', () => {
    const products = {
        savoryPancakes: [
            { name: 'Блин Космос', img: 'images/kosmos.png', price: 150 },
            { name: 'Блин Шашлык', img: 'images/shahlik.png', price: 130 },
            { name: 'Блин с курицей под соусом', img: 'images/kuritsa.png', price: 140 },
            { name: 'Блин Хотдогер', img: 'images/hotdog.png', price: 150 },
            { name: 'Блин Илья Муромец', img: 'images/muromets.png', price: 140 },
            { name: 'Блин с охотничьими колбасками', img: 'images/sosiski.png', price: 160 },
            { name: 'Блин Дас Колбас', img: 'images/kolbasa.png', price: 140 },
            { name: 'Блин Шаверма', img: 'images/shaverma.png', price: 160 }
        ],
        sweetPancakes: [
            { name: 'Блин Малиновый Чизкейк', img: 'images/malina.png', price: 100 },
            { name: 'Блин Брауни солёная карамель', img: 'images/brauni.png', price: 110 },
            { name: 'Блин Вишнёвый штрудель', img: 'images/vishnya.png', price: 120 },
            { name: 'Блин с Нутеллой', img: 'images/nutella.png', price: 130 },
            { name: 'Блин с бананом и шоколадом', img: 'images/banan.png', price: 140 },
            { name: 'Блин с варёной сгущёнкой и орехами', img: 'images/orehi.png', price: 150 },
            { name: 'Блин со сгущёнкой', img: 'images/sgushenka.png', price: 130 },
            { name: 'Блин Спелая вишня', img: 'images/spelaya.png', price: 140 }
        ],
        snacks: [
            { name: 'Картофель-фри', img: 'images/kartoshka.png', price: 80 },
            { name: 'Наггетсы', img: 'images/naggetsi.png', price: 90 },
            { name: 'Котлета-по-Киевски от шефа', img: 'images/kotleta.png', price: 100 },
            { name: 'Креветки в темпуре', img: 'images/krevetki.png', price: 110 },
            { name: 'Маффин', img: 'images/maffin.png', price: 120 },
            { name: 'Американер', img: 'images/amerikaner.png', price: 130 },
            { name: 'Сырники', img: 'images/sirniki.png', price: 140 },
            { name: 'Салат Цезарь с курицей', img: 'images/salat.png', price: 150 }
        ],
        drinks: [
            { name: 'Зелёный чай', img: 'images/greentea.png', price: 85 },
            { name: 'Чёрный чай', img: 'images/blacktea.png', price: 85 },
            { name: 'Латте', img: 'images/kofe.png', price: 165 },
            { name: 'Капучино', img: 'images/kapuchino.png', price: 80 },
            { name: 'Эспрессо', img: 'images/express.png', price: 105 },
            { name: 'Арбузный бум', img: 'images/arbuz.png', price: 175 },
            { name: 'Латте Тирамису', img: 'images/lattetiramisy.png', price: 225},
            { name: 'Кофе с маршмэллоу', img: 'images/marsh.png', price: 169 }
        ]
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    function getProductImage(name) {
        for (const category in products) {
            const product = products[category].find(product => product.name === name);
            if (product) {
                return product.img;
            }
        }
        return '';
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const productImage = getProductImage(item.name);
            totalPrice += item.price * item.quantity;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${productImage}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <p>${item.name}</p>
                    <p>${item.price} ₽ x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)">
                    <button onclick="removeFromCart('${item.name}')">Удалить</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        totalPriceElement.textContent = totalPrice;
    }

    renderCart();
});

function updateQuantity(name, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.name === name);
    if (product) {
        product.quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
}

function removeFromCart(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

function checkout() {
    alert('Спасибо за ваш заказ!');
    localStorage.removeItem('cart');
    location.reload();
}