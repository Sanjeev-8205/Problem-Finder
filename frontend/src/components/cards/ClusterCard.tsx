import type { Problem } from "@/types/problem";
import {
  Rocket,
  ArrowRight,
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

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
              {cluster.primary_category}
            </span>

            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {cluster.secondary_category}
            </span>
          </div>

          <h2 className="mt-4 text-xl leading-snug font-bold sm:text-2xl">
            {cluster.cluster_name}
          </h2>

        </div>

        <div className="flex shrink-0 flex-col items-center rounded-lg bg-slate-800 px-3 py-2">

          <Rocket
            aria-hidden="true"
            className="size-4 text-blue-400"
          />

          <span className="mt-1 text-lg font-bold">
            {cluster.startup_opportunity_score}
          </span>

          <span className="text-[10px] uppercase tracking-wide text-slate-400">
            Score
          </span>

        </div>

      </div>

      <p className="mt-6 line-clamp-3 leading-7 text-slate-400">
        {cluster.recurring_problem}
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

        <div className="flex flex-wrap gap-2">

          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs">
            Severity {cluster.pain_severity_score}/10
          </span>

          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs">
            {cluster.difficulty_to_solve}
          </span>

        </div>

        <button
          onClick={onClick}
          aria-label={`Explore ${cluster.cluster_name}`}
          className="flex items-center gap-1.5 font-medium text-blue-400 transition-colors hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2
          focus:ring-offset-slate-900
        >
          Explore

          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

      </div>

    </article>
  );
}

export default ClusterCard;