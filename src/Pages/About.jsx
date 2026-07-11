import "./About.css";

const About = () => {
  return (
    <div className="about">

      <h1>🎬 CineVerse</h1>

      <p>
        CineVerse is a modern React Movie App built using
        React, React Router, TMDB API and Vite.
      </p>

      <div className="about_box">

        <h2>Features</h2>

        <ul>
          <li>🔥 Popular Movies</li>
          <li>⭐ Top Rated Movies</li>
          <li>🎥 Upcoming Movies</li>
          <li>❤️ Favorites</li>
          <li>🌙 Dark / Light Theme</li>
          <li>🔍 Search Movies</li>
          <li>📱 Responsive Design</li>

        </ul>

      </div>

    </div>
  );
};

export default About;