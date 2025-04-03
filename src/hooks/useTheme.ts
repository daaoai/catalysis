"use client";
import { ThemeEnum, type Theme } from "@/types/theme";
import { useState, useEffect } from "react";

const useTheme = () => {
  const savedTheme =
    typeof window !== "undefined"
      ? (localStorage.getItem("theme") as Theme)
      : null;

  const [theme, setTheme] = useState<Theme>(ThemeEnum.Light);

  useEffect(() => {
    document.body.classList.remove(ThemeEnum.Light, ThemeEnum.Dark);
    document.body.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }

    console.log("Theme has been set to:", theme);
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
