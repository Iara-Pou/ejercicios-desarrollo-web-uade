function IngresarNumeroValido() {
  let numero = parseFloat(prompt("Ingresá el número: "));
  while (isNaN(numero)) {
    numero = parseFloat(
      prompt("Error, ingresaste un número inválido.\nIntentá de nuevo: ")
    );
  }

  return numero;
}

function ObtenerNumero1() {
  numero1 = IngresarNumeroValido();
}

function ObtenerNumero2() {
  numero2 = IngresarNumeroValido();
}

function Operacion(e) {
  operador = e.target.textContent;
  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      if (numero2 != 0) {
        resultado = numero1 / numero2;
      } else {
        resultado = "No se puede dividir por cero";
      }
  }
}

function Mostrar() {
  document.getElementById("resultado").textContent = resultado;
}

let numero1, numero2, operacion, resultado;
