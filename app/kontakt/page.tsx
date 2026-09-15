import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Sposoby kontaktu w sprawie opisanej na stronie gry strategicznej.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <article className={styles.wrap}>
      <h1>Kontakt</h1>
      <p className={styles.updated}>Odpowiadamy na wiadomości w dni robocze.</p>

      <h2>W sprawie samej gry i treści strony</h2>
      <p>
        Pytania o mechanikę, harmonogram udostępnienia gry pod docelową
        domeną albo uwagi do opisów zamieszczonych na tej stronie kieruj na:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>

      <h2>W sprawie ochrony danych osobowych</h2>
      <p>
        Jeśli chcesz skorzystać z praw opisanych w{" "}
        <a href="/polityka-prywatnosci">polityce prywatności</a>, napisz na
        adres: <a href={`mailto:${siteConfig.legalEmail}`}>{siteConfig.legalEmail}</a>.
      </p>

      <div className={styles.notice}>
        <p>
          Adres do korespondencji pocztowej oraz pełne dane rejestrowe
          zostaną opublikowane w tym miejscu wraz z uruchomieniem serwisu
          pod docelową domeną. Do tego czasu jedyną dostępną formą kontaktu
          jest poczta elektroniczna wskazana powyżej.
        </p>
      </div>
    </article>
  );
}
