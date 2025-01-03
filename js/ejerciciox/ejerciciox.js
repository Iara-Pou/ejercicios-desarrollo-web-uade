/*
Sin modificar el HTML, crear un array con todas las imágenes que hay en la carpeta items.
Con JavaScript obtener los elementos #anterior, #siguiente, #foto y las imágenes miniaturas.
Los botones #anterior y #siguiente deben cambiar las miniaturas:
De una en una.
*/

function obtenerIdSiguienteFoto() {
  if (posicion_actual === URL_IMAGENES.length - 1) {
    return 0;
  }
  return posicion_actual + 1;
}

function obtenerIdFotoAnterior() {
  if (posicion_actual === 0) {
    return URL_IMAGENES.length - 1;
  }
  return posicion_actual - 1;
}

function retrocederImagen() {
  posicion_actual = obtenerIdFotoAnterior();
  $FOTO_ACTUAL.src = URL_IMAGENES[posicion_actual];
}

function avanzarImagen() {
  posicion_actual = obtenerIdSiguienteFoto();
  $FOTO_ACTUAL.src = URL_IMAGENES[posicion_actual];
}

let posicion_actual = 0;

const URL_IMAGENES = [
  "./items/pexels-1.jpg",
  "./items/pexels-2.jpg",
  "./items/pexels-3.jpg",
  "./items/pexels-4.jpg",
  "./items/pexels-5.jpg",
  "./items/pexels-6.jpg",
  "./items/pexels-7.jpg",
];

const $FOTO_ACTUAL = document.createElement("img");
$FOTO_ACTUAL.src = URL_IMAGENES[0];
const $VISOR_IMAGEN = document.createElement("div");
$VISOR_IMAGEN.classList.add("marco");
$VISOR_IMAGEN.appendChild($FOTO_ACTUAL);

const $BOTON_ADELANTAR = document.createElement("button");
$BOTON_ADELANTAR.textContent = ">";
$BOTON_ADELANTAR.addEventListener("click", avanzarImagen);

const $BOTON_ATRASAR = document.createElement("button");
$BOTON_ATRASAR.textContent = "<";
$BOTON_ATRASAR.addEventListener("click", retrocederImagen);

const $CONTENEDOR = document.createElement("div");
$CONTENEDOR.classList.add("contenedor");

$CONTENEDOR.append($BOTON_ATRASAR, $VISOR_IMAGEN, $BOTON_ADELANTAR);
document.body.appendChild($CONTENEDOR);
