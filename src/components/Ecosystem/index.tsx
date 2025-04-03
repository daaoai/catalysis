import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { partners, partnerShowcaseContent, Partner } from "@/content/Partners";
import {
  BG_IMAGES,
  BG_IMAGES_DARK,
  PARTNER_LOGOS,
  PARTNER_LOGOS_DARK,
} from "@/content/Images";
import Footer from "./Footer";

const PartnerShowcase: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const backgroundImage =
    theme === "dark" ? BG_IMAGES_DARK.ECOSYSTEM : BG_IMAGES.ECOSYSTEM;

  return (
    <div
      className="h-600px md:h-[880px] bg-cover bg-center flex flex-col items-center justify-between px-4 pt-[120px] pb-[200px] font-walsheim"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="text-center mb-10 pt-10">
        <h1 className="text-3xl md:text-5xl text-black">
          {partnerShowcaseContent.headerTitle}
        </h1>
        <p className="mt-4 text-black dark:text-partnerHeaderDark text-[18px]">
          {partnerShowcaseContent.headerSubtitle}
        </p>
      </div>

      <h2 className="text-lg md:text-3xl text-partnerNetworksLight dark:text-partnerNetworksDark font-medium mb-8">
        {partnerShowcaseContent.networksTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full justify-items-center items-center">
        {partners.map((logo: Partner, index: number) => {
          const logoSrc =
            theme === "dark"
              ? PARTNER_LOGOS_DARK[logo.id as keyof typeof PARTNER_LOGOS_DARK]
              : PARTNER_LOGOS[logo.id as keyof typeof PARTNER_LOGOS];
          return (
            <img
              key={index}
              src={logoSrc}
              alt={logo.alt}
              className="h-8 md:h-16 object-contain"
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default PartnerShowcase;
