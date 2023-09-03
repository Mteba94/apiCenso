
const nomdepto = document.querySelector('.tooltip');
const departamento = document.querySelectorAll('.department');

departamento.forEach(department => {
  department.addEventListener('mouseover', () => {
    const valor = department.getAttribute('name');
    nomdepto.textContent = valor;
    const rect = department.getBoundingClientRect();
    
    const offsetX = 30; // Desplazamiento horizontal desde el departamento
    const offsetY = -20; // Desplazamiento vertical desde el departamento
  
    nomdepto.style.left = rect.right + offsetX + 'px'; // Posición a la derecha
    nomdepto.style.top = rect.top + offsetY + 'px';
    nomdepto.style.opacity = '1';
    
  });

  department.addEventListener('mouseout', () => {
    nomdepto.style.opacity = '0';
  });
});



document.addEventListener("DOMContentLoaded", function() {
    const svg = document.getElementById("mapa-svg");
    const botonesDepartamento = svg.querySelectorAll(".department"); // Asegúrate de tener una clase para los elementos de departamento
    const botonMostrarMapaCompleto = document.getElementById("mostrar-mapa-completo");
  
    let departamentoSeleccionado = null;
  
    // Manejador de clic para los botones de departamento
    botonesDepartamento.forEach((boton) => {
      boton.addEventListener("click", () => {
        departamentoSeleccionado = boton.getAttribute("data-valor");
        mostrarDepartamento(departamentoSeleccionado);
      });
    });
  
    // Mostrar departamento y ocultar botón de mapa completo
    function mostrarDepartamento(departamentoId) {
      // Ocultar todos los departamentos
      botonesDepartamento.forEach((boton) => {
        boton.style.display = "none";
      });
  
      // Mostrar el departamento seleccionado
      const departamento = svg.querySelector(`[data-valor="${departamentoId}"]`);
      if (departamento) {
        departamento.style.display = "block";
        botonMostrarMapaCompleto.style.display = "block";
      }
    }
  
    // Manejador de clic para el botón "Mostrar Mapa Completo"
    botonMostrarMapaCompleto.addEventListener("click", () => {
      // Mostrar todos los departamentos
      botonesDepartamento.forEach((boton) => {
        boton.style.display = "block";
      });
  
      // Ocultar botón de mapa completo
      botonMostrarMapaCompleto.style.display = "none";
      departamentoSeleccionado = null;
      
    });
  });

  
