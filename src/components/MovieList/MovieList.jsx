import { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "../Moviecard/MovieCard";
import FilterGroup from "./FilterGroup";

import { fetchMovies } from "../../Services/api";

const MovieList = ({ type, title }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [minRating, setMinRating] = useState(0);

  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies(type);

        setMovies(data);
        setFilteredMovies(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, [type]);

  useEffect(() => {
    let updated = [...movies];

    if (minRating > 0) {
      updated = updated.filter(
        (movie) => movie.vote_average >= minRating
      );
    }

    if (sort.by !== "default") {
      updated = _.orderBy(
        updated,
        [sort.by],
        [sort.order]
      );
    }

    setFilteredMovies(updated);
  }, [movies, minRating, sort]);

  const handleFilter = (rating) => {
    if (rating === minRating) {
      setMinRating(0);
    } else {
      setMinRating(rating);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;

    setSort((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="movie_list">

      <div className="movie_header">

        <h2>{title}</h2>

        <div className="movie_controls">

          <FilterGroup
            ratings={[8, 7, 6]}
            minRating={minRating}
            onRatingClick={handleFilter}
          />

          <select
            name="by"
            value={sort.by}
            onChange={handleSort}
          >
            <option value="default">Sort By</option>
            <option value="vote_average">Rating</option>
            <option value="release_date">Release Date</option>
          </select>

          <select
            name="order"
            value={sort.order}
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

        </div>

      </div>

      <div className="movie_cards">

        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
};

export default MovieList;
