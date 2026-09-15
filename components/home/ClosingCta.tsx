import { siteConfig } from "@/lib/site-config";
import styles from "./home.module.css";
import ctaStyles from "./ClosingCta.module.css";

export function ClosingCta() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={ctaStyles.wrap}>
          <h2>Adres, pod którym zagrasz, pojawi się wkrótce</h2>
          <p>
            Ta strona opisuje mechanikę i świat gry jeszcze przed
            uruchomieniem jej pod docelową domeną. Jeśli chcesz zadać pytanie
            o rozgrywkę albo zgłosić uwagę do opisu — napisz bezpośrednio.
          </p>
          <div className={ctaStyles.actions}>
            <a className={ctaStyles.button} href={`mailto:${siteConfig.contactEmail}`}>
              Napisz na {siteConfig.contactEmail}
            </a>
            <a className={ctaStyles.ghost} href="#mechanika">
              Wróć do mechaniki
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
