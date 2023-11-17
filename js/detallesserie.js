document.addEventListener("DOMContentLoaded", function (){
    const urlParams = newURLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5"

    fetch('https://api.themoviedb.org/3/tv/${id}?language=es-AR&api_key=${APIKey}')
    .then(response => response.json())
    .then(serie =>  {
        const detalle_element = document.getElementById('DetallesSerie');

        const image = document.createElement('img');
        image.src = 'https://image.tmdb.org/t/p/w500${serie.poster_path}';
        image.alt = serie.name;
        image.classList.add('imagenmm');

        const otros_detalles = document.createElement ('ul');
        otros_detalles.classList.add("info-pelicula");
        const title_li = document.createElement('li');
        const title = document.createElement('h5');
        title.textContent = serie.name;
        title_li.append(title);
        const rating_li =document.createElement('li');
        const rating = document.createElement('h6');
        rating.textContent = 'Rating: ${serie.vote_average}';
        rating_li.append(rating);
        const fecha_li = document.createElement('li');
        const fecha = document.createElement('h6');
        fecha.textContent = 'Fecha de estreno: ${serie.first_air_date}';
        fecha_li.append(fecha);
        const sinopsis_li = document.createElement('li');
        const sinopsis = document.createElement('h6');
        sinopsis.textContent = serie.overview;
        sinopsis_li.append(sinopsis);
        const generos_li = document.createElement('li');
      const generos = document.createElement('h6');
      generos.classList.add("genero");
      const generosLinks = serie.genres.map(genero => {
        const enlace = document.createElement('a');
        enlace.href = 'detallesgenero.html?id=${genero.id}&nombre=${genero.name}&tipo=serie';
        enlace.textContent = `${genero.name} `;

        return enlace;
      });
      generos.append(...generosLinks);
      generos_li.append(generos);

      otros_detalles.append(title_li, rating_li, fecha_li, sinopsis_li, generos_li);
      detalle_element.append(image, otros_detalles);
    })

    .catch(err => console.error(err));

fetch('https://api.themoviedb.org/3/tv/${id}/recommendations?language=es-AR&page=1&api_key=${APIKey}')
    .then(response => response.json())
    .then(response => {
        const recomendaciones_element = document.getElementById('Recomendaciones');
        const recomendaciones = response.results;
        recomendaciones.forEach(serie => {
            const link = document.createElement('a');
            link.href = 'detalleserie.html?id=${serie.id}';
            const serie_div = document.createElement('div');
            serie_div.classList.add('peli-preview');

            const serie_titulo = document.createElement('h4');
            serie_titulo.textContent = serie.name;
            serie_titulo.classList.add('peli-preview-titulo');

            const serie_poster = document.createElement('img');
            serie_poster.src = 'https://image.tmdb.org/t/p/w500${serie.poster_path}';
            serie_poster.alt = serie.title;
            serie_poster.classList.add('peli-preview-poster');

            const serie_release = document.createElement('h6');
            serie_release.textContent = serie.first_air_date;

            serie_div.appendChild(serie_titulo);
            serie_div.appendChild(serie_poster);
            serie_div.appendChild(serie_release);

            link.appendChild(serie_div);

            recomendaciones_element.appendChild(link);
        });
    })
    .catch(err => console.error(err));
})
