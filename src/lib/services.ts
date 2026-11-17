export type ServiceCategory = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  highlights: string[];
  flagship?: boolean;
};

export const services: ServiceCategory[] = [
  {
    slug: "branding-identidade-visual",
    name: "Branding e Identidade Visual",
    shortName: "Branding",
    tagline: "Marcas autênticas que se posicionam com autoridade.",
    description:
      "Desenvolvemos desde o logotipo até o manual de marca completo e o sistema visual que sustenta cada aplicação da sua empresa — garantindo consistência em qualquer ponto de contato com o público.",
    highlights: [
      "Logotipo e sistema visual",
      "Manual de marca completo",
      "Direção criativa e de posicionamento",
      "Aplicações de marca em materiais gráficos",
    ],
    flagship: true,
  },
  {
    slug: "social-media-conteudo",
    name: "Social Media e Conteúdo",
    shortName: "Social Media",
    tagline: "Gestão estratégica que fortalece sua presença digital.",
    description:
      "Cuidamos do seu perfil de ponta a ponta: criação de posts, carrosséis e stories com design profissional, organização de feed e gerenciamento focados em gerar conexão real com o seu público.",
    highlights: [
      "Posts, carrosséis e stories",
      "Organização e curadoria de feed",
      "Calendário e gerenciamento de perfil",
      "Produção de fotos para conteúdo",
    ],
  },
  {
    slug: "producao-audiovisual",
    name: "Produção Audiovisual",
    shortName: "Audiovisual",
    tagline: "Vídeos que engajam e convertem.",
    description:
      "Cuidamos de todo o processo — da criação de roteiros e conceitos visuais até a edição final — entregando conteúdos dinâmicos para Reels, TikTok e anúncios.",
    highlights: [
      "Roteiro e conceito visual",
      "Captação de imagem e áudio",
      "Edição e finalização",
      "Conteúdo para Reels, TikTok e anúncios",
    ],
  },
  {
    slug: "performance-digital",
    name: "Performance Digital",
    shortName: "Performance",
    tagline: "Estratégias focadas em resultado e escala.",
    description:
      "Gerenciamos campanhas de tráfego pago desenhadas para escalar o alcance da sua marca e aumentar suas vendas, com acompanhamento constante de métricas e otimização contínua.",
    highlights: [
      "Planejamento e gestão de tráfego pago",
      "Otimização contínua de campanhas",
      "Acompanhamento de métricas e resultado",
      "Estratégia de funil alinhada ao negócio",
    ],
  },
  {
    slug: "tecnologia",
    name: "Soluções em Tecnologia",
    shortName: "Tecnologia",
    tagline: "Produtos digitais sob medida para cada etapa do seu negócio.",
    description:
      "Nossa frente mais recente: unimos o olhar de marca da Altera Company a uma equipe de engenharia de software para desenvolver, do básico ao avançado, o produto digital que o seu negócio precisa — da primeira landing page a plataformas completas.",
    highlights: [
      "Landing pages e websites institucionais",
      "Aplicativos sob medida (ex: gestão para clínicas)",
      "Dashboards e painéis de dados",
      "Plataformas para times e operações comerciais",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
