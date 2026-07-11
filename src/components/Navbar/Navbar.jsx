
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";
// const Navbar = ({ dark, setDark }) => {
//     return (

//         <nav className="navbar">

//             <div className="logo">
//                 <span>🎬</span>
//                 <h1>CineVerse</h1>
//             </div>
//             <div className="nav_links">
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/favorites">Favorites</NavLink>
//                 <NavLink to="/trending">Trending</NavLink>
//                 <NavLink to="/about">About</NavLink>
//                 <button
//                     className="theme_btn"
//                     onClick={() => setDark(!dark)}
//                 >
//                     {dark ? "☀️" : "🌙"}
//                 </button>
//             </div>
//         </nav>

//     );

// };

// export default Navbar;



import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ dark, setDark }) => {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>🎬</span>
        <h1>CineVerse</h1>
      </div>

      <div className="nav_right">

        <div className="nav_links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Favorites
          </NavLink>

        </div>

        <button
          className="theme_btn"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>
  );
};

export default Navbar;