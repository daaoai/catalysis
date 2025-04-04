import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { developerHubContent } from "@/content/DeveloperHub";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/Images";
import Image from "next/image";

const DeveloperHub: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const backgroundImage =
    theme === "dark" ? BG_IMAGES_DARK.DEVELOPER : BG_IMAGES.DEVELOPER;
  const verticalBgImage =
    theme === "dark"
      ? BG_IMAGES.DEVELOPER_HORIZONTAL
      : BG_IMAGES.DEVELOPER_HORIZONTAL;

  const { title, description, buttonStart, buttonDocs, tags } =
    developerHubContent;

  // Calculate arc positions for each tag
  const calculateArcPosition = (index: number, total: number) => {
    // Arc parameters
    const radius = 300; // Increased radius for more spacing
    const arcAngle = 60; // Total arc angle in degrees
    const startAngle = -30; // Starting angle (negative is to the left)

    // Calculate the angle for this tag
    const angle = startAngle + (index / (total - 1)) * arcAngle;

    // Convert angle to radians
    const radians = (angle * Math.PI) / 180;

    // Calculate x and y position
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;

    return { x, y, angle };
  };

  return (
    <section className="flex w-full bg-[#EBFFC9] gap-12 md:gap-20 flex-col md:flex-row text-[#323131] dark:text-white items-center justify-between font-walsheim relative md:min-h-screen md:h-screen">
      <Image
        src={backgroundImage}
        alt=""
        width={300}
        height={200}
        className="hidden md:block h-full object-cover"
      />
      <Image
        src={verticalBgImage}
        alt=""
        width={300}
        height={150}
        className="flex md:hidden w-full"
      />

      <div className="">
        <div className="text-center z-10 md:w-[60%] flex flex-col items-start md:items-center justify-start p-6 pt-0">
          <h1 className="text-4xl md:text-[72px] font-medium mb-6 text-[#323131] font-sans">
            {title}
          </h1>
          <p className="dark:text-gray-200 text-[#383737] font-normal text-base mb-10 text-start font-generalsans">
            {description}
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="dark:bg-white bg-[#323131] text-2xl font-sans text-white dark:text-black px-6 py-3 rounded-full font-medium transition">
              {buttonStart}
            </button>
            <button className="border border-[#323131] text-2xl font-sans text-black dark:border-white px-6 py-3 rounded-full font-medium  dark:hover:text-black transition">
              {buttonDocs}
            </button>
          </div>
        </div>
      </div>
      {/* Arc Floating Tags with Increased Vertical Spacing */}
      <div className="hidden md:block">
        {tags.map((tag, index) => {
          // Calculate position on the arc
          const { x, y, angle } = calculateArcPosition(index, tags.length);

          // Add vertical offset based on index to increase spacing
          const verticalSpacing = 40;
          const verticalOffset = index * verticalSpacing;

          return (
            <div
              key={index}
              className="absolute px-6 py-3 w-[260px] text-xl font-normal flex items-center gap-3 justify-start rounded-full border dark:bg-[rgba(163,255,109,0.05)] bg-[#F8FFEB] border-[#C0E67E] dark:border-[#628E14]"
              style={{
                right: `calc(25% - ${x}px)`,
                top: `calc(33% + ${y}px + ${verticalOffset}px)`,
                transform: `rotate(${angle}deg)`,
              }}
            >
              <span className="inline-block w-[12px] h-[12px] bg-[#65970C] dark:bg-[#A0CF4D] rounded-[2px]" />
              {tag}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeveloperHub;
