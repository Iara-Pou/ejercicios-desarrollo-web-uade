/*se debe recorrer con un ciclo de repetición for, generando por cada índice:
Una etiqueta div.
Dentro de la etiqueta div, crear una etiqueta img cuyo src y alt sean el nombre del archivo (ver la ruta a colocar en el src).
Luego de la etiqueta img, colocar una etiqueta p que muestre el nombre del archivo.
Cada bloque debe irse guardando en la variable html.
El contenido de html será mostrado dentro del div.galeria. */

const DISCOS = [
  "https://www.themetalcircus.com/wp-content/uploads/2019/02/muse-the-resistance.jpg",
  "https://darkimpala.com/wp-content/uploads/2021/07/muse-showbiz-frontal-300x300.jpg",
  "https://www.lifeboxset.com/wp-content/uploads/2013/07/Muse-Origin_Of_Symmetry-Frontal-1.jpeg",
];
const $divGaleria = document.getElementById("galeria");

for (let src of DISCOS) {
  //crea imagen
  let $imagenGaleria = document.createElement("img");
  $imagenGaleria.src = src;
  $imagenGaleria.alt = src;
  //crea <p> con ruta
  let $rutaArchivo = document.createElement("p");
  $rutaArchivo.textContent = src;

  //crea item y concatena al div principal
  let $itemGaleria = document.createElement("div");
  $itemGaleria.appendChild($imagenGaleria);
  $itemGaleria.appendChild($rutaArchivo);
  $itemGaleria.classList.add("card");
  $divGaleria.appendChild($itemGaleria);
}
