
getPoblacion();
getPoblacion2();

var botonMostrarMapaCompleto = document.getElementById("mostrar-mapa-completo");
        botonMostrarMapaCompleto.style.display = "none";

function getPoblacion(){

    var url =  "https://censopoblacion.gt/indicadores/98/999";
    
    //console.log(url);
    
    fetch(url)
    .then(response => response.json())
    .then(data => {

        if (data.length > 0){
            //console.log(data);

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

var myChart
var charArea
var chartEdad
var chartPueblo





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
                //console.log(data);

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

                    var porHombres = document.getElementById("porHombres");
                    porHombres.innerHTML = data[0].porc_sexo_hombre.toFixed(2) + '%';

                    var porMujeres = document.getElementById("porMujeres");
                    porMujeres.innerHTML = data[0].porc_sexo_mujeres.toFixed(2) + '%';

                    var porUrbana = document.getElementById("porUrbana");
                    porUrbana.innerHTML = data[0].porc_sector_urbano.toFixed(2) + '%';

                    var porRural = document.getElementById("porRural");
                    porRural.innerHTML = data[0].porc_sector_rural.toFixed(2) + '%';

                    var ceroCatorce = document.getElementById("ceroCatorce");
                    ceroCatorce.innerHTML = data[0].pob_edad_014.toLocaleString().replace(/\./g, ',');

                    var porceroCatorce = document.getElementById("porceroCatorce");
                    porceroCatorce.innerHTML = data[0].porc_edad_014.toFixed(2) + '%';

                    var quince = document.getElementById("quince");
                    quince.innerHTML = data[0].pob_edad_1564.toLocaleString().replace(/\./g, ',');

                    var porQuince = document.getElementById("porQuince");
                    porQuince.innerHTML = data[0].porc_edad_1564.toFixed(2) + '%';

                    var sesenta = document.getElementById("sesenta");
                    sesenta.innerHTML = data[0].pob_edad_65.toLocaleString().replace(/\./g, ',');

                    var porSesenta = document.getElementById("porSesenta");
                    porSesenta.innerHTML = data[0].porc_edad_65.toFixed(2) + '%';

                    var maya = document.getElementById("maya");
                    maya.innerHTML = data[0].pob_pueblo_maya.toLocaleString().replace(/\./g, ',');

                    var porMaya = document.getElementById("porMaya");
                    porMaya.innerHTML = data[0].porc_pueblo_maya.toFixed(2) + '%';

                    var garifuna = document.getElementById("garifuna");
                    garifuna.innerHTML = data[0].pob_pueblo_garifuna.toLocaleString().replace(/\./g, ',');

                    var porGarifuna = document.getElementById("porGarifuna");
                    porGarifuna.innerHTML = data[0].porc_pueblo_garifuna.toFixed(2) + '%';

                    var xinca = document.getElementById("xinca");
                    xinca.innerHTML = data[0].pob_pueblo_xinca.toLocaleString().replace(/\./g, ',');

                    var porXinca = document.getElementById("porXinca");
                    porXinca.innerHTML = data[0].porc_pueblo_xinca.toFixed(2) + '%';

                    var afro = document.getElementById("afro");
                    afro.innerHTML = data[0].pob_pueblo_afrodescendiente.toLocaleString().replace(/\./g, ',');

                    var porAfro = document.getElementById("porAfro");
                    porAfro.innerHTML = data[0].porc_pueblo_afrodescendiente.toFixed(2) + '%';

                    var ladino = document.getElementById("ladino");
                    ladino.innerHTML = data[0].pob_pueblo_ladino.toLocaleString().replace(/\./g, ',');

                    var porLadino = document.getElementById("porLadino");
                    porLadino.innerHTML = data[0].porc_pueblo_ladino.toFixed(2) + '%';

                    var extranjero = document.getElementById("extranjero");
                    extranjero.innerHTML = data[0].pob_pueblo_extranjero.toLocaleString().replace(/\./g, ',');

                    var porExtranjero = document.getElementById("porExtranjero");
                    porExtranjero.innerHTML = data[0].porc_pueblo_extranjero.toFixed(2) + '%';



                    var ctx = document.getElementById("graficoPobla").getContext("2d");

                    if (myChart) {
                        myChart.destroy();
                    }

                    var info = {
                        labels: ['Hombres', 'Mujeres'],
                        datasets: [{
                            label: 'Población',
                            data: [data[0].porc_sexo_hombre.toFixed(2), data[0].porc_sexo_mujeres.toFixed(2)],
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 99, 132, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    
                    var options = {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return (value).toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return (tooltipItem.xLabel) + '%';
                                }
                            }
                        }
                    }

                    myChart = new Chart(ctx, {
                        type: 'bar',
                        data: info,
                        options: options
                    })



                    var area = document.getElementById('graficoArea').getContext('2d');
                    
                    if (charArea) {
                        charArea.destroy();
                    }

                    var info = {
                        labels: ['Urbana', 'Rural'],
                        datasets: [{
                            label: 'Población',
                            data: [data[0].porc_sector_urbano.toFixed(2), data[0].porc_sector_rural.toFixed(2)],
                            backgroundColor: [
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)' 
                            ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    
                    var options = {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return (value).toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return (tooltipItem.xLabel) + '%';
                                }
                            }
                        }
                    }
                    
                    charArea = new Chart(area, {
                        type: 'bar',
                        data: info,
                        options: options
                    })



                    var edad = document.getElementById('graficoEdad').getContext('2d');
                    
                    if (chartEdad) {
                        chartEdad.destroy();
                    }

                    var info = {
                        labels: ['0-14 años', '15-64 años', '65 y más años'],
                        datasets: [{
                            label: 'Población',
                            data: [data[0].porc_edad_014.toFixed(2), data[0].porc_edad_1564.toFixed(2), data[0].porc_edad_65.toFixed(2)],
                            backgroundColor: [
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(139, 69, 19, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(139, 69, 19, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    
                    var options = {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return (value).toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return (tooltipItem.xLabel) + '%';
                                }
                            }
                        }
                    }
                    
                    chartEdad = new Chart(edad, {
                        type: 'bar',
                        data: info,
                        options: options
                    })




                    var pueblo = document.getElementById('graficoPueblo').getContext('2d');
                    
                    if (chartPueblo) {
                        chartPueblo.destroy();
                    }

                    var info = {
                        labels: ['Maya', 'Garifuna', 'Xinca', 'Afrodescendiente', 'Ladino', 'Extranjero'],
                        datasets: [{
                            label: 'Población',
                            data: [data[0].porc_pueblo_maya.toFixed(2), data[0].porc_pueblo_garifuna.toFixed(2), 
                                    data[0].porc_pueblo_xinca.toFixed(2), data[0].porc_pueblo_afrodescendiente.toFixed(2),
                                    data[0].porc_pueblo_ladino.toFixed(2), data[0].porc_pueblo_extranjero.toFixed(2)],
                            backgroundColor: [
                                'rgba(255, 204, 51, 0.2)',
                                'rgba(50, 102, 0, 0.2)',
                                'rgba(0, 0, 102, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(128, 128, 128, 0.2)',
                                'rgba(255, 0, 255, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 204, 51, 1)',
                                'rgba(0, 102, 0, 1)',
                                'rgba(0, 0, 102, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(128, 128, 128, 1)',
                                'rgba(255, 0, 255, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    
                    var options = {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return (value).toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return (tooltipItem.xLabel) + '%';
                                }
                            }
                        }
                    }
                    
                    chartPueblo = new Chart(pueblo, {
                        type: 'bar',
                        data: info,
                        options: options
                    })
                    
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
                //console.log(data);

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

                    var porHombres = document.getElementById("porHombres");
                    porHombres.innerHTML = data[0].porc_sexo_hombre.toFixed(2) + '%';

                    var porMujeres = document.getElementById("porMujeres");
                    porMujeres.innerHTML = data[0].porc_sexo_mujeres.toFixed(2) + '%';

                    var porUrbana = document.getElementById("porUrbana");
                    porUrbana.innerHTML = data[0].porc_sector_urbano.toFixed(2) + '%';

                    var porRural = document.getElementById("porRural");
                    porRural.innerHTML = data[0].porc_sector_rural.toFixed(2) + '%';

                    var ceroCatorce = document.getElementById("ceroCatorce");
                    ceroCatorce.innerHTML = data[0].pob_edad_014.toLocaleString().replace(/\./g, ',');

                    var porceroCatorce = document.getElementById("porceroCatorce");
                    porceroCatorce.innerHTML = data[0].porc_edad_014.toFixed(2) + '%';

                    var quince = document.getElementById("quince");
                    quince.innerHTML = data[0].pob_edad_1564.toLocaleString().replace(/\./g, ',');

                    var porQuince = document.getElementById("porQuince");
                    porQuince.innerHTML = data[0].porc_edad_1564.toFixed(2) + '%';

                    var sesenta = document.getElementById("sesenta");
                    sesenta.innerHTML = data[0].pob_edad_65.toLocaleString().replace(/\./g, ',');

                    var porSesenta = document.getElementById("porSesenta");
                    porSesenta.innerHTML = data[0].porc_edad_65.toFixed(2) + '%';

                    var maya = document.getElementById("maya");
                    maya.innerHTML = data[0].pob_pueblo_maya.toLocaleString().replace(/\./g, ',');

                    var porMaya = document.getElementById("porMaya");
                    porMaya.innerHTML = data[0].porc_pueblo_maya.toFixed(2) + '%';

                    var garifuna = document.getElementById("garifuna");
                    garifuna.innerHTML = data[0].pob_pueblo_garifuna.toLocaleString().replace(/\./g, ',');

                    var porGarifuna = document.getElementById("porGarifuna");
                    porGarifuna.innerHTML = data[0].porc_pueblo_garifuna.toFixed(2) + '%';

                    var xinca = document.getElementById("xinca");
                    xinca.innerHTML = data[0].pob_pueblo_xinca.toLocaleString().replace(/\./g, ',');

                    var porXinca = document.getElementById("porXinca");
                    porXinca.innerHTML = data[0].porc_pueblo_xinca.toFixed(2) + '%';

                    var afro = document.getElementById("afro");
                    afro.innerHTML = data[0].pob_pueblo_afrodescendiente.toLocaleString().replace(/\./g, ',');

                    var porAfro = document.getElementById("porAfro");
                    porAfro.innerHTML = data[0].porc_pueblo_afrodescendiente.toFixed(2) + '%';

                    var ladino = document.getElementById("ladino");
                    ladino.innerHTML = data[0].pob_pueblo_ladino.toLocaleString().replace(/\./g, ',');

                    var porLadino = document.getElementById("porLadino");
                    porLadino.innerHTML = data[0].porc_pueblo_ladino.toFixed(2) + '%';

                    var extranjero = document.getElementById("extranjero");
                    extranjero.innerHTML = data[0].pob_pueblo_extranjero.toLocaleString().replace(/\./g, ',');

                    var porExtranjero = document.getElementById("porExtranjero");
                    porExtranjero.innerHTML = data[0].porc_pueblo_extranjero.toFixed(2) + '%';


                    var ctx = document.getElementById('graficoPobla').getContext('2d');
                    
                    if (myChart) {
                        myChart.destroy();
                    }

                    var info = {
                        labels: ['Hombres', 'Mujeres'],
                        datasets: [{
                            label: 'Población',
                            data: [data[0].porc_sexo_hombre.toFixed(2), data[0].porc_sexo_mujeres.toFixed(2)],
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 99, 132, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    
                    var options = {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return (value).toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return (tooltipItem.xLabel) + '%';
                                }
                            }
                        }
                    }
                    
                    myChart = new Chart(ctx, {
                        type: 'bar',
                        data: info,
                        options: options
                    })



                    var area = document.getElementById('graficoArea').getContext('2d');
                    
                    if (charArea) {
                        charArea.destroy();
                    }

                    var info = {
                        labels: ['Urbana', 'Rural'],
                        datasets: [{
                            label: 'Población',
                            data: [data[0].porc_sector_urbano.toFixed(2), data[0].porc_sector_rural.toFixed(2)],
                            backgroundColor: [
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)' 
                            ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    
                    var options = {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return (value).toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return (tooltipItem.xLabel) + '%';
                                }
                            }
                        }
                    }
                    
                    charArea = new Chart(area, {
                        type: 'bar',
                        data: info,
                        options: options
                    })



                    var edad = document.getElementById('graficoEdad').getContext('2d');
                    
                    if (chartEdad) {
                        chartEdad.destroy();
                    }

                    var info = {
                        labels: ['0-14 años', '15-64 años', '65 y más años'],
                        datasets: [{
                            label: 'Población',
                            data: [data[0].porc_edad_014.toFixed(2), data[0].porc_edad_1564.toFixed(2), data[0].porc_edad_65.toFixed(2)],
                            backgroundColor: [
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(139, 69, 19, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(139, 69, 19, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    
                    var options = {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return (value).toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return (tooltipItem.xLabel) + '%';
                                }
                            }
                        }
                    }
                    
                    chartEdad = new Chart(edad, {
                        type: 'bar',
                        data: info,
                        options: options
                    })




                    var pueblo = document.getElementById('graficoPueblo').getContext('2d');
                    
                    if (chartPueblo) {
                        chartPueblo.destroy();
                    }

                    var info = {
                        labels: ['Maya', 'Garifuna', 'Xinca', 'Afrodescendiente', 'Ladino', 'Extranjero'],
                        datasets: [{
                            label: 'Población',
                            data: [data[0].porc_pueblo_maya.toFixed(2), data[0].porc_pueblo_garifuna.toFixed(2), 
                                    data[0].porc_pueblo_xinca.toFixed(2), data[0].porc_pueblo_afrodescendiente.toFixed(2),
                                    data[0].porc_pueblo_ladino.toFixed(2), data[0].porc_pueblo_extranjero.toFixed(2)],
                            backgroundColor: [
                                'rgba(255, 204, 51, 0.2)',
                                'rgba(50, 102, 0, 0.2)',
                                'rgba(0, 0, 102, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(128, 128, 128, 0.2)',
                                'rgba(255, 0, 255, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 204, 51, 1)',
                                'rgba(0, 102, 0, 1)',
                                'rgba(0, 0, 102, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(128, 128, 128, 1)',
                                'rgba(255, 0, 255, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    
                    var options = {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return (value).toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return (tooltipItem.xLabel) + '%';
                                }
                            }
                        }
                    }
                    
                    chartPueblo = new Chart(pueblo, {
                        type: 'bar',
                        data: info,
                        options: options
                    })



                    
                } else {

                    console.log("No hay datos");

                }

            } else {
                console.log("No hay datos");
            }


        })

}

  
  

