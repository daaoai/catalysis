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
      {/* Desktop View */}
      <div className="hidden md:flex w-full h-screen font-sans dark:bg-[#031b62] bg-[#d5e5ff]">
        {/* Left side: Image */}
        <div className="relative w-[45%] h-full">
          <Image
            src={backgroundImage}
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>
        {/* Right side: Content */}
        <div className="w-[55%] h-full flex items-center justify-start px-8 md:pl-24 ">
          <div className="lg:max-w-4xl text-right flex flex-col items-start justify-start md:gap-y-8">
            <h1 className="text-5xl md:text-[56px] leading-tight font-sans text-start text-[#1C1C1A] font-medium tracking-tighter">
              {heroContent.title[0]} <br /> {heroContent.title[1]}
            </h1>
            <p className="text-base md:text-[16px] dark:text-gray text-[#363636] max-w-[513px] font-normal text-start font-generalsans leading-[112%]">
              {heroContent.subtitle}
            </p>
            <button className="mt-12 px-6 py-5 tracking-tight text-xs md:text-[20px] font-sans bg-black text-white dark:bg-white dark:text-black rounded-[99px] font-medium transition">
              {heroContent.buttonText}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="relative md:hidden w-full h-[110vh] md:h-screen flex flex-col gap-4 font-walsheim bg-[#D5E5FF] overflow-hidden">
        <div className="flex items-center justify-end h-full px-8 md:px-16 md:mt-0">
          <div className="lg:max-w-4xl text-right flex flex-col items-center justify-end">
            <h1 className="text-[40px] font-medium md:text-6xl leading-tight text-center font-sans">
              {heroContent.title[0]} <br /> {heroContent.title[1]}
            </h1>
            <p className="mt-6 text-xs text-center md:text-lg dark:text-gray font-normal text-[#363636] max-w-xl font-generalsans leading-[112%] tracking-[0px]">
              {heroContent.subtitle}
            </p>
            <div>
              <button className=" md:mb-0 px-6 py-3 mt-12 text-xs md:text-[20px] font-sans bg-black placeholder:font-walsheim text-white dark:bg-white font-walsheim dark:text-black rounded-full font-medium transition">
                {heroContent.buttonText}
              </button>
            </div>
          </div>
        </div>
        <Image
          src={BG_IMAGES.HERO_HORIZONTAL}
          alt="Hero Mobile"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
