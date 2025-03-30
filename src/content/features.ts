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
    "Lorem ultriceipsum dolor sit amet consectetur. Mauris cursus sit nulla faucibus urna. Molestie elit magna rhoncus posuere amet etiam duis pharetra. Nascetur porttitor tellusultrices lacinia nunc vestibulum ultricies ante elementum quam.",
  button: "Start Building",
};

export const features: Feature[] = [
  {
    title: "Multi-Ecosystem Support",
    description:
      "Build once, deploy anywhere - seamlessly integrate restaking protocols across Ethereum, Babylon, Solana, BSC Chain and many more.",
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
    title: "Dynamic Security Rebalancing",
    description:
      "Rebalance and allocate economic security across multiple re-staking protocols to reduce security costs and spread network risk.",
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
    title: "Accelerated GTM",
    description:
      "Launch decentralized networks faster with developer-friendly SDKs, clear documentation and save up to 80% on development costs.",
    image: {
      light: FEATURE_IMAGES.CARD3,
      dark: FEATURE_IMAGES_DARK.CARD3,
    },
    bgColor: {
      light: "bg-lightCard3",
      dark: "bg-darkCard3",
    },
  },
];
