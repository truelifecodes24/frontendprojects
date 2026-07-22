let homeMovies = [];

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

                <button
    class="favorite-btn"
    data-id="${movie.imdbID}">
    ❤
</button>

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
// displayMovies(trendingMovies, "trendingRow");

// displayMovies(popularMovies, "popularRow");

// displayMovies(topRatedMovies, "topRatedRow");

// displayMovies(upcomingMovies, "upcomingRow");

async function loadHomePage() {

    // 🔥 Trending
    const trending = [
        ...(await fetchMovies("Avengers")).slice(0, 3),
        ...(await fetchMovies("Batman")).slice(0, 3),
        ...(await fetchMovies("Marvel")).slice(0, 3),
        ...(await fetchMovies("Inception")).slice(0, 3)
    ];

    // 🎥 Popular
    const popular = [
        ...(await fetchMovies("Harry Potter")).slice(0, 3),
        ...(await fetchMovies("Spider-Man")).slice(0, 3),
        ...(await fetchMovies("Fast")).slice(0, 3),
        ...(await fetchMovies("Jurassic")).slice(0, 3)
    ];

    // ⭐ Top Rated
    const topRated = [
        ...(await fetchMovies("Interstellar")).slice(0, 3),
        ...(await fetchMovies("Oppenheimer")).slice(0, 3),
        ...(await fetchMovies("Gladiator")).slice(0, 3),
        ...(await fetchMovies("Joker")).slice(0, 3)
    ];

    // 🎬 Upcoming
    const upcoming = [
            ...(await fetchMovies("Avatar")).slice(0, 3),
        ...(await fetchMovies("Dune")).slice(0, 3),
        ...(await fetchMovies("Mission Impossible")).slice(0, 3),
        ...(await fetchMovies("John Wick")).slice(0, 3)
    ];


    homeMovies = [

    ...trending,

    ...popular,

    ...topRated,

    ...upcoming

];

    displayMovies(trending, "trendingRow");
    displayMovies(popular, "popularRow");
    displayMovies(topRated, "topRatedRow");
    displayMovies(upcoming, "upcomingRow");

}

loadHomePage();

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("details-btn")) {

        const movieId = event.target.dataset.id;

        window.location.href = `details.html?id=${movieId}`;

    }

});

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("favorite-btn")) {

        const card = event.target.closest(".movie-card");

        const movieId = card.dataset.id;

        const movie = homeMovies.find(item => item.imdbID === movieId);

if (movie) {

    addToFavorites(movie);

}

    }

});