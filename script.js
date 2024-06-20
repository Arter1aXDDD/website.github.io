document.addEventListener('DOMContentLoaded', () => {
    const products = {
        savoryPancakes: [
            { name: 'Блин Космос', img: 'images/kosmos.png', price: 150, description: 'Сытный блин с мясом, овощами и специальным соусом.' },
            { name: 'Блин Шашлык', img: 'images/shahlik.png', price: 130, description: 'Блин с кусочками сочного шашлыка и луком.' },
            { name: 'Блин с курицей под соусом', img: 'images/kuritsa.png', price: 140, description: 'Нежный блин с курицей и соусом.' },
            { name: 'Блин Хотдогер', img: 'images/hotdog.png', price: 150, description: 'Блин с сосисками и кетчупом.' },
            { name: 'Блин Илья Муромец', img: 'images/muromets.png', price: 140, description: 'Сытный блин с мясом и сыром.' },
            { name: 'Блин с охотничьими колбасками', img: 'images/sosiski.png', price: 160, description: 'Блин с охотничьими колбасками и соусом.' },
            { name: 'Блин Дас Колбас', img: 'images/kolbasa.png', price: 140, description: 'Блин с колбасками и сыром.' },
            { name: 'Блин Шаверма', img: 'images/shaverma.png', price: 160, description: 'Блин с мясом, овощами и чесночным соусом.' }
        ],
        sweetPancakes: [
            { name: 'Блин Малиновый Чизкейк', img: 'images/malina.png', price: 100, description: 'Сладкий блин с малиной и кремом.' },
            { name: 'Блин Брауни солёная карамель', img: 'images/brauni.png', price: 110, description: 'Блин с шоколадным брауни и карамелью.' },
            { name: 'Блин Вишнёвый штрудель', img: 'images/vishnya.png', price: 120, description: 'Блин с вишнёвым штруделем и кремом.' },
            { name: 'Блин с Нутеллой', img: 'images/nutella.png', price: 130, description: 'Блин с популярной шоколадной пастой.' },
            { name: 'Блин с бананом и шоколадом', img: 'images/banan.png', price: 140, description: 'Блин с бананом и растопленным шоколадом.' },
            { name: 'Блин с варёной сгущёнкой и орехами', img: 'images/orehi.png', price: 150, description: 'Блин со сгущёнкой и орехами.' },
            { name: 'Блин со сгущёнкой', img: 'images/sgushenka.png', price: 130, description: 'Блин с варёной сгущёнкой.' },
            { name: 'Блин Спелая вишня', img: 'images/spelaya.png', price: 140, description: 'Блин с вишней и кремом.' }
        ],
        snacks: [
            { name: 'Картофель-фри', img: 'images/kartoshka.png', price: 80, description: 'Хрустящий картофель-фри.' },
            { name: 'Наггетсы', img: 'images/naggetsi.png', price: 90, description: 'Сочные куриные наггетсы.' },
            { name: 'Котлета-по-Киевски от шефа', img: 'images/kotleta.png', price: 100, description: 'Котлета с маслом и зеленью.' },
            { name: 'Креветки в темпуре', img: 'images/krevetki.png', price: 110, description: 'Креветки в хрустящей темпуре.' },
            { name: 'Маффин', img: 'images/maffin.png', price: 120, description: 'Сладкий маффин.' },
            { name: 'Американер', img: 'images/amerikaner.png', price: 130, description: 'Большое печенье американер.' },
            { name: 'Сырники', img: 'images/sirniki.png', price: 140, description: 'Классические сырники с сметаной.' },
            { name: 'Салат Цезарь с курицей', img: 'images/salat.png', price: 150, description: 'Салат Цезарь с курицей и сыром.' }
        ],
        drinks: [
            { name: 'Зелёный чай', img: 'images/greentea.png', price: 85, description: 'Ароматный зелёный чай.' },
            { name: 'Чёрный чай', img: 'images/blacktea.png', price: 85, description: 'Классический чёрный чай.' },
            { name: 'Латте', img: 'images/kofe.png', price: 165, description: 'Кофе латте с молоком.' },
            { name: 'Капучино', img: 'images/kapuchino.png', price: 80, description: 'Кофе капучино с пенкой.' },
            { name: 'Эспрессо', img: 'images/express.png', price: 105, description: 'Крепкий эспрессо.' },
            { name: 'Арбузный бум', img: 'images/arbuz.png', price: 175, description: 'Свежий арбузный коктейль.' },
            { name: 'Латте Тирамису', img: 'images/lattetiramisy.png', price: 225, description: 'Кофе латте с вкусом тирамису.' },
            { name: 'Кофе с маршмэллоу', img: 'images/marsh.png', price: 169, description: 'Кофе с маршмэллоу и шоколадом.' }
        ]
    };

    function renderProducts(sectionId, products) {
        const container = document.querySelector(`#${sectionId} .carousel-container`);
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('carousel-item');
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="product-info">
                    <p>${product.name}</p>
                    <p>${product.price} ₽</p>
                    <button onclick="showProductModal('${product.name}', '${product.img}', ${product.price}, '${product.description}')">Добавить в корзину</button>
                </div>
            `;
            container.appendChild(productDiv);
        });
    }

    renderProducts('savory-pancakes', products.savoryPancakes);
    renderProducts('sweet-pancakes', products.sweetPancakes);
    renderProducts('snacks', products.snacks);
    renderProducts('drinks', products.drinks);
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;

function showProductModal(name, img, price, description) {
    currentProduct = { name, price };
    document.getElementById('modal-product-image').src = img;
    document.getElementById('modal-product-name').textContent = name;
    document.getElementById('modal-product-price').textContent = `${price} ₽`;
    document.getElementById('modal-product-description').textContent = description;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    currentProduct = null;
}

function confirmAddToCart() {
    if (currentProduct) {
        const existingProduct = cart.find(product => product.name === currentProduct.name);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...currentProduct, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        closeModal();
    }
}

function openCart() {
    window.location.href = 'cart.html';
}

function moveCarousel(sectionId, direction) {
    const container = document.querySelector(`#${sectionId} .carousel-container`);
    const items = container.querySelectorAll('.carousel-item');
    const itemWidth = items[0].getBoundingClientRect().width;
    let currentScroll = container.scrollLeft;

    currentScroll += direction * itemWidth;
    container.scrollTo({ left: currentScroll, behavior: 'smooth' });
}
