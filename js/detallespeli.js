document.addEventListener('DOMContentLoaded', function () {
    let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
    
    let qs = location.search;
    let qsObj = new URLSearchParams(qs);
    let id_movie = qsObj.get("id_movie");
  
    let imagen = document.querySelector(".imagenmm");
    let titulo = document.querySelector(".titulo");
    let fecha = document.querySelector(".fecha");
    let genero = document.querySelector(".genero");
    let duracion = document.querySelector(".duracion");
    let calificacion = document.querySelector(".calificacion");
    let sinopsis = document.querySelector(".sinopsis");
    let button = document.querySelector(".agregar_favoritos"); 
    let verRecomendaciones = document.querySelector(".recomendaciones-btn");
    let recomendacionesList = document.querySelector(".recomendaciones-list");

  
    let url_detallespeli = `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${acaVaLaAPIKey}`; 
  
    console.log(url_detallespeli);
  
    fetch(url_detallespeli)
    .then(response => response.json())

    .then(data => {
        console.log(data);

        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        titulo.innerText = data.title;
        duracion.innerText = `Duracion: ${data.runtime} minutos`;
        calificacion.innerText = `Popularidad: ${data.popularity}`;
        fecha.innerText = `Fecha de estreno: ${data.release_date}`;
        sinopsis.innerText = `Sinopsis: ${data.overview}`;
        let generos = data.genres;
        let generosSerie = "";
        let generoContainer = document.querySelector(".genero");
  
        for (let i = 0; i < generos.length; i++) {
            generosSerie += `<a class="genero" href="./detalle-genero.html?id=${generos[i].id}"> ${generos[i].name}</a>`;
        };
  
        generoContainer.innerHTML += generosSerie;
  
    })
    .catch(error => console.log(error));

    // RECOMENDACIONES
    let recomendacionesUrl = `https://api.themoviedb.org/3/movie/${id_movie}/recommendations?api_key=${acaVaLaAPIKey}`;

    verRecomendaciones.addEventListener("click", function () {
        fetch(recomendacionesUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length === 0) {
                alert("No hay recomendaciones");
            }

            let li = "";
            console.log(data.results);

            for (let i = 0; i < 5; i++) {
                let id = data.results[i].id;
                let title = data.results[i].title;
                let foto = data.results[i].poster_path;

                li += `<li class='li recomendados-item'>
                            <p class='titulos'>${title}</p>
                            <a href='detalle-Pelicula.html?idPelicula=${id}'>
                                <img class="imgPelis" src="https://image.tmdb.org/t/p/w500/${foto}" >
                            </a>
                        </li>`;
            }

            recomendacionesList.innerHTML = li;
            recomendacionesList.classList.add("display-none");
        })
        .catch(error => console.log("Error: " + error));
    });
});
        
    // // Que se abran las recomendaciones
    //   var recom = document.querySelector('#ver-recomendaciones')
    //   recom.addEventListener ("click", function() {
        
    //         var ul = document.querySelector("ul.recomendaciones") // se abren las recomendaciones
    //         ul.classList.toggle("display-none")
    // })
  