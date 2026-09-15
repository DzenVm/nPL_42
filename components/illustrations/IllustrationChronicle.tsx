import styles from "./illustrations.module.css";

const eras = [
  { x: 50, label: "Osadnictwo" },
  { x: 150, label: "Umocnienia" },
  { x: 250, label: "Ekspansja" },
  { x: 350, label: "Dziedzictwo" },
];

export function IllustrationChronicle() {
  return (
    <svg
      className={styles.frame}
      viewBox="0 0 400 220"
      role="img"
      aria-label="Grafika koncepcyjna: oś czasu kampanii z czterema erami rozwoju"
    >
      <rect width="400" height="220" fill="#f4ecd8" />

      <path
        d="M20 130 C 100 100, 150 160, 200 130 C 250 100, 300 160, 380 120"
        fill="none"
        stroke="#c98a3e"
        strokeWidth="2.5"
      />

      {eras.map((era, i) => (
        <g key={era.label} className={styles.driftSlower} style={{ animationDelay: `${i * 0.6}s` }}>
          <circle cx={era.x} cy={130 - (i % 2 === 0 ? 0 : 0)} r="7" fill="#9c4a3a" />
          <rect x={era.x - 26} y={150} width="52" height="3" fill="#7f4f1d" opacity="0.4" />
        </g>
      ))}

      <g fill="none" stroke="#5c6b47" strokeWidth="1.2" opacity="0.5">
        <path d="M10 40 h40 M10 48 h60 M10 56 h30" />
        <path d="M330 40 h60 M320 48 h70 M340 56 h40" />
      </g>
    </svg>
  );
}
