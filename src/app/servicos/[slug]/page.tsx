import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} — Altera Company`,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24">
        <Link href="/servicos" className="text-sm text-foreground/50 hover:text-foreground">
          ← Todos os serviços
        </Link>
        <p className="mt-6 font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
          {service.flagship ? "Carro-chefe" : "Serviço"}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">
          {service.name.toUpperCase()}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70">{service.tagline}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            {service.description}
          </p>

          <div className="blob-card border border-black/10 bg-black/[0.03] p-8">
            <h2 className="font-heading text-sm uppercase tracking-wider text-foreground/50">
              O que entregamos
            </h2>
            <ul className="mt-5 space-y-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="/contato">Solicitar orçamento</Button>
          <Button href="/portfolio" variant="outline">
            Ver portfólio
          </Button>
        </div>
      </section>

      <section className="border-t border-black/10 bg-black/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-2xl font-medium">Outras soluções</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/servicos/${item.slug}`}
                className="rounded-full border border-black/15 px-5 py-2.5 text-sm text-foreground/80 transition hover:border-foreground hover:text-foreground"
              >
                {item.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
