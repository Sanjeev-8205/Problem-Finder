type StatsCardProps = {
  title: string;
  value: string;
  icon: string;
};

function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-sm font-medium text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;