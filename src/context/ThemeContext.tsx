"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  petalsEnabled: boolean;
  togglePetals: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [petalsEnabled, setPetalsEnabled] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    const savedPetals = localStorage.getItem("portfolio-petals");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }

    if (savedPetals !== null) {
      setPetalsEnabled(savedPetals === "true");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const togglePetals = () => {
    const nextPetals = !petalsEnabled;
    setPetalsEnabled(nextPetals);
    localStorage.setItem("portfolio-petals", String(nextPetals));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        petalsEnabled,
        togglePetals,
      }}
    >
      <div className={mounted ? "" : "opacity-0 transition-opacity duration-300"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
