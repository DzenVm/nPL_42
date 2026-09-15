import { IllustrationRelief } from "@/components/illustrations/IllustrationRelief";
import styles from "./home.module.css";

export function Intro() {
  return (
    <section id="czym-jest" className={styles.section}>
      <div className={`${styles.container} ${styles.twoCol}`}>
        <div>
          <p className={styles.eyebrow}>Czym właściwie jest ta gra</p>
          <h2>Jedno terytorium, jeden decydent — Ty</h2>
          <p className={styles.bodyText}>
            Zaczynasz od garstki osadników na skraju nieoznaczonej na mapie
            krainy. Reszta zależy od kolejności decyzji: czy najpierw stawiasz
            spichlerz, czy palisadę, czy wysyłasz zwiadowców w stronę gór,
            zanim zrobi to ktoś inny. Z tą różnicą, że nikt inny tu nie gra —
            świat reaguje na Twoje tempo, nie na zegar serwera ani ranking
            innych kont.
          </p>
          <p className={styles.bodyText}>
            To rozróżnienie jest tu celowe. Większość przeglądarkowych gier
            strategicznych, jakie znamy, opiera się na presji: kolejka innych
            graczy szykuje najazd, licznik odnawia się o północy, a zalogowanie
            się raz dziennie staje się obowiązkiem. Ta gra działa inaczej —
            jest zamkniętą kampanią bez rywali sieciowych, więc możesz grać
            przez pół godziny w przerwie na kawę albo zniknąć na tydzień i
            wrócić do dokładnie tego samego stanu świata.
          </p>
          <p className={styles.bodyText}>
            Rozgrywka łączy planowanie turowe (decyzje strategiczne — co
            budować, w co inwestować) z warstwą czasu rzeczywistego (produkcja
            i budowa trwają realnie, w tle, nawet gdy nie patrzysz w ekran).
            To nie jest gra, w której klika się bez przerwy — częściej
            zerkasz na mapę, podejmujesz decyzję i wracasz do swoich spraw.
          </p>
        </div>

        <div>
          <IllustrationRelief />
          <p className={styles.caption}>
            Grafika koncepcyjna — fragment mapy regionu granicznego z zaznaczonym szlakiem handlowym
          </p>
        </div>
      </div>
    </section>
  );
}
