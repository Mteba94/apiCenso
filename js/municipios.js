
// Lista de departamentos y municipios 
const departamentosYMunicipios = [
    { tipo: "departamento", value: "1", text: "Guatemala" },
    { tipo: "departamento", value: "2", text: "El Progreso" },
    { tipo: "departamento", value: "3", text: "Sacatepéquez" },
    { tipo: "departamento", value: "4", text: "Chimaltenango" },
    { tipo: "departamento", value: "5", text: "Escuintla" },
    { tipo: "departamento", value: "6", text: "Santa Rosa" },
    { tipo: "departamento", value: "7", text: "Sololá" },
    { tipo: "departamento", value: "8", text: "Totonicapán" },
    { tipo: "departamento", value: "9", text: "Quetzaltenango" },
    { tipo: "departamento", value: "10", text: "Suchitepéquez" },
    { tipo: "departamento", value: "11", text: "Retalhuleu" },
    { tipo: "departamento", value: "12", text: "San Marcos" },
    { tipo: "departamento", value: "13", text: "Huehuetenango" },
    { tipo: "departamento", value: "14", text: "Quiché" },
    { tipo: "departamento", value: "15", text: "Baja Verapaz" },
    { tipo: "departamento", value: "16", text: "Alta Verapaz" },
    { tipo: "departamento", value: "17", text: "Petén" },
    { tipo: "departamento", value: "18", text: "Izabal" },
    { tipo: "departamento", value: "19", text: "Zacapa" },
    { tipo: "departamento", value: "20", text: "Chiquimula" },
    { tipo: "departamento", value: "21", text: "Jalapa" },
    { tipo: "departamento", value: "22", text: "Jutiapa" },
    
];

document.addEventListener("DOMContentLoaded", function() {
    const ciudadSelect = document.getElementById("ciudad");

    // Llena el select con las opciones de departamentos al cargar la página
    departamentosYMunicipios.forEach(opcion => {
        if (opcion.tipo === "departamento") {
            const option = document.createElement("option");
            option.value = opcion.value;
            option.textContent = opcion.text;
            ciudadSelect.appendChild(option);
        }
    });

    // Agrega un evento para manejar el cambio de opción
    ciudadSelect.addEventListener("change", function() {
        const selectedValue = ciudadSelect.value;

        // Limpia el select
        ciudadSelect.innerHTML = "";

        // Llena el select con las nuevas opciones (departamentos o municipios)
        departamentosYMunicipios.forEach(opcion => {
            if (opcion.value.startsWith(selectedValue)) {
                const option = document.createElement("option");
                option.value = opcion.value;
                option.textContent = opcion.text;
                ciudadSelect.appendChild(option);
            }
        });
    });
});