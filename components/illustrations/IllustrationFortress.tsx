import styles from "./illustrations.module.css";

export function IllustrationFortress() {
  return (
    <svg
      className={styles.frame}
      viewBox="0 0 420 340"
      role="img"
      aria-label="Grafika koncepcyjna: przekrój warstw obronnych twierdzy — mur zewnętrzny, fosa i wieża główna"
    >
      <rect width="420" height="340" fill="#332c22" />

      <ellipse cx="210" cy="300" rx="190" ry="26" fill="#1b1712" />

      <g>
        <rect x="30" y="180" width="360" height="70" fill="#4a4030" />
        {Array.from({ length: 13 }).map((_, i) => (
          <rect key={i} x={30 + i * 30} y="168" width="18" height="16" fill="#4a4030" />
        ))}
      </g>

      <g>
        <rect x="70" y="120" width="280" height="70" fill="#5c5142" />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={70 + i * 30} y="108" width="18" height="16" fill="#5c5142" />
        ))}
      </g>

      <g className={styles.driftSlow}>
        <rect x="170" y="40" width="80" height="100" fill="#dcc99e" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={170 + i * 14} y="28" width="8" height="14" fill="#dcc99e" />
        ))}
        <rect x="200" y="90" width="20" height="50" fill="#332c22" />
      </g>

      <g className={styles.pulseSoft}>
        <circle cx="210" cy="20" r="6" fill="#c98a3e" />
        <line x1="210" y1="20" x2="210" y2="40" stroke="#c98a3e" strokeWidth="2" />
      </g>

      <g stroke="#7f4f1d" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6">
        <line x1="15" y1="260" x2="405" y2="260" />
      </g>
    </svg>
  );
}
