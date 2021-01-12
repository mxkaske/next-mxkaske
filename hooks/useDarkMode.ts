import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);
  return { darkMode, setDarkMode };
};

export default useDarkMode;
