import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { caseStudies } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfólio — Altera Company",
  description:
    "Branding, identidade visual, social media e produção audiovisual assinados por Elyan Sodré, o carro-chefe da Altera Company.",
};

const pendingCategories = ["Identidade Visual", "Produção Audiovisual", "Materiais Gráficos"];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
        Carro-chefe
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">PORTFÓLIO</h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
        Nos últimos anos, Elyan Sodré participou de dezenas de projetos de branding,
        captação e edição de vídeo e criação de identidade visual — a base sobre a
        qual a Altera Company construiu sua reputação.
      </p>

      <div className="mt-12">
        <h2 className="font-heading text-sm uppercase tracking-wider text-foreground/50">
          Cases reais
        </h2>
        <div className="mt-6">
          <Carousel items={caseStudies} />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-heading text-sm uppercase tracking-wider text-foreground/50">
          Em atualização
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {pendingCategories.map((category, index) => (
            <div
              key={category}
              className={`relative flex aspect-[4/3] flex-col justify-end overflow-hidden border border-black/10 p-6 ${
                index % 2 === 0 ? "blob-card" : "blob-card-alt"
              } bg-gradient-to-br from-black/90 to-black/60`}
            >
              <span className="font-heading text-xs uppercase tracking-widest text-white/50">
                Em breve
              </span>
              <span className="mt-1 font-heading text-lg font-medium text-white">{category}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 blob-card border border-black/10 bg-black/[0.03] p-8 md:p-10">
        <h2 className="font-heading text-xl font-medium">Quer ver mais?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
          Esta página segue recebendo peças definitivas do portfólio. Enquanto isso,
          confira o trabalho completo de Elyan Sodré e da Altera Company direto no
          Instagram.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href={site.instagram.founder} external>
            Portfólio completo @elyansodre
          </Button>
          <Button href={site.instagram.company} variant="outline" external>
            @alteracompany
          </Button>
        </div>
      </div>
    </div>
  );
}
