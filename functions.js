// Seleccionamos el cursor personalizado
const customCursor = document.getElementById('custom-cursor');

// Escuchar los movimientos del ratón
document.addEventListener('mousemove', (e) => {
  customCursor.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`;
});

