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
    <div className="h-80 w-full rounded-2xl border border-slate-800 bg-slate-900 px-5 pt-5 pb-4 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Problems by Category
        </h2>

        <p className="text-sm text-muted-foreground">
          Distribution of engineering problems across top 5 primary categories.
        </p>
      </div>

      <ResponsiveContainer width="100%" height="85%">
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
            tick={{ fontSize: 12 }}
          />

          <CartesianGrid
            horizontal={false}
            vertical={false}
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
            barSize={28}
            label={{ position: "right", fill: "#cbd5e1" }}
            radius={[0, 8, 8, 0]}
            animationDuration={700}
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;