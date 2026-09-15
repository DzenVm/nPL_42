import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Pillars } from "@/components/home/Pillars";
import { Mechanics } from "@/components/home/Mechanics";
import { Campaign } from "@/components/home/Campaign";
import { Audience } from "@/components/home/Audience";
import { Requirements } from "@/components/home/Requirements";
import { Faq } from "@/components/home/Faq";
import { ClosingCta } from "@/components/home/ClosingCta";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: siteConfig.shortTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: "pl-PL",
    gamePlatform: "Web Browser",
    genre: "Strategy",
    numberOfPlayers: {
      "@type": "QuantitativeValue",
      value: 1,
    },
    applicationCategory: "Game",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy to gra wieloosobowa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie. To gra przeznaczona wyłącznie dla jednego gracza, bez rywali online.",
        },
      },
      {
        "@type": "Question",
        name: "Czy trzeba coś instalować?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie, cała rozgrywka toczy się w przeglądarce internetowej.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Intro />
      <Pillars />
      <Mechanics />
      <Campaign />
      <Audience />
      <Requirements />
      <Faq />
      <ClosingCta />
    </>
  );
}
