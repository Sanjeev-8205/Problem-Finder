import StatsCard from "./StatsCard";
import type { Metadata, Problem } from "@/types/problem";
import type { Accent } from "./StatsCard";
import {
  Brain,
  FileText,
  Globe,
  Rocket,
} from "lucide-react";

type StatsPanelProps = {
  metadata: Metadata;
  problems: Problem[];
};

function StatsPanel({ metadata, problems }: StatsPanelProps) {
  const startupOpportunities = problems.filter(
    (problem) => problem.startup_opportunity_score >= 7
  ).length;

  const stats: Array<{
    title: string;
    value: string;
    subtitle: string;
    icon: typeof FileText;
    accent: Accent;
  }> = [
    {
      title: "Documents Analyzed",
      value: metadata.documents_analyzed.toLocaleString(),
      subtitle: "Knowledge sources processed",
      icon: FileText,
      accent: "blue",
    },
    {
      title: "Problems Identified",
      value: metadata.clusters_found.toString(),
      subtitle: "Unique engineering pain points",
      icon: Brain,
      accent: "cyan",
    },
    {
      title: "Communities",
      value: metadata.communities_analyzed.toString(),
      subtitle: "Developer communities explored",
      icon: Globe,
      accent: "purple",
    },
    {
      title: "Startup Opportunities",
      value: startupOpportunities.toString(),
      subtitle: "Opportunity score ≥ 7",
      icon: Rocket,
      accent: "emerald",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            accent={stat.accent}
          />
        ))}
      </div>
    </section>
  );
}

export default StatsPanel;