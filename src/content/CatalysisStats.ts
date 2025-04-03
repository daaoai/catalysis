import { STAT_IMAGES, STAT_IMAGES_DARK } from "./Images";

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
      light: "text-statCard1Light",
      dark: "text-statCard1Dark",
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
      light: "text-statCard2",
      dark: "text-statCard2",
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
      light: "text-statCard3Light",
      dark: "text-statCard3Dark",
    },
  },
];

export const pageHeading = {
  title: "Catalysis by the numbers",
  subtitle:
    "From security coverage to speed of deployment - here’s how Catalysis is transforming the restaking landscape, one number at a time.",
};

export const backers = [
  "Coinbase Ventures",
  "Binance Labs",
  "Hashed",
  "Play Ventures",
  "Arche Fund",
];
