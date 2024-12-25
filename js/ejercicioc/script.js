function NumeroEsPar(numero) {
  return numero % 2 === 0;
}

function IngresarNumero() {
  //debe ingresar un número entero
  do {
    numeroIngresado = parseInt(prompt("Ingresar un número entero: "));
  } while (isNaN(numeroIngresado));
}

function MostrarSiEsPar() {
  //debe mostrar mediante console.info si el número es par, impar o cero.
  if (numeroIngresado === undefined) {
    console.info("No ingresaste ningún número");
  } else {
    if (numeroIngresado === 0) {
      console.info("Ingresaste un cero.");
    } else {
      if (NumeroEsPar(numeroIngresado)) {
        console.info("Ingresaste un número par");
      } else {
        console.info("Ingresaste un número impar");
      }
    }
  }
}

let numeroIngresado;

document
  .getElementById("ingresar-numero")
  .addEventListener("click", IngresarNumero);
document
  .getElementById("mostrar-si-numero-par")
  .addEventListener("click", MostrarSiEsPar);
