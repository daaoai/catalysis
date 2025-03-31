export interface Partner {
  id: string;
  alt: string;
}

export const partners: Partner[] = [
  { id: "INFERENCE", alt: "Inference" },
  { id: "CENTRIFUGE", alt: "Centrifuge" },
  { id: "JPMORGANCHASE", alt: "JPMorgan Chase" },
  { id: "MONETARY_AUTHORITY", alt: "Monetary Authority of Singapore" },
  { id: "BANCO_CENTRAL", alt: "Banco Central do Brasil" },
];

export const partnerShowcaseContent = {
  headerTitle: "Ecosystem Partners",
  headerSubtitle: "Powering the future with Industry Leaders",
  networksTitle: "Networks",
};
