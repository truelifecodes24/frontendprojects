function getFavorites() {

    return JSON.parse(localStorage.getItem("favorites")) || [];

}

function saveFavorites(favorites) {

    localStorage.setItem("favorites", JSON.stringify(favorites));

}

function addToFavorites(movie) {

    const favorites = getFavorites();

    const exists = favorites.find(item => item.imdbID === movie.imdbID);

    if (!exists) {

        favorites.push(movie);

        saveFavorites(favorites);

        alert("Movie added to Favorites ❤️");

    }

}