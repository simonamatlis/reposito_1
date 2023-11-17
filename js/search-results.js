document.addEventListener("DOMContentLoaded", function () {
    const query_params = new URLSearchParams(window.location.search);
    const busqueda = query_params.get('busqueda');
  
    const APIKey = '514fe6f92e87e8b96d2b08b7f2b1a078';
  
    fetch(`https://api.themoviedb.org/3/search/movie?query=${busqueda}&include_adult=false&language=es-AR&page=1&api_key=${APIKey}`)
      .then(response => response.json())
      .then(response => {
        const peliculas_element = document.getElementById('Resultados');
        const peliculas = response.results;
        
        if (peliculas.length === 0) {
        peliculas_element.innerHTML = '<h3>No se encontraro resultados</h3>';
        } else {
            peliculas_element.innerHTML = peliculas.map(pelicula => `
      <a href=""detallespeli.html?id=${pelicula.id}"> 
        <div class="peli-preview">
            <h4 class="peli-preview-titulo">${pelicula.title}</h4>
            <img src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}" class="peli-preview-poster">
            <h6>${pelicula.release_date}</h6>
        </div>
      </a>
    `).join('');
          }
    })
    .catch(err => console.error(err));
});