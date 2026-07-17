import ClusterCard from "@/components/cards/ClusterCard";
import type { Problem } from "@/types/problem";
import { motion } from "framer-motion";

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
      {problems.map((problem, index) => (
        <motion.div
        key={problem.cluster_id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
            duration: 0.3,
            delay: index * 0.01,
        }}
        >
        <ClusterCard
            cluster={problem}
            onClick={() => onSelectCluster(problem)}
        />
        </motion.div>
        ))}
    </div>
  );
}

export default ClusterGrid;