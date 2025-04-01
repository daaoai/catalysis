import React from "react";
import useTheme from "@/hooks/useTheme";
import { ECOSYSTEM_FOOTER } from "../../content/Images";

const Footer = () => {
  const { theme } = useTheme();
  const footerSrc =
    theme === "dark" ? ECOSYSTEM_FOOTER.DARK : ECOSYSTEM_FOOTER.LIGHT;
  return <img src={footerSrc} alt="Catalysis Footer" />;
};

export default Footer;
