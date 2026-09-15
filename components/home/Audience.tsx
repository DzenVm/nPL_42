import styles from "./home.module.css";

const fits = [
  "Masz nieregularny wolny czas i wolisz grę, do której wracasz raz na kilka dni bez utraty postępu.",
  "Interesuje Cię gospodarka i planowanie długoterminowe bardziej niż refleks czy szybkie starcia.",
  "Wolisz mierzyć się z systemem gry niż z innymi graczami i ich rankingiem.",
  "Podoba Ci się, gdy trudne decyzje mają realne, odroczone w czasie konsekwencje.",
];

const misfits = [
  "Szukasz rozgrywki wieloosobowej, rankingów graczy albo współpracy z sojuszem.",
  "Zależy Ci na krótkich, kilkuminutowych sesjach z natychmiastową akcją.",
  "Oczekujesz gry akcji albo zręcznościowej z dynamicznym sterowaniem.",
  "Chcesz od razu poznać „optymalną” strategię — ta kampania jej nie podpowiada.",
];

export function Audience() {
  return (
    <section id="dla-kogo" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Dla kogo jest ta gra</p>
        <h2>Warto sprawdzić, zanim poświęcisz jej czas</h2>
        <p className={styles.lede}>
          Ta gra nie próbuje być wszystkim dla wszystkich. Poniżej szczera
          ocena, komu rzeczywiście się spodoba, a komu raczej nie.
        </p>

        <div className={styles.twoCol}>
          <div className={styles.card}>
            <h3>Prawdopodobnie Ci się spodoba, jeśli:</h3>
            <ul className={styles.list}>
              {fits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Lepiej poszukać czegoś innego, jeśli:</h3>
            <ul className={styles.list}>
              {misfits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
