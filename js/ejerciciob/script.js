/*
Hay dos botones:
El primero dice “Ingresar siglas de la carrera”, que al hacerle click una función debe ingresar por prompt una de las siguientes siglas: dw, dm, dg.
El segundo dice “Mostrar carrera”, que al hacerle click una función debe mostrar mediante console.info el nombre completo de la carrera: Diseño web, Diseño multimedial, Diseño gráfico.
Se deben validar los valores ingresados.
Se debe considerar la posibilidad de que el usuario quiera ver antes de ingresar, realizar la validación.
(ejercicio-1-1.js).

hacer un document.write()

#ingresar_siglas
#mostrar_carrera
*/

function IngresarSiglas() {
  console.log("1");
  // al hacerle click una función debe ingresar por prompt una de las siguientes siglas: dw, dm, dg.
  do {
    siglasCarrera = prompt('Ingresar por prompt "dw", "dm" o "dg": ');
  } while (
    siglasCarrera !== "dw" &&
    siglasCarrera !== "dm" &&
    siglasCarrera !== "dg"
  );
}

function MostrarCarrera() {
  // al hacerle click una función debe mostrar mediante console.info el nombre completo de la carrera: Diseño web, Diseño multimedial, Diseño gráfico.
  let nombreCarrera;

  switch (siglasCarrera) {
    case "dw":
      nombreCarrera = "Diseño web";
      break;
    case "dm":
      nombreCarrera = "Diseño multimedial";
      break;
    case "dg":
      nombreCarrera = "Diseño gráfico";
      break;
  }

  console.info("La carrera es " + nombreCarrera);
  //document.write(`<p>La carrera es ${nombreCarrera}.</p>`);
}

let siglasCarrera;

document
  .getElementById("ingresar-siglas")
  .addEventListener("click", IngresarSiglas);
document
  .getElementById("mostrar-carrera")
  .addEventListener("click", MostrarCarrera);
