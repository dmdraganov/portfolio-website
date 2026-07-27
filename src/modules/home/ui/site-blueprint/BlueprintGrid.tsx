const verticalGridLines = [92, 161, 230, 299, 368, 437, 506] as const;
const horizontalGridLines = [74, 142, 210, 278, 346, 414] as const;

export function BlueprintGrid() {
  return (
    <svg
      className="h-full w-full overflow-visible"
      fill="none"
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="stroke-border">
        {verticalGridLines.map((x) => (
          <path
            key={`vertical-${x}`}
            d={`M${x} 45V455`}
            strokeDasharray="3 8"
            strokeOpacity="0.72"
          />
        ))}
        {horizontalGridLines.map((y) => (
          <path
            key={`horizontal-${y}`}
            d={`M58 ${y}H542`}
            strokeDasharray="3 8"
            strokeOpacity="0.58"
          />
        ))}
      </g>

      <g className="stroke-ink-muted" strokeOpacity="0.62">
        <path d="M92 29V40M506 29V40M92 34H506" />
        <path d="M42 74H52M42 414H52M47 74V414" />
      </g>

      <g className="fill-ink-muted font-mono text-[10px] tracking-[0.12em]">
        <text x="299" y="27" textAnchor="middle">
          GRID / 12
        </text>
        <text x="30" y="262" textAnchor="middle" transform="rotate(-90 30 262)">
          RESPONSIVE FRAME
        </text>
        <text x="92" y="474">
          X / 092
        </text>
        <text x="467" y="474">
          Y / 414
        </text>
      </g>

      <g className="fill-surface stroke-border">
        <circle cx="92" cy="34" r="4" />
        <circle cx="506" cy="34" r="4" />
        <circle cx="47" cy="74" r="4" />
        <circle cx="47" cy="414" r="4" />
      </g>
    </svg>
  );
}
