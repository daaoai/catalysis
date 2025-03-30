import React from "react";
import useTheme from "@/hooks/useTheme";
import { LOGOS } from "../../content/images";

const Logo = () => {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? LOGOS.GROUP_DARK : LOGOS.GROUP_LIGHT;
  return <img src={logoSrc} alt="Catalysis Logo" />;
};

export default Logo;
