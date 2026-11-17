export type ServiceSlug =
  | "branding-identidade-visual"
  | "social-media-conteudo"
  | "producao-audiovisual"
  | "performance-digital"
  | "tecnologia";

export type ServiceCategory = {
  slug: ServiceSlug;
  flagship?: boolean;
};

export const services: ServiceCategory[] = [
  { slug: "branding-identidade-visual", flagship: true },
  { slug: "social-media-conteudo" },
  { slug: "producao-audiovisual" },
  { slug: "performance-digital" },
  { slug: "tecnologia" },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
