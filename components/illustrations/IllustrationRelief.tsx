import styles from "./illustrations.module.css";

export function IllustrationRelief() {
  const contourSets = [
    { d: "M10 60 Q 90 10, 170 55 T 330 50", opacity: 0.35 },
    { d: "M0 110 Q 100 60, 190 105 T 360 95", opacity: 0.45 },
    { d: "M-10 165 Q 110 110, 210 158 T 380 150", opacity: 0.55 },
    { d: "M-10 220 Q 120 160, 230 212 T 400 205", opacity: 0.7 },
  ];

  return (
    <svg
      className={styles.frame}
      viewBox="0 0 400 320"
      role="img"
      aria-label="Grafika koncepcyjna: fragment mapy terenu z liniami warstwicowymi i zaznaczonymi osadami"
    >
      <rect width="400" height="320" fill="#f4ecd8" />

      <g fill="none" stroke="#7f4f1d" strokeWidth="1.4">
        {contourSets.map((c) => (
          <path key={c.d} d={c.d} strokeOpacity={c.opacity} />
        ))}
      </g>

      <g stroke="#dcc99e" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 11 }).map((_, col) => (
            <line
              key={`${row}-${col}`}
              x1={col * 38}
              y1={row * 36}
              x2={col * 38 + 6}
              y2={row * 36 + 6}
              strokeOpacity="0.5"
            />
          )),
        )}
      </g>

      <g className={styles.driftSlower}>
        <path
          d="M40 250 C 90 210, 150 260, 210 220 C 260 190, 310 230, 360 200"
          fill="none"
          stroke="#9c4a3a"
          strokeWidth="2.5"
          strokeDasharray="1 9"
          strokeLinecap="round"
        />
      </g>

      {[
        { x: 40, y: 250, r: 6, big: true },
        { x: 210, y: 220, r: 4.5, big: false },
        { x: 360, y: 200, r: 5, big: false },
        { x: 130, y: 90, r: 4, big: false },
        { x: 290, y: 130, r: 4, big: false },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.r} fill={p.big ? "#a86a29" : "#5c6b47"} />
          <circle cx={p.x} cy={p.y} r={p.r + 5} fill="none" stroke="#a86a29" strokeOpacity="0.4" />
        </g>
      ))}
    </svg>
  );
}
