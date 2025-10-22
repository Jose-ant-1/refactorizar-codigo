let descuento = 0;
const DESCUENTO_WELCOME = 0.10;
const DESCUENTO_SUMMER = 0.05;

const descuentos = {
    'SUMMER': DESCUENTO_SUMMER,
    'WELCOME': DESCUENTO_WELCOME,
    'DEFAULT': 0
    };

export function doCalc(productos, codigoDescuento = '') {
    let total = 0;
    const IMPUESTO = 0.10;
    //suma del precio de todos los productos
    total = productos.reduce((acumulador, valor) => {
        return acumulador + valor.price
    }, 0);

    comprobarDescuento(codigoDescuento);

    let precioConDescuento = total * (1 - descuento);
    let impuestoCalculado = precioConDescuento * IMPUESTO;

    return impuestoCalculado + precioConDescuento;
}

export const listaPrecios = [
    { price: 100 },
    { price: 50 },
    { price: 25 }
];

export function comprobarDescuento(codigoDescuento) {
    descuento = descuentos[codigoDescuento] || descuentos['DEFAULT'];
}

console.log("Precio Sucio:", doCalc(listaPrecios, 'WELCOME'));
