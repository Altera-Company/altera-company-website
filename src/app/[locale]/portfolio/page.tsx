import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { caseStudies } from "@/lib/portfolio";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.portfolio" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portfolio");

  const pendingCategories = t.raw("pendingCategories") as string[];
  const localizedCaseStudies = caseStudies.map((item) => ({
    ...item,
    segment: t(`caseStudies.${item.slug}.segment`),
    category: t(`caseStudies.${item.slug}.category`),
  }));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
        {t("eyebrow")}
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">{t("title")}</h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
        {t("lead")}
      </p>

      <div className="mt-12">
        <h2 className="font-heading text-sm uppercase tracking-wider text-foreground/50">
          {t("casesTitle")}
        </h2>
        <div className="mt-6">
          <Carousel items={localizedCaseStudies} />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-heading text-sm uppercase tracking-wider text-foreground/50">
          {t("updatingTitle")}
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {pendingCategories.map((category, index) => (
            <div
              key={category}
              className={`relative flex aspect-[4/3] flex-col justify-end overflow-hidden border border-black/10 p-6 ${
                index % 2 === 0 ? "blob-card" : "blob-card-alt"
              } bg-gradient-to-br from-black/90 to-black/60`}
            >
              <span className="font-heading text-xs uppercase tracking-widest text-white/50">
                {t("comingSoon")}
              </span>
              <span className="mt-1 font-heading text-lg font-medium text-white">{category}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 blob-card border border-black/10 bg-black/[0.03] p-8 md:p-10">
        <h2 className="font-heading text-xl font-medium">{t("wantMoreTitle")}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
          {t("wantMoreText")}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href={site.instagram.founder} external>
            {t("fullPortfolioButton")}
          </Button>
          <Button href={site.instagram.company} variant="outline" external>
            {t("goToInstagramButton")}
          </Button>
        </div>
      </div>
    </div>
  );
}
