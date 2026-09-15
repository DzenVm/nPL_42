import styles from "./home.module.css";

const pillars = [
  {
    title: "Gospodarka bez wyścigu",
    text: "Surowce rosną w tempie, które ustalasz decyzjami o zabudowie, nie zegarem rywali. Zaniedbany spichlerz karze Cię, nie sąsiada.",
    icon: (
      <path d="M4 20h16M6 20V10l6-5 6 5v10M10 20v-6h4v6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Drzewo technologii z kompromisami",
    text: "Każda odblokowana gałąź zamyka inną. Metalurgia wzmacnia obronę, ale spowalnia handel — wybór zostaje z Tobą do końca kampanii.",
    icon: (
      <path
        d="M12 3v6m0 0-5 4m5-4 5 4M7 13v3a2 2 0 0 0 2 2h1m4-5v3a2 2 0 0 1-2 2h-1m0 0v3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Najazdy generowane przez system",
    text: "Zagrożenia dla Twojej twierdzy planuje silnik gry na podstawie Twojej ekspansji, nie inny gracz czekający na Twój błąd.",
    icon: (
      <path
        d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Postęp zapisywany automatycznie",
    text: "Stan świata zapisuje się na bieżąco. Zamykasz kartę w połowie tury i wracasz dokładnie tam, gdzie skończyłeś — nawet po kilku dniach.",
    icon: (
      <path
        d="M5 5h11l3 3v11H5z M8 5v5h8V5 M8 14h8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Mapa odsłaniana stopniowo",
    text: "Poza zasięgiem zwiadu teren pozostaje niejasny. Trasy handlowe i miejsca pod przyszłe osady trzeba najpierw fizycznie rozpoznać.",
    icon: (
      <path
        d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z M9 4v14 M15 6v14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Skutki decyzji, nie przypadek",
    text: "Kryzysy — susza, spór graniczny, epidemia w mieście — wynikają z warunków, które sam stworzyłeś, a nie z losowego rzutu w tle.",
    icon: (
      <path
        d="M12 4v9m0 0-3.5-3.5M12 13l3.5-3.5M6 20h12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function Pillars() {
  return (
    <section className={styles.sectionTight}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Filary rozgrywki</p>
        <h2>Sześć decyzji projektowych, które trzymają się od pierwszej wersji</h2>
        <p className={styles.lede}>
          Zanim dopisaliśmy pierwszą linijkę opisu kampanii, ustaliliśmy
          zasady, których gra nie może złamać. Poniżej te, które najbardziej
          wpływają na to, jak dziś wygląda rozgrywka.
        </p>

        <div className={styles.cardGrid}>
          {pillars.map((pillar) => (
            <article key={pillar.title} className={styles.card}>
              <div className={styles.iconBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  {pillar.icon}
                </svg>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
