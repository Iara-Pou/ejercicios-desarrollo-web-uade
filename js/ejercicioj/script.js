/*Crear un array precargado con 10 colores HTML válidos.
Con un ciclo de repetición for recorrer cada índice:
Por cada índice el valor leído será utilizado como "background-color" de un span; el índice será el contenido del span.
Cada span se irá agregando a la variable html.
El contenido de html será mostrado dentro del div.galeria. */

$galeria = document.getElementById("galeria");

const colores = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "cyan",
  "magenta",
  "black",
  "white",
];

for (let color of colores) {
  $marco = document.createElement("span");
  $marco.style.backgroundColor = color;
  $marco.style.height = "100px";
  $marco.style.width = "100px";
  $galeria.appendChild($marco);
}
