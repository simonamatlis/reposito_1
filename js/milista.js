const apiKey = "615f39dc01eb552f3561acd616d1de7a";
    
const peliculasSection = document.querySelector(".peliculas-container");
const seriesSection = document.querySelector(".series-container");

const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; //obtiene el valor almacenado en el "favoritos" como cadena y la convierte en JSON. Si no hay datos en el almacenamiento o si hay un problema al convertir la cadena, se obtendrá null. || para proporcionar un valor predeterminado en caso de que el resultado de la operación anterior sea null. En este caso, se establece un array vacío como valor predeterminado.
const section = document.querySelector(".container");
let favs = ""; //creamos variable favs para almacenar las peliculas/ series favoritas del usuario

console.log(favoritos);

if (favoritos == null || favoritos.length === 0) {
    // No hay favoritos
    peliculasSection.innerHTML = "<p>No hay elementos en favoritos</p>";
    seriesSection.innerHTML = "<p>No hay elementos en favoritos</p>";
} else {
    const fetchPromises = favoritos.map((favorito) => { //crea nuevo array
        let url = `https://api.themoviedb.org/3/movie/${favorito}?api_key=${apiKey}&language=en-US`;

    // Retorna la promesa de fetch
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

Promise.all(fetchPromises) // espera a que todas las promesas se resuelvan
.then((favsArray) => {
    favsArray.forEach((fav) => { // Verificar si es película o serie
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

