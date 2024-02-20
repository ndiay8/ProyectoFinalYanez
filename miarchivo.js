
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];


//metodo de solicitud de ingreso
let nombre = prompt("ingresa tu nombre y apellido")
function ingreso() {
    console.log(nombre + " ha ingresado")
}
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

// aqui viene el menu

else {
    if (edadNumerica >= 18) {
        alert("Bienvenid@ " + nombre)
        console.log("ingreso exitoso")
        ingreso()

        //se agregan los productos

        let servicio = "Manicura";
        let duracion1 = 60;
        let boton1 = document.getElementsByClassName("btn btn-primary 1");

        const servicio1 = { servicio: "Manicura", duracion: 60, boton: document.getElementsByClassName("btn btn-primary 1") }

        console.log(servicio1)

        let esmaltado1 = "Esmaltado Permanente";
        let duracion2 = 60;
        let boton2 = document.getElementsByClassName("btn btn-primary 2");

        const servicio2 = { servicio: "Esmaltado Permanente", duracion: 60, boton: document.getElementsByClassName("btn btn-primary 2") }

        console.log(servicio2)

        let retiro = "Retiro";
        let duracion3 = 60;
        let boton3 = document.getElementsByClassName("btn btn-primary 3");

        const servicio3 = { servicio: "Retiro", duracion: 60, boton: document.getElementsByClassName("btn btn-primary 3") }
        console.log(servicio3)

        const agenda = []

        agenda.map((p) => {
            console.log(p)
        }
        )

        //este es el carrito/agenda

        const carrito = [];

        function agregarAlCarrito(agregarAlCarrito) {
            const producto = obtenerProductoPorId(agregarAlCarrito);
            carrito.push(producto);
            actualizarCarrito();
        }

        function obtenerProductoPorId(card1) {
            return { id: (card1), nombre: `Servicio ${card1}`, tiempo: 120 }


        }
        function obtenerProductoPorId(card2) {

            return { id: (card2), nombre: `Servicio ${card2}`, tiempo: 60 }


        }
        function obtenerProductoPorId(card3) {
            return { id: (card3), nombre: `Servicio ${card3}`, tiempo: 60 }

        }


        function actualizarCarrito() {
            const listaCarrito = document.getElementById('listaCarrito');
            const totalCarrito = document.getElementById('totalCarrito');

            listaCarrito.innerHTML = '';
            carrito.forEach((producto, index) => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = `${producto.nombre} - ${producto.tiempo}`;
                listaCarrito.appendChild(li);

                const btnEliminar = document.createElement('button');
                btnEliminar.className = 'btn btn-danger btn-sm float-end';
                btnEliminar.textContent = 'Eliminar';
                btnEliminar.addEventListener('click', () => eliminarProducto(index));

                li.appendChild(btnEliminar);
                listaCarrito.appendChild(li);
            });

            const total = carrito.reduce((total, producto) => total + producto.tiempo, 0);
            totalCarrito.textContent = `Total: ${total}  minutos`;
            // localStorage.setItem('carrito', JSON.stringify(carrito));
            numerito.innerHTML = carrito.length
            numerito.classList.add("diseñoNumero")
            return carrito


        }

        function eliminarProducto(index) {
            carrito.splice(index, 1);
            actualizarCarrito();
        }

        function finalizarAgendamiento() {

            document.getElementById('formularioContenedor').style.display = 'block';
            // console.log('Carrito almacenado:', JSON.parse(localStorage.getItem('carrito')));
        }

        function procesarEntrada() {

            const agendamiento = {};
            const agendamientoJSON = JSON.stringify(agendamiento);
            localStorage.setItem('agendamiento', agendamientoJSON);

            const horarios = document.getElementsByName('horario');
            let horarioSeleccionado = null;

            for (const horario of horarios) {
                if (horario.checked) {
                    horarioSeleccionado = horario.value;
                    break;
                }
                else {
                
                }
            }

            const opciones = document.getElementsByName('seleccion');
            let seleccionado = null;

            for (const opcion of opciones) {
                if (opcion.checked) {
                    seleccionado = opcion.value;
                    break;
                }
                else {
                    
                }

            }

            const telefono = document.getElementById('telefono').value;
            if (telefono.trim() !== '') {
                Swal.fire({
                    title: "Estamos OK!",
                    text: ('Tu hora ya fue solicitada ' + nombre + ', entre las ' + horarioSeleccionado + ' del día ' + seleccionado + '. Nos estaremos poniendo en contacto contigo en lo pronto!'),
                    icon: "success"
                });
                // alert('Tu hora ya fue solicitada ' + nombre + ', entre las ' + horarioSeleccionado + ' del día ' + seleccionado + ', Nos estaremos poniendo en contacto contigo!');
                document.getElementById('formularioContenedor').style.display = 'none';
            } else {
                alert('Por favor, introduce un nombre válido.');
            }
            
            console.log('Carrito almacenado:', JSON.parse(localStorage.getItem('carrito')));
            console.log('Agendamiento finalizado:', nombre, telefono, horarioSeleccionado, seleccionado, carrito);
           
        }

        
    }
    
    //si no cumple requisitos mostrara esto
    else {
        alert("No cumples aún con la edad")
        console.log("ingreso fallido")
        document.body.innerHTML = "Lo siento, no cumples con la edad requerida para poder agendar"
    }
    
}

