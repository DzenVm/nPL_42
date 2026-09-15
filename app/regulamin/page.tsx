import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "Regulamin serwisu",
  description: "Zasady korzystania z serwisu prezentującego jednoosobową strategię przeglądarkową.",
  alternates: { canonical: "/regulamin" },
};

export default function TermsPage() {
  return (
    <article className={styles.wrap}>
      <h1>Regulamin serwisu</h1>
      <p className={styles.updated}>Wersja przedpremierowa — dotyczy strony informacyjnej o grze.</p>

      <h2>1. Charakter serwisu</h2>
      <p>
        Serwis dostępny pod niniejszą domeną (docelowo — po jej przydzieleniu)
        ma obecnie charakter informacyjno-prezentacyjny. Prezentuje opis
        mechaniki, świata i założeń jednoosobowej strategii przeglądarkowej
        przed jej pełnym udostępnieniem pod adresem produkcyjnym.
      </p>
      <p>
        Opisy zamieszczone na stronie odzwierciedlają aktualny stan projektowy
        gry i mogą ulec zmianie do czasu premiery bez wcześniejszego
        powiadomienia — traktuj je jako zapowiedź kierunku rozwoju, a nie
        wiążącą specyfikację produktu finalnego.
      </p>

      <h2>2. Zasady korzystania</h2>
      <ol>
        <li>Serwis udostępniany jest nieodpłatnie w zakresie przeglądania jego treści informacyjnych.</li>
        <li>Zabronione jest podejmowanie działań mogących zakłócić prawidłowe działanie serwisu, w tym prób nieautoryzowanego dostępu do jego zaplecza technicznego.</li>
        <li>Formularz kontaktowy oraz adres e-mail służą wyłącznie do komunikacji związanej z serwisem i opisywaną w nim grą.</li>
        <li>Korzystanie z serwisu odbywa się na własną odpowiedzialność użytkownika, w zakresie dopuszczalnym przez obowiązujące przepisy prawa.</li>
      </ol>

      <h2>3. Własność treści</h2>
      <p>
        Teksty, ilustracje koncepcyjne i układ graficzny serwisu podlegają
        ochronie na zasadach ogólnych prawa autorskiego. Kopiowanie i
        rozpowszechnianie tych treści bez zgody uprawnionego podmiotu jest
        niedozwolone, z wyjątkiem przypadków dopuszczonych przepisami prawa
        (np. dozwolony użytek).
      </p>

      <h2>4. Odpowiedzialność</h2>
      <p>
        Serwis dokłada starań, aby prezentowane informacje były rzetelne i
        aktualne, jednak z uwagi na przedpremierowy charakter opisywanego
        projektu nie gwarantuje, że finalna wersja gry będzie zawierać każdy
        z opisanych elementów w niezmienionej formie. Operator nie ponosi
        odpowiedzialności za przerwy w dostępności serwisu wynikające z
        przyczyn technicznych niezależnych od niego, w tym z utrzymania
        infrastruktury hostingowej.
      </p>

      <h2>5. Reklamacje</h2>
      <p>
        Uwagi dotyczące działania serwisu można zgłaszać na adres{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        Zgłoszenie powinno zawierać opis sytuacji oraz dane kontaktowe
        umożliwiające udzielenie odpowiedzi. Odpowiadamy w rozsądnym
        terminie, w dni robocze.
      </p>

      <h2>6. Prawo właściwe</h2>
      <p>
        Do spraw nieuregulowanych niniejszym regulaminem stosuje się przepisy
        prawa polskiego. Regulamin skierowany jest do użytkowników
        korzystających z serwisu z terytorium Rzeczypospolitej Polskiej.
      </p>

      <h2>7. Zmiany regulaminu</h2>
      <p>
        Regulamin może zostać zaktualizowany, w szczególności w związku z
        uruchomieniem pełnej wersji gry pod docelową domeną. Aktualna wersja
        jest zawsze dostępna pod niniejszym adresem.
      </p>
    </article>
  );
}
