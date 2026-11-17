import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { caseStudies } from "@/lib/portfolio";
import { services } from "@/lib/services";

export default function Home() {
  const flagship = services.find((service) => service.flagship)!;
  const rest = services.filter((service) => !service.flagship);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
          Branding · Conteúdo · Tecnologia
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
          ALTERAMOS A FORMA
          <br />
          COMO SUA MARCA
          <br />
          É VISTA.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
          A Altera Company nasceu da direção criativa de Elyan Sodré e hoje reúne
          branding, conteúdo e uma equipe de engenharia de software para levar sua marca
          da identidade visual ao produto digital — com clareza, estratégia e resultado.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contato">Solicitar orçamento</Button>
          <Button href="/portfolio" variant="outline">
            Ver portfólio
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-3xl font-medium md:text-4xl">Nossas soluções</h2>
          <p className="max-w-md text-sm text-foreground/60">
            Projetos que alinham direção criativa, inteligência de mercado e, agora,
            engenharia de software — segmentados por categoria para atender cada etapa
            do seu negócio.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <ServiceCard service={flagship} />
          </div>
          {rest.map((service, index) => (
            <ServiceCard key={service.slug} service={service} alt={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-black/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
              Carro-chefe
            </p>
            <h2 className="mt-4 font-heading text-3xl font-medium md:text-4xl">
              Direção criativa por Elyan Sodré
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/70">
              Branding, identidade visual e conteúdo que comunicam com clareza e geram
              conexão real com o público — a base sobre a qual a Altera Company
              construiu sua reputação e que segue sendo nosso carro-chefe.
            </p>
            <div className="mt-8">
              <Button href="/portfolio" variant="outline">
                Conferir portfólio completo
              </Button>
            </div>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="blob-card group block overflow-hidden border border-black/10 bg-background"
            >
              <div className="relative aspect-[1003/706] w-full">
                <Image
                  src={caseStudies[0].image}
                  alt={`${caseStudies[0].category} — ${caseStudies[0].client}`}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="px-6 py-4">
                <p className="font-heading text-sm font-medium">{caseStudies[0].client}</p>
                <p className="text-xs text-foreground/50">{caseStudies[0].category}</p>
              </div>
            </Link>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {caseStudies.slice(1).map((item) => (
                <Link
                  key={item.slug}
                  href="/portfolio"
                  className="group relative block aspect-[1003/706] overflow-hidden rounded-2xl border border-black/10"
                >
                  <Image
                    src={item.image}
                    alt={`${item.category} — ${item.client}`}
                    fill
                    sizes="260px"
                    className="object-cover transition group-hover:scale-[1.04]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="blob-card-alt bg-foreground px-8 py-14 text-center text-background md:px-16">
          <h2 className="font-heading text-3xl font-medium md:text-4xl">
            Pronto para alterar a forma como sua marca é vista?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-background/70">
            Conte pra gente qual etapa do seu negócio precisa de atenção — a gente
            monta a solução certa, da identidade visual ao produto digital.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contato" className="bg-background text-foreground hover:opacity-85">
              Solicitar orçamento
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
