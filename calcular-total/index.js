

function calcTotal(order) {
    let total = 0;


    function comprobarCupon(order) {
        if (order.coupon.type === 'percent') {
// Descuento porcentual
            total = total * (1 - order.coupon.value / 100);
        }
        if (order.coupon.type === 'fixed') {
// Descuento fijo
            total = total - order.coupon.value;
        }
    }
    function comprobarEnvio(order) {
        if (order.shipping.country === 'US') {
            total += 10;
        } else {
            total += 25; // Envío internacional
        }
    }

    calcularPrecioProductos(order);
    if (order.coupon) {
        comprobarCupon(order);
    }
    if (order.shipping) {
        comprobarEnvio(order);
    }

    return total;
}

function calcularPrecioProductos(order) {
    const IMPUESTO = 1.15;
    let total = 0;
    for (let i = 0; i < order.items.length; i++) {
        let item = order.items[i];
        total += item.price * item.quantity * IMPUESTO; // 15% de impuesto incluido
    }
    return total;

}

// Ejemplo de uso:
const sampleOrder = {
    items: [
        {price: 50,
         quantity: 2
        },
        {price: 100,
         quantity: 1
        }
    ],
    coupon: {
        type: 'percent',
        value: 10
    }, // 10% de descuento
    shipping: {
        country: 'CA'
    }
};

console.log("Total Sucio:", calcTotal(sampleOrder));