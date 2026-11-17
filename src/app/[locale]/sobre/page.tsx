import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.sobre" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function SobrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24">
        <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
          {t("eyebrow")}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">{t("title")}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">{t("lead")}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div className="blob-card border border-black/10 bg-black/[0.03] p-8 md:p-10">
            <h2 className="font-heading text-xl font-medium">{t("founderName")}</h2>
            <p className="mt-1 text-sm text-foreground/50">{t("founderRole")}</p>
            <p className="mt-5 text-sm leading-relaxed text-foreground/80">{t("founderBio")}</p>
          </div>

          <div className="blob-card-alt border border-black/10 bg-foreground p-8 text-background md:p-10">
            <h2 className="font-heading text-xl font-medium">{t("teamTitle")}</h2>
            <p className="mt-5 text-sm leading-relaxed text-background/80">{t("teamText1")}</p>
            <p className="mt-4 text-sm leading-relaxed text-background/80">{t("teamText2")}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="/portfolio" variant="outline">
            {t("viewPortfolio")}
          </Button>
          <Button href="/contato">{t("requestQuote")}</Button>
        </div>
      </section>
    </div>
  );
}
