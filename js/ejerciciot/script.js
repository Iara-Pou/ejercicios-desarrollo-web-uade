function SeleccionarFoto(e) {
  const URL_FOTO = e.target.src;
  $VENTANA_MOSTRAR_FOTO.style.backgroundImage = `url(${URL_FOTO})`;

  //reiniciar foto anteriormente seleccionada
  if (fotoSeleccionadaActualmente) {
    fotoSeleccionadaActualmente.classList.remove("foto-seleccionada");
    fotoSeleccionadaActualmente.onclick = (e) => {
      SeleccionarFoto(e);
    };
  }

  //cambiarse la opacidad de la original y anularse su onclick
  fotoSeleccionadaActualmente = e.target;
  fotoSeleccionadaActualmente.classList.add("foto-seleccionada");
  fotoSeleccionadaActualmente.onclick = () => {};
}

let fotoSeleccionadaActualmente = null;

const $CONTENEDOR = document.createElement("div");
$CONTENEDOR.className = "contenedor";

const $VENTANA_MOSTRAR_FOTO = document.createElement("div");
$VENTANA_MOSTRAR_FOTO.className = "ventana-foto";

const $CONTENEDOR_FOTOS = document.createElement("div");
$CONTENEDOR_FOTOS.className = "contenedor-fotos";
const fotosPaisajes = [
  "https://www.dzoom.org.es/wp-content/uploads/2022/03/mis-fotografias-paisaje-favoritas-07-810x540.jpg",
  "https://voydeviaje.lavoz.com.ar/resizer/v2/R4T3G6THYRE7REZRYP7SSTF2LU.jpg?quality=75&smart=true&auth=c678cac58492f643f322fc13acb6985a22f99f8374c1f9a2d51642f4456126f3&width=980&height=640",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEIQ-sduABhzQ-s-PB1dQBTxLk5NCcbrMJA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBdred8_30rYf52YT-gDSbDbRiQUejdYahw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DzH8RoVZzDfOSxxUovmuCutEgVGlCUMi6Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGMpJNzXfWZ12K3Xmgvu2HKmQi5532Y_GmQ&s",
];

for (let foto of fotosPaisajes) {
  const $FOTO = document.createElement("img");
  $FOTO.className = "foto";
  $FOTO.src = foto;
  $FOTO.alt = "fotoPaisaje";
  $FOTO.addEventListener("click", (e) => {
    SeleccionarFoto(e);
  });

  $CONTENEDOR_FOTOS.appendChild($FOTO);
}

$CONTENEDOR.append($CONTENEDOR_FOTOS, $VENTANA_MOSTRAR_FOTO);
document.body.appendChild($CONTENEDOR);
