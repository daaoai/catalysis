import React from "react";
import useTheme from "@/hooks/useTheme";
import { WATERMARKS } from "../../content/Images";

const Watermark = () => {
  const { theme } = useTheme();
  const watermarkSrc = theme === "dark" ? WATERMARKS.DARK : WATERMARKS.LIGHT;
  return (
    <img
      src={watermarkSrc}
      className="h-[60px] md:h-[260px] w-full"
      alt="Catalysis Watermark"
    />
  );
};

export default Watermark;
