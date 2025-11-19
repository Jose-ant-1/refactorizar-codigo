const persona = {
    "nombre": "Adam",
    "apellidos": "Rouidi",
    "edad": 19,
    "ubicacion": "Málaga",
    "aficiones": ["leer", "videoJuegos", "valorant"],
    "hermanos": 4,
    "emancipado": false,
    "carnetConducir": false,
};

/*
*     "direccion":{
        "calles":"torres",
        "numero":4
    },
* */

const form = document.getElementById("form");

const tiposValores = {
    "string": "text",
    "object": "${hacerArray}",
    "number": "number",
    "boolean": "checkbox"
};

function definePropiedades(tipoValor) {
    return tiposValores[typeof tipoValor] || "text";
}

function hacerArray(array) {
    return array.map(item =>
        `<button>${item}</button>`).
    join(" ");
}
/*
function creaForm() {
    let personaEntries = Object.entries(persona);
    let formHTML = personaEntries.map(([key, value]) => {
        if (typeof value === "object") {
            return `<p>${key}:</p>${hacerArray(value)}`;
        }
        return `<label>${key}:</label><input type="${definePropiedades(value)}" value="${value}"/><br/>`;
    }).join("<br/>");

    form.innerHTML = formHTML;
}
*/

function creaForm() {
    let personaEntries = Object.entries(persona);
    let formHTML = "";

     /*
        keys.forEach(key => {
            formHTML+= `<label>${key}:</label>`;
            formHTML+= `<input type="${definePropiedades(typeof persona[key])}" value="${ persona[key]}"/><br/>`
        });

        personaEntries.forEach((propiedad) => {
            formHTML+= `<label>${propiedad[0]}:</label>`;
            formHTML+= `<input type="${definePropiedades(typeof propiedad[1])}" value="${propiedad[1]}"/><br/>`
        });*/

    let resultadoMap =  personaEntries
        .map(([key, value]) => {
            if (typeof value === "object") {
                return `<p>${key}: ${hacerArray(value)}</p>`;
            }
            return `<label>${key}:</label> <input type="${definePropiedades(value)}" value="${value}"/>`;
        }).join("<br/>");
    console.log(resultadoMap)
    formHTML = resultadoMap;
/*
    formHTML = personaEntries
        .map((propiedad) =>
            `<label>${propiedad[0]}:</label><input type="${definePropiedades(typeof propiedad[1])}" value="${propiedad[1]}"/>`)
        .join("<br/>");
*/
    // Nombre
    /*formHTML += `
        <label>${keys[0]}:</label>
        <input type="${definePropiedades(typeof persona.nombre)}" value="${persona.nombre}"/>
        <br/>
    `;

     Edad
    formHTML += `
        <label>${keys[1]}:</label>
        <input type="${definePropiedades(typeof persona.edad)}" value="${persona.edad}"/>
        <br/>
    `;

     Aficiones
    formHTML += `<label>${keys[2]}:</label><br/>`;
    persona.aficiones.forEach(aficion => {
        formHTML += `<input type="text" value="${aficion}"><br>`;
    });

    formHTML += `<br/><label>${keys[3]}</label><input type="checkbox" ${persona.emancipado ? "checked" : ""}></input>`;*/
    form.innerHTML = formHTML;
}

//Aquí estuvo Adam
creaForm();



