export type CaseStudy = {
  slug: string;
  client: string;
  image: string;
};

export type LocalizedCaseStudy = CaseStudy & {
  segment: string;
  category: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dra-geisa-jatoba",
    client: "Dra. Geisa Jatobá",
    image: "/portfolio/dra-geisa-jatoba.webp",
  },
  {
    slug: "posto-ipanema",
    client: "Posto Ipanema",
    image: "/portfolio/posto-ipanema.webp",
  },
  {
    slug: "clinica-dellmed",
    client: "Clínica DellMed",
    image: "/portfolio/clinica-dellmed.webp",
  },
];
