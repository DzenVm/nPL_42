import { IllustrationChronicle } from "@/components/illustrations/IllustrationChronicle";
import styles from "./home.module.css";

const eras = [
  {
    name: "I. Osadnictwo",
    range: "tury 1–30",
    text: "Wybór miejsca pod pierwszą osadę decyduje o wszystkim, co nastąpi później — dostęp do rzeki, żyzność gleby i odległość od najbliższego złoża rudy zostają z Tobą do końca kampanii, bo przeniesienie stolicy nie jest możliwe.",
  },
  {
    name: "II. Umocnienia",
    range: "tury 25–70",
    text: "Pierwsze sygnały o niepokojach na granicy. To okres, w którym decyzja o odłożeniu budowy muru na później zaczyna kosztować najwięcej — i w którym większość zapisanych stanów gry kończy się przedwczesnym oblężeniem.",
  },
  {
    name: "III. Ekspansja",
    range: "tury 60–140",
    text: "Terytorium rośnie szybciej niż zdolność, by je utrzymać. Doradcy zaczynają zgłaszać sprzeczne rekomendacje — rozwój dróg handlowych kontra dozbrojenie garnizonów na nowo zajętych ziemiach.",
  },
  {
    name: "IV. Dziedzictwo",
    range: "od tury 130",
    text: "Kampania nie kończy się jednym zwycięstwem, tylko stanem, w jakim zostawiasz krainę — liczbą ocalałych osad, stabilnością gospodarki i tym, czy sąsiednie osady traktują Cię jako partnera handlowego, czy zagrożenie.",
  },
];

export function Campaign() {
  return (
    <section id="kampania" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.twoCol}>
          <div>
            <p className={styles.eyebrow}>Kampania</p>
            <h2>Cztery ery jednej, ciągłej rozgrywki</h2>
            <p className={styles.bodyText}>
              Nie ma tu oddzielnych „misji” do wyboru z listy. Kampania to
              jedna nić wydarzeń rozciągnięta na dziesiątki godzin, w której
              decyzje z pierwszych tur wracają w trzeciej erze jako
              konsekwencje — czasem korzystne, czasem nie.
            </p>
          </div>
          <div>
            <IllustrationChronicle />
            <p className={styles.caption}>Grafika koncepcyjna — oś czterech er kampanii</p>
          </div>
        </div>

        <div className={styles.cardGrid}>
          {eras.map((era) => (
            <article key={era.name} className={styles.card}>
              <p className={styles.metaLabel}>{era.range}</p>
              <h3>{era.name}</h3>
              <p>{era.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
