import MovieList from "../components/MovieList/MovieList";

const Home = () => {
  return (
    <>

      <MovieList
        type="popular"
        title="🔥 Popular Movies"
      />

      <MovieList
        type="top_rated"
        title="⭐ Top Rated"
      />

      <MovieList
        type="upcoming"
        title="🎬 Upcoming"
      />

    </>
  );
};

export default Home;
