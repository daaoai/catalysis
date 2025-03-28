"use client";
import React from "react";

import { navbarContent } from "@/content/navbar";
import type { NavbarProps } from "@/types/theme";
import Image from "next/image";
import { ASSET_IMAGES } from "@/content/images";

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  return (
    <nav className="p-4 flex justify-between items-center bg-white dark:bg-black-10">
      <p className="text-lg text-black dark:text-white">
        {navbarContent.title}
      </p>
      <Image src={ASSET_IMAGES.DUMMY_IMAGE} alt="" width={80} height={80} />
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-white text-black-20 dark:bg-black-10 dark:text-white"
      >
        {navbarContent.toggleButton}
      </button>
    </nav>
  );
};

export default Navbar;
