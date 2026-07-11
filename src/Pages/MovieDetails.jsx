import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

import {
    fetchMovieDetails,
    fetchSimilarMovies,
    IMAGE_URL
} from "../Services/api";

import MovieCard from "../components/Moviecard/MovieCard";

const MovieDetails = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {

        loadMovie();

    }, [id]);

    const loadMovie = async () => {

        const movieData = await fetchMovieDetails(id);

        setMovie(movieData);

        const similar = await fetchSimilarMovies(id);

        setSimilarMovies(similar.slice(0, 6));

    };

    if (!movie) {

        return <h1 className="loading">Loading...</h1>;

    }

    return (

        <>

            <section className="details">

                <img
                    src={`${IMAGE_URL}${movie.poster_path}`}
                    alt={movie.title}
                />

                <div className="details_info">

                    <h1>{movie.title}</h1>

                    <h3>⭐ {movie.vote_average}</h3>

                    <p>

                        <strong>Release :</strong>

                        {movie.release_date}

                    </p>

                    <p>

                        <strong>Runtime :</strong>

                        {movie.runtime} mins

                    </p>

                    <p>

                        <strong>Language :</strong>

                        {movie.original_language.toUpperCase()}

                    </p>

                    <h2>Overview</h2>

                    <p>

                        {movie.overview}

                    </p>

                </div>

            </section>

            <section className="movie_list">

                <h2>Similar Movies</h2>

                <div className="movie_cards">

                    {

                        similarMovies.map(movie => (

                            <MovieCard

                                key={movie.id}

                                movie={movie}

                            />

                        ))

                    }

                </div>

            </section>

        </>

    );

};

export default MovieDetails;
