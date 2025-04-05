import React, { useState, useEffect } from "react";
import { features, featurePageContent } from "@/content/Features";
import useTheme from "@/hooks/useTheme";

const FeaturesSection: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Define container dimensions for each index.
  const dimensions: Record<number, { width: string; height: string }> = {
    0: { width: "689px", height: "570px" },
    1: { width: "564px", height: "762px" },
    2: { width: "687px", height: "622px" },
    3: { width: "563px", height: "430px" },
  };

  // Helper function to render each feature.
  // For indexes 0 and 3, text comes first and image fills the remaining vertical space.
  // For other indexes, image comes first and then the text.
  interface Feature {
    title: string;
    description: string;
    bgColor: {
      dark: string;
      light: string;
    };
    image: {
      dark: string;
      light: string;
    };
  }

  const renderFeature = (feature: Feature, globalIndex: number) => {
    // Set inline style with fixed height (and maximum width for container consistency).
    const style = dimensions[globalIndex]
      ? {
          maxWidth: dimensions[globalIndex].width,
          height: dimensions[globalIndex].height,
        }
      : {};

    // For mobile on index 0 and 2, set height to 90% of the original height.
    if ((globalIndex === 0 || globalIndex === 2) && window.innerWidth < 768) {
      const originalHeight = parseInt(dimensions[globalIndex].height, 10);
      style.height = `${Math.round(originalHeight * 0.8)}px`;
    }

    // Combine container classes with dynamic background color.
    let containerClasses = `flex flex-col h-full rounded-md overflow-hidden border border-thin border-[#8298AB40] mb-8 ${
      theme === "dark" ? feature.bgColor.dark : feature.bgColor.light
    }`;

    // For index 0 add padding on top; for index 2 add padding on bottom.
    if (globalIndex === 0) {
      containerClasses += " pt-8";
    } else if (globalIndex === 2) {
      containerClasses += " pb-8";
    }

    // Determine the image class based on the index.
    const imageClass = "h-full w-auto px-3 py-3";

    let imageStyle = {};
    if (globalIndex === 3) {
      imageStyle = { maxWidth: window.innerWidth < 768 ? "280px" : "390px" };
    }

    if (globalIndex === 0 || globalIndex === 3) {
      // Text above, image below.
      return (
        <div key={globalIndex} style={style} className={containerClasses}>
          <div className="px-8 py-4 md:px-16 md:py-6">
            <h3 className="text-2xl font-normal mb-3 text-[#323131] font-walsheim tracking-tight">
              {feature.title}
            </h3>
            <p
              className={`text-sm font-normal text-[#383737] dark:text-featuresAnswerDark font-generalsans  ${
                globalIndex === 0 ? "leading-relaxed" : ""
              }`}
            >
              {feature.description}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <img
              key={theme}
              src={`${theme === "dark" ? feature.image.dark : feature.image.light}?t=${Date.now()}`}
              alt={feature.title}
              className={imageClass}
              style={imageStyle}
            />
          </div>
        </div>
      );
    } else {
      // Image above, text below.
      return (
        <div key={globalIndex} style={style} className={containerClasses}>
          <div className="flex-1 flex items-center justify-center p-4">
            <img
              key={theme}
              src={`${theme === "dark" ? feature.image.dark : feature.image.light}?t=${Date.now()}`}
              alt={feature.title}
              className={imageClass}
            />
          </div>
          <div className="px-8 py-4 md:px-16 md:py-6">
            <h3 className="text-2xl font-normal mb-3 text-[#323131] font-walsheim tracking-tight">
              {feature.title}
            </h3>
            <p
              className={`text-sm text-black-10 leading-[112%] dark:text-featuresAnswerDark font-generalsans ${
                globalIndex === 0 || globalIndex === 2 ? "leading-relaxed" : ""
              }`}
            >
              {feature.description}
            </p>
          </div>
        </div>
      );
    }
  };

  // Arrange columns as:
  // Column 1: features at index 0 and 2
  // Column 2: features at index 1 and 3
  const col1Features = [features[0], features[2]];
  const col2Features = [features[1], features[3]];

  return (
    <section className="px-6 md:px-20 bg-white mx-auto max-w-[90rem]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
        <div className="max-w-[400px]">
          <h2 className="text-[40px] font-medium mb-6 font-sans tracking-tight">
            {featurePageContent.title}
          </h2>
          <p className="text-[#383737] dark:text-gray-300 text-base font-normal font-generalsans leading-[112%]">
            {featurePageContent.description}
          </p>
        </div>
        <button className="mt-20 font-sans md:mt-0 text-xs md:text-[20px] dark:bg-white font-medium dark:text-black text-white bg-black rounded-full px-6 py-5 transition">
          {featurePageContent.button}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* First column: indexes 0 and 2 */}
        <div className="flex flex-col gap-0 w-full md:w-[55%]">
          {col1Features.map((feature, i) => {
            const globalIndex = i === 0 ? 0 : 2;
            return renderFeature(feature, globalIndex);
          })}
        </div>
        {/* Second column: indexes 1 and 3 */}
        <div className="flex flex-col w-full md:w-[45%] ">
          {col2Features.map((feature, i) => {
            const globalIndex = i === 0 ? 1 : 3;
            return renderFeature(feature, globalIndex);
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
