/*Sin modificar el HTML, se tiene un array de seis colores.
Se debe recorrer dicho array y para cada color:
crear un list item dentro del ul#elementos por cada color.
darle como texto el valor del ítem del array.
crear un div de 60px x 60px dentro del div#colores.
darle como background-color el valor de ese ítem del array.
al hacer click a un li, cambiar el color del div como background. */

function ColorearDiv(e) {
  //color seleccionado se aplica al estilo del div
  const COLOR = e.target.textContent;
  $RECUADRO_COLOR.style.backgroundColor = COLOR;
}

// Crea lista colores
const $LISTA_COLORES = document.createElement("ul");
$LISTA_COLORES.id = "elementos";

const colores = ["blue", "red", "purple", "pink", "black", "grey"];
for (let color of colores) {
  const $COLOR = document.createElement("li");
  $COLOR.textContent = color;
  $COLOR.style.color = color;
  $COLOR.addEventListener("click", (e) => {
    ColorearDiv(e);
  });

  $LISTA_COLORES.appendChild($COLOR);
}

//Crea div con colores
const $RECUADRO_COLOR = document.createElement("div");
$RECUADRO_COLOR.style.height = "60px";
$RECUADRO_COLOR.style.width = "60px";
$RECUADRO_COLOR.style.border = "2px solid black";

//Adjunta elementos a web
document.body.append($RECUADRO_COLOR, $LISTA_COLORES);
