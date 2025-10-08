
const TOTAL_NOTAS = 4;
const NOTA_MAX = 10;
const NOTA_MIN = 0;
const NOTA_SUFICIENTE = 5;
const NOTA_NOTABLE = 6;
const NOTA_SOBRESALIENTE = 8;

let notas = [];

document.addEventListener("DOMContentLoaded", () => {
    console.log("La página ha cargado");

    const form = document.querySelector("#form");

    let INPUT_PROMPT;
    do {
        INPUT_PROMPT = Number(prompt("Inputs (1) \nPrompts(2)"));
    } while(INPUT_PROMPT !== 1 && INPUT_PROMPT !== 2);

    INPUT_PROMPT === 1 ? usarInputs() : usarPrompt();

    function usarInputs() {
        for (let i = 0; i < TOTAL_NOTAS; i++) {
            form.innerHTML += `
                <label for="nota${i}">Nota ${i + 1}:</label>
                <input type="number" id="nota${i}" name="nota${i}" max="${NOTA_MAX}" min="${NOTA_MIN}">
                <br>
            `;
        }
        form.innerHTML += `<button id="btn">Enviar</button>`;

        const btn = document.querySelector("#btn");
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            procesarNotas();
        });
    }

    function procesarNotas() {
        notas = [];

        for (let i = 0; i < TOTAL_NOTAS; i++) {
            let input = document.querySelector(`#nota${i}`);
            let nota = input.value;

            if (!compruebaNota(nota, i + 1)) {
                return;
            }

            notas[i] = parseFloat(nota);
        }

        mostrarResultado();
    }
    
});



function usarPrompt() {
    for (let i = 0; i < TOTAL_NOTAS; i++) {
        let nota;
        let esValida = false;
        while (!esValida) {
            nota = prompt(`Ingrese la nota ${i + 1} (${NOTA_MIN}-${NOTA_MAX}):`);
            if (nota === null) {
                document.body.innerHTML += `<p>Operación cancelada.</p>`;
                return;
            }
            esValida = compruebaNota(nota, i + 1);
        }
        notas[i] = parseFloat(nota);
    }
    mostrarResultado();
}

function mostrarResultado() {
    const tipoResultado = prompt("\nTabla (1)\nDiv (2)");

    if (tipoResultado !== "1" && tipoResultado !== "2") {
        document.body.innerHTML += `<h1>OPCIÓN NO VÁLIDA</h1>`;
        setTimeout(() => {
            location.reload();
        }, 1000);
        return;
    }

    tipoResultado === "1" ? mostrarEnTabla() : mostrarEnDiv();
}

function mostrarEnTabla() {
    const promedio = calcularPromedio();
    const {calificacion} = obtenerCalificacion(promedio);

    const tabla = document.createElement("table");

    let thead = `
            <thead>
                <tr>
                    <th>Nota</th>
                    <th>Puntuación</th>
                </tr>
            </thead>
        `;

    let tbody = '<tbody>';
    for (let i = 0; i < notas.length; i++) {
        tbody += `
                <tr>
                    <td>Nota ${i + 1}</td>
                    <td>${notas[i]}</td>
                </tr>
            `;
    }
    tbody += `
            <tr>
                <td><strong>Promedio</strong></td>
                <td><strong>${promedio}</strong></td>
            </tr>
            <tr>
                <td><strong>Calificación:</strong></td>
                <td><strong>${calificacion}</strong></td>
            </tr>
        </tbody>`;

    tabla.innerHTML = thead + tbody;
    document.body.appendChild(tabla);
}

function mostrarEnDiv() {
    const promedio = calcularPromedio();
    const { estado, calificacion } = obtenerCalificacion(promedio);

    const resultado = `El alumno ha ${estado} el curso con un ${promedio}, es decir, ${calificacion}.`;

    let listaNotas = '';
    for (let i = 0; i < notas.length; i++) {
        listaNotas += `Nota ${i + 1}: ${notas[i]}`;
        if (i < notas.length - 1) {
            listaNotas += ', ';
        }
    }

    const resultadoDiv = document.createElement("div");
    resultadoDiv.innerHTML = `
            <h2>Resultado Final</h2>
            <p><strong>Notas ingresadas:</strong> ${listaNotas}</p>
            <p><strong>Promedio:</strong> ${promedio}</p>
            <p><strong>${resultado}</strong></p>
        `;

    document.body.appendChild(resultadoDiv);
}

function compruebaNota(nota, numeroNota) {
    if (!nota || nota.trim() === "") {
        alert(`Error: La nota ${numeroNota} no puede estar vacía`);
        return false;
    }

    let notaNum = parseFloat(nota);

    if (isNaN(notaNum)) {
        alert(`Error: La nota ${numeroNota} debe ser un número válido`);
        return false;
    }

    if (notaNum < NOTA_MIN || notaNum > NOTA_MAX) {
        alert(`Error: La nota ${numeroNota} debe estar entre ${NOTA_MIN} y ${NOTA_MAX}`);
        return false;
    }

    return true;
}

function calcularPromedio() {
    return (notas[0] + notas[1] + notas[2] + notas[3]) / TOTAL_NOTAS;
}

function obtenerCalificacion(promedio) {
    if (promedio < NOTA_SUFICIENTE) {
        return { estado: "suspendido", calificacion: "suspenso" };
    }

    if (promedio < NOTA_NOTABLE) {
        return { estado: "aprobado", calificacion: "suficiente" };
    }

    if (promedio < NOTA_SOBRESALIENTE) {
        return { estado: "aprobado", calificacion: "notable" };
    }

    return { estado: "aprobado", calificacion: "sobresaliente" };
}

