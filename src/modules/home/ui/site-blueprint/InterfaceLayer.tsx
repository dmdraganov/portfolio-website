import styles from '../SiteBlueprint.module.css';

export function InterfaceLayer() {
  return (
    <svg
      className="h-full w-full overflow-visible"
      fill="none"
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          className="fill-ink"
          x="119"
          y="122"
          width="49"
          height="6"
          rx="3"
        />
        <path
          className="stroke-ink-muted"
          d="M405 125H478"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </g>

      <g>
        <rect
          className="fill-ink"
          x="119"
          y="158"
          width="201"
          height="16"
          rx="2"
        />
        <rect
          className="fill-ink"
          x="119"
          y="182"
          width="163"
          height="16"
          rx="2"
        />
        <path
          className="stroke-ink-muted"
          d="M119 224H282M119 238H263M119 252H273"
          strokeLinecap="round"
          strokeOpacity="0.72"
          strokeWidth="4"
        />
        <rect
          className="fill-signal"
          x="119"
          y="278"
          width="101"
          height="31"
          rx="15.5"
        />
        <path
          className="stroke-signal-contrast"
          d="M139 293.5H195M190 288.5L195 293.5L190 298.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      <g>
        <rect
          className="fill-surface stroke-border"
          x="337"
          y="150"
          width="141"
          height="159"
          rx="3"
        />
        <path
          className="stroke-border"
          d="M352 168H463M352 290H463M369 168V290M389 168V290M409 168V290M429 168V290M449 168V290"
          strokeDasharray="2 5"
        />
        <path
          className={`${styles.chartLine} stroke-ink`}
          d="M352 269L374 243L395 253L419 210L441 224L463 186"
          pathLength="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <circle className="fill-signal" cx="419" cy="210" r="4" />
      </g>

      <g>
        <rect
          className="fill-surface stroke-border"
          x="119"
          y="344"
          width="168"
          height="61"
          rx="3"
        />
        <rect
          className="fill-surface stroke-border"
          x="310"
          y="344"
          width="168"
          height="61"
          rx="3"
        />
        <rect
          className="fill-signal"
          x="134"
          y="359"
          width="24"
          height="4"
          rx="2"
        />
        <path
          className="stroke-ink-muted"
          d="M134 377H253M134 389H225M325 360H405M325 377H460M325 389H433"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}
