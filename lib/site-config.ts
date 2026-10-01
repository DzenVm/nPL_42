// Jedyne miejsce, z którego reszta aplikacji czyta adres domeny.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (rawSiteUrl && rawSiteUrl.length > 0
  ? rawSiteUrl
  : "https://namtofa.biz"
).replace(/\/+$/, "");

const siteHost = new URL(siteUrl).host;

export const siteConfig = {
  url: siteUrl,
  host: siteHost,
  contactEmail: `kontakt@${siteHost}`,
  legalEmail: `dane-osobowe@${siteHost}`,
  title: "Namtofa — spokojna strategia w przeglądarce",
  shortTitle: "Namtofa",
  description:
    "Namtofa to zapowiedź jednoosobowej strategii przeglądarkowej. Poznaj rozwój osady, technologie i kampanię, a potem wróć do świata gry we własnym tempie.",
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
