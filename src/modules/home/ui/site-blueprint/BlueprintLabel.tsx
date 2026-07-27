type BlueprintLabelProps = {
  label: string;
  width: number;
  x: number;
  y: number;
};

export function BlueprintLabel({ label, width, x, y }: BlueprintLabelProps) {
  return (
    <g>
      <rect
        className="fill-surface-raised stroke-border"
        x={x}
        y={y}
        width={width}
        height="20"
        rx="10"
      />
      <text
        x={x + width / 2}
        y={y + 10}
        dominantBaseline="central"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}
