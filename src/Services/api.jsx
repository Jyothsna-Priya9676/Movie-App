const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const fetchData = async (url) => {

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error("Failed to fetch");

    }

    return await response.json();

};
export const fetchMovies = async (type) => {
    const data = await fetchData(
        `${BASE_URL}/movie/${type}?api_key=${API_KEY}`
    );
    return data.results;

};
export const fetchMovieDetails = async (id) => {
    return await fetchData(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`

    );

};



export const fetchSimilarMovies = async (id) => {

    const data = await fetchData(

        `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`

    );

    return data.results;

};



export const searchMovies = async (query) => {

    const data = await fetchData(

        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`

    );

    return data.results;

};