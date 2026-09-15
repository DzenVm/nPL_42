import styles from "./illustrations.module.css";

type Node = { x: number; y: number; active?: boolean; label: string };

const nodes: Node[] = [
  { x: 60, y: 190, active: true, label: "Rdzeń" },
  { x: 160, y: 110, active: true, label: "Gospodarka" },
  { x: 160, y: 270, active: true, label: "Fortyfikacje" },
  { x: 270, y: 60, label: "Handel dalekosiężny" },
  { x: 270, y: 160, active: true, label: "Metalurgia" },
  { x: 270, y: 260, label: "Inżynieria oblężnicza" },
  { x: 270, y: 340, label: "Umocnienia górskie" },
  { x: 380, y: 110, label: "Bankowość polowa" },
  { x: 380, y: 200, label: "Kartografia" },
  { x: 380, y: 300, label: "Artyleria" },
];

const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [2, 6],
  [4, 7],
  [4, 8],
  [5, 9],
];

export function IllustrationTechTree() {
  return (
    <svg
      className={styles.frame}
      viewBox="0 0 440 380"
      role="img"
      aria-label="Grafika koncepcyjna: fragment drzewa rozwoju technologii z odblokowanymi i dostępnymi gałęziami"
    >
      <rect width="440" height="380" fill="#24201a" />

      <g stroke="#5c6b47" strokeWidth="1.5">
        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          if (!from || !to) return null;
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={from.active && to.active ? "#c98a3e" : "#4a4030"}
            />
          );
        })}
      </g>

      {nodes.map((node) => (
        <g key={node.label} className={node.active ? styles.pulseSoft : undefined}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.active ? 15 : 11}
            fill={node.active ? "#c98a3e" : "#332c22"}
            stroke={node.active ? "#f4ecd8" : "#5c6b47"}
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}
