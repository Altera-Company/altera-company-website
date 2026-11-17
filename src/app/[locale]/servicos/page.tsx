import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.servicos" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/50">
        {t("pageEyebrow")}
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">{t("pageTitle")}</h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
        {t("pageLead")}
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
