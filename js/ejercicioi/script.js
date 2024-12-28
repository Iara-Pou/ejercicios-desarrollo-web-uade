/*Con un ciclo de repetición for, se deberá generar por cada índice:
Una etiqueta div, que contendrá una etiqueta a cuyo href sea la ruta del archivo.
Dentro de la etiqueta a, crear una etiqueta img cuyo src sea el nombre del archivo (ver la ruta a colocar en el src) y el alt el nombre del disco.
Luego de la etiqueta a, colocar una etiqueta h3 que muestre el nombre del disco.
Luego de la etiqueta h3, colocar una etiqueta p que muestre el año de lanzamiento del disco.
Cada bloque debe irse guardando en la variable html.
El contenido de html será mostrado dentro del div.galeria. */

const IMAGENES = [
  "https://www.themetalcircus.com/wp-content/uploads/2019/02/muse-the-resistance.jpg",
  "https://darkimpala.com/wp-content/uploads/2021/07/muse-showbiz-frontal-300x300.jpg",
  "https://www.lifeboxset.com/wp-content/uploads/2013/07/Muse-Origin_Of_Symmetry-Frontal-1.jpeg",
];
const NOMBRES = ["the resistance", "showbiz", "origin of symmetry"];
const ANIO_LANZAMIENTO = [2009, 1999, 2001];

const $divGaleria = document.getElementById("galeria");

for (let i in IMAGENES) {
  const IMAGEN = IMAGENES[i];
  const TITULO = NOMBRES[i];
  const ANIO = ANIO_LANZAMIENTO[i];

  //crear p con año
  let $anioLanzamiento = document.createElement("p");
  $anioLanzamiento.textContent = ANIO;

  //crear título
  let $tituloDisco = document.createElement("h3");
  $tituloDisco.textContent = TITULO;

  //crea imagen
  let $imagenGaleria = document.createElement("img");
  $imagenGaleria.src = IMAGEN;
  $imagenGaleria.alt = TITULO;

  //crea ancla
  let $contenedorImagen = document.createElement("a");
  $contenedorImagen.href = IMAGEN;
  $contenedorImagen.target = "_blank";
  $contenedorImagen.appendChild($imagenGaleria);

  //crea item y concatena al div principal
  let $itemGaleria = document.createElement("div");
  $itemGaleria.classList.add("card");

  $itemGaleria.appendChild($contenedorImagen);
  $itemGaleria.appendChild($tituloDisco);
  $itemGaleria.appendChild($anioLanzamiento);

  $divGaleria.appendChild($itemGaleria);
}
