import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll tabs at interval
  useEffect(() => {
    if (isAnimating) return; // Skip if already animating

    const scrollInterval = setInterval(() => {
      const nextTab = (activeTab + 1) % PartnerContent.length;
      handleTabChange(nextTab, true);
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, [activeTab, isAnimating]);

  const handleTabChange = (newTab: number, isAuto: boolean) => {
    if (isAnimating) return; // Prevent starting new animations while one is in progress

    setIsAnimating(true);

    if (isAuto) {
      setDirection(1);
    } else {
      setDirection(newTab > activeTab ? 1 : -1);
    }
    setActiveTab(newTab);

    // Reset animating state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1600); // Slightly longer than animation duration
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

  // Animation variants with improved smoothness
  const slideAnimation = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          type: "tween", // Using tween instead of spring for more predictable movement
          ease: [0.25, 0.1, 0.25, 1], // Cubic bezier curve for smoother motion
          duration: 1.5,
        },
        opacity: {
          duration: 1.2,
          ease: "easeInOut",
        },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: {
          type: "tween",
          ease: [0.25, 0.1, 0.25, 1],
          duration: 1.5,
        },
        opacity: {
          duration: 1.2,
          ease: "easeInOut",
        },
      },
    }),
  };

  return (
    <div
      className="h-full md:h-[880px] md:mt-28 bg-cover bg-center flex flex-col items-center justify-between px-4 pt-[120px] pb-[180px] md:pb-[260px] font-walsheim overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative w-full flex flex-col items-center flex-grow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute w-full flex flex-col items-center h-full"
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {/* Header Section */}
            <div className="text-center mt-5 mb-12">
              <h1 className="text-[48px] md:text-5xl text-[#323131] dark:text-white font-bold font-satoshi mb-4">
                {currentContent.headerTitle}
              </h1>
              <p className="mt-4 text-[#383737] dark:text-partnerHeaderDark text-[18px] font-normal font-generalsans">
                {currentContent.headerSubtitle}
              </p>
            </div>

            {/* Networks Title */}
            <h2 className="text-lg md:text-[32px] text-partnerNetworksLight text-center dark:text-partnerNetworksDark font-sans mb-12 font-medium">
              {currentContent.networksTitle}
            </h2>

            <div className="max-w-7xl mx-auto mb-20">
              {/* Top row */}
              <div className="flex gap-7 md:gap-16 flex-nowrap w-full justify-center items-center mb-10 overflow-hidden">
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
                      className="h-8 md:h-16 object-contain transition-all duration-500"
                      style={{
                        willChange: "transform, opacity",
                        transform: "translateZ(0)", // Forces GPU acceleration
                      }}
                    />
                  );
                })}
              </div>

              {/* Bottom row */}
              <div className="flex gap-7 md:gap-16 flex-nowrap w-full justify-center items-center overflow-hidden">
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
                      className="h-8 md:h-16 object-contain transition-all duration-500"
                      style={{
                        willChange: "transform, opacity",
                        transform: "translateZ(0)", // Forces GPU acceleration
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* TabFooter */}
      <TabFooter
        activeTab={activeTab}
        totalTabs={PartnerContent.length}
        setActiveTab={(newTab: number) => {
          handleTabChange(newTab, false);
        }}
      />
    </div>
  );
};

export default PartnerShowcase;
