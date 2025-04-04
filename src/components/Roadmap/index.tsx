import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { roadmapSection, roadmapItems } from "@/content/Roadmap";
import { ThemeEnum } from "@/types/theme";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/Images";

const Roadmap: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const backgroundImage =
    theme === ThemeEnum.Dark ? BG_IMAGES_DARK.ROADMAP : BG_IMAGES.ROADMAP;

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen px-8 py-16"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-4">{roadmapSection.heading}</h2>
        <p className="text-sm text-black-10 dark:text-gray-300 max-w-md mb-16">
          {roadmapSection.description}
        </p>

        <div className="space-y-10 hidden md:block">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className="flex ml-0 md:ml-[${idx * 18}rem] items-center w-full max-w-[574px] p-4 rounded-xl bg-roadmapItemLight dark:bg-roadmapItemDark backdrop-blur-xl"
              style={{ marginLeft: `${idx * 18}rem` }}
            >
              <div className="w-[100px] h-[106px] font-bold text-center px-4 py-2 rounded mr-6 bg-roadmapBoxLight text-roadmapBoxLightText dark:bg-roadmapBoxDark dark:text-roadmapBoxDarkText">
                <div className="text-2xl md:text-[40px] leading-none">
                  {item.quarter}
                </div>
                <div className="text-2xl md:text-[48px] leading-none">
                  {item.year}
                </div>
              </div>
              <div>
                <h3 className="text-2xl dark:text-white text-roadmapBoxLight font-walsheim font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm dark:text-gray text-black-10 font-walsheim">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-10 md:hidden">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className="flex ml-0 md:ml-[${idx * 18}rem] items-center w-full max-w-[574px] p-4 rounded-xl bg-roadmapItemLight dark:bg-roadmapItemDark backdrop-blur-xl"
            >
              <div className="w-[80px] md:w-[100px] h-[80px] md:h-[106px] font-bold text-center px-4 py-2 rounded mr-6 font-walsheim bg-roadmapBoxLight text-roadmapBoxLightText dark:bg-roadmapBoxDark dark:text-roadmapBoxDarkText">
                <div className="text-3xl md:text-[40px] leading-none">
                  {item.quarter}
                </div>
                <div className="text-3xl md:text-[48px] leading-none">
                  {item.year}
                </div>
              </div>
              <div>
                <h3 className="text-2xl dark:text-white text-roadmapBoxLight font-walsheim font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm dark:text-gray text-black-10 font-walsheim">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
