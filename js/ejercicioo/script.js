class Alumno {
  constructor(nombre = "", materias = []) {
    this.nombre = nombre;
    this.materias = materias;
  }

  ingresarNombre() {
    const nombre = prompt("Ingresar nombre del alumno:");
    this.nombre = nombre || this.nombre; // Mantener el nombre actual si no se ingresa nada
  }

  guardarMateria() {
    const materia = new Materia();
    materia.ingresarNombre();
    materia.ingresarNota();
    this.materias.push(materia);
  }

  calcularPromedio() {
    if (this.materias.length === 0) {
      console.log("No hay materias para calcular el promedio.");
      return 0;
    }

    const sumaNotas = this.materias.reduce(
      (acc, materia) => acc + materia.nota,
      0
    );
    return sumaNotas / this.materias.length;
  }
}

class Materia {
  constructor(nombre = "", nota = 0) {
    this.nombre = nombre;
    this.nota = nota;
  }

  ingresarNombre() {
    const nombre = prompt("Ingresar nombre de la materia:");
    // Mantener el nombre actual si no se ingresa nada
    this.nombre = nombre || this.nombre;
  }

  ingresarNota() {
    let nota = parseFloat(prompt(`Ingresar nota para ${this.nombre}:`));
    while (isNaN(nota) || nota < 1 || nota > 10) {
      nota = parseFloat(
        prompt("Nota inválida. Ingrese un valor entre 1 y 10:")
      );
    }
    this.nota = nota;
  }

  leerNota() {
    console.log(`La nota de ${this.nombre} es ${this.nota}.`);
  }
}

// Función para cargar alumnos y materias
function cargar() {
  const alumno = new Alumno();
  alumno.ingresarNombre();

  let continuar = true;
  while (continuar) {
    alumno.guardarMateria();
    continuar = confirm("¿Agregar otra materia?");
  }

  alumnos.push(alumno);
}

// Función para mostrar datos de los alumnos
function mostrar() {
  console.log(`Cantidad de alumnos: ${alumnos.length}`);
  alumnos.forEach((alumno, index) => {
    console.log(`Alumno ${index + 1}: ${alumno.nombre}`);
    console.log("Materias:");
    alumno.materias.forEach((materia) => {
      console.log(`- ${materia.nombre}: ${materia.nota}`);
    });
    console.log(`Promedio: ${alumno.calcularPromedio()}`);
  });
}

const alumnos = [];

document.getElementById("cargar").addEventListener("click", cargar);
document.getElementById("mostrar").addEventListener("click", mostrar);
