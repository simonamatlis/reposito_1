document.addEventListener('DOMContentLoaded', function () {  // Obtener el formulario y agregar un evento de escucha para el envío
    
    const searchForm = document.getElementById('buscador');
    
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
      let buscar = document.getElementById("busqueda").value;   // Obtiene el valor ingresado en el campo de búsqueda del formulario
  
      //Construye la URL para realizar la búsqueda en la API de The Movie Database (TMDb) utilizando el valor de búsqueda y la clave de API.
      const apiKey = "615f39dc01eb552f3561acd616d1de7a";
      const url_buscar = `https://api.themoviedb.org/3/search/movie?query=${buscar}&api_key=${apiKey}&include_adult=false&language=en-US&page=1`;
  
      window.location.href = `/search-results.html?resultadosbusqueda=${encodeURIComponent(buscar)}`; // Redirigir a la página de resultados de búsqueda
    });
  
    // Obtiene la cadena de consulta (queryString) de la URL para obtener detalles de la película basada en el parámetro de busqueda
    let queryString = location.search;
    let queryParams = new URLSearchParams(queryString);
    let pelicula = queryParams.get("busqueda");
    let titulos = document.querySelector(".titulos");
  
    const apiKey = "615f39dc01eb552f3561acd616d1de7a";
    const url = `https://api.themoviedb.org/3/search/movie?query=${pelicula}&api_key=$615f39dc01eb552f3561acd616d1de7a&include_adult=false&language=en-US&page=1`;
  
    fetch(url)
      .then(function (response) {
        return response.json(); // Convertir la información a formato JSON
      })
      .then(function (data) {
        console.log(data); // Manejar los datos según tus necesidades
        let informacion = data.results;
        let buscados = ""; // Agregar esta variable
        
        if (informacion.length == 0) {
            empty.innerText = `No se encontraron resultados para ${pelicula}`;
        } else {
            informacion.forEach(el => {
                console.log('pase');
                if (el.poster_path == null) {
                    buscados += `<article class="bloquedetail">
                                <a href="./detail-movie.html?movie_id=${el.id}"> 
                                <img class="portadadetail" src="https://image.tmdb.org/t/p/w500/${el.poster_path}" alt="Portada">
                                </a>
                                <div class="resultados">
                                <a href="detailmovie.html">
                                <h2 class="titulo-movie-search">${(el.media_type == 'movie') ? el.title : el.name}</h2>
                                </a>
                                <h3 class="estreno-search"> Fecha de estreno: ${(el.media_type == 'movie') ? el.release_date : el.first_air_date}</h3>
                                <p class="sinopsis-search">${el.overview}</p>
                                </div>
                                </article>`;
                } else {
                    buscados += `<article class="bloquedetail">
                                    <a href="./detail-movie.html?movie_id=${el.id}"> 
                                    <img class="portadadetail" src="https://image.tmdb.org/t/p/w500/${el.poster_path}" alt="Portada">
                                    </a>
                                    <div class="resultados">
                                    <a href="detailmovie.html">
                                    <h2 class="titulo-movie-search">${(el.media_type == 'movie') ? el.title : el.name}</h2>
                                    </a>
                                    <h3 class="estreno-search"> Fecha de estreno: ${(el.media_type == 'movie') ? el.release_date : el.first_air_date}</h3>
                                    <p class="sinopsis-search">${el.overview}</p>
                                    </div>
                                    </article>`;
                }
            });
        }
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
});
      
  