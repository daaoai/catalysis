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
        // Base Colors
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
          "40": "#FDFDFD",
          "50": "#CCC6C6",
          DEFAULT: "#ffffff",
        },
        black: {
          "10": "#383737",
          "20": "#323131",
          "30": "#1c1c1a",
          DEFAULT: "#000000",
        },
        gray: {
          DEFAULT: "#CECECE",
        },
        // Existing Card Colors
        lightCard1: "#f0f9ff",
        blogCardDark: "#2E2E2D",
        blogTitle: "#095993",
        darkCard1: "#001860",
        lightCard2: "#fef9ff",
        darkCard2: "#2a192d",
        lightCard3: "#fff9f0",
        darkCard3: "#52360B",
        // Roadmap Component Colors
        roadmapItemLight: "#ffddab",
        roadmapItemDark: "#3B2607",
        roadmapBoxLight: "#3B2607",
        roadmapBoxLightText: "#F4AB3E",
        roadmapBoxDark: "#F4AB3E",
        roadmapBoxDarkText: "#3B2607",
        // CatalystStats / Stat Cards Colors
        statCard1Light: "#C87E10",
        statCard1Dark: "#F4AB3E",
        statCard2: "#B417D7",
        statCard3Light: "#085A95",
        statCard3Dark: "#58B2F4",
        backersDarkBg: "#2E1D1D",
        backersDarkText: "#FA6A5E",
        backersLightBg: "#ffe5e5",
        backersLightText: "#AD2022",
        // PartnerShowcase Colors
        partnerHeaderDark: "#E7E7E7",
        partnerNetworksLight: "#AD2022",
        partnerNetworksDark: "#FA6A5E",
        partnerBorder: "#FFE5E5",
        partnerBorderDark: "#2F2020",
        // FAQContentection Colors
        faqToggleDarkBg: "#2E2E2D",
        faqToggleLightBg: "rgba(181,224,255,0.30)",
        faqNonSelectedDark: "#A6A6A6",
        faqQuestionDark: "#FDFDFD",
        faqAnswerDark: "#A6A6A6",
        // FeaturesSection Colors
        featuresAnswerDark: "#C3C3C3",
        // DeveloperHub Colors (from hex codes in DeveloperHub component)
        devPrimary: "#323131", // Used for text and button background
        devTagBackground: "#F8FFEB", // Background for arc floating tags
        devTagBorder: "#C0E67E", // Border for arc floating tags
        devTagDot: "#65970C", // Tag dot color (light mode)
        devTagDotDark: "#A0CF4D", // Tag dot color (dark mode)
      },
      backgroundImage: {},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        scroll: "scrollUp 10s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        metal: ['"Metal Mania"', "cursive"],
        rocker: ["New Rocker", "cursive"],
        mabry: ["Mabry Pro", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        sans: ["Satoshi", "sans-serif"],
        generalsans: ["General Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        thin: "1px", // Adding 1px border width
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
