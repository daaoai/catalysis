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
        roadmapItemLight: "#ffddab", // Light mode background for roadmap items
        roadmapItemDark: "#3B2607", // Dark mode background for roadmap items
        roadmapBoxLight: "#3B2607", // Light mode background for roadmap box (quarter/year container)
        roadmapBoxLightText: "#F4AB3E", // Light mode text for the roadmap box
        roadmapBoxDark: "#F4AB3E", // Dark mode background for the roadmap box
        roadmapBoxDarkText: "#3B2607", // Dark mode text for the roadmap box
        // CatalystStats / Stat Cards Colors
        statCard1Light: "#C87E10", // First card text in light mode
        statCard1Dark: "#F4AB3E", // First card text in dark mode
        statCard2: "#B417D7", // Second card text (same in both modes)
        statCard3Light: "#085A95", // Third card text in light mode
        statCard3Dark: "#58B2F4", // Third card text in dark mode
        backersDarkBg: "#2E1D1D", // Backers card background in dark mode
        backersDarkText: "#FA6A5E", // Backers card text in dark mode
        backersLightBg: "#ffe5e5", // Backers card background in light mode
        backersLightText: "#AD2022", // Backers card text in light mode
        // PartnerShowcase Colors
        partnerHeaderDark: "#E7E7E7", // Header subtitle in dark mode
        partnerNetworksLight: "#AD2022", // Networks title in light mode
        partnerNetworksDark: "#FA6A5E", // Networks title in dark mode
        partnerBorder: "#FFE5E5", // Border color for the bottom divider
        partnerBorderDark: "#2F2020",
        // FAQContentection Colors
        faqToggleDarkBg: "#2E2E2D", // Toggle container dark background
        faqToggleLightBg: "rgba(181,224,255,0.30)", // Toggle container light background
        faqNonSelectedDark: "#A6A6A6", // Non-selected toggle text in dark mode
        faqQuestionDark: "#FDFDFD", // FAQ question text in dark mode
        faqAnswerDark: "#A6A6A6", // FAQ answer text in dark mode
        // FeaturesSection Colors
        featuresAnswerDark: "#C3C3C3", // Feature card description text in dark mode
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
