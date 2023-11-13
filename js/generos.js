const apiKey = "615f39dc01eb552f3561acd616d1de7a";

window.addEventListener('load', function () {
    const apiKey = "45d43a6901861343cdb188d4f3bafd7c";
    const baseUrl = "https://api.themoviedb.org/3/genre/";
    const language = "en-US";

    // Función para obtener y mostrar los géneros
  function fetchAndDisplayGenres(category) {
    const url = `${baseUrl}${category}/list?api_key=${apiKey}&language=${language}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const genres = data.genres;
        const container = document.querySelector(`.${category}`);
        genres.forEach(genre => {
            container.innerHTML += `<li><h3><a href="./generos.html?id=${genre.id}">${genre.name}</a></h3></li>`;
        });
    })
    .catch(error => console.log(`Error: ${error}`));
}

  fetchAndDisplayGenres("peliculas"); // Obtener y mostrar géneros para películas
  fetchAndDisplayGenres("series");   // Obtener y mostrar géneros para series
});
