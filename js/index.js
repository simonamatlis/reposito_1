let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5"

// PELÍCULAS POPULARES
let url_películaspopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`;

//recupero del DOM
let ContainerPeliculasPopulares = document.querySelector("#ContainerPeliculasPopulares");
console.log(ContainerPeliculasPopulares); 

fetch(url_películaspopulares) 
  .then(function (response) {
  return response.json(); // Convertir la información a formato JSON
  }) 
  .then(function (data) {
  console.log(data.results);

  let miData = data.results; //todas mis peliculas
  let contenido = "";

  for (let i = 0; i < 5; i++) {
          contenido += `<li>
                        <a class="imagen" href="detallespeli.html?id=${miData[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="">
                        </a>
                        <h3>${miData[i].title}</h3>
                        <h4>${miData[i].release_date}</h4>
                        </li>`
  }

  ContainerPeliculasPopulares.innerHTML = contenido;
    
})

.catch(function (error) {
  console.log(error);
  });

//SERIES POPULARES
let url_seriespopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`;

let ConteinerSeriesPopulares = document.querySelector("#ConteinerSeriesPopulares")
console.log(ConteinerSeriesPopulares);

fetch(url_seriespopulares) 
  .then(function (response) {
  return response.json(); 
  }) 
  .then(function (data) {
  console.log(data.results);

  let miData = data.results; 
  let contenido = "";

  for (let i = 0; i < 5; i++) {
          console.log(miData[i]);
          contenido += `<li>
                        <a class="imagen" href="detallesserie.html?id=${miData[i].id}"">
                            <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="">
                        </a>
                        <h3>${miData[i].name}</h3>
                        <h4>${miData[i].first_air_date}</h4>
                        </li>`
  }

  ContainerSeriesPopulares.innerHTML = contenido;
    
})

.catch(function (error) {
  console.log(error);
  });

//PELÍCULAS MAS VALORADAS

let url_peliculasmasvaloradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`;

let ContainerPeliculasMasValoradas = document.querySelector("#ContainerPeliculasMasValoradas")
console.log(ContainerPeliculasMasValoradas)

fetch(url_peliculasmasvaloradas) 
  .then(function (response) {
  return response.json(); 
  }) 
  .then(function (data) {
  console.log(data.results);

  let miData = data.results; 
  let contenido = "";

  for (let i = 0; i < 5; i++) {
    console.log(miData[i]);
          contenido += `<li>
                        <a class="imagen" href="./detallespeli.html?id=${miData[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="">
                        </a>
                        <h3>${miData[i].title}</h3>
                        <h4>${miData[i].release_date}</h4>
                        </li>`
  }

  ContainerPeliculasMasValoradas.innerHTML = contenido;
})

.catch(function (error) {
  console.log(error);
  });

  