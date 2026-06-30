"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  setTheme: (theme: string) => void;
  theme: string | undefined;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "os");
    }
    setTheme(localStorage.getItem("theme") ?? "os");
  }, []);

  useEffect(() => {
    const updateThemeFromOS = (
      event_: MediaQueryList | MediaQueryListEvent,
    ) => {
      if (localStorage.getItem("theme") === "os") {
        document.documentElement.classList.toggle("dark", event_.matches);
      }
    };
    const mediaQuery = matchMedia("(prefers-color-scheme: dark)");
    updateThemeFromOS(mediaQuery);
    mediaQuery.addEventListener("change", updateThemeFromOS);

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" ||
        (localStorage.getItem("theme") === "os" &&
          matchMedia("(prefers-color-scheme: dark)").matches),
    );

    return () => {
      mediaQuery.removeEventListener("change", updateThemeFromOS);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
