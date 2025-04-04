import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { roadmapSection, roadmapItems } from "@/content/Roadmap";
import { ThemeEnum } from "@/types/theme";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/Images";

const MOBILE_BREAKPOINT = 768;

const Roadmap: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkIsMobile = () =>
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (!mounted) return null;

  const backgroundImage =
    theme === ThemeEnum.Dark
      ? isMobile
        ? BG_IMAGES_DARK.ROADMAP_MOBILE
        : BG_IMAGES_DARK.ROADMAP
      : isMobile
        ? BG_IMAGES.ROADMAP_MOBILE
        : BG_IMAGES.ROADMAP;

  const desktopOffset = 18;
  const mobileOffset = 2;

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat min-h-screen md:px-8 py-16 ${
        isMobile ? "flex flex-col justify-center" : ""
      }`}
      style={!isMobile ? { backgroundImage: `url('${backgroundImage}')` } : {}}
    >
      <div className="max-w-5xl mx-auto md:pl-0 pl-2">
        <h2 className="text-[40px] text-[#323131] font-medium mb-4 ">
          {roadmapSection.heading}
        </h2>
        <p className="text-sm text-[#383737] font-generalsans font-normal dark:text-gray-300 max-w-md mb-16">
          {roadmapSection.description}
        </p>

        {/* Desktop view */}
        <div className="space-y-10 hidden md:block">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center md:w-full md:max-w-[574px] p-4 rounded-xl bg-roadmapItemLight dark:bg-roadmapItemDark backdrop-blur-xl"
              style={{ marginLeft: `${idx * desktopOffset}rem` }}
            >
              <div className="md:w-[100px] w-[60px] h-[106px] font-bold text-center px-4 py-2 rounded mr-6 bg-roadmapBoxLight text-roadmapBoxLightText dark:bg-roadmapBoxDark dark:text-roadmapBoxDarkText">
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

        <div className="block md:hidden max-w-[100vw] overflow-hidden">
          <div
            className="space-y-20 pr-8 bg-cover bg-no-repeat pt-12"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundPosition: "right center",
              backgroundSize: "cover",
              width: "100%",
              maxWidth: "100vw",
            }}
          >
            {roadmapItems.map((item, idx) => (
              <div
                key={idx}
                className="font-generalsans flex items-center w-[255.12px] p-4 rounded-[7.28px] h-[82px] bg-roadmapItemLight dark:bg-roadmapItemDark backdrop-blur-xl"
                style={{
                  marginLeft: `${Math.min(idx * 1.1 * mobileOffset, window.innerWidth - 280)}rem`,
                }}
              >
                <div className="w-[60px] md:w-[100px] h-[63px] md:h-[106px] font-bold text-center px-4 py-2 rounded mr-6 bg-roadmapBoxLight text-roadmapBoxLightText dark:bg-roadmapBoxDark dark:text-roadmapBoxDarkText">
                  <div className="text-2xl md:text-[40px] leading-none font-bold">
                    {item.quarter}
                  </div>
                  <div className="text-2xl md:text-[48px] leading-none font-bold">
                    {item.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg dark:text-white text-roadmapBoxLight font-medium leading-[-2%]">
                    {item.title}
                  </h3>
                  <p className="dark:text-gray font-normal text-black-10 text-[10px] leading-[112%] tracking-[0px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
