"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/portfolio", label: "Portfólio" },
  { href: "/sobre", label: "Sobre" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-foreground" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 text-foreground/80 transition hover:text-foreground">
              Serviços
            </button>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-72 rounded-2xl border border-black/10 bg-background p-2 shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servicos/${service.slug}`}
                    className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition hover:bg-black/5 hover:text-foreground"
                  >
                    {service.name}
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
            Solicitar orçamento
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/10 px-6 py-4 md:hidden">
          <span className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Serviços
          </span>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="rounded-xl px-2 py-2.5 text-foreground/80"
              onClick={() => setOpen(false)}
            >
              {service.name}
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
            Solicitar orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}
