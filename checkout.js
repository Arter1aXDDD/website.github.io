document.addEventListener('DOMContentLoaded', () => {
    const totalAmountElement = document.getElementById('total-amount');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalAmountElement.textContent = `${totalAmount} ₽`;

    const map = new Nominatim({
        container: 'map',
        style: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        center: [55.751244, 37.618423],
        zoom: 10,
    });

    map.on('addresschosen', function(event) {
        console.log(event.address);
        // Here you can handle the selected address
    });
});