function encontrarMaximo(numeros) {
  /*Ejercicio 1: Encontrar el valor máximo en un array
Descripción: Escribe una función que tome un array de números y devuelva el valor máximo.*/
  let valorMaximo = numeros[0];
  for (const numero of numeros) {
    if (numero > valorMaximo) valorMaximo = numero;
  }

  return valorMaximo;
}

function invertirArray(original) {
  /*
    Ejercicio 2: Invertir un array
    Descripción: Escribe una función que tome un array y devuelva un nuevo array con los elementos en orden inverso.
    */
  let arrayInvertido = [];
  for (const valor of original) {
    arrayInvertido.unshift(valor);
  }

  return arrayInvertido;
}

function sumarElementos(numeros) {
  /*
    Ejercicio 3: Sumar todos los elementos de un array
    Descripción: Escribe una función que tome un array de números y devuelva la suma de todos sus elementos.
    */
  return numeros.reduce((num, acc) => acc + num, 0);
}

function obtenerPares(numeros) {
  /*    Ejercicio 4: Filtrar números pares de un array
Descripción: Escribe una función que tome un array de números y devuelva un nuevo array con solo los números pares.
*/
  return numeros.filter((num) => num % 2 === 0);
}

function concatenarArrays(array1, array2) {
  /*
Ejercicio 5: Concatenar dos arrays
Descripción: Escribe una función que tome dos arrays y devuelva un nuevo array que sea la concatenación de ambos.
*/
  return [...array1, ...array2];
}

//console.log(encontrarMaximo([1, 3, 7, 2, 5]));
//console.log(invertirArray([1, 2, 3, 4, 5]));
//console.log(sumarElementos([1, 2, 3, 4, 5]));
//console.log(obtenerPares([1, 2, 3, 4, 5, 6]));
// console.log(concatenarArrays([1, 2, 3], [4, 5, 6]));
