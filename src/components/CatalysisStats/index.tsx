import React, { useState, useEffect } from "react";
import { statCards, pageHeading, backers } from "../../content/CatalysisStats";
import useTheme from "@/hooks/useTheme";

const CatalystStats: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const [firstCard, secondCard, thirdCard] = statCards;

  return (
    <div className="px-6 md:px-20 bg-white">
      <div className="mb-12 max-w-sm">
        <h2 className="max-w-[16rem] text-3xl md:text-[40px] mb-4 mt-10 font-sans font-medium text-[#323131]">
          {pageHeading.title}
        </h2>
        <p className="dark:text-gray text-[#383737] max-w-md text-sm font-normal font-generalsans">
          {pageHeading.subtitle}
        </p>
      </div>

      {/* Wrapper div to right-align the grid */}
      <div className="flex justify-end">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl lg:max-w-5xl">
          {/* First Card */}
          <div className="relative w-full flex flex-col justify-center">
            <img
              src={theme === "dark" ? firstCard.img.dark : firstCard.img.light}
              alt={firstCard.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 md:top-20 lg:top-24 left-0 w-full h-full p-4 md:p-6 z-10 flex flex-col rounded-lg gap-y-2">
              <p className="text-lg dark:text-white-50 text-black-10 uppercase px-3 font-generalsans font-normal">
                {firstCard.title}
              </p>
              <h3
                className={`text-[64px] md:text-4xl lg:text-[96px] font-semibold font-sans sm:leading-[80%] sm:tracking-[-4%] md:leading-normal md:tracking-normal md:-m-4 ${
                  theme === "dark"
                    ? firstCard.textColor.dark
                    : firstCard.textColor.light
                }`}
              >
                {firstCard.value}
              </h3>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative w-full">
            <img
              src={
                theme === "dark" ? secondCard.img.dark : secondCard.img.light
              }
              alt={secondCard.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full p-4 md:p-6 z-10 flex flex-col rounded-lg gap-y-2">
              <p className="text-lg dark:text-white-50 text-black-10 uppercase px-3 font-normal font-generalsans">
                {secondCard.title}
              </p>
              <h3
                className={`text-[64px] md:text-4xl text-[#B417D7] lg:text-[96px] font-semibold font-sans sm:leading-[80%] sm:tracking-[-4%] md:leading-normal md:tracking-normal md:-m-8${
                  theme === "dark"
                    ? secondCard.textColor.dark
                    : secondCard.textColor.light
                }`}
              >
                {secondCard.value}
              </h3>
            </div>
          </div>

          {/* Third Card */}
          <div className="md:-top-28 -top-0 relative w-full md:w-[90%] lg:w-[65%] md:ml-auto">
            <img
              src={theme === "dark" ? thirdCard.img.dark : thirdCard.img.light}
              alt={thirdCard.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full p-4 md:p-6 z-10 flex flex-col rounded-lg gap-y-2">
              <p className="text-lg dark:text-white-50 text-black-10 uppercase px-3 font-generalsans">
                {thirdCard.title}
              </p>
              <h3
                className={`text-[64px] md:text-4xl lg:text-[96px] text-[#085A95] font-semibold font-sans sm:leading-[80%] sm:tracking-[-4%] md:leading-normal md:tracking-normal md:-m-8${
                  theme === "dark"
                    ? thirdCard.textColor.dark
                    : thirdCard.textColor.light
                }`}
              >
                {thirdCard.value}
              </h3>
            </div>
          </div>

          {/* World-Class Backers Card */}
          <div
            className={`rounded-lg p-5 md:p-6  flex flex-col w-full md:w-[90%] lg:w-[65%] md:mr-auto ${
              theme === "dark"
                ? "bg-backersDarkBg text-backersDarkText rounded-lg"
                : "bg-backersLightBg text-backersLightText rounded-lg"
            }`}
            style={{ borderRadius: "12px" }}
          >
            <p className="uppercase font-bold text-[32px] mb-[60px] md:mb-[60px] font-sans">
              World-Class Backers
            </p>
            <ul className="space-y-1 uppercase dark:text-gray text-base text-black font-normal font-generalsans">
              {backers.map((backer: string, index: number) => (
                <li key={index}>{backer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalystStats;
