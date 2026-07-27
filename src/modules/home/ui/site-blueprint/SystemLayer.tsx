import styles from '../SiteBlueprint.module.css';

import { BlueprintLabel } from './BlueprintLabel';

export function SystemLayer() {
  return (
    <svg
      className="h-full w-full overflow-visible"
      fill="none"
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className={`${styles.signalConnections} stroke-signal`}
        strokeWidth="1.5"
      >
        <path d="M337 185H317V132H272" pathLength="1" />
        <path d="M478 229H530V189" pathLength="1" />
      </g>
      <g className="fill-signal">
        <circle cx="337" cy="185" r="4" />
        <circle cx="478" cy="229" r="4" />
        <circle cx="272" cy="132" r="3" />
      </g>

      <g className={`${styles.mutedConnections} stroke-ink-muted`}>
        <path d="M220 293.5H267V324H303" pathLength="1" />
        <path d="M203 405V446H286" pathLength="1" />
        <path d="M394 405V446H486" pathLength="1" />
      </g>
      <g className="fill-surface stroke-ink-muted">
        <circle cx="220" cy="293.5" r="3" />
        <circle cx="203" cy="405" r="3" />
        <circle cx="394" cy="405" r="3" />
      </g>

      <g className="fill-surface stroke-border">
        <circle cx="530" cy="189" r="4" />
      </g>
      <g className="fill-surface stroke-border">
        <circle cx="303" cy="324" r="4" />
        <circle cx="286" cy="446" r="4" />
        <circle cx="486" cy="446" r="4" />
      </g>

      <g
        className={`${styles.labels} fill-ink-muted font-mono text-[9px] tracking-[0.1em]`}
      >
        <BlueprintLabel x={231} y={98} width={82} label="CONTENT" />
        <BlueprintLabel x={489} y={155} width={82} label="API DATA" />
        <BlueprintLabel x={279} y={290} width={48} label="CTA" />
        <BlueprintLabel x={240} y={412} width={92} label="KEYBOARD" />
        <BlueprintLabel x={437} y={412} width={98} label="320—1440" />
      </g>
    </svg>
  );
}
