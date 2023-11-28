/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en
ese momento se crea un número aleatorio que el usuario deberá adivinar, la
interfaz del usuario debe tener además un input para ingresar un número y un
botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino
o no el número mágico, si no lo adivino indicarle con un alert si el numero que
ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que
adivino el numero. */

const numeroAleatorio = () => {
const numAleatorio = Math.floor(Math.random() * 10 + 1)
console.log(`El número aleatorio es: ${numAleatorio}`);
alert (`Se generó un número aleatorio con exito, intenta adivinarlo`);


const btnNumIntentar = document.getElementById('btnNumIntentar')


btnNumIntentar.addEventListener('click', (e) => {
    e.preventDefault();
    
const numIngresado = parseInt(document.getElementById('numIngresado').value);
  console.log(numIngresado);
if (numIngresado < numAleatorio) {
    alert ("el numero ingresado es menor, intentalo nuevamente")
  } else if (numIngresado > numAleatorio) {
    alert ("el numero ingresado es mayor, intentalo nuevamente")
  } else if (numIngresado === numAleatorio) {
    alert ("GANASTE!!!!")
    }
  formulario.reset()
})
};


const formulario = document.querySelector(`form`);

