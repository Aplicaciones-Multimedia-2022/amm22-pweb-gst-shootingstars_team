var btn_abrir_easy = document.getElementById("btn"),
  overlay = document.getElementById("overlay"),
  ventana_easy = document.getElementById("ventana_easy"),
  btn_cerrar = document.getElementById("btn_cerrar");

btn_abrir_easy.addEventListener("click", function () {
  overlay.classList.add("active");
});

btn_cerrar.addEventListener("click", function () {
  overlay.classList.remove("active");
});
