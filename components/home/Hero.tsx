import { IllustrationHero } from "@/components/illustrations/IllustrationHero";
import styles from "./home.module.css";
import heroStyles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={heroStyles.hero}>
      <div className={`${styles.container} ${heroStyles.grid}`}>
        <div>
          <p className={styles.eyebrow}>Strategia dla jednego gracza</p>
          <h1 className={heroStyles.headline}>
            Rządzisz sam. Bez rywali online, bez zegara, który każe ci wracać
            co godzinę.
          </h1>
          <p className={styles.lede}>
            To gra strategiczna rozgrywana wyłącznie w przeglądarce, w której
            zarządzasz jednym rozwijającym się terytorium — od pierwszej
            osady po rozbudowaną gospodarkę z siecią twierdz. Kampania toczy
            się w Twoim tempie: możesz zamknąć kartę na dwa dni i wrócić bez
            utraty postępu.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href="#mechanika">
              Zobacz, jak działa rozgrywka
            </a>
            <a className={styles.ctaSecondary} href="/kontakt">
              Napisz w sprawie dostępu
            </a>
          </div>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <strong>0</strong>
              <span>graczy rywalizujących z Tobą o zasoby</span>
            </div>
            <div className={styles.stat}>
              <strong>1</strong>
              <span>karta przeglądarki, bez instalatora</span>
            </div>
            <div className={styles.stat}>
              <strong>—</strong>
              <span>brak limitu czasu na turę</span>
            </div>
          </div>
        </div>

        <div className={heroStyles.media}>
          <IllustrationHero />
          <p className={heroStyles.caption}>Grafika koncepcyjna — wzgórze graniczne w drugiej erze rozwoju</p>
        </div>
      </div>
    </section>
  );
}
