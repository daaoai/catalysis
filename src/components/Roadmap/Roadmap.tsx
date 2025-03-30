import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { roadmapSection, roadmapItems } from "@/content/Roadmap";
import { ThemeEnum } from "@/types/theme";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/images";

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
      className="relative bg-cover bg-center bg-no-repeat min-h-screen px-8 py-16 font-walsheim"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-4">{roadmapSection.heading}</h2>
        <p className="text-sm text-black-10 dark:text-gray-300 max-w-md mb-16">
          {roadmapSection.description}
        </p>

        <div className="space-y-10">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center w-full max-w-[574px] p-4 rounded-xl bg-[#ffddab] dark:bg-[#3B2607] backdrop-blur-xl"
              style={{ marginLeft: `${idx * 18}rem` }}
            >
              <div className="dark:bg-[#F4AB3E] dark:text-[#3B2607] text-[#F4AB3E] bg-[#3B2607] w-[100px] h-[106px] font-bold text-center px-4 py-2 rounded mr-6 font-walsheim">
                <div className="text-[40px] leading-none">{item.quarter}</div>
                <div className="text-[48px] leading-none">{item.year}</div>
              </div>
              <div>
                <h3 className="text-2xl dark:text-white text-[#3B2607] font-walsheim font-semibold mb-2">
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
