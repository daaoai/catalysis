import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { developerHubContent } from "@/content/DeveloperHub";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/Images";

const DeveloperHub: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const backgroundImage =
    theme === "dark" ? BG_IMAGES_DARK.DEVELOPER : BG_IMAGES.DEVELOPER;

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
    <section
      className="relative w-full min-h-screen bg-cover bg-center text-[#323131] dark:text-white flex items-center justify-center px-6 overflow-hidden font-walsheim"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-[72px] font-medium mb-6">{title}</h1>
        <p className="dark:text-gray-200 font-normal text-lg mb-10">
          {description}
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="dark:bg-white bg-[#323131] text-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            {buttonStart}
          </button>
          <button className="border border-[#323131] dark:border-white px-6 py-3 rounded-full font-medium hover:text-white  dark:hover:text-black transition">
            {buttonDocs}
          </button>
        </div>
      </div>

      {/* Arc Floating Tags with Increased Vertical Spacing */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 w-full h-full pointer-events-none">
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
              <span className="inline-block w-[12px] h-[12px] bg-[#65970C] dark:bg-[#A0CF4D] rounded-[2px]  " />
              {tag}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeveloperHub;
