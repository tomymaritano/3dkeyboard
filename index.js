document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', (e) => {
    console.log(`Tecla ${e.target.innerText} presionada`);
    // Aquí puedes agregar lo que sucederá cuando se presione una tecla
  });
});


document.addEventListener('keydown', (event) => {
  const keyName = event.key.toUpperCase(); // Convierte a mayúsculas para hacer coincidir con las teclas del teclado
  const output = document.getElementById('output');
  
  // Verifica si la tecla presionada se corresponde con alguna tecla de tu teclado digital
  const key = document.querySelector(`.key[data-key="${keyName}"]`);
  if (key) {
    output.value += key.innerText; // Agrega el texto de la tecla al campo de salida
    key.classList.add('active'); // Opcional: Agrega una clase para resaltar la tecla presionada
    setTimeout(() => key.classList.remove('active'), 200); // Elimina el resaltado después de un corto tiempo
  }
});

// Previene el comportamiento por defecto para teclas específicas (e.g., "space", "enter")
document.addEventListener('keydown', (event) => {
  if (['Space', 'Enter'].includes(event.code)) {
    event.preventDefault();
  }
});
