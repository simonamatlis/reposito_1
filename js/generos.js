const APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5"

fetch(`https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=${APIKey}`)
    .then(response => response.json())
    .then(response => {
        const generos_element = document.getElementById('GenerosPeliculas');
        const generos = response.genres;

        generos.forEach(genero => {
            const genero_li = document.createElement('li');

            const genero_link = document.createElement('a');
            genero_link.href = `detallesgenero.html?id=${genero.id}&tipo=pelicula&nombre=${genero.name}`;

            const genero_titulo = document.createElement('h3');
            genero_titulo.textContent = genero.name;

            genero_link.appendChild(genero_titulo);

            genero_li.appendChild(genero_link);

            generos_element.appendChild(genero_li);
        });
    })
    .catch(err => console.error(err));

fetch(`https://api.themoviedb.org/3/genre/tv/list?language=es&api_key=${APIKey}`)
    .then(response => response.json())
    .then(response=> {
        const generos_element = document.getElementById('GenerosSeries');
        const generos = response.genres;

        generos.forEach(genero => {
            const genero_li = document.createElement('li');

            const genero_link = document.createElement('a');
            genero_link.href = `detallesgenero.html?id=${genero.id}&tipo=serie&nombre=${genero.name}`;

            const genero_titulo = document.createElement('h3');
            genero_titulo.textContent = genero.name;

            genero_link.appendChild(genero_titulo);

            genero_li.appendChild(genero_link);

            generos_element.appendChild(genero_li);
        });
    })
    .catch(err => console.error(err));