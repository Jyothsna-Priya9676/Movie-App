import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./DarkMode.css";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      className="theme_btn"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default DarkMode;