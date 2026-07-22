const params = new URLSearchParams(window.location.search);

const imdbID = params.get("id");

async function loadMovieDetails() {

    const movie = await fetchMovieDetails(imdbID);

    document.getElementById("movieDetails").innerHTML = `

        <section class="details-page">

            <img
                src="${movie.Poster}"
                alt="${movie.Title}"
                class="details-poster">

            <div class="details-content">

                <h1>${movie.Title}</h1>

                <h2>⭐ ${movie.imdbRating}</h2>

                <p><strong>Year:</strong> ${movie.Year}</p>

                <p><strong>Runtime:</strong> ${movie.Runtime}</p>

                <p><strong>Genre:</strong> ${movie.Genre}</p>

                <p><strong>Director:</strong> ${movie.Director}</p>

                <p><strong>Actors:</strong> ${movie.Actors}</p>

                <p><strong>Plot:</strong></p>

                <p>${movie.Plot}</p>

            </div>

        </section>

    `;

}

loadMovieDetails();