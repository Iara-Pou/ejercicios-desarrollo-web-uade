function GuardarAlumno(alumno) {
  for (let i = 0; i < INFORMACION_ALUMNOS.length; i++) {
    const ALUMNO_ITERADO = INFORMACION_ALUMNOS[i];
    if (
      ALUMNO_ITERADO.nombre === alumno.nombre &&
      ALUMNO_ITERADO.apellido === alumno.apellido
    ) {
      console.log(INFORMACION_ALUMNOS[i].nota);
      return INFORMACION_ALUMNOS[i].nota.push(...alumno.nota);
    }
  }

  INFORMACION_ALUMNOS.push(alumno);
}

function CargarAlumno() {
  let ALUMNO = {};

  const NOMBRE = prompt("Ingresar el nombre del alumno: ").trim().toLowerCase();
  const APELIDO = prompt("Ingresar el apellido del alumno: ")
    .trim()
    .toLowerCase();
  let NOTA = null;
  while (!NOTA) {
    try {
      NOTA = parseInt(prompt("Ingresar una nota: "));
      console.log(NOTA);
      if (NOTA > 10 || NOTA < 1) {
        alert("La nota debe ser un número del 1 al 10.");
        NOTA = null;
      }
    } catch (e) {
      console.log(e);
      alert("Debes ingresar un número");
    }
  }

  ALUMNO = {
    nombre: NOMBRE,
    apellido: APELIDO,
    nota: [NOTA],
  };

  GuardarAlumno(ALUMNO);
}

function MostrarDatos() {
  for (const { nombre, apellido, nota } of INFORMACION_ALUMNOS) {
    console.log("-", nombre, apellido, ":");
    console.log("Notas:");
    nota.forEach((n) => {
      console.log(n);
    });
    console.log("--------------------------------");
  }
}

$botonCargarAlumnos = document.getElementById("cargar-alumnos");
$botonCargarAlumnos.addEventListener("click", CargarAlumno);
$botonMostrarAlumnos = document.getElementById("mostrar-alumnos");
$botonMostrarAlumnos.addEventListener("click", MostrarDatos);

const INFORMACION_ALUMNOS = [];
