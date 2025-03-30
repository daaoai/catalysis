import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { heroContent } from "@/content/hero";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/images";
import Partners from "./Partners";

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const backgroundImage =
    theme === "dark" ? BG_IMAGES_DARK.HERO : BG_IMAGES.HERO;

  return (
    <div className="w-full flex flex-col">
      <div
        className="relative w-full h-screen bg-no-repeat bg-cover bg-center font-walsheim"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Main Content */}
        <div className="flex items-center justify-end h-full px-8 md:px-16">
          <div className="lg:max-w-4xl text-right flex flex-col items-end justify-end">
            <h1 className="text-5xl md:text-6xl leading-tight">
              {heroContent.title[0]} <br /> {heroContent.title[1]}
            </h1>
            <p className="mt-6 text-base md:text-lg dark:text-gray text-[#383737] max-w-xl text-right">
              {heroContent.subtitle}
            </p>
            <button className="mt-10 px-6 mx-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-gray-200 transition">
              {heroContent.buttonText}
            </button>
          </div>
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default HeroSection;
