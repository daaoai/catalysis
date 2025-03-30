"use client";
import { ThemeEnum, type Theme } from "@/types/theme";
import { useState, useEffect } from "react";

const useTheme = () => {
  const getSystemTheme = (): Theme => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ThemeEnum.Dark
        : ThemeEnum.Light;
    }
    return ThemeEnum.Light;
  };

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return ThemeEnum.Light;
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved ?? getSystemTheme();
  });

  useEffect(() => {
    document.body.classList.remove(ThemeEnum.Light, ThemeEnum.Dark);
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light,
    );
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
