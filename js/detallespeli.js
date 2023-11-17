document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    const APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
  
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-AR&api_key=${APIKey}`)
      .then(response => response.json())
      .then(pelicula => {
        const detalle_element = document.getElementById('DetallesPeli');
  
        const image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
        image.alt = pelicula.title;
        image.classList.add('imagenmm');
  
        const otros_detalles = document.createElement('ul');
        otros_detalles.classList.add("info-pelicula");
        const title_li = document.createElement('li');
        const title = document.createElement('h5');
        title.textContent = pelicula.title;
        title_li.append(title);
        const rating_li = document.createElement('li');
        const rating = document.createElement('h6');
        rating.textContent = `Rating: ${pelicula.vote_average}`;
        rating_li.append(rating);
        const fecha_li = document.createElement('li');
        const fecha = document.createElement('h6');
        fecha.textContent = `Fecha de estreno: ${pelicula.release_date}`;
        fecha_li.append(fecha);
        const duracion_li = document.createElement('li');
        const duracion = document.createElement('h6');
        duracion.textContent = `Duración: ${pelicula.runtime} minutos`;
        duracion_li.append(duracion);
        const sinopsis_li = document.createElement('li');
        const sinopsis = document.createElement('h6');
        sinopsis.textContent = pelicula.overview;
        sinopsis_li.append(sinopsis);
        const generos_li = document.createElement('li');
        const generos = document.createElement('h6');
        generos.classList.add("genero");
        const generosLinks = pelicula.genres.map(genero => {
          const enlace = document.createElement('a');
          enlace.href = `detallesgenero.html?id=${genero.id}&nombre=${genero.name}&tipo=pelicula`;
          enlace.textContent = `${genero.name} `;
  
          return enlace;
        });
        generos.append(...generosLinks);
        generos_li.append(generos);
  
        otros_detalles.append(title_li, rating_li, fecha_li, duracion_li, sinopsis_li, generos_li);
        detalle_element.append(image, otros_detalles);
  
      })
      .catch(err => console.error(err));
  
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=es-AR&page=1&api_key=${APIKey}`)
      .then(response => response.json())
      .then(response => {
        const recomendaciones_element = document.getElementById('Recomendaciones');
        const recomendaciones = response.results;
        recomendaciones.forEach(pelicula => {
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
  
          recomendaciones_element.appendChild(link);
        });
      })
      .catch(err => console.error(err));
  });
  