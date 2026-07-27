import type { LucideIcon } from "lucide-react";

const accentStyles = {
  blue: {
    line: "from-blue-500 via-sky-400",
    hoverBorder: "hover:border-blue-500/60",
    shadow: "hover:shadow-blue-500/10",
    icon: "group-hover:text-blue-400",
    iconBg: "group-hover:bg-blue-500/10",
    iconBorder: "group-hover:border-blue-500/40",
  },

  cyan: {
    line: "from-cyan-500 via-blue-400",
    hoverBorder: "hover:border-cyan-500/60",
    shadow: "hover:shadow-cyan-500/10",
    icon: "group-hover:text-cyan-400",
    iconBg: "group-hover:bg-cyan-500/10",
    iconBorder: "group-hover:border-cyan-500/40",
  },

  purple: {
    line: "from-purple-500 via-violet-400",
    hoverBorder: "hover:border-purple-500/60",
    shadow: "hover:shadow-purple-500/10",
    icon: "group-hover:text-purple-400",
    iconBg: "group-hover:bg-purple-500/10",
    iconBorder: "group-hover:border-purple-500/40",
  },

  emerald: {
    line: "from-emerald-500 via-green-400",
    hoverBorder: "hover:border-emerald-500/60",
    shadow: "hover:shadow-emerald-500/10",
    icon: "group-hover:text-emerald-400",
    iconBg: "group-hover:bg-emerald-500/10",
    iconBorder: "group-hover:border-emerald-500/40",
  },
};

export type Accent = keyof typeof accentStyles;

type StatsCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  accent: Accent;
};

function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accent,
}: StatsCardProps) {
  const style = accentStyles[accent];

  return (
    <div
      className={`
        group
        relative
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
        hover:shadow-xl
        ${style.hoverBorder}
        ${style.shadow}
      `}
    >
      <div
        className={`
          absolute
          inset-x-0
          top-0
          h-px
          bg-linear-to-r
          ${style.line}
          to-transparent
          opacity-70
        `}
      />

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-400">
            {title}
          </h3>
        </div>

        <div
          className={`
            rounded-2xl
            border
            border-slate-700
            bg-slate-800/80
            p-3.5
            transition-all
            duration-300
            group-hover:scale-105
            ${style.iconBorder}
            ${style.iconBg}
          `}
        >
          <Icon
            className={`
              h-6
              w-6
              text-slate-300
              transition-colors
              duration-300
              ${style.icon}
            `}
            strokeWidth={2}
          />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-5xl font-extrabold tracking-tight text-white">
          {value}
        </p>

        <p className="mt-2 text-sm text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default StatsCard;