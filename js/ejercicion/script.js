/*Crear el objeto Persona
Asignarle las siguientes propiedades: nombre, apellido, edad, email.
Asignarle los siguientes métodos:
yoSoy, que retorne el nombre y el apellido.
tengo, que retorne la edad.
contacto, que retorne el email.
Ejecutar todos los métodos para verificar su funcionamiento.
(ejercicio-2-1.js).
*/

let Persona = {
  nombre: "Iara",
  apellido: " Pou",
  edad: 23,
  email: "iara@hotmail.com",
  yoSoy: function () {
    return `${this.nombre} ${this.apellido}`;
  },
  tengo: function () {
    return this.edad;
  },
  contacto: function () {
    return this.email;
  },
};

console.log(Persona);
console.log("Ejecución de yoSoy: " + Persona.yoSoy());
console.log("Ejecución de tengo: " + Persona.tengo());
console.log("Ejecución de contacto: " + Persona.contacto());
