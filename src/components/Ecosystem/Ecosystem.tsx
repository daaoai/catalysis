import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import { partners, partnerShowcaseContent, Partner } from "@/content/Partners";
import {
  BG_IMAGES,
  BG_IMAGES_DARK,
  PARTNER_LOGOS,
  PARTNER_LOGOS_DARK,
} from "@/content/images";

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
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-between px-4 py-16 font-walsheim"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="text-center mb-10 pt-10">
        <h1 className="text-3xl md:text-5xl">
          {partnerShowcaseContent.headerTitle}
        </h1>
        <p className="mt-4 text-black-10 dark:text-[#E7E7E7] text-[18px]">
          {partnerShowcaseContent.headerSubtitle}
        </p>
      </div>

      <h2 className="text-lg md:text-3xl text-[#AD2022] dark:text-[#FA6A5E] font-medium mb-8">
        {partnerShowcaseContent.networksTitle}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl w-full justify-items-center items-center">
        {partners.map((logo: Partner, index: number) => {
          // Use the partner id to determine which logo to show
          const logoSrc =
            theme === "dark"
              ? PARTNER_LOGOS_DARK[logo.id as keyof typeof PARTNER_LOGOS_DARK]
              : PARTNER_LOGOS[logo.id as keyof typeof PARTNER_LOGOS];
          return (
            <img
              key={index}
              src={logoSrc}
              alt={logo.alt}
              className="h-12 md:h-16 object-contain"
            />
          );
        })}
      </div>

      <div className="mt-16 w-full border-t border-[#FFE5E5] max-w-4xl" />
    </div>
  );
};

export default PartnerShowcase;
