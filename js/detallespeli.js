document.addEventListener("DOMContentLoaded", function () {
    // Obtener el ID de la película o serie desde la URL (puedes ajustar según tu URL)
    const urlParams = new URLSearchParams(window.location.search);
    const id_pelicula = urlParams.get('id');  

    // Resto del código...
    
    const acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
    const url_detallespeli = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`;


    // Obtener detalles de la película o serie
    obtenerDetalles(id_pelicula); 

    // Manejar clic en "Ver Recomendaciones"
    const btnVerRecomendaciones = document.querySelector('.ver-recomendaciones');
    btnVerRecomendaciones.addEventListener('click', function () {
    mostrarRecomendaciones(id_pelicula); 
    });
});

function obtenerDetalles(id_pelicula) {
    let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
    
    let url_detallespeli = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`;

    fetch(url_detallespeli)
        .then(response => response.json())
        .then(data => {
            actualizarDetalles(data);
        })
        .catch(error => console.error('Error al obtener detalles:', error));
}

function mostrarRecomendaciones(id_pelicula) {
    let url_detallespeli = `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${acaVaLaAPIKey}`;


    fetch(url_detallespeli)
        .then(response => response.json())
        .then(data => {
            // Actualizar la interfaz con las recomendaciones obtenidas
            mostrarRecomendacionesEnInterfaz(data);
        })
        .catch(error => console.error('Error al obtener recomendaciones:', error));
}

function actualizarDetalles(detalles) {
    // Actualizar los elementos HTML con los detalles de la película o serie
    const tituloElement = document.querySelector('.titulo');
    const calificacionElement = document.querySelector('.calificacion');
    const fechaElement = document.querySelector('.fecha');
    const generoElement = document.querySelector('.genero');
    const duracionElement = document.querySelector('.duracion');
    const sinopsisElement = document.querySelector('.sinopsis');
    const imagenElement = document.querySelector('.imagenmm');

    tituloElement.textContent = detalles.titulo;
    calificacionElement.textContent = `Calificación: ${detalles.calificacion}`;
    fechaElement.textContent = `Fecha de Estreno: ${detalles.fecha}`;
    generoElement.textContent = `Género: ${detalles.genero}`;
    duracionElement.textContent = `Duración: ${detalles.duracion} minutos`; // Solo si es una película
    sinopsisElement.textContent = `Sinopsis: ${detalles.sinopsis}`;
    imagenElement.src = detalles.urlImagen;
}

function mostrarRecomendacionesEnInterfaz(recomendaciones) {
    // Mostrar las recomendaciones en la interfaz
    const recomendacionesList = document.querySelector('.recomendaciones-list');
    recomendacionesList.innerHTML = ''; // Limpiar la lista antes de agregar las nuevas recomendaciones

    recomendaciones.forEach(recomendacion => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = recomendacion.urlImagen;
        img.alt = recomendacion.titulo;
        li.appendChild(img);

        // Manejar clic en una recomendación para redirigir al detalle
        li.addEventListener('click', function () {
            redirigirADetalle(recomendacion.id);
        });

        recomendacionesList.appendChild(li);
    });

    // Mostrar la lista de recomendaciones
    const recomendacionesSection = document.querySelector('#recomendacionesC');
    recomendacionesSection.classList.remove('display-none');
}

function redirigirADetalle(id) {
    // Redirigir a la página de detalle con el ID proporcionado
    window.location.href = `detalle.html?id=${id}`;
}


