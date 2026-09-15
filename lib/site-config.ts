// Jedyne miejsce, z którego reszta aplikacji czyta adres domeny. Dzięki temu
// podmiana docelowej domeny (na razie nieprzydzielonej) to zmiana jednej
// zmiennej środowiskowej, a nie przeszukiwanie kodu.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (rawSiteUrl && rawSiteUrl.length > 0
  ? rawSiteUrl
  : "https://twoja-domena-tutaj.pl"
).replace(/\/+$/, "");

const siteHost = new URL(siteUrl).host;

export const siteConfig = {
  url: siteUrl,
  host: siteHost,
  contactEmail: `kontakt@${siteHost}`,
  legalEmail: `dane-osobowe@${siteHost}`,
  title: "Strategia przeglądarkowa dla jednego gracza — bez pobierania, bez pośpiechu",
  shortTitle: "Strategia przeglądarkowa jednoosobowa",
  description:
    "Turowo-czasowa strategia przeglądarkowa dla jednego gracza: gospodarka, drzewo technologii, twierdze i kampania bez presji rywali online. Grasz we własnym tempie, w karcie przeglądarki.",
  locale: "pl_PL",
  language: "pl",
  themeColor: "#c98a3e",
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || null,
  },
} as const;

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
