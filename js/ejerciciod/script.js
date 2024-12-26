function CalcularImpuesto(precio, iva) {
  /*Los valores deben ser pasados a los parámetros de la función CalcularImpuesto, que calcula el IVA seleccionado y devuelve el siguiente mensaje:
Precio: valor – IVA: iva% – Total: valor con iva
El mensaje debe ser devuelto por la función e informado con un console.log(). */
  const PRECIO_FINAL = precio * (1 + iva / 100);
  console.log(
    `Precio: ${precio} – ${iva}: ${iva}% – Total: ${PRECIO_FINAL.toFixed(2)}`
  );
}

function IngresarPrecio() {
  let precioProducto = parseFloat(
    prompt("Ingresar el precio del producto: \n$: ")
  );
  //validar precio
  while (isNaN(precioProducto)) {
    precioProducto = parseFloat(
      prompt("No ingresaste un número. \nIngresar nuevamente el precio: \n$: ")
    );
  }

  return precioProducto;
}

function IngresarIVA() {
  let IVAProducto = parseInt(
    prompt("Ingresar el IVA a aplicar en el producto: ")
  );

  if (isNaN(IVAProducto)) {
    IVAProducto = 21;
  } else {
    //validar IVA
    while (IVAProducto < 0 || IVAProducto > 100) {
      IVAProducto = parseInt(
        prompt(
          "No ingresaste un número entre el 0 y el 100. \nIngresar nuevamente el IVA: \n$: "
        )
      );
    }
  }

  return IVAProducto;
}

function CalcularImpuesto() {
  //ingresar el precio del producto, IVA
  const PRECIO_PRODUCTO = IngresarPrecio();
  const IVA_PRODUCTO = IngresarIVA();
  //calcular iva y mostrarlo
  CalcularImpuesto(PRECIO_PRODUCTO, IVA_PRODUCTO);
}

/*Los valores deben ser pasados a los parámetros de la función CalcularImpuesto, que calcula el IVA seleccionado y devuelve el siguiente mensaje:
Precio: valor – IVA: iva% – Total: valor con iva
El mensaje debe ser devuelto por la función e informado con un console.log().
La función debe verificar que los datos sean válidos (en caso contrario notificarlo).
La función no hace el ingreso ni el egreso de valores por parte del usuario.
No se pueden utilizar variables globales. */

document
  .getElementById("calcular-impuesto")
  .addEventListener("click", CalcularImpuesto);
