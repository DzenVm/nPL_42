import styles from "./home.module.css";
import faqStyles from "./Faq.module.css";

const faqs = [
  {
    q: "Czy trzeba coś instalować, żeby zagrać?",
    a: "Nie. Cała rozgrywka toczy się w karcie przeglądarki. Nie ma pliku instalacyjnego ani wersji na sklep z aplikacjami.",
  },
  {
    q: "Czy to gra wieloosobowa?",
    a: "Nie. Nie ma tu innych graczy, sojuszy ani rankingów. Jedyny przeciwnik to logika świata gry reagująca na Twoje decyzje.",
  },
  {
    q: "Czy trzeba zakładać konto?",
    a: "Do zapoznania się z opisem gry na tej stronie — nie. Ewentualny wymóg konta przy samej rozgrywce zostanie jasno opisany w chwili udostępnienia gry pod docelowym adresem.",
  },
  {
    q: "Ile trwa jedna kampania?",
    a: "To zależy od tempa gracza — kampania nie ma sztywnego licznika godzin ani wymuszonego zakończenia. Można ją prowadzić długo, wracając nieregularnie.",
  },
  {
    q: "Czy da się stracić zapisany postęp?",
    a: "Stan gry zapisuje się automatycznie lokalnie w przeglądarce. Można go utracić, jeśli ręcznie wyczyścisz dane witryny w ustawieniach przeglądarki — to jedyny taki przypadek.",
  },
  {
    q: "Czy gra wymaga płatności?",
    a: "Warstwa rozgrywki opisana na tej stronie nie wymaga żadnych płatności. Szczegóły ewentualnego modelu dostępu ogłosimy razem z uruchomieniem gry pod docelową domeną.",
  },
  {
    q: "Czy gra jest dostępna na telefonie?",
    a: "Strona i przyszła rozgrywka są responsywne, ale ze względu na ilość informacji na mapie wygodniej gra się na tablecie lub komputerze.",
  },
  {
    q: "Jakie dane zbiera strona?",
    a: "Bez Twojej zgody nie ładujemy żadnych narzędzi statystycznych. Szczegóły opisuje strona polityki prywatności, w tym informacja o tym, co zapisujemy lokalnie w przeglądarce.",
  },
];

export function Faq() {
  return (
    <section id="faq" className={styles.sectionTight}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Pytania, które padają najczęściej</p>
        <h2>Zanim napiszesz do nas — może odpowiedź już tu jest</h2>

        <div className={faqStyles.list}>
          {faqs.map((item) => (
            <details key={item.q} className={faqStyles.item}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
