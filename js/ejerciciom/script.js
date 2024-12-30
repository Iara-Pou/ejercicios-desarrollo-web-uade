/*
Crear un array para una Entrega.
Crear la posición asociativa Alumno y adentro lo subdividirla en Nombre, Apellido y Comisión.
Crear la posición asociativa Materia y asignarle un objeto con las propiedades Nombre, Docente y Exámen parcial.
Recorrer esta matriz/objeto con un for in, uno para cada nivel, mostrando el nombre del nivel y mostrando cada una de sus propiedades / índices.
(ejercicio-1-1.js).
Ahora crearlo como un objeto y con propiedades únicamente (Entrega2).
(ejercicio-1-2.js).
 */

function ejercicio1() {
  let Entrega = [
    [
      "Alumno",
      [
        ["Nombre", "Iara"],
        ["Apellido", "Pou"],
        ["Comision", "112233AA"],
      ],
    ],
    [
      "Materia",
      {
        Nombre: "Desarrollo Web",
        Docente: "Lucero Valentina",
        ExamenParcial: 9,
      },
    ],
  ];

  // Iterar por cada elemento de Entrega
  for (let i in Entrega) {
    const TITULO_NIVEL = Entrega[i][0];
    console.log(TITULO_NIVEL);

    const CONTENIDO_NIVEL = Entrega[i][1];

    if (Array.isArray(CONTENIDO_NIVEL)) {
      CONTENIDO_NIVEL.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
    } else if (typeof CONTENIDO_NIVEL === "object") {
      for (let key in CONTENIDO_NIVEL) {
        console.log(`${key}: ${CONTENIDO_NIVEL[key]}`);
      }
    }
  }
}

function ejercicio2() {
  let Entrega = {
    Alumno: {
      Nombre: "Iara",
      Apellido: "Pou",
      Comision: "112233AA",
    },
    Materia: {
      Nombre: "Desarrollo Web",
      Docente: "Lucero Valentina",
      ExamenParcial: 9,
    },
  };

  const KEYS = Object.keys(Entrega);

  for (let valor1 of KEYS) {
    //imprime nivel 0:
    console.log(`* ${valor1}: `);

    //imprime nivel 1:
    const KEYS_INTERNAS = Object.keys(Entrega[valor1]);
    for (let valor2 of KEYS_INTERNAS) {
      console.log(`${valor2}: ${Entrega[valor1][valor2]}`);
    }
  }
}

ejercicio1();
// ejercicio2();
