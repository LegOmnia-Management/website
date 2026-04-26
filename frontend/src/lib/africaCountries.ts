// Africa countries data for interactive map
export type Organization = 'OHADA' | 'CEDEAO' | 'CEMAC' | 'UEMOA' | 'COMESA' | 'UA';

export interface Country {
  name: string;
  orgs: Organization[];
}

export const COUNTRY_DATA: Record<string, Country> = {
  // OHADA (17 membres)
  BEN: { name: "Bénin", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  BFA: { name: "Burkina Faso", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  CMR: { name: "Cameroun", orgs: ["OHADA", "CEMAC", "UA"] },
  COM: { name: "Comores", orgs: ["OHADA", "COMESA", "UA"] },
  COG: { name: "Congo", orgs: ["OHADA", "CEMAC", "COMESA", "UA"] },
  CIV: { name: "Côte d'Ivoire", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  GAB: { name: "Gabon", orgs: ["OHADA", "CEMAC", "UA"] },
  GIN: { name: "Guinée", orgs: ["OHADA", "CEDEAO", "UA"] },
  GNB: { name: "Guinée-Bissau", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  GNQ: { name: "Guinée équatoriale", orgs: ["OHADA", "CEMAC", "UA"] },
  MLI: { name: "Mali", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  NER: { name: "Niger", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  CAF: { name: "République centrafricaine", orgs: ["OHADA", "CEMAC", "UA"] },
  COD: { name: "République démocratique du Congo", orgs: ["OHADA", "CEMAC", "COMESA", "UA"] },
  SEN: { name: "Sénégal", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  TCD: { name: "Tchad", orgs: ["OHADA", "CEMAC", "UA"] },
  TGO: { name: "Togo", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  // CEDEAO seulement
  CPV: { name: "Cabo Verde", orgs: ["CEDEAO", "UA"] },
  GMB: { name: "Gambie", orgs: ["CEDEAO", "UA"] },
  GHA: { name: "Ghana", orgs: ["CEDEAO", "UA"] },
  LBR: { name: "Liberia", orgs: ["CEDEAO", "UA"] },
  NGA: { name: "Nigeria", orgs: ["CEDEAO", "UA"] },
  SLE: { name: "Sierra Leone", orgs: ["CEDEAO", "UA"] },
  // COMESA seulement
  BDI: { name: "Burundi", orgs: ["COMESA", "UA"] },
  DJI: { name: "Djibouti", orgs: ["COMESA", "UA"] },
  EGY: { name: "Égypte", orgs: ["COMESA", "UA"] },
  ERI: { name: "Érythrée", orgs: ["COMESA", "UA"] },
  SWZ: { name: "Eswatini", orgs: ["COMESA", "UA"] },
  ETH: { name: "Éthiopie", orgs: ["COMESA", "UA"] },
  KEN: { name: "Kenya", orgs: ["COMESA", "UA"] },
  LBY: { name: "Libye", orgs: ["COMESA", "UA"] },
  MDG: { name: "Madagascar", orgs: ["COMESA", "UA"] },
  MWI: { name: "Malawi", orgs: ["COMESA", "UA"] },
  MUS: { name: "Maurice", orgs: ["COMESA", "UA"] },
  UGA: { name: "Ouganda", orgs: ["COMESA", "UA"] },
  RWA: { name: "Rwanda", orgs: ["COMESA", "UA"] },
  SYC: { name: "Seychelles", orgs: ["COMESA", "UA"] },
  SOM: { name: "Somalie", orgs: ["COMESA", "UA"] },
  SDN: { name: "Soudan", orgs: ["COMESA", "UA"] },
  TUN: { name: "Tunisie", orgs: ["COMESA", "UA"] },
  ZMB: { name: "Zambie", orgs: ["COMESA", "UA"] },
  ZWE: { name: "Zimbabwe", orgs: ["COMESA", "UA"] },
  // UA uniquement
  DZA: { name: "Algérie", orgs: ["UA"] },
  AGO: { name: "Angola", orgs: ["UA"] },
  ZAF: { name: "Afrique du Sud", orgs: ["UA"] },
  ESH: { name: "Sahara occidental", orgs: ["UA"] },
  BWA: { name: "Botswana", orgs: ["UA"] },
  MAR: { name: "Maroc", orgs: ["UA"] },
  MOZ: { name: "Mozambique", orgs: ["UA"] },
  NAM: { name: "Namibie", orgs: ["UA"] },
  TZA: { name: "Tanzanie", orgs: ["UA"] },
  SSD: { name: "Soudan du Sud", orgs: ["UA"] },
  STP: { name: "São Tomé-et-Príncipe", orgs: ["UA"] },
  LSO: { name: "Lesotho", orgs: ["UA"] },
  MRT: { name: "Mauritanie", orgs: ["UA"] }
};

export const ORG_COLORS: Record<Organization, string> = {
  OHADA: "#22c55e",
  CEDEAO: "#eab308",
  CEMAC: "#3b82f6",
  UEMOA: "#ec4899",
  COMESA: "#06b6d4",
  UA: "#6366f1"
};

export const ORGANIZATION_LABELS: Record<Organization, string> = {
  OHADA: "Organisation pour l'Harmonisation en Afrique du Droit des Affaires",
  CEDEAO: "Communauté économique des États de l'Afrique de l'Ouest",
  CEMAC: "Communauté économique et monétaire de l'Afrique centrale",
  UEMOA: "Union économique et monétaire ouest-africaine",
  COMESA: "Common Market for Eastern and Southern Africa",
  UA: "Union africaine"
};
