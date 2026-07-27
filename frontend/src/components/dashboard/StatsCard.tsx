import type { LucideIcon } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
};

function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-400">
            {title}
          </h3>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800 p-3 transition-colors group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
          <Icon
            className="h-6 w-6 text-slate-300 group-hover:text-blue-400"
            strokeWidth={2}
          />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-5xl font-bold tracking-tight text-white">
          {value}
        </p>

        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      </div>

    </div>
  );
}

export default StatsCard;