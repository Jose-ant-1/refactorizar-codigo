

function doCalc(productos, codigoDescuento) {
    let total = 0;
    const IMPUESTO = 0.10;

    for (let i = 0; i < productos.length; i++) {
        let item = productos[i];
        total += item.price;
    }

    comprobarDescuento(codigoDescuento);


    let precioConDescuento = total * (1 - descuento);
    let impuestoCalculado = precioConDescuento * IMPUESTO;

    return impuestoCalculado + precioConDescuento;
}

const listaPrecios = [
    { price: 100 },
    { price: 50 },
    { price: 25 }
];

let descuento = 0;
const DESCUENTO_WELCOME = 0.10;
const DESCUENTO_SUMMER = 0.05;

function comprobarDescuento(codigoDescuento) {
    if (codigoDescuento === 'WELCOME') {
        descuento = DESCUENTO_WELCOME;
    }
    if (codigoDescuento === 'SUMMER') {
        descuento = DESCUENTO_SUMMER;
    }
}


console.log("Precio Sucio:", doCalc(listaPrecios, 'WELCOME'));
