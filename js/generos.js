// Coloca tu API key de TMDB aquí
const apiKey = '12f29e6635ed0ee57e31999f00b1e829';

// URL para obtener géneros de películas
const movieGenresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

// URL para obtener géneros de series
const tvGenresURL = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`;

// Función para obtener y mostrar géneros
function mostrarGeneros() {
    const container = document.getElementById('genres-container');

    // Obtener géneros de películas
    fetch(movieGenresURL)
        .then(response => response.json())
        .then(data => {
            const movieGenres = data.genres;
            mostrarGenerosEnPagina(container, movieGenres, 'Películas');
        })
        .catch(error => console.error('Error al obtener géneros de películas:', error));

    // Obtener géneros de series
    fetch(tvGenresURL)
        .then(response => response.json())
        .then(data => {
            const tvGenres = data.genres;
            mostrarGenerosEnPagina(container, tvGenres, 'Series');
        })
        .catch(error => console.error('Error al obtener géneros de series:', error));
}

// Función para mostrar géneros en la página
function mostrarGenerosEnPagina(container, genres, type) {
    const genreTitle = document.createElement('h3');
    genreTitle.textContent = `${type} - Géneros`;
    container.appendChild(genreTitle);

    genres.forEach(genre => {
        if (genre && genre.name) {
            const genreLink = document.createElement('a');
            genreLink.href = `./detail-genero.html?name=${encodeURIComponent(genre.name)}&type=${type}`;
            const genreName = document.createElement('h4');
            genreName.textContent = genre.name;
            genreLink.appendChild(genreName);
            container.appendChild(genreLink);
        } else {
            console.warn('Se encontró un género nulo o sin nombre. Omitiendo:', genre);
        }
    });
}

// Llamar a la función para mostrar géneros
mostrarGeneros();