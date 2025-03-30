export interface DeveloperHubContent {
  title: string;
  description: string;
  buttonStart: string;
  buttonDocs: string;
  backgroundImage: string;
  tags: string[];
}

export const developerHubContent: DeveloperHubContent = {
  title: "Developer Hub",
  description:
    "Build. Integrate. Scale. Catalysis provides everything you need to seamlessly integrate shared security and launch decentralized networks.",
  buttonStart: "Start Building",
  buttonDocs: "Read Docs",
  backgroundImage: "/FrameDeveloperHub.png", // Replace with your actual path if needed
  tags: [
    "Oracles",
    "Prediction Markets",
    "AI Inference Engines",
    "ZK Co-Processors",
    "Intents Solvers",
    "Keeper Network",
  ],
};
