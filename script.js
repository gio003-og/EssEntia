// Mensaje de bienvenida en consola e interacción de navegación
document.addEventListener('DOMContentLoaded', () => {
  console.log('Sitio web de Essentia cargado correctamente con productos y atletas.');

  // Efecto en consola al interactuar con las tarjetas de atletas
  const ambassadorCards = document.querySelectorAll('.ambassador-card');

  ambassadorCards.forEach(card => {
    card.addEventListener('click', () => {
      const athleteName = card.querySelector('h4').innerText;
      console.log(`Atleta seleccionada: ${athleteName}`);
    });
  });
});