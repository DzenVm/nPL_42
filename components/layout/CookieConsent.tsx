"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "zgoda-cookies-v1";

type Consent = "accepted" | "rejected";

const listeners = new Set<() => void>();

function readConsent(): Consent | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") {
      return stored;
    }
  } catch {
    // Prywatne okno albo zablokowany localStorage — traktujemy jak brak decyzji.
  }
  return null;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getServerSnapshot(): Consent | null {
  return null;
}

function writeConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Brak trwałego zapisu nie blokuje bieżącej sesji — wybór obowiązuje do przeładowania.
  }
  listeners.forEach((listener) => listener());
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, readConsent, getServerSnapshot);

  const { gaMeasurementId, googleAdsId } = siteConfig.analytics;
  const canLoadAnalytics = consent === "accepted" && Boolean(gaMeasurementId || googleAdsId);

  return (
    <>
      {canLoadAnalytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId ?? googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${gaMeasurementId ? `gtag('config', '${gaMeasurementId}');` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div className={styles.wrap} role="dialog" aria-live="polite" aria-label="Zgoda na pliki cookie">
          <p>
            Ta strona zapisuje w przeglądarce wyłącznie dane potrzebne do jej
            działania (np. Twój wybór z tego okna). Za Twoją zgodą może też
            korzystać z plików cookie do pomiaru statystyk odwiedzin. Szczegóły
            znajdziesz w{" "}
            <a href="/polityka-prywatnosci">polityce prywatności</a>.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={() => writeConsent("accepted")}>
              Zgadzam się
            </button>
            <button type="button" className={styles.secondary} onClick={() => writeConsent("rejected")}>
              Tylko niezbędne
            </button>
          </div>
        </div>
      )}
    </>
  );
}
