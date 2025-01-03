function abrirModal() {
  $MODAL.classList.remove("hidden");
}

function cerrarModal() {
  $MODAL.classList.add("hidden");
}

const $MODAL = document.getElementById("modal");
document.getElementById("abrir-modal").addEventListener("click", abrirModal);
document.getElementById("cerrar-modal").addEventListener("click", cerrarModal);
