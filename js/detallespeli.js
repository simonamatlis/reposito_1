document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    const APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
  
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-AR&api_key=${APIKey}`)
      .then(response => response.json())
      .then(pelicula => {
        const detalle_element = document.getElementById('DetallesPeli');

        const imageHTML = `<img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}" class="imagenmm">`;

        const otros_detallesHTML = `
        <ul class="info-pelicula">
          <li><h5>${pelicula.title}</h5></li>
          <li><h6>Rating: ${pelicula.vote_average}</h6></li>
          <li><h6>Fecha de estreno: ${pelicula.release_date}</h6></li>
          <li><h6>Duración: ${pelicula.runtime} minutos</h6></li>
          <li><h6>${pelicula.overview}</h6></li>
          <li class="genero"><h6>${pelicula.genres.map(genero => `<a href="detallesgenero.html?id=${genero.id}&nombre=${genero.name}&tipo=pelicula">${genero.name}</a>`).join(' ')}</h6></li>
        </ul> 
    `;

          detalle_element.innerHTML = imageHTML + otros_detallesHTML;

      })
      .catch(err => console.error(err));

  fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=es-AR&page=1&api_key=${APIKey}`)
    .then(response => response.json())
    .then(response => {
      const recomendaciones_element = document.getElementById('Recomendaciones');
      const recomendaciones = response.results;

      recomendaciones_element.innerHTML = recomendaciones.map(pelicula => `
  <a href="detallespeli.html?id=${pelicula.id}">
    <div class="peli-preview">
      <h4 class="peli-preview-titulo">${pelicula.title}</h4>
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}" class="peli-preview-poster">
      <h6>${pelicula.release_date}</h6>
    </div>
  </a>
`).join('');
    })
    .catch(err => console.error(err));
});

const recomendaciones = document.getElementById('Recomendaciones');
recomendaciones.style.display = 'none';

function toggleRecomendaciones () {
    const recomendaciones = document.getElementById('Recomendaciones')
    recomendaciones.style.display = (recomendaciones.style.display === 'none') ? 'flex' : 'none';
}


  
       
  