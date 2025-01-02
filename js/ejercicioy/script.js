function cambiarColorTitulo(color) {
  document.querySelector("h3").style.color = color;
}

function ampliarDiv(e) {
  const $DIV_ACTUAL = e.target;

  //si es el mismo abierto, lo cierro
  if ($DIV_ACTUAL === $divSeleccionado) {
    $divSeleccionado.classList.remove("div-seleccionado");
    $divSeleccionado = null;
    cambiarColorTitulo("grey");
    // si hay uno seleccionado
  } else if ($divSeleccionado) {
    $divSeleccionado.classList.remove("div-seleccionado");
    $divSeleccionado = e.target;
    $divSeleccionado.classList.add("div-seleccionado");
    cambiarColorTitulo(e.target.id);
    //si no hay ninguno seleccionado
  } else {
    $divSeleccionado = e.target;
    $divSeleccionado.classList.add("div-seleccionado");
    cambiarColorTitulo(e.target.id);
  }
}

let $divSeleccionado;
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "cyan",
  "black",
];
const $DIVS_PANTALLA = document.querySelectorAll("div");
for (let i = 0; i < $DIVS_PANTALLA.length; i++) {
  $DIVS_PANTALLA[i].addEventListener("click", (e) => {
    ampliarDiv(e);
  });
  $DIVS_PANTALLA[i].id = colors[i];
}
