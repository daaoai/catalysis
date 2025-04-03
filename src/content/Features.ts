import { FEATURE_IMAGES, FEATURE_IMAGES_DARK } from "./Images";

export interface Feature {
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
  };
  bgColor: {
    light: string;
    dark: string;
  };
}

export const featurePageContent = {
  title: "Features",
  description:
    "Explore the core benefits of building with Catalysis - from security and infrastructure to speed and simplicity.",
  button: "Start Building",
};

export const features: Feature[] = [
  {
    title: "Unified Shared Security ",
    description:
      "Access economic security from multiple restaking protocols across Ethereum, Bitcoin, Solana and more - all through a single unified abstraction.",
    image: {
      light: FEATURE_IMAGES.CARD1,
      dark: FEATURE_IMAGES_DARK.CARD1,
    },
    bgColor: {
      light: "bg-lightCard1",
      dark: "bg-darkCard1",
    },
  },
  {
    title: "Simplified Node Infrastructure",
    description:
      "Run networks on new restaking protocols without building custom infrastructure — simplifying operations for node operators and accelerating onboarding of new networks.",
    image: {
      light: FEATURE_IMAGES.CARD2,
      dark: FEATURE_IMAGES_DARK.CARD2,
    },
    bgColor: {
      light: "bg-lightCard2",
      dark: "bg-darkCard2",
    },
  },
  {
    title: "Standard Network Stack",
    description:
      "A shared framework simplifies risk evaluation and delegation for curators and LRTs and makes networks easier to run for node operators.",
    image: {
      light: FEATURE_IMAGES.CARD3,
      dark: FEATURE_IMAGES_DARK.CARD3,
    },
    bgColor: {
      light: "bg-lightCard3",
      dark: "bg-darkCard3",
    },
  },
  {
    title: "Accelerated Go-To-Market",
    description:
      "Launch networks faster and cheaper with a modular SDK that abstracts the complexity of shared security infrastructure — simplifying development and cutting time-to-market.",
    image: {
      light: FEATURE_IMAGES.CARD4,
      dark: FEATURE_IMAGES_DARK.CARD3,
    },
    bgColor: {
      light: "bg-[#FFF5F5]",
      dark: "bg-darkCard3",
    },
  },
];
