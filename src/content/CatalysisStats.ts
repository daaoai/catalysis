import { STAT_IMAGES, STAT_IMAGES_DARK } from "./images";

export interface StatCard {
  title: string;
  value: string;
  img: {
    light: string;
    dark: string;
  };
  textColor: {
    light: string;
    dark: string;
  };
}

export const statCards: StatCard[] = [
  {
    title: "AVS Builds",
    value: "1.5M",
    img: {
      light: STAT_IMAGES.CARD1,
      dark: STAT_IMAGES_DARK.CARD1,
    },
    textColor: {
      light: "text-[#C87E10]",
      dark: "text-[#F4AB3E]", // Change if you want a different color in dark mode
    },
  },
  {
    title: "AVS Builds",
    value: "500K+",
    img: {
      light: STAT_IMAGES.CARD2,
      dark: STAT_IMAGES_DARK.CARD2,
    },
    textColor: {
      light: "text-[#B417D7]",
      dark: "text-[#B417D7]",
    },
  },
  {
    title: "AVS Builds",
    value: "23K+",
    img: {
      light: STAT_IMAGES.CARD3,
      dark: STAT_IMAGES_DARK.CARD3,
    },
    textColor: {
      light: "text-[#085A95]",
      dark: "text-[#58B2F4]",
    },
  },
];

export const pageHeading = {
  title: "Catalysis by the numbers",
  subtitle:
    "Lorem ultriceipsum dolor sit amet consectetur. Mauris cursus sit nulla faucibus urna. Molestie elit magna rhoncus",
};

export const backers = [
  "Coinbase Ventures",
  "Binance Labs",
  "Hashed",
  "Play Ventures",
  "Arche Fund",
];
