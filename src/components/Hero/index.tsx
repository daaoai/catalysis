import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { heroContent } from "@/content/Hero";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/Images";
import Partners from "./Partners";
import Image from "next/image";

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
    <div className="w-full flex flex-col min-h-screen">
      <div
        className="hidden md:flex relative w-full h-screen bg-no-repeat bg-cover bg-center font-walsheim"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Main Content */}
        <div className="flex items-center justify-end h-full px-8 md:px-16 w-full">
          <div className="lg:max-w-4xl text-right flex flex-col items-start justify-start">
            <h1 className="text-5xl md:text-6xl leading-tight text-start text-black">
              {heroContent.title[0]} <br /> {heroContent.title[1]}
            </h1>
            <p className="mt-6 text-base md:text-lg dark:text-gray text-black max-w-xl text-start">
              {heroContent.subtitle}
            </p>
            <button className="mt-10 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium transition">
              {heroContent.buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="relative md:hidden w-full h-screen flex flex-col gap-4 font-walsheim bg-[#D5E5FF] pt-4 overflow-hidden">
        <div className="flex items-center justify-end h-full px-8 md:px-16">
          <div className="lg:max-w-4xl text-right flex flex-col items-center justify-end">
            <h1 className="text-4xl md:text-6xl leading-tight text-center">
              {heroContent.title[0]} <br /> {heroContent.title[1]}
            </h1>
            <p className="mt-6 text-base text-center md:text-lg dark:text-gray text-black max-w-xl">
              {heroContent.subtitle}
            </p>
            <div>
              <button className="mt-10 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium transition">
                {heroContent.buttonText}
              </button>
            </div>
          </div>
        </div>
        <Image
          src={BG_IMAGES.HERO_HORIZONTAL}
          alt=""
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <Partners />
    </div>
  );
};

export default HeroSection;
