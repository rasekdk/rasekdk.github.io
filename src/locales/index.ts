import { LOCALES_KEYS } from "@/constants/locales";
import type { Translations } from "@/interfaces/Locales";
import en from "@/locales/en";

type LocaleKey = keyof typeof LOCALES_KEYS;

const LOCALES: Record<LocaleKey, Translations> = {
  [LOCALES_KEYS.EN]: en,
};

function getLocaleText(route: string, lang: LocaleKey = "EN") {
  // Split the route by dot to handle nested keys
  const keys = route.split(".") as (keyof Translations | string)[];

  // Get the locale object for the specified language
  let locale: any = LOCALES[lang];

  // Traverse the locale object using the keys
  for (let key of keys) {
    locale = locale[key];
  }

  if (typeof locale === "object") {
    locale = locale.__self;
  }

  // Return the final value
  return locale;
}

export { getLocaleText };
