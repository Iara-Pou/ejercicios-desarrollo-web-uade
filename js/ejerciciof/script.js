function ObtenerDias(siglas) {
  switch (siglas) {
    case "dg":
      return "Mi, Ju, Vi";
    case "dm":
      return "Lu, Mi, Vi";
    case "dw":
      return "Ma, Ju, Vi";
  }
}

function ingresarSiglas() {
  let siglaValida = (sigla) => {
    return ["dw", "dm", "dg"].includes(sigla);
  };

  let siglasIngresadas = prompt('Por favor, ingresá "dw, dm o dg": ')
    .trim()
    .toLowerCase();

  while (!siglaValida(siglasIngresadas)) {
    siglasIngresadas = prompt(
      'Error en la carga.\nPor favor, ingresá "dw, dm o dg": '
    ).trim();
  }

  return siglasIngresadas;
}

function mostrarDias() {
  const SIGLAS_INGRESADAS = ingresarSiglas();
  console.info(ObtenerDias(SIGLAS_INGRESADAS));
}

$botonMostrarCursada = document.getElementById("mostrar-cursada");
$botonMostrarCursada.addEventListener("click", mostrarDias);
