import { siteConfig } from "@/lib/site-config";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <h2>O stronie</h2>
          <p>
            Strona ma charakter prezentacyjny i opisuje mechanikę oraz świat
            jednoosobowej strategii przeglądarkowej. Nie wymaga instalacji ani
            zakładania konta, żeby zapoznać się z opisem gry.
          </p>
        </div>

        <div className={styles.col}>
          <h2>Informacje</h2>
          <ul>
            <li>
              <a href="/polityka-prywatnosci">Polityka prywatności</a>
            </li>
            <li>
              <a href="/regulamin">Regulamin serwisu</a>
            </li>
            <li>
              <a href="/kontakt">Kontakt</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h2>Kontakt</h2>
          <ul>
            <li>
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </li>
            <li>
              <span>Odpowiadamy w dni robocze.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} — wszelkie prawa do treści zastrzeżone.</span>
        <span>Serwis informacyjny, region: Polska.</span>
      </div>
    </footer>
  );
}
