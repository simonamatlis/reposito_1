let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5"
    
let peliculasSection = document.querySelector(".peliculas-container");
let seriesSection = document.querySelector(".series-container");

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; 
const section = document.querySelector(".container");
let favs = ""; //creamos variable favs para almacenar las peliculas/ series favoritas

console.log(favoritos);

if (favoritos == null || favoritos.length === 0) { // para cuando no hay favoritos
    peliculasSection.innerHTML = "<p>No hay elementos en favoritos</p>";
    seriesSection.innerHTML = "<p>No hay elementos en favoritos</p>";
} else {
    const fetchPromises = favoritos.map((favorito) => { // nuevo array
        let url = `https://api.themoviedb.org/3/movie/${favorito}?api_key=${apiKey}&language=en-US`;

    return fetch(url)

    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
        console.log(data);
        const article = `
            <article class="bloque-portada"> 
                <a class="portadahome" href="./detail-movie.html?id=${data.id}">
                    <img class="portada" src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
                    <p class="texto-portada">
                        <a class="titulospeliculas" href="./detail-movie.html?id=${data.id}">${data.title}</a>
                    </p>
                    <p class="fecha-portada">${data.release_date}</p>
                </a>
            </article>`;
        return article;
    })

      .catch(function (error) {
        console.log("Error:", error);
    });
});

Promise.all(fetchPromises) // cuando todo se cumple
.then((favsArray) => {
    favsArray.forEach((fav) => { //  película o serie
        if (fav.includes("detail-movie")) {
            peliculasSection.innerHTML += fav;
        } else {
            seriesSection.innerHTML += fav;
        }
    });
})
    
.catch((error) => {
    console.error("Error:", error);
});
}

