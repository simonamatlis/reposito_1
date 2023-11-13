const apiKey = "615f39dc01eb552f3561acd616d1de7a";

// Extraigo la query string desde la URL
let queryString_movies = location.search;

// Transformo la query en un objeto literal
let queryParams_movies = new URLSearchParams(queryString_movies);

// Obtengo el dato del id del objeto literal
let id = queryParams_movies.get('id');
console.log(id);