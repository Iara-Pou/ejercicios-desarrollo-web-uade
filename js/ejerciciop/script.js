/*Buscamos los datos de la imagen de Charly García.
Al hacer clic, debemos cambiar el src por el de la foto del Flaco Spinetta.
Debemos lograr esa alternancia en cada click.
El párrafo de Charly debe estar en red y el de Spinetta en blue, además de cambiar su contenido. */

function AlternarArtista() {
  let artistas = {
    charly: {
      src: "https://www.notaalpie.com.ar/wp-content/uploads/2021/10/2-2.jpg",
      texto: ["charly garcia", "red"],
    },
    spinneta: {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Luis_A_Spinetta_-_Expreso_Imaginario_-_Nov_1976.jpg",
      texto: ["flaco spinneta", "blue"],
    },
  };

  //si el id de imagen es charly, poner src, texto, color
  //sino spinetta
  if ($IMAGEN.id !== "charly") {
    $IMAGEN.id = "charly";
    $IMAGEN.src = artistas.charly.src;
    $PARRAFO_DESCRIPCION.textContent = artistas.charly.texto[0];
    $PARRAFO_DESCRIPCION.style.color = artistas.charly.texto[1];
  } else {
    $IMAGEN.id = "spinneta";
    $IMAGEN.src = artistas.spinneta.src;
    $PARRAFO_DESCRIPCION.textContent = artistas.spinneta.texto[0];
    $PARRAFO_DESCRIPCION.style.color = artistas.spinneta.texto[1];
  }
}

const $IMAGEN = document.querySelector("img");
const $PARRAFO_DESCRIPCION = $IMAGEN.nextElementSibling;

$IMAGEN.addEventListener("click", AlternarArtista);
