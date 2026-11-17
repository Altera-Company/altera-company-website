import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Sobre — Altera Company",
  description:
    "A história da Altera Company: direção criativa de Elyan Sodré e uma equipe em expansão para entregar também soluções em tecnologia.",
};

export default function SobrePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24">
        <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
          Sobre
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">
          ALTERA COMPANY
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
          Uma marca que nasceu do design e está crescendo para entregar tecnologia —
          sem perder a clareza e a conexão que sempre nos guiaram.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div className="blob-card border border-black/10 bg-black/[0.03] p-8 md:p-10">
            <h2 className="font-heading text-xl font-medium">Elyan Sodré</h2>
            <p className="mt-1 text-sm text-foreground/50">CEO e Diretor Criativo</p>
            <p className="mt-5 text-sm leading-relaxed text-foreground/80">
              Graduado em Análise e Desenvolvimento de Sistemas pela Estácio de Sá e em
              Design Gráfico pela Unopar, Elyan fundou a Altera Company com forte
              atuação em branding, direção criativa e design para redes sociais. Seu
              trabalho é criar identidades visuais e conteúdos que comuniquem com
              clareza, posicionem marcas e gerem conexão real com o público.
            </p>
          </div>

          <div className="blob-card-alt border border-black/10 bg-foreground p-8 text-background md:p-10">
            <h2 className="font-heading text-xl font-medium">Um time em expansão</h2>
            <p className="mt-5 text-sm leading-relaxed text-background/80">
              A Altera Company segue com o branding e o conteúdo como carro-chefe, mas
              nosso time cresceu: hoje também contamos com uma equipe dedicada de
              engenharia de software, ampliando o que entregamos para incluir sites,
              aplicativos, dashboards e plataformas sob medida.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-background/80">
              O objetivo continua o mesmo — comunicar com clareza e gerar conexão real
              — agora aplicado também à construção de produtos digitais completos.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="/portfolio" variant="outline">
            Ver portfólio
          </Button>
          <Button href="/contato">Solicitar orçamento</Button>
        </div>
      </section>
    </div>
  );
}
