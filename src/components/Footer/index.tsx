import React from "react";
import { FooterContent } from "../../content/Footer";
import Link from "next/link";
import useTheme from "@/hooks/useTheme";
import { SOCIAL_IMAGES, SOCIAL_IMAGES_DARK } from "../../content/Images";
import Watermark from "./Watermark";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentTheme = theme;

  return (
    <footer className="w-full  font-walsheim">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Logo and Social Links */}
          <div className="flex flex-col space-y-6 items-center md:items-start">
            <Logo />
            <div className="flex space-x-4">
              {FooterContent.socialLinks.map((social) => {
                const key =
                  social.name.toUpperCase() as keyof typeof SOCIAL_IMAGES_DARK;
                const imgSrc =
                  currentTheme === "dark"
                    ? SOCIAL_IMAGES_DARK[key]
                    : SOCIAL_IMAGES[key];
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <img
                      src={imgSrc}
                      alt={`${social.name} icon`}
                      className="h-6 w-6"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 gap-x-[72px]">
            {Object.entries(FooterContent.navigation).map(
              ([section, links]) => (
                <div key={section} className="flex flex-col space-y-4">
                  <h3 className="text-gray-900 dark:text-gray font-medium">
                    {section}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.url}
                          className="text-gray-700 dark:text-white-40 hover:text-gray-900 dark:hover:text-white text-[14px] font-light"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <Watermark />
    </footer>
  );
};

export default Footer;
