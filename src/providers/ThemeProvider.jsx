"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "os");
    }
    setTheme(localStorage.getItem("theme"));
  }, []);

  useEffect(() => {
    const updateThemeFromOS = (e) => {
      if (localStorage.getItem("theme") === "os") {
        e.matches
          ? document.documentElement.classList.add("dark")
          : document.documentElement.classList.remove("dark");
      }
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateThemeFromOS(mediaQuery);
    mediaQuery.addEventListener("change", updateThemeFromOS);

    if (
      theme === "dark" ||
      (localStorage.getItem("theme") === "os" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      mediaQuery.removeEventListener("change", updateThemeFromOS);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
