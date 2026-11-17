export type CaseStudy = {
  slug: string;
  client: string;
  segment: string;
  category: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dra-geisa-jatoba",
    client: "Dra. Geisa Jatobá",
    segment: "Medicina / Estética",
    category: "Social Media e Conteúdo",
    image: "/portfolio/dra-geisa-jatoba.webp",
  },
  {
    slug: "posto-ipanema",
    client: "Posto Ipanema",
    segment: "Varejo / Combustíveis",
    category: "Social Media e Conteúdo",
    image: "/portfolio/posto-ipanema.webp",
  },
  {
    slug: "clinica-bellmed",
    client: "Clínica Bellmed",
    segment: "Saúde",
    category: "Social Media e Conteúdo",
    image: "/portfolio/clinica-bellmed.webp",
  },
];
