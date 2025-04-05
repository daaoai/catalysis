import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { PartnerContent } from "@/content/Partners";
import {
  BG_IMAGES,
  BG_IMAGES_DARK,
  PARTNER_LOGOS,
  PARTNER_LOGOS_DARK,
} from "@/content/Images";
import TabFooter from "./TabFooter";

const PartnerShowcase: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll tabs at interval
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const nextTab = (activeTab + 1) % PartnerContent.length;
      const direction: "left" | "right" =
        activeTab < nextTab ? "right" : "left";
      handleTabChange(nextTab, direction);
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [activeTab]);

  const handleTabChange = (newTab: number, direction: "left" | "right") => {
    // Apply the sweep-out animation to header and images only
    setAnimationClass(
      direction === "right" ? "sweep-out-left" : "sweep-out-right",
    );
    setTimeout(() => {
      setActiveTab(newTab);
      // Apply the sweep-in animation for the new content
      setAnimationClass(
        direction === "right" ? "sweep-in-right" : "sweep-in-left",
      );
      setTimeout(() => {
        setAnimationClass("");
      }, 500); // Duration of sweep-in animation
    }, 500); // Duration of sweep-out animation
  };

  if (!mounted) return null;

  const backgroundImage =
    theme === "dark" ? BG_IMAGES_DARK.ECOSYSTEM : BG_IMAGES.ECOSYSTEM;

  const currentContent = PartnerContent[activeTab];

  // Custom top counts for each tab index (ensures a maximum of 2 rows)
  const topCounts = [2, 3, 4, 2];
  const topCount = topCounts[activeTab] || 0;
  const topPartners = currentContent.partners.slice(0, topCount);
  const bottomPartners = currentContent.partners.slice(topCount);

  return (
    <div
      className="h-600px md:h-[880px] md:mt-28 bg-cover bg-center flex flex-col items-center justify-between px-4 pt-[120px] pb-[180px] md:pb-[260px] font-walsheim overflow-x-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Animated Header Section */}
      <div className={`text-center mt-5 ${animationClass}`}>
        <h1 className="text-[48px] md:text-5xl text-[#323131] dark:text-white font-bold font-satoshi mb-4">
          {currentContent.headerTitle}
        </h1>
        <p className="mt-4 text-[#383737] dark:text-partnerHeaderDark text-[18px] font-normal font-generalsans">
          {currentContent.headerSubtitle}
        </p>
      </div>

      {/* Animated Content Section (networks title and images) */}
      <div className={animationClass}>
        <h2 className="text-lg md:text-[32px] text-partnerNetworksLight text-center dark:text-partnerNetworksDark font-sans mb-12 font-medium">
          {currentContent.networksTitle}
        </h2>

        <div className="max-w-7xl mx-auto mb-20">
          {/* Top row */}
          <div className="flex gap-7 md:gap-16 flex-nowrap w-full justify-center items-center mb-10 overflow-x-auto">
            {topPartners.map((partner, index: number) => {
              const logoSrc =
                theme === "dark"
                  ? PARTNER_LOGOS_DARK[
                      partner.id as keyof typeof PARTNER_LOGOS_DARK
                    ]
                  : PARTNER_LOGOS[partner.id as keyof typeof PARTNER_LOGOS];
              return (
                <img
                  key={index}
                  src={logoSrc}
                  alt={partner.alt}
                  className="h-8 md:h-16 object-contain"
                />
              );
            })}
          </div>
          {/* Bottom row */}
          <div className="flex gap-7 md:gap-16 flex-nowrap w-full justify-center items-center overflow-x-auto">
            {bottomPartners.map((partner, index: number) => {
              const logoSrc =
                theme === "dark"
                  ? PARTNER_LOGOS_DARK[
                      partner.id as keyof typeof PARTNER_LOGOS_DARK
                    ]
                  : PARTNER_LOGOS[partner.id as keyof typeof PARTNER_LOGOS];
              return (
                <img
                  key={index}
                  src={logoSrc}
                  alt={partner.alt}
                  className="h-8 md:h-16 object-contain"
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* TabFooter rendered without animation */}
      <TabFooter
        activeTab={activeTab}
        totalTabs={PartnerContent.length}
        setActiveTab={(newTab: number) => {
          const direction: "left" | "right" =
            newTab > activeTab ? "right" : "left";
          handleTabChange(newTab, direction);
        }}
      />
    </div>
  );
};

export default PartnerShowcase;
