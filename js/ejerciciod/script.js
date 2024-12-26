function CalcularImpuesto(precio, iva) {
  // Calcular el precio final con IVA
  const PRECIO_FINAL = precio * (1 + iva / 100);

  // Devolver el mensaje
  return `Precio: ${precio.toFixed(
    2
  )} – IVA: ${iva}% – Total: ${PRECIO_FINAL.toFixed(2)}`;
}

function IngresarPrecio() {
  let precioProducto = parseFloat(
    prompt("Ingresar el precio del producto: \n$: ")
  );

  // Validar precio
  while (isNaN(precioProducto) || precioProducto <= 0) {
    precioProducto = parseFloat(
      prompt(
        "No ingresaste un número válido. \nIngresar nuevamente el precio: \n$: "
      )
    );
  }

  return precioProducto;
}

function IngresarIVA() {
  let IVAProducto = parseInt(
    prompt("Ingresar el IVA a aplicar en el producto (entre 0 y 100): ")
  );

  // Si no se ingresa un IVA válido, asignar el valor por defecto (21)
  if (isNaN(IVAProducto)) {
    IVAProducto = 21;
  } else {
    // Validar que esté entre 0 y 100
    while (IVAProducto < 0 || IVAProducto > 100) {
      IVAProducto = parseInt(
        prompt(
          "El IVA debe estar entre 0 y 100. \nIngresar nuevamente el IVA: "
        )
      );
    }
  }

  return IVAProducto;
}

function EjecutarCalculo() {
  // Ingresar el precio y el IVA
  const PRECIO_PRODUCTO = IngresarPrecio();
  const IVA_PRODUCTO = IngresarIVA();

  // Calcular y mostrar el resultado
  const resultado = CalcularImpuesto(PRECIO_PRODUCTO, IVA_PRODUCTO);
  console.log(resultado);
}

// Asignar el evento al botón
document
  .getElementById("calcular-impuesto")
  .addEventListener("click", EjecutarCalculo);
