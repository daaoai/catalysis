export interface RoadmapItem {
  quarter: string;
  year: string;
  title: string;
  description: string;
}

export const roadmapSection = {
  backgroundImage: "/Roadmap.png",
  heading: "Roadmap",
  description:
    "Catalysis moves quickly - integrating top restaking protocols and launching its mainnet within Q2 2025. Here's what’s coming.",
};

export const roadmapItems: RoadmapItem[] = [
  {
    quarter: "Q2’",
    year: "25",
    title: "Testnet 1",
    description: "Integrating Eigenlayer, Symbiotic and Kernel DAO",
  },
  {
    quarter: "Q2’",
    year: "25",
    title: "Testnet 2",
    description: "Integrating Babylon, Satlayer, Milkyway",
  },
  {
    quarter: "Q2’",
    year: "25",
    title: "Mainnet",
    description: "Catalysis Network Mainnet",
  },
];
