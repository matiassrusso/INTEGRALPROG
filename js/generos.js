document.addEventListener("DOMContentLoaded", function () {
    const genresContainer = document.getElementById("genres-container");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYyOWU2NjM1ZWQwZWU1N2UzMTk5OWYwMGIxZTgyOSIsInN1YiI6IjY1NTU5MTVlNTM4NjZlMDBmZjA3MDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ceBn6bgY-X2abPA_Lpk9hC8S2-qKcHYtWJgzu7MoH8'
        }
    };

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(data => {
            // Agrega la clase 'genres-row' al contenedor de géneros
            genresContainer.classList.add("genres-row");

            // Itera sobre los géneros y crea elementos HTML para cada uno
            data.genres.forEach(genre => {
                const genreElement = document.createElement("div");
                genreElement.classList.add("genre");
                genreElement.textContent = genre.name;

                // Agrega un evento de clic para redirigir al detalle del género
                genreElement.addEventListener("click", function () {
                    window.location.href = `./detail-generos.html?genreId=${genre.id}`;
                });

                // Agrega el elemento de género al contenedor
                genresContainer.appendChild(genreElement);
            });
        })
        .catch(error => {
            console.error("Error al obtener géneros:", error);
        });
});
