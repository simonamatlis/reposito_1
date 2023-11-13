let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5"
let url_detallespeli = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`;

let qs_peliculas = location.search; //obtengo la query string desde la url
let queryString_peliculas = new URLSearchParams(queryString) //transformo la query en un objeto literal
let id = queryString_movie.get('id'); // obtengo el dato del id del objeto literal
console.log(id)

let imagen= document.querySelector(".imagenmm");
let titulo= document.querySelector(".titulo");
let fecha= document.querySelector (".fecha");
let genero= document.querySelector (".genero");
let duracion= document.querySelector (".duracion");
let calificacion= document.querySelector (".calificacion");
let sinposis= document.querySelector(".sinposis");
let button = document.querySelector(".agregar_favoritos"); 

fetch(url_detallespeli)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

            imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
            titulo.innerText= data.name;
            calificacion.innerText = `Popularidad: ${data.popularity}`;
            fechaEstreno.innerText = `Fecha de estreno: ${data.first_air_date}`;
            sinopsis.innerText= `Sinopsis: ${data.overview}`;
            let generos = data.genres.map((genre) => genre.name);
            genero.innerText = `${generos.join(", ")}`;
      
        })

    .catch(function (error) {
        console.log(error)
    })