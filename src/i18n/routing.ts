import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-br", "en"],
  defaultLocale: "pt-br",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const localeLabels: Record<Locale, string> = {
  "pt-br": "PT",
  en: "EN",
};

export const htmlLang: Record<Locale, string> = {
  "pt-br": "pt-BR",
  en: "en",
};
