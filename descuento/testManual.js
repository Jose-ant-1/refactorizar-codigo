import {doCalc, listaPrecios} from "./index.js";

const pruebas = [
    {itemlist: listaPrecios, descuento: 'SUMMER', expected:182.875}, //175 * 1.1; con codigo 192,5 * 0,95
    {itemlist: listaPrecios, descuento: 'WELCOME', expected:173.25}, //175 * 1.1; con codigo 192,5 * 0,90
    {itemlist: [{price: 50}], descuento: '', expected:55}, //55 * 1.1
    {itemlist: [], descuento: null, expected:0},
];

pruebas.forEach((prueba, indice) => {
    let resultado = doCalc(prueba.itemlist,prueba.descuento);
    resultado === prueba.expected ?
        console.log(`prueba ${indice + 1}: superada`) :
        console.log(`prueba ${indice + 1}: no superada, resultado: ${resultado}`);
});
