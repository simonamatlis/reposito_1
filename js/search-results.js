
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("resultadosbusqueda");

const acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
const url_buscarpeliculas   = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busqueda}`;
const url_buscarseries      = `https://api.themoviedb.org/3/search/tv?api_key=${acaVaLaAPIKey}&query=${busqueda}`;
    
console.log(url_buscarpeliculas);

fetch(url_buscarpeliculas)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let tituloBusqueda = document.querySelector("h6");

        if (data.results.length === 0) {
            tituloBusqueda.innerText = `No se ha encontrado resultado para: ${busqueda}`;
        } else {
            tituloBusqueda.innerText = `Resultados de la búsqueda para: ${busqueda}`;
        }

        let resultadosBusqueda = document.getElementById("ResultadosBusqueda");
        resultadosBusqueda.innerHTML = ""; // Limpiar el contenido anterior

        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            resultadosBusqueda.innerHTML += 
            `<div class="cajapeli1">
                <h3>${element.title}</h3>
                <h4>${element.release_date}<h4>
                <a href="./detallespeli.html"><img class="imagenmm" src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}"></a>
            </div>`;
        }
    })
    .catch(function (error) {
        console.log(error);
    });

fetch(url_buscarseries)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let tituloBusqueda = document.querySelector("h6");

        if (data.results.length === 0) {
            tituloBusqueda.innerText = `No se ha encontrado resultado para: ${busqueda}`;
        } else {
            tituloBusqueda.innerText = `Resultados de la búsqueda para: ${busqueda}`;
        }

        let resultadosBusqueda = document.getElementById("ResultadosBusqueda");
        resultadosBusqueda.innerHTML = ""; // Limpiar el contenido anterior

        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            resultadosBusqueda.innerHTML += `
            <div class="cajapeli1">
                <h3>${element.title}</h3>
                <h4>${element.release_date}<h4>
                <a href="./detallespeli.html"><img class="imagenmm" src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}"></a>
            </div>`;
        }
    })
    .catch(function (error) {
        console.log(error);
    });