export interface Partner {
  id: string;
  alt: string;
}

export const PartnerContent: {
  headerTitle: string;
  headerSubtitle: string;
  networksTitle: string;
  partners: Partner[];
}[] = [
  {
    headerTitle: "Ecosystem Partners",
    headerSubtitle: "Powering the future with Industry Leaders",
    networksTitle: "Networks",
    partners: [
      { id: "INFERENCE", alt: "Inference" },
      { id: "CAPX", alt: "CAPX" },
      { id: "DITTO", alt: "Ditto" },
    ],
  },
  {
    headerTitle: "Ecosystem Partners",
    headerSubtitle: "Powering the future with Industry Leaders",
    networksTitle: "Networks",
    partners: [
      { id: "BLOCKSCAPE", alt: "Blockscape" },
      { id: "COSMOSTATION", alt: "Cosmostation" },
      { id: "BLOCKPI", alt: "Blockpi" },
      { id: "STAKELY", alt: "Stakely" },
      { id: "NODEINFRA", alt: "NodeInfra" },
      { id: "MELLOW", alt: "Mellow" },
    ],
  },
  {
    headerTitle: "Ecosystem Partners",
    headerSubtitle: "Powering the future with Industry Leaders",
    networksTitle: "Networks",
    partners: [
      { id: "EIGENLAYER", alt: "Eigenlayer" },
      { id: "SYMBIOTIC", alt: "Symbiotic" },
      { id: "KERNEL", alt: "Kernel" },
      { id: "SATLAYER", alt: "SatLayer" },
      { id: "BABYLON", alt: "Babylon" },
      { id: "MILKYWAY", alt: "Milkyway" },
    ],
  },
  {
    headerTitle: "Ecosystem Partners",
    headerSubtitle: "Powering the future with Industry Leaders",
    networksTitle: "Networks",
    partners: [
      { id: "MELLOW", alt: "Mellow" },
      { id: "LEVEL", alt: "Level" },
      { id: "INCEPTION", alt: "Inception" },
    ],
  },
];
