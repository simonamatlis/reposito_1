const botonEnviar = document.querySelector("#enviarform");
const input = document.querySelector("#busqueda");
const resultadosBusqueda = document.querySelector("#ResultadosBusqueda");
const bannerResultado = document.querySelector("#banner-resultado");

const miBoton = document.querySelector("#boton");

let irAUrl = (event) => {
    let parametroPrueba = "rapido y furioso";
    let nuevaURL = `../detallespeli.html?busqueda=${parametroPrueba}`;
    window.location.href = nuevaURL;
}

miBoton.addEventListener("click", irAUrl);

const acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

let enviarBusqueda = () => {
    let busqueda = input.value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busqueda}`)
        .then(response => response.json())
        .then(value => {
            let peliculas = value.results;

            if (peliculas.length === 0) {
                resultadosBusqueda.innerHTML = `<li>
                <img src="https://placehold.jp/300x300.png" alt="Erro-resultados">
                <h3>ERROR</h3>
                <h4>No se encontraron resultados</h4>
              </li>`

                bannerResultado.innerText = `Resultados de la búsqueda: ${busqueda}`;
            }
            else {
                let contenido = "";

                for (let i = 0; i < peliculas.length; i++) {
                    contenido += `<li class="card-pelicula">
                                <img src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt="">
                                <h3>${peliculas[i].title}</h3>
                                <h4>${peliculas[i].release_date}</h4>
                              </li>`
                }

                resultadosBusqueda.innerHTML = contenido;
                bannerResultado.innerText = `Resultados de la búsqueda: ${busqueda}`;
            }
        });
}

botonEnviar.addEventListener("click", enviarBusqueda);