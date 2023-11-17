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
  
            lista_element.appendChild(link);
          });
        })
        .catch(err => console.error(err));
    } else if (tipo === 'serie') {
      fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${APIKey}`)
        .then(response => response.json())
        .then(response => {
          const lista_element = document.getElementById('ListaGenero');
          const series = response.results;
          series.forEach(serie => {
            const link = document.createElement('a');
            link.href = `detallesserie.html?id=${serie.id}`;
            const serie_div = document.createElement('div');
            serie_div.classList.add('peli-preview');
  
            const serie_titulo = document.createElement('h4');
            serie_titulo.textContent = serie.name;
            serie_titulo.classList.add('peli-preview-titulo');
  
            const serie_poster = document.createElement('img');
            serie_poster.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
            serie_poster.alt = serie.title;
            serie_poster.classList.add('peli-preview-poster');
  
            const serie_release = document.createElement('h6');
            serie_release.textContent = serie.first_air_date;
  
            serie_div.appendChild(serie_titulo);
            serie_div.appendChild(serie_poster);
            serie_div.appendChild(serie_release);
  
            link.appendChild(serie_div);
  
            lista_element.appendChild(link);
          });
        })
        .catch(err => console.error(err));
    }
  
  });
