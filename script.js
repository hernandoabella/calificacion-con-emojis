// Esperar a que el contenido HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
  // Obtener elementos del DOM
  const starsEl = document.querySelectorAll(".fa-star"); // Elementos de estrellas
  const emojisEl = document.querySelectorAll(".emoji"); // Elementos de emojis

  // Obtener la puntuación guardada en el almacenamiento local o establecer 5 estrellas como valor predeterminado
  let rating = localStorage.getItem("rating") || 5;

  // Actualizar la visualización inicial de la puntuación
  updateRating(rating);

  // Asignar eventos de clic a las estrellas
  starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
      updateRating(index + 1);
    });
  });

  // Función para actualizar la puntuación y los emojis
  function updateRating(index) {
    // Actualizar la visualización de las estrellas
    starsEl.forEach((starEl, idx) => {
      if (idx < index) {
        starEl.classList.add("active");
      } else {
        starEl.classList.remove("active");
      }
    });

    // Ocultar todos los emojis
    emojisEl.forEach((emojiEl) => {
      emojiEl.style.display = "none";
    });

    // Mostrar el emoji correspondiente a la puntuación seleccionada
    emojisEl[index - 1].style.display = "block";

    // Guardar la puntuación en el almacenamiento local
    localStorage.setItem("rating", index);
  }
});
