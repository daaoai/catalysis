import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { navbarContent } from "../content/Navbar";
import { Menu, X } from "lucide-react"; // Importing Lucide React icons
import Link from "next/link";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Use dark mode logo if theme is "dark"
  const logoSrc =
    theme === "dark" ? navbarContent.logoSrc : navbarContent.logoSrc;

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 md:w-1/2 bg-[#EFEFEF] bg-opacity-75 dark:bg-[rgba(28,28,26,0.75)] backdrop-blur-md backdrop-saturate-150 text-white px-10 py-4 rounded-full items-center justify-between z-50">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={scrollToTop}
        >
          <img
            src={logoSrc}
            alt={`${navbarContent.title} Logo`}
            className="h-6"
          />
        </div>

        <div className="flex space-x-8 dark:text-gray text-black text-lg">
          {navbarContent.links.map((link, idx) => {
            const sectionId = link.href.replace("#", "");
            return (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleScroll(e, sectionId)}
                className="hover:tracking-wider hover:font-bold transition font-generalsans text-[#383737]"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
      <nav className="flex md:hidden bg-[#D5E5FF] py-8 px-8">
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

        {/* Hamburger Icon */}
        <div className="flex ml-auto cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="text-black dark:text-white" size={24} />
          ) : (
            <Menu className="text-black dark:text-white" size={24} />
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-8 bg-white dark:bg-gray-800 w-48 p-4 shadow-lg z-40 rounded-lg">
            <ul className="flex flex-col gap-2">
              <Link
                href="/"
                className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer font-walsheim"
              >
                Home
              </Link>
              <Link
                href="/"
                className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer font-walsheim"
              >
                About
              </Link>
              <Link
                href="/"
                className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer font-walsheim"
              >
                Services
              </Link>
              <Link
                href="/"
                className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer font-walsheim"
              >
                Contact
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
