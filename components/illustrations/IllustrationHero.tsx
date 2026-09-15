import styles from "./illustrations.module.css";

export function IllustrationHero() {
  return (
    <svg
      className={styles.frame}
      viewBox="0 0 640 520"
      role="img"
      aria-label="Grafika koncepcyjna: wzgórze z twierdzą otoczone liniami warstwicowymi mapy"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4ecd8" />
          <stop offset="100%" stopColor="#e9dcbd" />
        </linearGradient>
        <linearGradient id="heroHill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c6b47" />
          <stop offset="100%" stopColor="#3d4930" />
        </linearGradient>
      </defs>

      <rect width="640" height="520" fill="url(#heroSky)" />

      <g className={styles.spinSlow} opacity="0.5">
        <circle cx="497" cy="118" r="58" fill="none" stroke="#c98a3e" strokeWidth="1" strokeDasharray="2 8" />
      </g>
      <circle className={styles.pulseSoft} cx="497" cy="118" r="34" fill="#d7a45e" />

      {[92, 128, 168, 214].map((r, i) => (
        <ellipse
          key={r}
          cx="320"
          cy="410"
          rx={r * 2.1}
          ry={r * 0.55}
          fill="none"
          stroke="#a86a29"
          strokeOpacity={0.28 - i * 0.05}
          strokeWidth="1.5"
        />
      ))}

      <path
        d="M40 400 C 140 300, 210 280, 320 300 C 410 316, 470 300, 600 340 L 600 520 L 40 520 Z"
        fill="url(#heroHill)"
      />
      <path
        d="M40 420 C 150 340, 230 330, 320 344 C 400 356, 480 340, 600 372 L 600 520 L 40 520 Z"
        fill="#47542f"
      />

      <g className={styles.driftSlow}>
        <rect x="294" y="228" width="16" height="46" fill="#332c22" />
        <rect x="330" y="238" width="16" height="36" fill="#332c22" />
        <polygon points="286,232 318,196 350,232" fill="#24201a" />
        <rect x="270" y="270" width="100" height="14" fill="#1b1712" />
        {[282, 302, 322, 342, 358].map((x) => (
          <rect key={x} x={x} y="256" width="10" height="18" fill="#24201a" />
        ))}
      </g>

      {[
        [120, 452],
        [176, 470],
        [420, 460],
        [468, 480],
        [520, 452],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill="#7f4f1d" />
      ))}

      <path
        d="M60 486 C 160 452, 260 452, 320 470 C 400 492, 480 466, 590 470"
        fill="none"
        stroke="#9c4a3a"
        strokeWidth="2.5"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />
    </svg>
  );
}
