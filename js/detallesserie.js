document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

  fetch(`https://api.themoviedb.org/3/tv/${id}?language=es-AR&api_key=${APIKey}`)
    .then(response => response.json())
    .then(serie => {
      const detalle_element = document.getElementById('DetallesSerie');

      const imageHTML = `<img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}" class="imagenmm">`;

      const otros_detallesHTML = `
  <ul class="info-pelicula">
    <li><h5>${serie.name}</h5></li>
    <li><h6>Rating: ${serie.vote_average}</h6></li>
    <li><h6>Fecha de estreno: ${serie.first_air_date}</h6></li>
    <li><h6>${serie.overview}</h6></li>
    <li class="genero"><h6>${serie.genres.map(genero => `<a href="detallesgenero.html?id=${genero.id}&nombre=${genero.name}&tipo=serie">${genero.name}</a>`).join(' ')}</h6></li>
  </ul>
`;

      detalle_element.innerHTML = imageHTML + otros_detallesHTML;
    })
    .catch(function (error) {
      console.log(error);
      });


});

function mostrarRecomendaciones() {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

  fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?language=es-AR&page=1&api_key=${APIKey}`)
    .then(response => response.json())
    .then(response => {
      const recomendaciones_element = document.getElementById('Recomendaciones');
      const recomendaciones = response.results;

      recomendaciones_element.innerHTML = recomendaciones.map(serie => `
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
