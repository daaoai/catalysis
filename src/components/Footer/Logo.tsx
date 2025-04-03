import React from "react";
import useTheme from "@/hooks/useTheme";
import { LOGOS } from "../../content/Images";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? LOGOS.GROUP_DARK : LOGOS.GROUP_LIGHT;
  return <Image width={200} height={200} src={logoSrc} alt="Catalysis Logo" />;
};

export default Logo;
