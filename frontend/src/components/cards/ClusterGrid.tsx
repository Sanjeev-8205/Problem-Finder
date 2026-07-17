import ClusterCard from "@/components/cards/ClusterCard";
import type { Problem } from "@/types/problem";

type ClusterGridProps = {
  problems: Problem[];
  onSelectCluster: (problem: Problem) => void;
};

function ClusterGrid({
  problems,
  onSelectCluster,
}: ClusterGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {problems.map((problem) => (
        <ClusterCard
          key={problem.cluster_id}
          cluster={problem}
          onClick={() => onSelectCluster(problem)}
        />
      ))}
    </div>
  );
}

export default ClusterGrid;