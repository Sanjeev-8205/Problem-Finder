import type { Problem } from "@/types/problem";
import CategoryChart from "./CategoryChart";
import OpportunityChart from "./OpportunityChart";
import { motion } from "framer-motion";

type DashboardChartsProps = {
  problems: Problem[];
};

function DashboardCharts({ problems }: DashboardChartsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <CategoryChart problems={problems} />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
            duration: 0.4,
            delay: 0.1,
            }}
        >
            <OpportunityChart problems={problems} />
        </motion.div>
      </div>
    </section>
  );
}

export default DashboardCharts;