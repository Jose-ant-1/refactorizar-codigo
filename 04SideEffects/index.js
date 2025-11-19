//agregar un ítem al carrito
function addItemToCart(cart, item) {
     return [...cart, { item: { ...item }, date: Date.now() }];
}

//aplicar descuento
function applyDiscount(cart, discount) {
    return cart.map(entry => ({
        ...entry,
        item: {
            ...entry.item,
            price: entry.item.price * (1 - discount)
        }
    }));
}

// calcular el total
function calculateTotal(cart) {
    return cart.reduce((total, entry) => total + entry.item.price, 0);
}

const item1 = { name: "Camiseta", price: 20 };
const item2 = { name: "Pantalón", price: 30 };

let cart = [];
cart = addItemToCart(cart, item1);
cart = addItemToCart(cart, item2);
const discountedCart = applyDiscount(cart, 0.1);
const total = calculateTotal(discountedCart);

console.log("Total:", total);
console.log("Carrito original:", cart);
console.log("Carrito con descuento:", discountedCart);
console.log("Ítems originales:", item1, item2);
