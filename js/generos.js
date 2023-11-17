const APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5"

fetch(`https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=${APIKey}`)
    .then(response => response.json())
    .then(response => {
        const generos_element = document.getElementById('GenerosPeliculas');
        const generos = response.genres;

        generos_element.innerHTML = generos.map(genero => `
        <li>
            <a href="detallesgenero.html?id=${genero.id}&tipo=pelicula&nombre=${genero.name}">
                <h3>${genero.name}</h3>
            </a>
        </li>
        `).join('');

    })
        .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/genre/tv/list?language=es&api_key=${APIKey}`)
        .then(response => response.json())
        .then(response => {
          const generos_element = document.getElementById('GenerosSeries');
          const generos = response.genres;       
        
          generos_element.innerHTML = generos.map(genero => `
          <li>
              <a href="detallesgenero.html?id=${genero.id}&tipo=serie&nombre=${genero.name}">
                  <h3>${genero.name}</h3>
              </a>
          </li>
          `).join('');
        })
        .catch(err => console.error(err));