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

  return (
    <section className="px-6 md:px-20 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold mb-4">
            {featurePageContent.title}
          </h2>
          <p className="text-black dark:text-gray-300">
            {featurePageContent.description}
          </p>
        </div>
        <button className="mt-6 md:mt-0 dark:bg-white dark:text-black text-white bg-black rounded-full px-6 py-2 hover:bg-gray-200 transition">
          {featurePageContent.button}
        </button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-sm overflow-hidden ${
              theme === "dark" ? feature.bgColor.dark : feature.bgColor.light
            }`}
          >
            <img
              key={theme}
              src={`${theme === "dark" ? feature.image.dark : feature.image.light}?t=${Date.now()}`}
              alt={feature.title}
              className="h-72 w-full object-contain mb-6 mt-8"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3 text-black">
                {feature.title}
              </h3>
              <p className="text-sm text-black dark:text-featuresAnswerDark">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
