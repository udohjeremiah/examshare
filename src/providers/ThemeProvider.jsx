"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "os");

  useEffect(() => {
    if (theme === "os") {
      localStorage.removeItem("theme");
    } else if (theme === "light" || theme === "dark") {
      localStorage.setItem("theme", theme);
    } else {
      throw new Error("Invalid theme");
    }

    const updateThemeFromOS = (e) => {
      if (!localStorage.getItem("theme")) {
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
      (!("theme" in localStorage) &&
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
