import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contato" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContatoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
        {t("eyebrow")}
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">{t("title")}</h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
        {t("lead")}
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        <a
          href={site.instagram.company}
          target="_blank"
          rel="noreferrer"
          className="blob-card border border-black/10 bg-black/[0.03] p-8 transition hover:bg-black/5"
        >
          <span className="font-heading text-xs uppercase tracking-widest text-foreground/50">
            {t("instagramLabel")}
          </span>
          <p className="mt-3 font-heading text-lg font-medium">{t("companyHandle")}</p>
          <p className="mt-2 text-sm text-foreground/60">{t("companyText")}</p>
        </a>

        <a
          href={site.instagram.founder}
          target="_blank"
          rel="noreferrer"
          className="blob-card-alt border border-black/10 bg-black/[0.03] p-8 transition hover:bg-black/5"
        >
          <span className="font-heading text-xs uppercase tracking-widest text-foreground/50">
            {t("instagramLabel")}
          </span>
          <p className="mt-3 font-heading text-lg font-medium">{t("founderHandle")}</p>
          <p className="mt-2 text-sm text-foreground/60">{t("founderText")}</p>
        </a>
      </div>

      <div className="mt-10">
        <Button href={site.instagram.company} external>
          {t("ctaButton")}
        </Button>
      </div>
    </div>
  );
}
