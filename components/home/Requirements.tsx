import styles from "./home.module.css";

const requirements = [
  {
    title: "Przeglądarka",
    text: "Aktualna wersja Chrome, Firefox, Safari lub Edge. Starsze wersje przeglądarek mogą wyświetlać mapę bez części efektów wizualnych.",
  },
  {
    title: "Ekran",
    text: "Układ dostosowuje się od telefonu po duży monitor, ale widok mapy i drzewa technologii wygodniej czyta się od 10 cali wzwyż.",
  },
  {
    title: "Zapis stanu",
    text: "Postęp trzymany jest lokalnie w przeglądarce. Wyczyszczenie danych witryny w ustawieniach przeglądarki usuwa też zapisaną kampanię — to jedyny sposób na jej utratę.",
  },
  {
    title: "Dźwięk i ruch",
    text: "Żaden dźwięk nie odtwarza się automatycznie. Animacje tła można ograniczyć systemowym ustawieniem „ogranicz ruch” — strona to respektuje.",
  },
];

export function Requirements() {
  return (
    <section className={styles.sectionTight}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Wymagania i dostępność</p>
        <h2>Zanim zaczniesz — kilka technicznych szczegółów</h2>

        <div className={styles.cardGrid}>
          {requirements.map((req) => (
            <article key={req.title} className={styles.card}>
              <h3>{req.title}</h3>
              <p>{req.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
