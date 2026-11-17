import Link from "next/link";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const CURRENT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo className="text-background" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-wider text-background/50">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="text-background/80 transition hover:text-background"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-wider text-background/50">
            Altera Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/portfolio" className="text-background/80 transition hover:text-background">
                Portfólio
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-background/80 transition hover:text-background">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-background/80 transition hover:text-background">
                Contato
              </Link>
            </li>
            <li>
              <a
                href={site.instagram.company}
                target="_blank"
                rel="noreferrer"
                className="text-background/80 transition hover:text-background"
              >
                @alteracompany
              </a>
            </li>
            <li>
              <a
                href={site.instagram.founder}
                target="_blank"
                rel="noreferrer"
                className="text-background/80 transition hover:text-background"
              >
                @elyansodre
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-background/50">
        © {CURRENT_YEAR} Altera Company. Todos os direitos reservados.
      </div>
    </footer>
  );
}
