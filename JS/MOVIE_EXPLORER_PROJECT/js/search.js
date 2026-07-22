
function displayMovies(movieArray, rowId) {

    const movieRow = document.getElementById(rowId);

    movieRow.innerHTML = "";

    for (const movie of movieArray) {

        movieRow.innerHTML += `

        <article class="movie-card" data-id="${movie.imdbID}">

            <div class="movie-poster">

                <img
    src="${movie.Poster && movie.Poster !== 'N/A'
        ? movie.Poster
        : 'assets/images/poster.jpg'}"
    alt="${movie.Title}"
    onerror="this.src='assets/images/poster.jpg'">

                <button class="favorite-btn">❤</button>

                <div class="movie-rating">
                    ⭐ IMDb
                </div>

            </div>

            <div class="movie-info">

                <h3 class="movie-title">
                    ${movie.Title}
                </h3>

                <p class="movie-genre">
                    Movie
                </p>

                <div class="movie-meta">

                    <span>📅 ${movie.Year}</span>

                    <span>🎬 Movie</span>

                </div>

                <div class="movie-actions">

                    <button class="play-btn">
                        ▶ Play
                    </button>

                    <button
                        class="details-btn"
                        data-id="${movie.imdbID}">
                        ℹ Details
                    </button>

                </div>

            </div>

        </article>

        `;

    }

}


const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", async function () {

    const keyword = this.value.trim();

    if (keyword.length < 2) {

        document.getElementById("searchResults").innerHTML = "";

        return;

    }

    const movies = await fetchMovies(keyword);

    displayMovies(movies, "searchResults");

});