function displayMovies(movieArray, rowId) {

    const movieRow = document.getElementById(rowId);

    movieRow.innerHTML = "";

    if (movieArray.length === 0) {

        movieRow.innerHTML = `
            <h2>No favorite movies yet ❤️</h2>
        `;

        return;
    }

    for (const movie of movieArray) {

        movieRow.innerHTML += `

        <article class="movie-card">

            <div class="movie-poster">

                <img
                    src="${movie.Poster && movie.Poster !== "N/A"
                    ? movie.Poster
                    : "assets/images/poster.jpg"}"
                    alt="${movie.Title}">

            </div>

            <div class="movie-info">

                <h3>${movie.Title}</h3>

                <p>Movie</p>

                <div class="movie-meta">

                    <span>📅 ${movie.Year}</span>

                </div>

            </div>

        </article>

        `;

    }

}

const favorites = getFavorites();

displayMovies(favorites, "favoritesRow");