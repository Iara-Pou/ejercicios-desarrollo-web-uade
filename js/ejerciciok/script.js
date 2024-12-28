/*Sin modificar el HTML, al hacerle click a cualquier div, guardar en memoria el objeto (es decir, se guardará en una variable).
Una vez seleccionado el div, escribir una propiedad CSS válida en el primer input (color, background, width, height, etc.).
En el segundo input escribir un valor válido para la propiedad del primer input.
Al hacer click en el botón, aplicar al div seleccionado la propiedad y el valor (recordando que se tiene el último div seleccionado en una variable).
La acción será igual que en el anterior, lo que cambia es la forma de buscar los elementos.
 */

// 1 propiedad css valida
// valor valido para propiedad del input 1
//boton, clickeo y se aplican los cambios
function ModificarDiv(e, propiedad, valor) {
  $divSeleccionado = e.target.parentElement;
  $divSeleccionado.style[propiedad] = valor;
}

//hago click a div para seleccionarlo
$div = document.createElement("div");

//dos input
$inputPropiedad = document.createElement("input");
$inputPropiedad.placeholder = "Propiedad CSS";
$inputValor = document.createElement("input");
$inputValor.placeholder = "Valor de propiedad";

//boton, clickeo y se aplican los cambios
$botonCambios = document.createElement("button");
$botonCambios.textContent = "¡Aplicar cambios!";
$botonCambios.addEventListener("click", (e) => {
  let propiedad = $inputPropiedad.value;
  let valor = $inputValor.value;
  ModificarDiv(e, propiedad, valor);
});

//concatenar elementos al body
$div.append($inputPropiedad, $inputValor, $botonCambios);
document.body.appendChild($div);
