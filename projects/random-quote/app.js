let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function enteroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indexRandom = enteroRandom(0, citas.length);
    citaElem.innerText = `"${citas[indexRandom].texto}"`;
    autorElem.innerText = citas[indexRandom].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita)