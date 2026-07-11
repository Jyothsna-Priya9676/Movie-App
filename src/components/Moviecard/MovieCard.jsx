import { Link } from "react-router-dom";
import "./MovieCard.css";

import { IMAGE_URL } from "../../Services/api";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie_card"
    >
      <img
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="movie_poster"
      />

      <div className="movie_overlay">

        <h3>{movie.title}</h3>

        <div className="movie_meta">

          <span>⭐ {movie.vote_average.toFixed(1)}</span>

          <span>{movie.release_date}</span>

        </div>

        <p>
          {movie.overview
            ? movie.overview.slice(0, 150) + "..."
            : "No Description Available"}
        </p>

      </div>

    </Link>
  );
};

export default MovieCard;
