function ejercicio1() {
  /*
    Escribe un programa que le pida al usuario ingresar su nombre y luego muestre un saludo personalizado en la consola. 
    Utiliza una declaración if para verificar si se ingresó un nombre.
     */
  let nombre = prompt("Ingresá tu nombre: ").trim();
  while (nombre === "") {
    nombre = prompt("Ingresaste un valor vacío.\n Ingresá un nombre válido:");
  }
  alert(`Hola, ${nombre}`);
}

function ejercicio2() {
  /*Escribe un programa que calcule la suma de todos los números pares del 1 al 50. 
  Utiliza un bucle for para iterar a través de los números y una declaración if para 
  verificar si un número es par.
   */
  let suma = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  alert(`El resultado es ${suma}`);
}

function ejercicio3() {
  /* Escribe un programa que le permita al usuario ingresar una serie de calificaciones. Luego, calcula y muestra el promedio 
  de esas calificaciones. Utiliza un bucle for o while para permitir al usuario ingresar una cantidad variable de calificaciones.
   */
  let totalCalificaciones = 0,
    contadorCalificaciones = 0,
    calificacion = -1;

  do {
    calificacion = parseInt(
      prompt("Ingresá una calificación (1 a 10, o -1 para salir): ")
    );

    if (calificacion !== -1) {
      while (calificacion < 1 || calificacion > 10) {
        calificacion = parseInt(
          prompt("Ingresá una calificación válida (1 a 10, o -1 para salir): ")
        );
      }
      totalCalificaciones += calificacion;
      contadorCalificaciones++;
    }
  } while (calificacion !== -1);

  if (contadorCalificaciones > 0) {
    console.log(
      "El promedio es",
      (totalCalificaciones / contadorCalificaciones).toFixed(2)
    );
  } else {
    console.log("No se ingresaron calificaciones válidas.");
  }
}

function ejercicio4() {
  /*Tabla de multiplicar
Escribe un programa que permita al usuario ingresar un número y luego muestre la tabla de multiplicar de ese número del 1 al 10. 
Utiliza un bucle for para generar la tabla. */
  let tabla = parseInt(
    prompt("Ingresá un número para calcular su tabla de multiplicar:")
  );

  console.log("Tabla del " + tabla + ":");
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}

function ejercicio5() {
  /*Ejercicio 5: Contador regresivo
 Escribe un programa que cuente desde un número ingresado por el usuario hasta 1, 
 mostrando cada número en la consola. Utiliza un bucle while para realizar el conteo regresivo.
 */
  let NUMERO_INGRESADO = prompt("Ingresá un número para el conteo: ");
  while (NUMERO_INGRESADO >= 1) {
    console.log(NUMERO_INGRESADO);
    NUMERO_INGRESADO--;
  }
}

function ejercicio6() {
  /*Ejercicio 6: Validación de contraseña
Escribe un programa que le pida al usuario que ingrese una contraseña. 
La contraseña debe tener al menos 8 caracteres, 
al menos una letra mayúscula, una letra minúscula y un número. 
Utiliza un bucle while para asegurarte de que el usuario ingrese una contraseña válida. 
Si la contraseña es válida, muestra un mensaje de éxito; de lo contrario, pide al 
usuario que ingrese una contraseña nuevamente.
 */
  let contrasenia = prompt(
    "Ingresá una contraseña con 8 carácteres. Dentro de ellos debe haber números, minúsculas y mayúsculas."
  );
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

  while (!contrasenia.match(regex)) {
    contrasenia = prompt(
      "ERROR, CONTRASEÑA INVÁLIDA. \nIngresá una contraseña con 8 carácteres (números, minúsculas y mayúsculas):"
    );
  }

  alert("¡Contraseña correcta!");
}

function ejercicio7() {
  /*
Ejercicio 7: Adivinanza con do-while
Escribe un juego en el que el programa elija un número aleatorio entre 1 y 10, 
y el usuario tenga que adivinarlo. El programa debe proporcionar pistas 
(mayor/menor) hasta que el usuario adivine correctamente el número. Utiliza 
un bucle do-while para repetir la solicitud de adivinanza hasta que se adivine el número.
 */
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(numeroAleatorio);
  let numeroIngresado;
  do {
    numeroIngresado = parseInt(
      prompt("Intentá adivinar un número entre 1 y 10:")
    );

    if (numeroIngresado > numeroAleatorio) {
      alert("El número ingresado es mayor al numero a adivinar.");
    } else if (numeroIngresado < numeroAleatorio) {
      alert("El número ingresado es menor al numero a adivinar.");
    }
  } while (numeroAleatorio !== numeroIngresado);

  alert("Ganaste!");
}

//ejercicio1();
//ejercicio2();
//ejercicio3();
//ejercicio4();
//ejercicio5();
//ejercicio6();
//ejercicio7();
