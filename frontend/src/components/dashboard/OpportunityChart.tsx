import type { Problem } from "@/types/problem";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
    <div className="h-80 w-full rounded-xl border p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Startup Opportunity Distribution
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={opportunityData}>
          <XAxis dataKey="range" />

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

export default OpportunityChart;