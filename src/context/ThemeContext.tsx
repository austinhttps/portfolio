"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: "dark";
  petalsEnabled: boolean;
  togglePetals: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [petalsEnabled, setPetalsEnabled] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Ensure dark class is always applied to document root
    document.documentElement.classList.add("dark");

    const savedPetals = localStorage.getItem("portfolio-petals");
    if (savedPetals !== null) {
      setPetalsEnabled(savedPetals === "true");
    }

    setMounted(true);
  }, []);

  const togglePetals = () => {
    const nextPetals = !petalsEnabled;
    setPetalsEnabled(nextPetals);
    localStorage.setItem("portfolio-petals", String(nextPetals));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: "dark",
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
