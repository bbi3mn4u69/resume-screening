"use client";

import { arc, pie, scaleBand, scaleLinear } from "d3";

type CategoryDatum = { category: string; count: number };
type ScreeningDatum = {
  candidateId: string;
  fitScore: number | null;
  preScreenScore: number | null;
  confidence: number | null;
  matchLabel: string | null;
};

const matchLabels = [
  { key: "HIGH_MATCH", label: "High match", color: "var(--chart-1)" },
  {
    key: "MODERATE_MATCH",
    label: "Moderate",
    color: "var(--chart-2)",
  },
  { key: "LOW_MATCH", label: "Low match", color: "var(--chart-3)" },
  {
    key: "NOT_RELEVANT",
    label: "Not relevant",
    color: "var(--chart-4)",
  },
] as const;

function shortLabel(value: string) {
  return value
    .toLowerCase()
    .split("-")
    .map((part) =>
      part.length <= 3
        ? part.toUpperCase()
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join(" ");
}

export function CategoryDistributionChart({ data }: { data: CategoryDatum[] }) {
  const ordered = [...data].sort((a, b) => b.count - a.count);
  const width = 780;
  const rowHeight = 28;
  const margin = { top: 12, right: 50, bottom: 28, left: 210 };
  const height = Math.max(260, ordered.length * rowHeight + 48);
  const x = scaleLinear()
    .domain([0, Math.max(...ordered.map((item) => item.count), 1)])
    .nice()
    .range([margin.left, width - margin.right]);
  const y = scaleBand()
    .domain(ordered.map((item) => item.category))
    .range([margin.top, height - margin.bottom])
    .padding(0.28);
  const ticks = x.ticks(5);

  return (
    <div>
      <svg
        className="w-full"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Resume count by dataset category"
      >
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={x(tick)}
              x2={x(tick)}
              y1={margin.top}
              y2={height - margin.bottom}
              stroke="var(--border)"
            />
            <text
              x={x(tick)}
              y={height - 6}
              textAnchor="middle"
              className="fill-muted-foreground text-[11px]"
            >
              {tick}
            </text>
          </g>
        ))}
        {ordered.map((item) => {
          const yPosition = y(item.category) ?? 0;
          return (
            <g key={item.category}>
              <text
                x={margin.left - 12}
                y={yPosition + y.bandwidth() / 2}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-foreground text-[11px] font-medium"
              >
                {shortLabel(item.category)}
              </text>
              <rect
                x={margin.left}
                y={yPosition}
                width={Math.max(2, x(item.count) - margin.left)}
                height={y.bandwidth()}
                rx={4}
                fill="var(--primary)"
              >
                <title>{`${shortLabel(item.category)}: ${item.count} resumes`}</title>
              </rect>
              <text
                x={x(item.count) + 8}
                y={yPosition + y.bandwidth() / 2}
                dominantBaseline="middle"
                className="fill-muted-foreground font-mono text-[11px]"
              >
                {item.count}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function ScreeningAnalytics({ data }: { data: ScreeningDatum[] }) {
  const completed = data.filter(
    (
      item,
    ): item is ScreeningDatum & {
      fitScore: number;
      preScreenScore: number;
    } => item.fitScore !== null && item.preScreenScore !== null,
  );
  const matchData = matchLabels.map((item) => ({
    ...item,
    count: data.filter((candidate) => candidate.matchLabel === item.key).length,
  }));
  const total = matchData.reduce((sum, item) => sum + item.count, 0);
  const slices = pie<(typeof matchData)[number]>()
    .sort(null)
    .value((item) => item.count)(matchData);
  const ring = arc<(typeof slices)[number]>().innerRadius(60).outerRadius(92);

  const scatterWidth = 620;
  const scatterHeight = 290;
  const scatterMargin = { top: 16, right: 20, bottom: 42, left: 48 };
  const x = scaleLinear()
    .domain([0, 100])
    .range([scatterMargin.left, scatterWidth - scatterMargin.right]);
  const y = scaleLinear()
    .domain([0, 100])
    .range([scatterHeight - scatterMargin.bottom, scatterMargin.top]);
  const ticks = [0, 20, 40, 60, 80, 100];

  return (
    <div className="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-semibold">Match distribution</h3>
          <p className="text-muted-foreground text-sm">
            Candidate mix across the fixed score thresholds.
          </p>
        </div>
        <div className="grid items-center gap-4 sm:grid-cols-[190px_minmax(0,1fr)] xl:grid-cols-1">
          <svg
            className="mx-auto size-[190px]"
            viewBox="-110 -110 220 220"
            role="img"
            aria-label="Candidate match distribution"
          >
            {slices.map((slice) => (
              <path
                key={slice.data.key}
                d={ring(slice) ?? undefined}
                fill={slice.data.color}
                stroke="var(--card)"
                strokeWidth={3}
              >
                <title>{`${slice.data.label}: ${slice.data.count}`}</title>
              </path>
            ))}
            <text
              textAnchor="middle"
              y={-3}
              className="fill-foreground font-mono text-[26px] font-semibold"
            >
              {total}
            </text>
            <text
              textAnchor="middle"
              y={18}
              className="fill-muted-foreground text-[11px]"
            >
              evaluated
            </text>
          </svg>
          <div className="grid gap-2">
            {matchData.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[10px_1fr_auto] items-center gap-2 text-xs"
              >
                <span
                  className="size-2.5 rounded-sm"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-mono font-medium">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-w-0">
        <div>
          <h3 className="font-semibold">AI and lexical score comparison</h3>
          <p className="text-muted-foreground text-sm">
            Each point is one resume. Distance from the diagonal shows model
            disagreement.
          </p>
        </div>
        <div className="mt-4">
          <svg
            className="w-full"
            viewBox={`0 0 ${scatterWidth} ${scatterHeight}`}
            role="img"
            aria-label="Scatter plot comparing lexical pre-screen scores and AI fit scores"
          >
            {ticks.map((tick) => (
              <g key={tick}>
                <line
                  x1={x(tick)}
                  x2={x(tick)}
                  y1={scatterMargin.top}
                  y2={scatterHeight - scatterMargin.bottom}
                  stroke="var(--border)"
                />
                <line
                  x1={scatterMargin.left}
                  x2={scatterWidth - scatterMargin.right}
                  y1={y(tick)}
                  y2={y(tick)}
                  stroke="var(--border)"
                />
                <text
                  x={x(tick)}
                  y={scatterHeight - 20}
                  textAnchor="middle"
                  className="fill-muted-foreground font-mono text-[10px]"
                >
                  {tick}
                </text>
                <text
                  x={scatterMargin.left - 10}
                  y={y(tick)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="fill-muted-foreground font-mono text-[10px]"
                >
                  {tick}
                </text>
              </g>
            ))}
            <line
              x1={x(0)}
              y1={y(0)}
              x2={x(100)}
              y2={y(100)}
              stroke="var(--muted-foreground)"
              strokeDasharray="5 5"
              opacity={0.55}
            />
            {completed.map((item) => (
              <circle
                key={item.candidateId}
                cx={x(item.preScreenScore)}
                cy={y(item.fitScore)}
                r={4.5}
                fill="var(--primary)"
                fillOpacity={Math.max(0.35, item.confidence ?? 0.55)}
                stroke="var(--card)"
                strokeWidth={1.5}
              >
                <title>{`${item.candidateId}: AI ${item.fitScore}, lexical ${item.preScreenScore}`}</title>
              </circle>
            ))}
            <text
              x={(scatterMargin.left + scatterWidth - scatterMargin.right) / 2}
              y={scatterHeight - 3}
              textAnchor="middle"
              className="fill-muted-foreground text-[11px]"
            >
              Lexical pre-screen score
            </text>
            <text
              transform={`translate(12 ${(scatterMargin.top + scatterHeight - scatterMargin.bottom) / 2}) rotate(-90)`}
              textAnchor="middle"
              className="fill-muted-foreground text-[11px]"
            >
              AI fit score
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
