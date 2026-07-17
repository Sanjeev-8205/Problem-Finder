import type { Problem } from "@/types/problem";
import {
  Rocket,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

type ClusterCardProps = {
  cluster: Problem;
  onClick: () => void;
};

function ClusterCard({ cluster, onClick }: ClusterCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-start justify-between gap-4">

        <div>

          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            {cluster.problem_category}
          </span>

          <h2 className="mt-4 text-xl leading-snug font-bold sm:text-2xl">
            {cluster.cluster_name}
          </h2>

        </div>

        <div className="flex shrink-0 flex-col items-center rounded-lg bg-slate-800 px-3 py-2">
          <Rocket className="size-4 text-blue-400" />

          <span className="mt-1 text-sm font-semibold">
            {cluster.startup_opportunity_score}
          </span>
        </div>

      </div>

      <p className="mt-6 line-clamp-3 leading-7 text-slate-400">

        {cluster.summary}

      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {cluster.keywords.slice(0, 5).map((keyword) => (
          <span
            key={keyword}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
          >
            {keyword}
          </span>
        ))}

        {cluster.keywords.length > 5 && (
          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
            +{cluster.keywords.length - 5}
          </span>
        )}

      </div>

      <div className="mt-auto flex items-center justify-between gap-4 pt-8">

        <div className="flex items-center gap-1.5 text-sm text-red-400">
          <AlertTriangle className="size-4" />

          <span>
            {cluster.severity} Severity
          </span>
        </div>

        <button
          onClick={onClick}
          className="flex items-center gap-1.5 font-medium text-blue-400 transition-colors hover:text-blue-300"
        >
          Explore

          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

      </div>

    </article>
  );
}

export default ClusterCard;