import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { caseStudies } from "@/lib/portfolio";
import { services } from "@/lib/services";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tPortfolio = await getTranslations("portfolio");

  const flagship = services.find((service) => service.flagship)!;
  const rest = services.filter((service) => !service.flagship);

  const featured = {
    ...caseStudies[0],
    category: tPortfolio(`caseStudies.${caseStudies[0].slug}.category`),
  };

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
          {t("eyebrow")}
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
          {t("headlineLine1")}
          <br />
          {t("headlineLine2")}
          <br />
          {t("headlineLine3")}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
          {t("lead")}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contato">{t("ctaQuote")}</Button>
          <Button href="/portfolio" variant="outline">
            {t("ctaPortfolio")}
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-3xl font-medium md:text-4xl">{t("solutionsTitle")}</h2>
          <p className="max-w-md text-sm text-foreground/60">{t("solutionsLead")}</p>
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
              {t("flagshipEyebrow")}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-medium md:text-4xl">
              {t("flagshipTitle")}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/70">
              {t("flagshipText")}
            </p>
            <div className="mt-8">
              <Button href="/portfolio" variant="outline">
                {t("flagshipCta")}
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
                  src={featured.image}
                  alt={`${featured.category} — ${featured.client}`}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="px-6 py-4">
                <p className="font-heading text-sm font-medium">{featured.client}</p>
                <p className="text-xs text-foreground/50">{featured.category}</p>
              </div>
            </Link>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {caseStudies.slice(1).map((item) => {
                const category = tPortfolio(`caseStudies.${item.slug}.category`);
                return (
                  <Link
                    key={item.slug}
                    href="/portfolio"
                    className="group relative block aspect-[1003/706] overflow-hidden rounded-2xl border border-black/10"
                  >
                    <Image
                      src={item.image}
                      alt={`${category} — ${item.client}`}
                      fill
                      sizes="260px"
                      className="object-cover transition group-hover:scale-[1.04]"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="blob-card-alt bg-foreground px-8 py-14 text-center text-background md:px-16">
          <h2 className="font-heading text-3xl font-medium md:text-4xl">{t("ctaSectionTitle")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/70">{t("ctaSectionText")}</p>
          <div className="mt-8 flex justify-center">
            <Button href="/contato" className="bg-background text-foreground hover:opacity-85">
              {t("ctaSectionButton")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
