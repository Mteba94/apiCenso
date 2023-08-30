
getPoblacion();
getPoblacion2();

function getPoblacion(){

    var url =  "https://censopoblacion.gt/indicadores/98/999";
    
    console.log(url);
    
    fetch(url)
    .then(response => response.json())
    .then(data => {

        if (data.length > 0){
            console.log(data);

            var totalPoblacion = document.getElementById("totalPoblacion");
            totalPoblacion.innerHTML = "Poblacion total: <strong> " + 
            data[0].pob_total.toLocaleString().replace(/\./g, ',') + "</strong>";

            var totalHombres = document.getElementById("totalHombres");
            totalHombres.innerHTML = "Total hombres: <strong>" + 
            data[0].total_sexo_hombre.toLocaleString().replace(/\./g, ',') + "</strong>";

            var totalMujeres = document.getElementById("totalMujeres");
            totalMujeres.innerHTML = "Total mujeres: <strong> " + 
            data[0].total_sexo_mujeres.toLocaleString().replace(/\./g, ',') + "</strong>";


        } else {
            console.log("No hay datos");
        }

    })
}

function getPoblacion2(){


    const departments = document.querySelectorAll('.department');

    departments.forEach(department => {
    department.addEventListener('click', () => {
        const valor = department.getAttribute('data-valor');
        let url;
    
        if (valor != null){
            url =  "https://censopoblacion.gt/indicadores/"+valor+"/999";
        } else {
            url =  "https://censopoblacion.gt/indicadores/98/999";
        }
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            

            if (data.length > 0){
                console.log(data);

                if(data[0].nombre == "República de Guatemala"){
                    var titutloDepartamento = document.getElementById("tituloDepartamento");
                    titutloDepartamento.innerHTML = "Resultados " + data[0].nombre;

                    var tituloDepto = document.getElementById("tituloDepto");
                    tituloDepto.innerHTML = "Total departamentos:"

                    var nombreDepartamento = document.getElementById("nombreDepartamento");
                    nombreDepartamento.innerHTML = data[0].nombre;

                    var totalDepartamentos = document.getElementById("totalDepartamentos");
                    totalDepartamentos.innerHTML = data[0].total_lugares;

                    var tituloCapital = document.getElementById("tituloCapital");
                    tituloCapital.innerHTML = "Capital: "

                    var capital = document.getElementById("capital");
                    capital.innerHTML = data[0].capital;

                } else {

                    var titutloDepartamento = document.getElementById("tituloDepartamento");
                    titutloDepartamento.innerHTML = "Resultados departamento de " + data[0].nombre;

                    var tituloDepto = document.getElementById("tituloDepto");
                    tituloDepto.innerHTML = "Total municipios:"

                    var nombreDepartamento = document.getElementById("nombreDepartamento");
                    nombreDepartamento.innerHTML = data[0].nombre;

                    var totalDepartamentos = document.getElementById("totalDepartamentos");
                    totalDepartamentos.innerHTML = data[0].total_lugares;

                    var tituloCapital = document.getElementById("tituloCapital");
                    tituloCapital.innerHTML = "Cabecera: "

                    var capital = document.getElementById("capital");
                    capital.innerHTML = data[0].capital;

                    var indMasculinidad = document.getElementById("indMasculinidad");
                    indMasculinidad.innerHTML = data[0].indice_masculinidad;

                    var edadProm = document.getElementById("edadProm");
                    edadProm.innerHTML = data[0].edad_promedio;

                    var indDepend = document.getElementById("indDepend");
                    indDepend.innerHTML = data[0].indice_dependencia;

                    var aniosProm = document.getElementById("aniosProm");
                    aniosProm.innerHTML = data[0].anios_prom_estudio;

                    var alfabetismo = document.getElementById("alfabetismo");
                    alfabetismo.innerHTML = data[0].alfabetismo;

                    var vivParticulares = document.getElementById("vivParticulares");
                    vivParticulares.innerHTML = data[0].viviendas_part.toLocaleString().replace(/\./g, ',');

                    var totHogares = document.getElementById("totHogares");
                    totHogares.innerHTML = data[0].total_hogares.toLocaleString().replace(/\./g, ',');

                    var promPersonas = document.getElementById("promPersonas");
                    promPersonas.innerHTML = data[0].prom_personas_hogar;

                    var jefasHogar = document.getElementById("jefasHogar");
                    jefasHogar.innerHTML = data[0].total_jefas_hogar;

                    var totalPobla = document.getElementById("totalPobla");
                    totalPobla.innerHTML = "Total población: " + 
                    data[0].pob_total.toLocaleString().replace(/\./g, ',') + " hab";

                    var hombres = document.getElementById("Hombres");
                    hombres.innerHTML = data[0].total_sexo_hombre.toLocaleString().replace(/\./g, ',');

                    var mujeres = document.getElementById("Mujeres");
                    mujeres.innerHTML = data[0].total_sexo_mujeres.toLocaleString().replace(/\./g, ',');

                    var urbana = document.getElementById("Urbana");
                    urbana.innerHTML = data[0].total_sector_urbano.toLocaleString().replace(/\./g, ',');

                    var rural = document.getElementById("Rural");
                    rural.innerHTML = data[0].total_sector_rural.toLocaleString().replace(/\./g, ',');
                }

            } else {
                console.log("No hay datos");
            }

        })

    });
    });

    

    const defaultUrl = "https://censopoblacion.gt/indicadores/98/999";

    fetch(defaultUrl)
        .then(response => response.json())
        .then(data => {
            

            if (data.length > 0){
                console.log(data);

                if(data[0].nombre == "República de Guatemala"){
                    var titutloDepartamento = document.getElementById("tituloDepartamento");
                    titutloDepartamento.innerHTML = "Resultados " + data[0].nombre;

                    var tituloDepto = document.getElementById("tituloDepto");
                    tituloDepto.innerHTML = "Total departamentos:"

                    var nombreDepartamento = document.getElementById("nombreDepartamento");
                    nombreDepartamento.innerHTML = data[0].nombre;

                    var totalDepartamentos = document.getElementById("totalDepartamentos");
                    totalDepartamentos.innerHTML = data[0].total_lugares;

                    var tituloCapital = document.getElementById("tituloCapital");
                    tituloCapital.innerHTML = "Capital: "

                    var capital = document.getElementById("capital");
                    capital.innerHTML = data[0].capital;

                    var indMasculinidad = document.getElementById("indMasculinidad");
                    indMasculinidad.innerHTML = data[0].indice_masculinidad;

                    var edadProm = document.getElementById("edadProm");
                    edadProm.innerHTML = data[0].edad_promedio;

                    var indDepend = document.getElementById("indDepend");
                    indDepend.innerHTML = data[0].indice_dependencia;

                    var aniosProm = document.getElementById("aniosProm");
                    aniosProm.innerHTML = data[0].anios_prom_estudio;

                    var alfabetismo = document.getElementById("alfabetismo");
                    alfabetismo.innerHTML = data[0].alfabetismo;

                    var vivParticulares = document.getElementById("vivParticulares");
                    vivParticulares.innerHTML = data[0].viviendas_part.toLocaleString().replace(/\./g, ',');

                    var totHogares = document.getElementById("totHogares");
                    totHogares.innerHTML = data[0].total_hogares.toLocaleString().replace(/\./g, ',');

                    var promPersonas = document.getElementById("promPersonas");
                    promPersonas.innerHTML = data[0].prom_personas_hogar;

                    var jefasHogar = document.getElementById("jefasHogar");
                    jefasHogar.innerHTML = data[0].total_jefas_hogar;

                    var totalPobla = document.getElementById("totalPobla");
                    totalPobla.innerHTML = "Total población: " + 
                    data[0].pob_total.toLocaleString().replace(/\./g, ',') + " hab";

                    var hombres = document.getElementById("Hombres");
                    hombres.innerHTML = data[0].total_sexo_hombre.toLocaleString().replace(/\./g, ',');

                    var mujeres = document.getElementById("Mujeres");
                    mujeres.innerHTML = data[0].total_sexo_mujeres.toLocaleString().replace(/\./g, ',');

                    var urbana = document.getElementById("Urbana");
                    urbana.innerHTML = data[0].total_sector_urbano.toLocaleString().replace(/\./g, ',');

                    var rural = document.getElementById("Rural");
                    rural.innerHTML = data[0].total_sector_rural.toLocaleString().replace(/\./g, ',');

                } else {

                    console.log("No hay datos");

                }

            } else {
                console.log("No hay datos");
            }


        })

}

  
  

