import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          "10": "#D1F7E7",
          "20": "#A7F3D0",
          "30": "#6EE7B7",
          "40": "#34D399",
          "50": "#10B981",
          "60": "#065F46",
        },
        white: {
          "10": "#F9FAFB",
          "20": "#F3F4F6",
          "30": "#E5E7EB",
          DEFAULT: "#ffffff",
        },
        black: {
          "10": "#1F2937",
          "20": "#111827",
          "30": "#000000",
        },
      },
      backgroundImage: {},
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        scroll: "scrollUp 10s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        metal: ['Metal Mania"', "cursive"],
        rocker: ["New Rocker", "cursive"],
        mabry: ["Mabry Pro", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
