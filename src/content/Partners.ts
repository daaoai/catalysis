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
      { id: "CAPX", alt: "CAPX" },
      { id: "BANCO_CENTRAL", alt: "Banco Central do Brasil" },
      { id: "JPMORGANCHASE", alt: "JPMorgan Chase" },
      { id: "INFERENCE", alt: "Inference" },
      { id: "MONETARY_AUTHORITY", alt: "Monetary Authority of Singapore" },
    ],
  },
  {
    headerTitle: "Ecosystem Partners",
    headerSubtitle: "Powering the future with Industry Leaders",
    networksTitle: "Networks",
    partners: [
      { id: "INFERENCE", alt: "Inference" },
      { id: "MONETARY_AUTHORITY", alt: "Monetary Authority of Singapore" },
      { id: "CAPX", alt: "CAPX" },
      { id: "BANCO_CENTRAL", alt: "Banco Central do Brasil" },
      { id: "JPMORGANCHASE", alt: "JPMorgan Chase" },
    ],
  },
  {
    headerTitle: "Ecosystem Partners",
    headerSubtitle: "Powering the future with Industry Leaders",
    networksTitle: "Networks",
    partners: [
      { id: "JPMORGANCHASE", alt: "JPMorgan Chase" },
      { id: "CAPX", alt: "CAPX" },
      { id: "INFERENCE", alt: "Inference" },
      { id: "BANCO_CENTRAL", alt: "Banco Central do Brasil" },
      { id: "MONETARY_AUTHORITY", alt: "Monetary Authority of Singapore" },
    ],
  },
  {
    headerTitle: "Ecosystem Partners",
    headerSubtitle: "Powering the future with Industry Leaders",
    networksTitle: "Networks",
    partners: [
      { id: "BANCO_CENTRAL", alt: "Banco Central do Brasil" },
      { id: "MONETARY_AUTHORITY", alt: "Monetary Authority of Singapore" },
      { id: "INFERENCE", alt: "Inference" },
      { id: "JPMORGANCHASE", alt: "JPMorgan Chase" },
      { id: "CAPX", alt: "CAPX" },
    ],
  },
];
