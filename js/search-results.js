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
          const mensaje = document.createElement('h3');
          mensaje.textContent = 'No se encontraron resultados';
          peliculas_element.appendChild(mensaje);
        }
  
        peliculas.forEach(pelicula => {
          const link = document.createElement('a');
          link.href = `detallespeli.html?id=${pelicula.id}`;
          const pelicula_div = document.createElement('div');
          pelicula_div.classList.add('peli-preview');
  
          const pelicula_titulo = document.createElement('h4');
          pelicula_titulo.textContent = pelicula.title;
          pelicula_titulo.classList.add('peli-preview-titulo');
  
          const pelicula_poster = document.createElement('img');
          pelicula_poster.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
          pelicula_poster.alt = pelicula.title;
          pelicula_poster.classList.add('peli-preview-poster');
  
          const pelicula_release = document.createElement('h6');
          pelicula_release.textContent = pelicula.release_date;
  
          pelicula_div.appendChild(pelicula_titulo);
          pelicula_div.appendChild(pelicula_poster);
          pelicula_div.appendChild(pelicula_release);
  
          link.appendChild(pelicula_div);
  
          peliculas_element.appendChild(link);
        });
      })
      .catch(err => console.error(err));
  });