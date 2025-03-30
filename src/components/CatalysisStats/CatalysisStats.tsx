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
    <div className="px-6 md:px-20 ">
      <div className="mb-12">
        <h2 className="text-3xl md:text-[40px] mb-4">{pageHeading.title}</h2>
        <p className="dark:text-gray text-black-10 max-w-md text-md">
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
            <div className="absolute top-20 lg:top-28 left-0 w-full h-full p-6 z-10 flex flex-col rounded-lg gap-y-3">
              <p className="text-lg dark:text-[#CCC6C6] text-black-10 uppercase py-2 px-3">
                {firstCard.title}
              </p>
              <h3
                className={`text-3xl md:text-4xl lg:text-[96px] font-semibold mt-1 ${
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
            <div className="absolute top-0 left-0 w-full h-full p-6 z-10 flex flex-col rounded-lg gap-y-3">
              <p className="text-lg dark:text-[#CCC6C6] text-black-10 uppercase py-2 px-3">
                {secondCard.title}
              </p>
              <h3
                className={`text-3xl md:text-4xl lg:text-[96px] font-semibold mt-1 ${
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
          <div className="relative w-full -mt-16">
            <img
              src={theme === "dark" ? thirdCard.img.dark : thirdCard.img.light}
              alt={thirdCard.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full p-6 z-10 flex flex-col rounded-lg gap-y-3">
              <p className="text-lg dark:text-[#CCC6C6] text-black-10 uppercase py-2 px-3">
                {thirdCard.title}
              </p>
              <h3
                className={`text-3xl md:text-4xl lg:text-[96px] font-semibold mt-1 ${
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
          {/* Optionally, you can set different background colors or styles based on the theme */}
          <div
            className={`rounded-lg p-6 w-4/5 flex flex-col ${
              theme === "dark"
                ? "bg-[#2E1D1D] text-[#FA6A5E]"
                : "bg-[#ffe5e5] text-[#AD2022]"
            }`}
          >
            <p className="uppercase font-semibold text-[32px] mb-[132px]">
              World-Class Backers
            </p>
            <ul className="space-y-1 text-lg uppercase dark:text-gray text-black-10">
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
