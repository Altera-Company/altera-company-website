"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { services } from "@/lib/services";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const tServices = useTranslations("services");

  const navLinks = [
    { href: "/portfolio", label: t("portfolio") },
    { href: "/sobre", label: t("sobre") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-foreground" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 text-foreground/80 transition hover:text-foreground">
              {t("servicos")}
            </button>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-72 rounded-2xl border border-black/10 bg-background p-2 shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servicos/${service.slug}`}
                    className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition hover:bg-black/5 hover:text-foreground"
                  >
                    {tServices(`items.${service.slug}.name`)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="rounded-full bg-foreground px-5 py-2.5 text-background transition hover:opacity-85"
          >
            {t("cta")}
          </Link>
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label={t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/10 px-6 py-4 md:hidden">
          <span className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            {t("servicos")}
          </span>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="rounded-xl px-2 py-2.5 text-foreground/80"
              onClick={() => setOpen(false)}
            >
              {tServices(`items.${service.slug}.name`)}
            </Link>
          ))}
          <div className="my-2 h-px bg-black/10" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-2 py-2.5 text-foreground/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="mt-2 rounded-full bg-foreground px-5 py-3 text-center text-background"
            onClick={() => setOpen(false)}
          >
            {t("cta")}
          </Link>
        </nav>
      )}
    </header>
  );
}
