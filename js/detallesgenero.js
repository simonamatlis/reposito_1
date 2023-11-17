document.addEventListener("DOMContentLoaded", function () {
  const url_params = new URLSearchParams(window.location.search);
  const id = url_params.get('id');
  const nombre = url_params.get('nombre');
  const tipo = url_params.get('tipo');

  const APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

  const titulo_element = document.getElementById('TituloGenero');
  titulo_element.textContent = nombre;

  if (tipo === 'pelicula') {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${APIKey}`)
      .then(response => response.json())
      .then(response => {
        const lista_element = document.getElementById('ListaGenero');
        const peliculas = response.results;

        lista_element.innerHTML = peliculas.map(pelicula => `
  <a href="detallespeli.html?id=${pelicula.id}">
    <div class="peli-preview">
      <h4 class="peli-preview-titulo">${pelicula.title}</h4>
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}" class="peli-preview-poster">
      <h6>${pelicula.release_date}</h6>
    </div>
  </a>
`).join('');

      })
      .catch(function (error) {
        console.log(error);
        });
  } 
  
  else if (tipo === 'serie') {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${APIKey}`)
      .then(response => response.json())
      .then(response => {
        const lista_element = document.getElementById('ListaGenero');
        const series = response.results;

        lista_element.innerHTML = series.map(serie => `
  <a href="detallesserie.html?id=${serie.id}">
    <div class="peli-preview">
      <h4 class="peli-preview-titulo">${serie.name}</h4>
      <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.title}" class="peli-preview-poster">
      <h6>${serie.first_air_date}</h6>
    </div>
  </a>
`).join('');
      })
      .catch(function (error) {
        console.log(error);
        });
  }
});

const lista = document.getElementById('ListaGenero');
lista.style.display = 'flex';


