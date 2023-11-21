// Elementos del DOM
const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

// Variables de estado del cronómetro
let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = 'pausado';

// Función para actualizar el cronómetro
function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1){
    segundos = 0;
    minutos++;

    if(minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  // Actualizar el texto del cronómetro
  cronometro.innerText = `${asignarFormato(horas)}:${asignarFormato(minutos)}:${asignarFormato(segundos)}`;
}

// Función para asignar formato a las unidades de tiempo
function asignarFormato(unidadTiempo) {
  return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo;
}

// Función para cambiar el estado del cronómetro (iniciar/pausar)
function toggleEstadoCronometro() {
  if (estadoCronometro === 'pausado') {
    iniciarCronometro();
  } else {
    pausarCronometro();
  }
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
  intervaloDeTiempo = setInterval(actualizarCronometro, 1000);
  cambiarEstadoBoton('bi-pause-fill', 'iniciar', 'pausar', 'andando');
}

// Función para pausar el cronómetro
function pausarCronometro() {
  clearInterval(intervaloDeTiempo);
  cambiarEstadoBoton('bi-play-fill', 'pausar', 'iniciar', 'pausado');
}

// Función para reiniciar el cronómetro
function reiniciarCronometro() {
  pausarCronometro();
  [horas, minutos, segundos] = [0, 0, 0];
  cronometro.innerText = '00:00:00';
}

// Función para cambiar el estado del botón y el cronómetro
function cambiarEstadoBoton(iconoClase, claseEliminar, claseAgregar, nuevoEstado) {
  // Actualizar el contenido del botón con el nuevo ícono
  botonInicioPausa.innerHTML = `<i class="bi ${iconoClase}"></i>`;
  
  // Modificar las clases del botón
  botonInicioPausa.classList.remove(claseEliminar);
  botonInicioPausa.classList.add(claseAgregar);
  
  // Actualizar el estado del cronómetro
  estadoCronometro = nuevoEstado;
}

// Event Listener para el botón de iniciar/pausar
botonInicioPausa.addEventListener('click', toggleEstadoCronometro);

// Event Listener para el botón de reiniciar
botonReiniciar.addEventListener('click', reiniciarCronometro);
