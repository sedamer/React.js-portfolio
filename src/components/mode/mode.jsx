import "./mode.scss";

import { useEffect, useState } from "react";

import React from "react";
import moon from "../../assets/full-moon.png";
import sun from "../../assets/sun.png";

export function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="mode">
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <>
            <img
              src={moon}
              alt="moon"
              style={{ width: "35px", paddingBottom: "px" }}
            />
          </>
        ) : (
          <>
            <img src={sun} alt="sun" style={{ width: "35px" }} />
          </>
        )}
      </button>
    </div>
  );
}
