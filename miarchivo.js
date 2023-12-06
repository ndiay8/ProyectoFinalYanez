//Ingreso a al sitio
let edad = prompt("Ingresa tu edad")
let edadNumerica = parseInt(edad)

if (isNaN(edadNumerica)) {
    prompt("Lo siento, no te entiendo, ingresa tu edad en numeros")
    // si no de cumple lo anterior, lo volvera a preguntar
    while (edad !== edadNumerica) {
        edad <= prompt("Vuelve a ingresar tu edad")
        console.log("No identificado")
        break
    }
}
else {
    if (edadNumerica >= 18) {
        alert("Bienvenid@")
        console.log("ingreso exitoso")
        ingreso()
    }
    else {
        alert("No cumples aún con la edad")
        console.log("ingreso fallido")
    }
}
//metodo de solicitud de ingreso
function ingreso() {
    let nombre = prompt("ingresa tu nombre y apellido")
    console.log(nombre + " ha ingresado")
}

