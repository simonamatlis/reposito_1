const apiKey = "615f39dc01eb552f3561acd616d1de7a";

let recommended_series = document.querySelector(".container-recommended-series");
let seriesp = document.querySelector(".container-popular-series");
let peliculasmv = document.querySelector(".container-top-rated-movies");

// Se definen las URLs para obtener datos de la API de TMDb sobre series populares, películas populares y películas mejor valoradas

let url_películaspopulares = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' 

// PELÍCULAS POPULARES
fetch(url_películaspopulares)
   .then(function (response) {
    return response.json(); // Convertir la información a formato JSON
   }) 

  .then(function (data) {
    let peliculas = "";
    console.log(data);
    for (let i = 0; i < 5; i++) {
        
      let titulo = data.results[i].name;
      let imagenes = data.results[i].poster_path;
      let id = data.results[i].id;
      let fecha = data.results[i].first_air_date;

      peliculas += `<article class="bloque-portada"> 
                            <a class="portadahome" href="./detail-serie.html?id=${id}">
                            <img class="portada" src="https://image.tmdb.org/t/p/w500/${imagenes}">
                            <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html"> ${titulo} </a>  </p>
                            <p class="fecha-portada"> ${fecha}</p>
                            </a>
                          </article>`;
    }
    // Se inserta el HTML en el elemento del DOM
    recommended_series.innerHTML = peliculas;
    return data;
  })

  .catch(function (error) {
    console.log("Error:", error);
  });

let url_seriespopulares = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'

  // SERIES POPULARES
  fetch(url_seriespopulares)
  .then(function (response) {
    return response.json(); 
  }) 

  .then(function (data) {
    let series = " ";
    for (let i = 0; i < 5; i++) {
      
      let titulo = data.results[i].title;
      let imagenes = data.results[i].poster_path;
      let id = data.results[i].id;
      let fecha = data.results[i].release_date;

      series += ` <article class="bloque-portada"> 
                            <a class="portadahome" href="./detail-movie.html?id=${id}">
                            <img class="portada" src="https://image.tmdb.org/t/p/w500/${imagenes}">
                            <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html"> ${titulo} </a>  </p>
                            <p class="fecha-portada"> ${fecha}</p>
                            </a>
                        </article>`;
    }

    seriesp.innerHTML = series;
    return data;
  })

  .catch(function (error) {
    console.log("Error:", error);
  });

  

let url_películasmasvaloradas = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

  // PELÍCULAS MÁS VALORADAS
  fetch(url_películasmasvaloradas)
  .then(function (response) {
    return response.json(); 
  }) 

  .then(function (data) {
    let peliculas = "";

    for (let i = 0; i < 5; i++) {
      
      let titulo = data.results[i].title;
      let imagenes = data.results[i].poster_path;
      let id = data.results[i].id;
      let fecha = data.results[i].release_date;

    
      peliculas += ` <article class="bloque-portada"> 
                        <a class="portadahome" href="./detail-movie.html?id=${id}">
                        <img class="portada" src="https://image.tmdb.org/t/p/w500/${imagenes}">
                        <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html"> ${titulo} </a>  </p>
                        <p class="fecha-portada"> ${fecha}</p>
                        </a>
                     </article>`;
    }

    peliculasmv.innerHTML = peliculas;
    return data;
  })

  .catch(function (error) {
    console.log("Error:", error);
  });
