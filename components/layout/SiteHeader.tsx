"use client";

import { useState } from "react";
import styles from "./SiteHeader.module.css";

const links = [
  { href: "/#czym-jest", label: "O grze" },
  { href: "/#mechanika", label: "Mechanika" },
  { href: "/#kampania", label: "Kampania" },
  { href: "/#dla-kogo", label: "Dla kogo" },
  { href: "/#faq", label: "Pytania" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/" aria-label="Namtofa — strona główna">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 3.5 28.5 16 16 28.5 3.5 16 16 3.5Z" />
            <path d="M16 9v14M9 16h14M11 11l10 10M21 11 11 21" />
          </svg>
          <span>Namtofa</span>
        </a>

        <nav className={styles.nav} aria-label="Nawigacja główna">
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-mobilny"
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
          Menu
        </button>
      </div>

      {open && (
        <div className={styles.mobilePanel} id="menu-mobilny">
          <ul className={styles.mobileList}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
