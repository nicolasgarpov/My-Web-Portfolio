//Seleccionar elementos del DOM
const button = document.querySelector('button');
const color = document.getElementById('color');

function randomColor() {
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    colorHex += digitos[randomIndex];
  }
  return colorHex;
}

button.addEventListener('click', function() {
  let colorAleatorio = randomColor();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
})


