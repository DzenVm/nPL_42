# Strategia przeglądarkowa — serwis prezentacyjny

Serwis SSR (Next.js, App Router) opisujący jednoosobową strategię
przeglądarkową: mechanikę, kampanię i świat gry. Strona jest przygotowana pod
region Polska i język polski.

## Stos technologiczny

- Next.js 16 (App Router, React Server Components, SSR)
- React 19, TypeScript
- Czysty CSS (CSS Modules, natywne zagnieżdżanie, `clamp()`), bez frameworka CSS
- Programowo generowana favicona i obraz Open Graph (`next/og`)
- Ręcznie napisane ilustracje SVG (bez plików graficznych, bez zależności od zewnętrznych generatorów obrazów)

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local` i uzupełnij:

- `NEXT_PUBLIC_SITE_URL` — adres produkcyjny `https://namtofa.biz`. Jeśli
  ustawisz tę zmienną w środowisku wdrożeniowym, użyj dokładnie tego adresu
  (metadane, sitemap, JSON-LD i adres kontaktowy w stopce korzystają z niego).
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID` — opcjonalne;
  jeśli puste, żaden skrypt pomiarowy się nie ładuje. Skrypty ładują się
  dopiero po wyrażeniu zgody w widocznym na stronie banerze cookie.

## Wdrożenie na Vercel

1. Zaimportuj repozytorium jako nowy projekt w Vercel (framework zostanie
   wykryty automatycznie jako Next.js — nie są wymagane dodatkowe ustawienia
   builda).
2. W ustawieniach projektu (Environment Variables) ustaw `NEXT_PUBLIC_SITE_URL`
   na `https://namtofa.biz` we wszystkich używanych środowiskach.
3. Podłącz `namtofa.biz` w zakładce Domains projektu Vercel i wykonaj redeploy,
   aby metadane, sitemap i adres kontaktowy w stopce wskazywały właściwy adres.

## Struktura

- `app/` — strony (App Router), w tym `polityka-prywatnosci`, `regulamin`,
  `kontakt`
- `components/home/` — sekcje strony głównej
- `components/illustrations/` — oryginalne ilustracje SVG
- `components/layout/` — nagłówek, stopka, baner zgody na cookie
- `lib/site-config.ts` — jedyne źródło adresu domeny i danych kontaktowych
