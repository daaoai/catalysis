"use client";
import Navbar from "@/components/Navbar";
import useTheme from "@/hooks/useTheme";
export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme} />
    </div>
  );
}
