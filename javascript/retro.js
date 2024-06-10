window.onload = function () {
  // Declaración de variables
  let panelInfo = document.querySelector(".info");
  let buttonMostrarComic = document.querySelector(".btn-Acceder");
  let sectionComics = document.querySelector(".comic");

  // Valores fijos para mostrar/ocultar los contenedores
  const posicionPanelInfo = "-2000px";
  const posicionPanelComic = "0px";

  // Función para mostrar los comics tras pulsar en acceder
  buttonMostrarComic.addEventListener("click", mostrarComic);

  // Muestra cómic
  function mostrarComic() {
    panelInfo.style.top = posicionPanelInfo;
    sectionComics.style.top = posicionPanelComic;
    document.body.style.backgroundImage = "none";
  }
};
