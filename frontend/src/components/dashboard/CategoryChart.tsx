import type { Problem } from "@/types/problem";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type CategoryChartProps = {
  problems: Problem[];
};

function CategoryChart({ problems }: CategoryChartProps) {
  const categoryCounts = problems.reduce<Record<string, number>>(
    (acc, problem) => {
      const category = problem.problem_category;

      acc[category] = (acc[category] || 0) + 1;

      return acc;
    },
    {}
  );

  const chartData = Object.entries(categoryCounts).map(
    ([category, count]) => ({
      category,
      count,
    })
  );

  return (
    <div className="h-80 w-full rounded-xl border p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Problems by Category
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={chartData}>
          <XAxis dataKey="category" />
          <YAxis allowDecimals={false} />
          <Tooltip />

          <Bar
            dataKey="count"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;