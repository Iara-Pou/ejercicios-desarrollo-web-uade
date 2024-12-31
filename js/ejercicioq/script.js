function MostrarResultado(resultado) {
  const $MENSAJE = document.getElementById("mensaje-mostrar");

  switch (resultado) {
    case "vacio":
      $MENSAJE.textContent = "falta completar uno o ambos campos";
      $MENSAJE.style.color = "blue";
      break;
    case "igual":
      $MENSAJE.textContent = "son iguales";
      $MENSAJE.style.color = "green";
      break;
    default:
      $MENSAJE.textContent = "son distintos";
      $MENSAJE.style.color = "red";
  }
}

function StringVacio(str) {
  return str === "";
}

function EvaluarIgualdad() {
  //conseguir datos
  let resultado;
  const VALORES_INPUTS = Array.from(
    document.querySelectorAll('input[type = "text"]')
  ).map((input) => input.value);

  if (contadorErrores < 3) {
    //Comparar valores
    if (StringVacio(VALORES_INPUTS[0]) || StringVacio(VALORES_INPUTS[1])) {
      resultado = "vacio";
    } else if (VALORES_INPUTS[0] === VALORES_INPUTS[1]) {
      resultado = "igual";
    } else {
      // manejo bloqueo
      resultado = "diferente";
      contadorErrores++;
    }

    MostrarResultado(resultado);
  } else {
    alert("Bloqueado!");
  }
}

//variable bloqueo
let contadorErrores = 0;
const $BOTON_ENVIO = document.querySelector('input[type = "button"]');

$BOTON_ENVIO.addEventListener("submit", (e) => {
  e.preventDefault();
});

$BOTON_ENVIO.addEventListener("click", EvaluarIgualdad);
