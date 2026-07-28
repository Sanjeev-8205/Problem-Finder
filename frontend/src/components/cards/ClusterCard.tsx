import type { Problem } from "@/types/problem";
import {
  Rocket,
  ArrowRight,
  Tag,
} from "lucide-react";

type ClusterCardProps = {
  cluster: Problem;
  onClick: () => void;
};

const badgeColors = [
  "border-blue-500/20 bg-blue-500/8 text-blue-300",
  "border-cyan-500/20 bg-cyan-500/8 text-cyan-300",
  "border-violet-500/20 bg-violet-500/8 text-violet-300",
  "border-slate-600 bg-slate-800 text-slate-300",
];

function getCategoryColor(category: string) {
  let hash = 0;

  for (const char of category) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return badgeColors[hash % badgeColors.length];
}

function ClusterCard({ cluster, onClick }: ClusterCardProps) {
  const categoryColor = getCategoryColor(cluster.primary_category);
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/60
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
    <div className="flex-1">
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
      <div className="flex items-start justify-between gap-4">

        <div>

          <div className="flex flex-wrap gap-2">
            <span
              className={`
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-medium
                ${categoryColor}
              `}
            >
              {cluster.primary_category}
            </span>

            <span
              className="
                rounded-full
                border
                border-slate-700
                bg-slate-800/70
                px-3
                py-1
                text-xs
                text-slate-300
              "
            >
              {cluster.secondary_category}
            </span>
          </div>

          <h2 className="mt-4 text-xl leading-snug font-bold sm:text-2xl">
            {cluster.cluster_name}
          </h2>

        </div>

        <div
          className="
            flex
            w-20
            shrink-0
            flex-col
            items-center
            rounded-2xl
            border
            border-slate-700
            bg-linear-to-b
            from-slate-800/90
            to-slate-900/90
            px-4
            py-3
            transition-all
            duration-300
            group-hover:border-blue-500/40
            group-hover:bg-blue-500/10
          "
        >

          <Rocket
            aria-hidden="true"
            className="
              size-5
              text-blue-400
              transition-all
              duration-300
              group-hover:-translate-y-0.5
              group-hover:scale-110
            "
          />

          <span className="mt-2 text-2xl font-extrabold tracking-tight text-white">
            {cluster.startup_opportunity_score}
          </span>

          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
            SCORE
          </span>

        </div>

      </div>

      <p className="mt-6 line-clamp-3 leading-7 text-slate-300">
        {cluster.recurring_problem}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {cluster.keywords.slice(0, 5).map((keyword) => (
          <span
            key={keyword}
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-slate-700
              bg-slate-800/60
              px-3
              py-1
              text-xs
              text-slate-300
              transition-all
              duration-200
              group-hover:border-slate-600
              group-hover:bg-slate-800
            "
          >
            <Tag className="mr-1.5 size-3 text-slate-500" />
            {keyword}
          </span>
        ))}

        {cluster.keywords.length > 5 && (
        <span
          className="
            rounded-full
            border
            border-slate-700
            bg-slate-800/40
            px-3
            py-1
            text-xs
            font-medium
            text-slate-400
          "
        >
          +{cluster.keywords.length - 5}
        </span>
        )}

      </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">

        <div className="flex flex-wrap gap-2">

          <span className="
            rounded-full
            border
            group-hover:border-slate-700
            bg-slate-800/70
            px-3
            py-1
            text-xs
            font-medium
            text-slate-300"
          >
            Severity {cluster.pain_severity_score}/10
          </span>

          <span className="
            rounded-full
            border
            group-hover:border-slate-700
            bg-slate-800/70
            px-3
            py-1
            text-xs
            font-medium
            text-slate-300
            ">
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