import Link from "next/link";
import type { ServiceCategory } from "@/lib/services";

export function ServiceCard({ service, alt = false }: { service: ServiceCategory; alt?: boolean }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className={`group block border border-white/10 bg-foreground p-7 text-background transition hover:bg-black ${
        alt ? "blob-card-alt" : "blob-card"
      }`}
    >
      <span className="font-heading text-xs uppercase tracking-widest text-background/50">
        {service.flagship ? "Carro-chefe" : "Serviço"}
      </span>
      <h3 className="mt-3 font-heading text-xl font-medium">{service.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-background/70">{service.tagline}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-background transition group-hover:gap-2.5">
        Saiba mais
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
