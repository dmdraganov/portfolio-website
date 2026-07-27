export function BrowserFrameLayer() {
  return (
    <svg
      className="h-full w-full overflow-visible"
      fill="none"
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="fill-surface-raised stroke-ink"
        x="92"
        y="58"
        width="414"
        height="374"
        rx="5"
        strokeWidth="2"
      />
      <path className="stroke-border" d="M92 101H506" />

      <g>
        <circle className="fill-signal" cx="113" cy="80" r="4" />
        <circle className="fill-border" cx="129" cy="80" r="4" />
        <circle className="fill-border" cx="145" cy="80" r="4" />
        <rect
          className="fill-surface stroke-border"
          x="178"
          y="71"
          width="197"
          height="18"
          rx="9"
        />
        <path
          className="stroke-ink-muted"
          d="M191 80H279"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
      </g>
    </svg>
  );
}
