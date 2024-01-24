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

//carrito
const carrito = [];

function agregarAlCarrito(agregarAlCarrito) {
    const producto = obtenerProductoPorId(agregarAlCarrito);
    carrito.push(producto);
    actualizarCarrito();
}

function obtenerProductoPorId(card, card1 ,card2, card3) {
    return { id: card, nombre: `Servicio ${card}`, precio: 1* card };
    
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');

    listaCarrito.innerHTML = '';
    carrito.forEach((producto, index)=> {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);

        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btn btn-danger btn-sm float-end';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => eliminarProducto(index));

        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });

    const total = carrito.reduce((total, producto) => total + producto.precio, 0);
    totalCarrito.textContent = `Total: $${total}`;
}
function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function finalizarAgendamiento() {
    console.log('Agendamiento finalizado:', carrito);
}

