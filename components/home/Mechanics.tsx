import { IllustrationTechTree } from "@/components/illustrations/IllustrationTechTree";
import { IllustrationFortress } from "@/components/illustrations/IllustrationFortress";
import styles from "./home.module.css";

export function Mechanics() {
  return (
    <section id="mechanika" className={`${styles.section} ${styles.dark}`}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Mechanika rozgrywki</p>
        <h2>Cztery systemy, które trzeba ze sobą pogodzić</h2>
        <p className={styles.lede}>
          Żaden z poniższych systemów nie działa w oderwaniu od pozostałych.
          Nadmiar w jednym miejscu zwykle oznacza brak gdzie indziej — i to
          jest tu zamierzone.
        </p>

        <div className={styles.subBlock}>
          <h3>Gospodarka i łańcuchy przetwarzania</h3>
          <p className={styles.bodyText}>
            Drewno samo w sobie niewiele daje — dopiero tartak zamienia je w
            deski, z których stawia się spichlerze i mosty. Żywność wymaga
            gruntu, ale też narzędzi z kuźni, więc rolnictwo bez metalurgii
            rośnie wolno. Populacja zwiększa się tylko wtedy, gdy nadwyżka
            żywności i wolne miejsce w zabudowie mieszkalnej występują
            jednocześnie — jedno bez drugiego zatrzymuje wzrost, niezależnie
            od tego, ile magazynów zbudujesz.
          </p>
          <p className={styles.bodyText}>
            Nie ma tu jednego „dobrego” porządku budowy. Osada nastawiona na
            szybki wzrost populacji będzie przez długi czas słabo broniona;
            osada, która najpierw stawia mury, rozwija się wolniej. Kampania
            nie podpowiada, która droga jest właściwa.
          </p>
        </div>

        <div className={styles.subBlock}>
          <div className={styles.twoCol}>
            <div>
              <h3>Drzewo technologii bez ślepych alejek</h3>
              <p className={styles.bodyText}>
                Gałęzie technologii są rozłożone w cztery kierunki: handel,
                obronność, rolnictwo i rzemiosło. Odblokowanie jednej ścieżki
                nie blokuje pozostałych na stałe, ale koszt kolejnych
                technologii rośnie szybciej w gałęzi, którą zaniedbujesz —
                więc powrót do niej po czterdziestu turach jest możliwy, tylko
                wyraźnie droższy.
              </p>
              <p className={styles.bodyText}>
                Część technologii to nie liczby na pasku produkcji, tylko
                zmiana zasad: kartografia odsłania dalszy fragment mgły mapy
                za każdym razem, gdy zwiadowca dotrze do nowego wzniesienia;
                bankowość polowa pozwala pożyczać zasoby „od przyszłości”
                kosztem spowolnionej produkcji przez kolejne tury.
              </p>
            </div>
            <div>
              <IllustrationTechTree />
              <p className={styles.caption}>
                Grafika koncepcyjna — fragment drzewa technologii z odblokowaną gałęzią metalurgii
              </p>
            </div>
          </div>
        </div>

        <div className={styles.subBlock}>
          <div className={`${styles.twoCol} ${styles.reverse}`}>
            <div className={styles.media}>
              <IllustrationFortress />
              <p className={styles.caption}>
                Grafika koncepcyjna — przekrój trzech warstw obrony wokół wieży głównej
              </p>
            </div>
            <div>
              <h3>Obrona jako proces, nie jednorazowy mur</h3>
              <p className={styles.bodyText}>
                Twierdza ma trzy niezależne warstwy: palisadę zewnętrzną, mur
                właściwy i wieżę główną z garnizonem. Każda z nich zużywa
                osobno drewno, kamień i żelazo w utrzymaniu — zaniedbana
                palisada niszczeje, nawet jeśli nikt jej nie atakuje.
              </p>
              <p className={styles.bodyText}>
                Zagrożenia planuje silnik gry na podstawie tempa Twojej
                ekspansji i stanu sąsiednich osad kontrolowanych przez system
                — im szybciej rośniesz bez inwestycji w garnizon, tym większe
                oblężenie przygotowuje kampania. To wciąż jeden gracz kontra
                świat gry, nie kontra inne konto.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.subBlock}>
          <h3>Kryzysy jako skutek, nie zdarzenie z zewnątrz</h3>
          <p className={styles.bodyText}>
            Susza pojawia się częściej tam, gdzie pola uprawne rozrosły się
            bez systemu nawadniania. Spór graniczny z sąsiednią osadą wybucha,
            gdy Twoje terytorium wchłania sporne wzniesienia bez wcześniejszej
            umowy handlowej. Epidemia w mieście to konsekwencja gęstej
            zabudowy mieszkalnej bez inwestycji w studnie i drogi brukowane —
            nie zdarzenie wylosowane w tle, tylko odczyt aktualnego stanu
            osady.
          </p>
          <p className={styles.bodyText}>
            Dzięki temu każdy kryzys da się przewidzieć, jeśli zna się jego
            warunki — a kampania z czasem pokazuje Ci te warunki wprost, w
            panelu doradców.
          </p>
        </div>
      </div>
    </section>
  );
}
