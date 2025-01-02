function obtenerIdSiguienteFoto() {
  if (posicion_actual === urlImagenes.length - 1) {
    return 0;
  }
  return posicion_actual + 1;
}

function obtenerIdFotoAnterior() {
  if (posicion_actual === 0) {
    return urlImagenes.length - 1;
  }
  return posicion_actual - 1;
}

function retrocederImagen() {
  posicion_actual = obtenerIdFotoAnterior();
  actualizarImagenes();
}

function avanzarImagen() {
  posicion_actual = obtenerIdSiguienteFoto();
  actualizarImagenes();
}

function actualizarImagenes() {
  $FOTO_ACTUAL.src = urlImagenes[posicion_actual];
  $FOTO_ANTERIOR.src = urlImagenes[obtenerIdFotoAnterior()];
  $FOTO_SIGUIENTE.src = urlImagenes[obtenerIdSiguienteFoto()];
}

let posicion_actual = 0;

const urlImagenes = [
  "./items/pexels-1.jpg",
  "./items/pexels-2.jpg",
  "./items/pexels-3.jpg",
  "./items/pexels-4.jpg",
  "./items/pexels-5.jpg",
  "./items/pexels-6.jpg",
  "./items/pexels-7.jpg",
];

const $FOTO_ACTUAL = document.getElementById("actual");
const $FOTO_ANTERIOR = document.getElementById("anterior");
$FOTO_ANTERIOR.addEventListener("click", retrocederImagen);
const $FOTO_SIGUIENTE = document.getElementById("siguiente");
$FOTO_SIGUIENTE.addEventListener("click", avanzarImagen);
