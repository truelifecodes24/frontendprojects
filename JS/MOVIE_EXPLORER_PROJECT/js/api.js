const API_KEY = "658f1bbd";

const BASE_URL = "https://www.omdbapi.com/";

async function fetchMovies(searchText = "Marvel") {

    try {

        const response = await fetch(
            `${BASE_URL}?apikey=${API_KEY}&s=${searchText}`
        );

        const data = await response.json();

        if (data.Response === "True") {

            return data.Search;

        } else {

            return [];

        }

    } catch (error) {

        console.error(error);

        return [];

    }

}


async function fetchMovieDetails(imdbID) {

    try {

        const response = await fetch(
            `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
        );

        const data = await response.json();

        return data;

    } catch (error) {

        console.error(error);

    }

}