/*
Solicitar nombre, edad, teléfono, es estudiante
Mostrar datos ingresados */

let datosUsuario = {};
let mensajeUsuario = "";

//Ingresar datos
const NOMBRE = prompt("Ingresá tu nombre: ");

let EDAD = parseInt(prompt("Ingresá tu edad: "));
console.log(EDAD);
//validar que ingresó un int
while (isNaN(EDAD)) {
  EDAD = parseInt(prompt("Ingresaste un valor incorrecto. Ingresá tu edad: "));
}

const TELEFONO = prompt("Ingresá tu teléfono: ");

//ingresa boolean, paso a string
let es_estudiante = confirm("¿Sos un estudiante?");
if (es_estudiante) {
  es_estudiante = "si";
} else {
  es_estudiante = "no";
}

//guardar datos
datosUsuario.nombre = NOMBRE;
datosUsuario.edad = EDAD;
datosUsuario.telefono = TELEFONO;
datosUsuario.esEstudiante = es_estudiante;

//mostrar datos
Object.keys(datosUsuario).forEach((key) => {
  mensajeUsuario += `<p>
${key + ": " + datosUsuario[key]}
    </p>`;
});
document.write(mensajeUsuario);
