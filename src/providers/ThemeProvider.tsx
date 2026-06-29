"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string | null;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "os");
    }
    setTheme(localStorage.getItem("theme") ?? "os");
  }, []);

  useEffect(() => {
    const updateThemeFromOS = (e: MediaQueryListEvent | MediaQueryList) => {
      if (localStorage.getItem("theme") === "os") {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
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
