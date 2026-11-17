import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços — Altera Company",
  description:
    "Branding, social media, produção audiovisual, performance digital e soluções em tecnologia: conheça as frentes da Altera Company.",
};

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
        Nossas soluções
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">SERVIÇOS</h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
        Cada categoria resolve uma etapa diferente da jornada da sua marca. Da
        identidade visual ao produto digital, você escolhe por onde começar — ou
        combina frentes para construir algo completo.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={service.slug} className={service.flagship ? "md:col-span-2" : ""}>
            <ServiceCard service={service} alt={index % 2 === 1} />
          </div>
        ))}
      </div>
    </div>
  );
}
