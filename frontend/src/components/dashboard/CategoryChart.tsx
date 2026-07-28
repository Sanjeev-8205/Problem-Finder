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

type CategoryChartProps = {
  problems: Problem[];
};

function CategoryChart({ problems }: CategoryChartProps) {
  const categoryCounts = problems.reduce<Record<string, number>>(
    (acc, problem) => {
      const category = problem.primary_category;

      acc[category] = (acc[category] || 0) + 1;

      return acc;
    },
    {}
  );

const chartData = Object.entries(categoryCounts)
  .map(([category, count]) => ({
    category,
    count,
  }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);

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
          Problems by Category
        </h2>

        <p className="mt-1 text-sm leading-relaxed text-slate-400">
          Distribution of engineering problems across top 5 primary categories.
        </p>
      </div>

      <ResponsiveContainer width="100%" height="78%">
        <BarChart
            data={chartData}
            layout="vertical"
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >

          <XAxis
            type="number"
            tick={false}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            type="category"
            dataKey="category"
            width={110}
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#cbd5e1",
              fontSize: 12,
              fontWeight: 500,
            }}
          />

          <CartesianGrid
            horizontal={true}
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
            <linearGradient id="categoryGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          <Bar
            dataKey="count"
            fill="url(#categoryGradient)"
            barSize={24}
            radius={[0, 10, 10, 0]}
            animationDuration={900}
            label={{
              position: "right",
              fill: "#cbd5e1",
              fontSize: 12,
              fontWeight: 600,
            }}
            activeBar={{
              fill: "#60a5fa",
            }}
            animationEasing="ease-out"
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;