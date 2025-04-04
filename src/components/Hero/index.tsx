import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { heroContent } from "@/content/Hero";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/Images";
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
            <h1 className="text-5xl md:text-[56px] leading-tight text-start text-[#1C1C1A] font-normal font-sans">
              {heroContent.title[0]} <br /> {heroContent.title[1]}
            </h1>
            <p className="mt-6 text-base md:text-lg dark:text-gray text-[#363636] max-w-xl font-normal text-start font-generalsans">
              {heroContent.subtitle}
            </p>
            <button className="mt-10 px-6 py-3  text-xs md:text-[20px] font-sans bg-black text-white dark:bg-white dark:text-black rounded-full font-medium transition">
              {heroContent.buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="relative md:hidden w-full h-[130vh] md:h-screen  flex flex-col gap-4 font-walsheim bg-[#D5E5FF] pt-4 overflow-hidden">
        <div className="flex items-center justify-end h-full px-8 md:px-16 mt-16 md:mt-0">
          <div className="lg:max-w-4xl text-right flex flex-col items-center justify-end">
            <h1 className="text-[40px] font-medium md:text-6xl leading-tight text-center font-walsheim">
              {heroContent.title[0]} <br /> {heroContent.title[1]}
            </h1>
            <p className="mt-6 text-base text-center md:text-lg dark:text-gray text-black max-w-xl font-walsheim">
              {heroContent.subtitle}
            </p>
            <div>
              <button className="mb-16 md:mb-0 mt-10 px-6 py-3 bg-black font-walsheim text-white dark:bg-white text-2xl font-walsheim dark:text-black rounded-full font-medium transition">
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
    </div>
  );
};

export default HeroSection;
