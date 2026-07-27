import type { Problem } from "@/types/problem";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type OpportunityChartProps = {
  problems: Problem[];
};

function OpportunityChart({ problems }: OpportunityChartProps) {
  const opportunityData = [
    {
      range: "Low (1-3)",
      count: problems.filter(
        (problem) => problem.startup_opportunity_score <= 3
      ).length,
    },
    {
      range: "Medium (4-6)",
      count: problems.filter(
        (problem) =>
          problem.startup_opportunity_score >= 4 &&
          problem.startup_opportunity_score <= 6
      ).length,
    },
    {
      range: "High (7-10)",
      count: problems.filter(
        (problem) => problem.startup_opportunity_score >= 7
      ).length,
    },
  ];

  return (
    <div className="h-80 w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Startup Opportunity Distribution
        </h2>

        <p className="text-sm text-muted-foreground">
          Number of problems grouped by startup opportunity score.
        </p>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={opportunityData}>
          <XAxis
            dataKey="range"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
          />

          <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
          />

          <Tooltip
            cursor={{ fill: "rgba(148,163,184,0.08)" }}
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
            labelStyle={{ color: "#e2e8f0" }}
          />

          <Bar
            dataKey="count"
            radius={[8,8,0,0]}
            animationDuration={700}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OpportunityChart;