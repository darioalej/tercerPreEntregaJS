let usuario1 = {          // CREO 2 USUARIOS CON SUS DATOS PARA GUARDARLOS EN EL LOCALSTORAGE
    nombre: "Dario",
    apellido: "Chacon",
    usuario: "dac2912",
    contraseña: "perritoMalvado",
    email: "darioale@hotmail.com",
}

let usuario2 = {
    nombre: "Mario",
    apellido: "Bross",
    usuario: "SuperMario",
    contraseña:"KoopaTropa23",
    email: "cupatropa@hotmail.com",
}

// Convertimos los objetos de usuario a texto JSON para almacenarlos en el localStorage
let usuario1_texto = JSON.stringify(usuario1);
let usuario2_texto = JSON.stringify(usuario2);

// Guardamos los usuarios en el localStorage
localStorage.setItem('usuario1', usuario1_texto);
localStorage.setItem('usuario2', usuario2_texto);

// Función para verificar el nombre de usuario y contraseña que ingresa, con las credenciales de arriba para el ingreso guardadas en el localStorage
function leer(event){
    // Evitamos primero que se envíe el formulario
    event.preventDefault();

    // Obtenemos los valores ingresados por el usuario
    let nombre_usuario = document.querySelector("#usuario").value.trim();
    let contraseña = document.querySelector("#pass").value;

    document.querySelector("#usuario").value = "";     // Restablecemos los campos de entrada a una cadena vacía para que cuando se logueen no quede los datos en los campos input
    document.querySelector("#pass").value = "";

    // Obtenemos los usuarios almacenados en el localStorage y los convertimos de nuevo a objetos para poder comparar la información
    let usuario1_guardado = JSON.parse(localStorage.getItem('usuario1'));
    let usuario2_guardado = JSON.parse(localStorage.getItem('usuario2'));

    // Verificamos si el nombre de usuario y contraseña coinciden con alguno de los usuarios guardados
    if((nombre_usuario === usuario1_guardado.usuario) && (contraseña === usuario1_guardado.contraseña)) {
        // Usuario 1 ha ingresado correctamente
        mostrarMensajeBienvenida(usuario1_guardado.nombre);
    } else if ((nombre_usuario === usuario2_guardado.usuario) && (contraseña === usuario2_guardado.contraseña)) {
        // Usuario 2 ha ingresado correctamente
        mostrarMensajeBienvenida(usuario2_guardado.nombre);
    } else {
        // Ningún usuario coincide
        mostrarMensajeError();
    }
}

// Función para mostrar el mensaje de bienvenida en un div en el html
function mostrarMensajeBienvenida(nombreUsuario) {
    // Obtenemos el div de mensaje de bienvenida
    let mensajeBienvenida = document.querySelector("#mensaje-bienvenida");

    // Mostramos el mensaje de bienvenida
    mensajeBienvenida.textContent = "¡Bienvenido, " + nombreUsuario + "!";
    mensajeBienvenida.style.display = "block";

    // Creamos un elemento de enlace que me lleve al otro html que contiene el juego de la nave
    let enlace = document.createElement("a");
    enlace.textContent = "Click aquí para continuar al juego";
    enlace.href = "html/nave.html"; // Reemplazamos la ruta hacia el otro html del juego

    // Añadimos el enlace al div de mensaje de bienvenida
    mensajeBienvenida.appendChild(enlace);
}

// Función para mostrar un mensaje de error en un div si el usuario no tiene las credenciales para hacerlo
function mostrarMensajeError() {
    let mensajeBienvenida = document.querySelector("#mensaje-bienvenida");

    mensajeBienvenida.textContent = "Usuario o contraseña incorrectos. Intenta de nuevo pero hazlo bien!!!";     // Con esto mostramos el error si el usuario no tiene las credenciales en el html
    mensajeBienvenida.style.display = "block";
}

// Event listeners para activar la función leer al presionar enter o hacer clic en el botón
document.querySelector(".ingreso").addEventListener("click", leer);       
document.querySelector("#usuario").addEventListener("keydown", teclado);
document.querySelector("#pass").addEventListener("keydown", teclado);

// Función para activar la función leer al presionar enter cosa que no dependa solamente del botón aceptar
function teclado(e){
    (e.key === "Enter") && leer(e);
}