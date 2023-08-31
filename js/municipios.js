
// Obtener referencias a los elementos select
const departamento = document.querySelectorAll('.department');
const selectCiudad = document.getElementById("ciudad");

// Definir las opciones para las ciudades basadas en el país seleccionado
const opcionesCiudades = {
    "1": [
        { value: "1", text: "Ciudad 1 - País 1" },
        { value: "2", text: "Ciudad 2 - País 1" }
    ],
    "2": [
        { value: "3", text: "Ciudad 3 - País 2" },
        { value: "4", text: "Ciudad 4 - País 2" }
    ]
};

// Agregar un oyente de eventos al select de países
selectPais.addEventListener("change", () => {
    const paisSeleccionado = selectPais.value;
    actualizarOpcionesCiudades(paisSeleccionado);
});

// Función para actualizar las opciones del select de ciudades
function actualizarOpcionesCiudades(pais) {
    selectCiudad.innerHTML = ""; // Limpiar las opciones actuales
    
    const ciudades = opcionesCiudades[pais];
    ciudades.forEach(ciudad => {
        const opcion = document.createElement("option");
        opcion.value = ciudad.value;
        opcion.textContent = ciudad.text;
        selectCiudad.appendChild(opcion);
    });
}

// Inicializar las opciones de ciudades basadas en el país seleccionado por defecto
actualizarOpcionesCiudades(selectPais.value);
