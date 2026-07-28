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
    <div
      className="
        group
        relative
        h-96
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-blue-500/20
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-linear-to-r
          from-blue-500
          via-cyan-400
          to-transparent
          opacity-70
        "
      />
      <div className="mb-7">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Startup Opportunity Distribution
        </h2>

        <p className="mt-1 text-sm leading-relaxed text-slate-400">
          Number of problems grouped by startup opportunity score.
        </p>
      </div>

      <ResponsiveContainer width="100%" height="78%">
        <BarChart data={opportunityData}>
          <XAxis
            dataKey="range"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#cbd5e1",
              fontSize: 12,
              fontWeight: 500,
            }}
          />

          <YAxis
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#cbd5e1",
              fontSize: 12,
              fontWeight: 500,
            }}
          />

          <CartesianGrid
            vertical={false}
            stroke="#1e293b"
            strokeDasharray="3 3"
          />

          <Tooltip
            cursor={{ fill: "rgba(148,163,184,0.08)" }}
            contentStyle={{
              background: "#0f172aee",
              border: "1px solid #334155",
              borderRadius: "14px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            }}
            labelStyle={{ color: "#e2e8f0" }}
            itemStyle={{
              color: "#f8fafc",
            }}
          />

          <defs>
            <linearGradient id="opportunityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          <Bar
            dataKey="count"
            fill="url(#opportunityGradient)"
            radius={[10, 10, 0, 0]}
            animationDuration={900}
            animationEasing="ease-out"
            activeBar={{
              fill: "#93c5fd",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OpportunityChart;