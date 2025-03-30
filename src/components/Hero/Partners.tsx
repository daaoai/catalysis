import React from "react";
import useTheme from "@/hooks/useTheme";
import { PARTNERS } from "../../content/Images";

const Partners: React.FC = () => {
  const { theme } = useTheme();
  const PartnersSrc = theme === "dark" ? PARTNERS.DARK : PARTNERS.LIGHT;

  return (
    <div className="overflow-hidden mt-16">
      <div className="flex" style={{ animation: "scroll 20s linear infinite" }}>
        <img src={PartnersSrc} alt="Catalysis Partners" className="w-auto" />
        <img src={PartnersSrc} alt="Catalysis Partners" className="w-auto" />
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
