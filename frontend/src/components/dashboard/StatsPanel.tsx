import StatsCard from "./StatsCard";

const stats = [
  {
    title: "Issues Analyzed",
    value: "1,376",
    icon: "📄",
  },
  {
    title: "Clusters Found",
    value: "19",
    icon: "🧠",
  },
  {
    title: "Repositories",
    value: "19",
    icon: "📦",
  },
  {
    title: "Noise",
    value: "6%",
    icon: "⚡",
  },
  {
    title: "Startup Opportunities",
    value: "19",
    icon: "🚀"
  }
];

function StatsPanel() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default StatsPanel;