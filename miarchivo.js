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

        //se agregan los productos

        let servicio = "Manicura";
        let duracion1 = 60;
        let boton1 = document.getElementsByClassName("btn btn-primary 1");

        const servicio1 = { servicio: "Manicura", duracion: 60, boton: document.getElementsByClassName("btn btn-primary 1") }

        console.log(servicio1)

        let esmaltado1 = "Esmaltado Permanente";
        let duracion2 = 120;
        let boton2 = document.getElementsByClassName("btn btn-primary 2");

        const servicio2 = { servicio: "Esmaltado Permanente", duracion: 120, boton: document.getElementsByClassName("btn btn-primary 2") }

        console.log(servicio2)

        let retiro = "Retiro";
        let duracion3 = 60;
        let boton3 = document.getElementsByClassName("btn btn-primary 3");

        const servicio3 = { servicio: "Retiro", duracion: 60, boton: document.getElementsByClassName("btn btn-primary 3") }
        console.log(servicio3)

        const agenda = []

        alert("Bienvenid@ a la agenda " + agenda)
        agenda.map((p) => {
            console.log(p)
        }
        )
    }
    else {
        alert("No cumples aún con la edad")
        console.log("ingreso fallido")
        //si no cumple requisitos te mostrara esto
        document.body.innerHTML = "Lo siento, no cumples con la edad requerida para poder agendar"
    }
}
//metodo de solicitud de ingreso
function ingreso() {
    let nombre = prompt("ingresa tu nombre y apellido")
    console.log(nombre + " ha ingresado")
}
//agregar cosas al navbar 
let agregados = document.getElementById("agregados")

let botonAgregar = document.getElementById("botonAgregar")

let resultado = "contenido";
agregados.addEventListener ("clickr", function () {
    let agregados = "Servicio agregado";
    resultado += " - " + offcanvas;
    btn.textContent = resultado;
});

//carro de compras
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
let productos = obtenerAlmacenamientoLocal('productos') || [];

const informacionAgenda = document.getElementById('informacionAgenda');
const cardAgenda = document.getElementById('cardAgenda');
const serviciosAgenda = document.getElementById('serviciosAgenda');
const card = document.getElementById('card');
const canasta = document.getElementById('canasta');
const numero = document.getElementById("numero");
const header = document.querySelector("#header");
const total = document.getElementById('total');
const body = document.querySelector("body");
const x = document.getElementById('x')

let lista = []
let valortotal = 0

window.addEventListener("scroll", function () {
    if (card.getBoundingClientRect().top < 10) {
        header.classList.add("scroll")
    }
    else {
        header.classList.remove("scroll")
    }
})

window.addEventListener('load', () => {
    visualizarProductos();
    cardAgenda.classList.add("none")
})

function visualizarProductos() {
    card.innerHTML = ""
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].existencia > 0) {
            card.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><button onclick=comprar(${i})>Comprar</button></div></div>`
        }
        else {
            card.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><p class="soldOut">Sold Out</p></div></div>`
        }
    }
}
function comprar(indice) {
    lista.push({ nombre: productos[indice].nombre, precio: productos[indice].valor })

    let van = true
    let i = 0
    while (van == true) {
        if (productos[i].nombre == productos[indice].nombre) {
            productos[i].existencia -= 1
            if (productos[i].existencia == 0) {
                visualizarProductos()
            }
            van = false
        }
        guardarAlmacenamientoLocal("productos", productos)
        i += 1
    }
    numero.innerHTML = lista.length
    numero.classList.add("diseñoNumero")
    return lista
}
canasta.addEventListener("click", function(){
    body.style.overflow = "hidden"
    cardAgenda.classList.remove('none')
    cardAgenda.classList.add('cardAgenda')
    serviciosAgenda.classList.add('servicioAgenda')
    mostrarElemtrosLista()
})

function mostrarElemtrosLista() {
    serviciosAgenda.innerHTML = ""
    valortotal = 0
    for (let i = 0; i < lista.length; i++){
        serviciosAgenda.innerHTML += `<div><div class="img"><button onclick=eliminar(${i}) class="botonTrash"><img src="./recursos/trash.png"></button><p>${lista[i].nombre}</p></div><p> $${lista[i].precio}</p></div>`
        valortotal += parseInt(lista[i].precio)
    }
    total.innerHTML = `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`
}

function eliminar(indice){
    let van = true
    let i = 0
    while (van == true) {
        if (productos[i].nombre == lista[indice].nombre) {
            productos[i].existencia += 1
            lista.splice(indice, 1)
            van = false
        }
        i += 1
    }
    guardarAlmacenamientoLocal("productos", productos)

    numero.innerHTML = lista.length
    if (lista.length == 0){
        numero.classList.remove("diseñoNumero")
    }
    visualizarProductos()
    mostrarElemtrosLista()
}

x.addEventListener("click", function(){
    body.style.overflow = "auto"
    cardAgenda.classList.add('none')
    cardAgenda.classList.remove('cardAgenda')
    serviciosAgenda.classList.remove('serviciosAgenda')
})