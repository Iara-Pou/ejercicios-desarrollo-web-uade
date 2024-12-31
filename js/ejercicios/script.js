function AgregarElemento() {
  const $ELEMENTO_LISTA = document.createElement("li");
  const $ELEMENTO = document.createElement("a");
  const TEXTO_INGRESADO = document.querySelector('input[type="text"]').value;

  //Configurar elemento
  $ELEMENTO.textContent = TEXTO_INGRESADO;
  $ELEMENTO.addEventListener("click", (e) => {
    EliminarElementoLista(e);
  });
  $ELEMENTO.href = "";

  //Agregar elemento a la lista original
  $ELEMENTO_LISTA.appendChild($ELEMENTO);
  $LISTA_ELEMENTOS.appendChild($ELEMENTO_LISTA);
}

function EliminarElementoLista(e) {
  e.preventDefault();
  const $ELEMENTO_A_ELIMINAR = e.target.parentNode;
  $ELEMENTO_A_ELIMINAR.remove();
}

const $LISTA_ELEMENTOS = document.querySelector("ul");
//formatear a que existen para eliminar elemento lista
const $ELEMENTOS_PRECARGADOS = document.querySelectorAll("a");
for (let i = 0; i < $ELEMENTOS_PRECARGADOS.length; i++) {
  $ELEMENTOS_PRECARGADOS[i].addEventListener("click", (e) => {
    EliminarElementoLista(e);
  });
}

//boton on click que haga cositas
document
  .querySelector('input[type="button"]')
  .addEventListener("click", AgregarElemento);
