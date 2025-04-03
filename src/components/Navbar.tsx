import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { navbarContent } from "../content/Navbar";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Use dark mode logo if theme is "dark"
  const logoSrc =
    theme === "dark" ? navbarContent.logoSrc : navbarContent.darkLogoSrc;

  // Scroll handler for navbar links
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler to scroll to the top of the page
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="md:fixed top-6 left-1/2 -translate-x-1/2 md:w-1/2 bg-[rgba(239,239,239,0.75)] dark:bg-[rgba(28,28,26,0.75)] backdrop-blur-md backdrop-saturate-150 text-white px-10 py-4 rounded-full flex items-center justify-between z-50">
      {/* Logo and Title Section */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={scrollToTop}
      >
        <img
          src={logoSrc}
          alt={`${navbarContent.title} Logo`}
          className="h-6"
        />
        <span className="text-2xl font-medium justify-center dark:text-white text-black-20 items-center">
          {navbarContent.title}
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 dark:text-gray text-black-10 text-lg">
        {navbarContent.links.map((link, idx) => {
          const sectionId = link.href.replace("#", "");
          return (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleScroll(e, sectionId)}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
