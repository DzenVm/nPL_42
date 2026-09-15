import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacje o przetwarzaniu danych, plikach cookie i zapisie stanu gry na tej stronie.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className={styles.wrap}>
      <h1>Polityka prywatności</h1>
      <p className={styles.updated}>Ostatnia aktualizacja: wersja przedpremierowa serwisu.</p>

      <div className={styles.notice}>
        <p>
          Serwis działa obecnie pod tymczasowym adresem, do czasu przydzielenia
          docelowej domeny. Pełne dane identyfikacyjne administratora (nazwa,
          adres do korespondencji) zostaną opublikowane w tym miejscu razem z
          uruchomieniem wersji docelowej. Do tego czasu w sprawach ochrony
          danych osobowych możesz kontaktować się pod adresem{" "}
          <a href={`mailto:${siteConfig.legalEmail}`}>{siteConfig.legalEmail}</a>.
        </p>
      </div>

      <h2>1. Jakie dane przetwarzamy</h2>
      <p>W związku z korzystaniem z tej strony przetwarzane mogą być następujące kategorie danych:</p>
      <ul>
        <li>
          Dane techniczne zbierane automatycznie przez infrastrukturę
          hostingową (adres IP, typ przeglądarki, znacznik czasu żądania) —
          w zakresie standardowych logów serwera.
        </li>
        <li>
          Dane zapisywane lokalnie w Twojej przeglądarce (localStorage): Twój
          wybór dotyczący zgody na pliki cookie oraz — w przyszłej wersji
          samej gry — stan zapisanej kampanii. Te dane nie są przesyłane na
          żaden serwer i pozostają wyłącznie na Twoim urządzeniu.
        </li>
        <li>
          Treść wiadomości, którą przesyłasz nam z własnej inicjatywy pocztą
          elektroniczną, wraz z adresem e-mail nadawcy.
        </li>
        <li>
          Wyłącznie za Twoją zgodą wyrażoną w banerze cookie: identyfikatory
          plików cookie narzędzi statystycznych (jeśli i kiedy zostaną
          uruchomione).
        </li>
      </ul>

      <h2>2. Podstawy prawne i cele przetwarzania</h2>
      <ul>
        <li>
          Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes) — w celu
          zapewnienia bezpieczeństwa i prawidłowego działania serwisu na
          podstawie logów technicznych.
        </li>
        <li>
          Art. 6 ust. 1 lit. a RODO (zgoda) — w zakresie ewentualnych plików
          cookie statystycznych, uruchamianych wyłącznie po Twojej zgodzie w
          banerze widocznym na stronie.
        </li>
        <li>
          Art. 6 ust. 1 lit. f RODO — w celu udzielenia odpowiedzi na
          wiadomość przesłaną przez formularz kontaktowy lub e-mail.
        </li>
      </ul>

      <h2>3. Pliki cookie i przechowywanie lokalne</h2>
      <p>
        Sama strona nie ustawia żadnych plików cookie przed wyrażeniem przez
        Ciebie zgody. Wybór w banerze zgody zapisywany jest technicznie w
        mechanizmie localStorage przeglądarki, a nie w pliku cookie. Jeśli
        wyrazisz zgodę na statystyki, a operator uruchomi narzędzie
        analityczne, w Twojej przeglądarce mogą pojawić się pliki cookie tego
        narzędzia — ich lista i cel zostaną tu opisane najpóźniej w chwili
        aktywacji takiego narzędzia.
      </p>
      <p>
        Zgodę możesz w każdej chwili wycofać, czyszcząc dane witryny w
        ustawieniach swojej przeglądarki — spowoduje to również ponowne
        wyświetlenie baneru zgody przy kolejnej wizycie.
      </p>

      <h2>4. Okres przechowywania danych</h2>
      <p>
        Logi techniczne przechowywane są przez okres wynikający z konfiguracji
        dostawcy infrastruktury, nie dłużej niż jest to potrzebne do celów
        bezpieczeństwa. Wiadomości e-mail przechowujemy przez czas potrzebny
        do udzielenia odpowiedzi oraz rozliczenia się z ewentualnych roszczeń.
        Dane w localStorage pozostają na Twoim urządzeniu do czasu ich
        ręcznego usunięcia przez Ciebie.
      </p>

      <h2>5. Odbiorcy danych</h2>
      <p>
        Dane techniczne mogą być przetwarzane przez dostawcę infrastruktury
        hostingowej, na której działa serwis, wyłącznie w zakresie niezbędnym
        do jego utrzymania. W przypadku wyrażenia zgody na statystyki,
        odbiorcą części danych może być dostawca użytego narzędzia
        analitycznego.
      </p>

      <h2>6. Twoje prawa</h2>
      <p>Zgodnie z RODO przysługuje Ci prawo do:</p>
      <ul>
        <li>dostępu do swoich danych i uzyskania ich kopii,</li>
        <li>sprostowania danych,</li>
        <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
        <li>ograniczenia przetwarzania,</li>
        <li>wniesienia sprzeciwu wobec przetwarzania,</li>
        <li>przenoszenia danych,</li>
        <li>cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego wcześniej,</li>
        <li>
          wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeśli
          uznasz, że przetwarzanie narusza przepisy o ochronie danych.
        </li>
      </ul>
      <p>
        W celu skorzystania z powyższych praw napisz na adres{" "}
        <a href={`mailto:${siteConfig.legalEmail}`}>{siteConfig.legalEmail}</a>.
      </p>

      <h2>7. Zmiany polityki</h2>
      <p>
        Ta wersja polityki dotyczy przedpremierowej odsłony serwisu. Wraz z
        uruchomieniem docelowej domeny i pełnej wersji gry treść zostanie
        zaktualizowana, a data aktualizacji — wyraźnie oznaczona.
      </p>
    </article>
  );
}
