import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato — Altera Company",
  description: "Fale com a Altera Company e solicite um orçamento para o seu projeto.",
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
        Contato
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">FALE COM A GENTE</h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
        Conte qual solução você precisa — branding, social media, audiovisual,
        performance ou tecnologia — e retornamos com os próximos passos.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        <a
          href={site.instagram.company}
          target="_blank"
          rel="noreferrer"
          className="blob-card border border-black/10 bg-black/[0.03] p-8 transition hover:bg-black/5"
        >
          <span className="font-heading text-xs uppercase tracking-widest text-foreground/50">
            Instagram
          </span>
          <p className="mt-3 font-heading text-lg font-medium">@alteracompany</p>
          <p className="mt-2 text-sm text-foreground/60">
            Envie uma mensagem direta com seu projeto.
          </p>
        </a>

        <a
          href={site.instagram.founder}
          target="_blank"
          rel="noreferrer"
          className="blob-card-alt border border-black/10 bg-black/[0.03] p-8 transition hover:bg-black/5"
        >
          <span className="font-heading text-xs uppercase tracking-widest text-foreground/50">
            Instagram
          </span>
          <p className="mt-3 font-heading text-lg font-medium">@elyansodre</p>
          <p className="mt-2 text-sm text-foreground/60">
            Fale diretamente com o diretor criativo.
          </p>
        </a>
      </div>

      <div className="mt-10">
        <Button href={site.instagram.company} external>
          Solicitar orçamento pelo Instagram
        </Button>
      </div>
    </div>
  );
}
