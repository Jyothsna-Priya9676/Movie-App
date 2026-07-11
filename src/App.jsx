import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending";
import About from "./Pages/About";

import Navbar from "./components/Navbar/Navbar";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import MovieDetails from "./Pages/MovieDetails";
import NotFound from "./Pages/NotFound";

import "./App.css";

function App() {

  const [dark, setDark] = useState(true);

  return (

    <div className={dark ? "dark" : "light"}>

      <Navbar
        dark={dark}
        setDark={setDark}
      />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/favorites"
          element={<Favorites />}
        />
        <Route
  path="/trending"
  element={<Trending />}
/>

<Route
  path="/about"
  element={<About />}
/>
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </div>

  );
}

export default App;
