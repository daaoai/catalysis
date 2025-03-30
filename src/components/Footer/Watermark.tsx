import React from "react";
import useTheme from "@/hooks/useTheme";
import { WATERMARKS } from "../../content/images";

const Watermark = () => {
  const { theme } = useTheme();
  const watermarkSrc = theme === "dark" ? WATERMARKS.DARK : WATERMARKS.LIGHT;
  return (
    <img src={watermarkSrc} className="h-[260px]" alt="Catalysis Watermark" />
  );
};

export default Watermark;
