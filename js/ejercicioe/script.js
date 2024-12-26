function Paridad(numero, ceroEsPar) {
  let resultado;

  if (numero === 0) {
    if (ceroEsPar) {
      resultado = "si";
    } else if (!ceroEsPar) {
      resultado = "no";
    }
  } else {
    if (numero % 2 == 0) {
      resultado = "si";
    } else {
      resultado = "no";
    }
  }

  //mostrar resultado
  console.log(`El número ${numero}, ${resultado} es par. `);
}

function IngresarSiCeroEsPar() {
  return confirm(
    "Apretá aceptar si consideramos cero como par.\n Cancelar si lo consideramos impar:"
  );
}

function IngresarNumero() {
  let numero = parseInt(prompt("Ingresá un valor numérico: "));
  while (isNaN(numero)) {
    numero = parseInt(prompt("Error. Por favor, ingresá un valor numérico: "));
  }
  return numero;
}

function CalcularParidad() {
  const NUMERO = IngresarNumero();
  const CERO_ES_PAR = IngresarSiCeroEsPar();
  //realiza el cálculo
  Paridad(NUMERO, CERO_ES_PAR);
}
/*
Los valores deben ser pasados a la función Paridad, que analiza el valor y determina si es par, impar o, según el usuario, cero.

 */
document
  .getElementById("calcular-paridad")
  .addEventListener("click", CalcularParidad);
