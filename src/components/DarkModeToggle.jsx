import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
      {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
};

export default DarkModeToggle;