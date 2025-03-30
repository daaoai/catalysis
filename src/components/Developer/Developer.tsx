import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { developerHubContent } from "@/content/DeveloperHub";
import { BG_IMAGES, BG_IMAGES_DARK } from "@/content/images";

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

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-5xl font-semibold mb-6">{title}</h1>
        <p className="text-gray-200 text-lg mb-10">{description}</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            {buttonStart}
          </button>
          <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
            {buttonDocs}
          </button>
        </div>
      </div>

      {/* Floating Tags */}
      <div className="absolute right-6 md:right-20 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-0">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="px-6 py-3 w-[280px] text-sm font-medium flex items-center gap-3 justify-start my-4"
            style={{
              borderRadius: "9999px",
              border: "1px solid #A3FF6D",
              color: "#E3FFD6",
              background: "rgba(163, 255, 109, 0.05)",
              boxShadow: "0 0 10px rgba(163, 255, 109, 0.3)",
              transform: `rotate(${(index - 2.5) * 8}deg)`,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#A3FF6D",
                borderRadius: "2px",
                display: "inline-block",
              }}
            />
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeveloperHub;
