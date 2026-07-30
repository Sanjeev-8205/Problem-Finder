import { 
  ArrowDown, 
  Boxes, 
  Brain, 
  Network, 
  Sparkles, 
  Database, 
  Monitor, 
  Globe, 
} from "lucide-react";

import { motion } from "framer-motion";

const pipeline = [
  {
    icon: Globe,
    title: "Community Data Collection",
    description:
      "Engineering discussions are collected from GitHub communities to capture real-world developer challenges and feature requests.",

    input: "Engineering Communities",
    component: "GitHub GraphQL API",
    output: "Raw Discussion Data",
  },
  {
  icon: Boxes,
  title: "Data Processing",
  description:
    "Raw discussions are cleaned, normalized, and deduplicated to create a consistent dataset for downstream analysis.",

  input: "Raw Discussion Data",
  component: "Cleaning & Deduplication Pipeline",
  output: "Processed Discussions",
  },
  {
  icon: Brain,
  title: "Semantic Embeddings",
  description:
    "BAAI/bge-base-en-v1.5 converts every engineering discussion into a semantic vector representation.",

  input: "Processed Discussions",
  component: "BAAI/bge-base-en-v1.5",
  output: "768-D Embeddings",
  },
  {
  icon: Network,
  title: "Semantic Clustering",
  description:
    "UMAP reduces dimensionality while HDBSCAN groups semantically similar discussions into meaningful engineering problem clusters.",

  input: "768-D Embeddings",
  component: "UMAP + HDBSCAN",
  output: "Problem Clusters",
  },
  {
  icon: Sparkles,
  title: "AI Analysis",
  description:
    "Gemini analyzes each cluster to identify underlying problems, summarize discussions, and estimate engineering opportunities.",

  input: "Problem Clusters",
  component: "Gemini 2.5 Flash",
  output: "Structured Problem Insights",
  },
  {
  icon: Database,
  title: "Problem Database",
  description:
    "The analyzed results are stored as structured JSON records that power search, filtering, and visualization.",

  input: "Structured Problem Insights",
  component: "JSON Knowledge Base",
  output: "Searchable Problem Repository",
  },
  {
  icon: Monitor,
  title: "Interactive Explorer",
  description:
    "Users explore discovered problems through an interactive interface with search, filtering, analytics, and detailed cluster views.",

  input: "Problem Repository",
  component: "React + TypeScript",
  output: "Interactive Problem Discovery",
  },
];

function ArchitectureDiagram() {
  return (
    <section className="py-24">

      <motion.div className="text-center" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.4 }}>
        <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Pipeline Architecture
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A high-level overview of how Problem Finder transforms GitHub
          discussions into structured engineering insights.
        </p>
      </motion.div>

      <div className="mt-12 flex flex-col items-center">

        {pipeline.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={step.title}
            className="flex w-full flex-col items-center"
          >
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="
            group
            relative
            w-full
            max-w-sm
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-blue-500/40
            hover:shadow-2xl
            hover:shadow-blue-500/10
            ">
              
              <motion.div
              className="
                absolute
                inset-x-0
                top-0
                h-0.5
                bg-linear-to-r
                from-blue-500
                via-cyan-400
                to-violet-500
              "
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ originX: 0 }}
            />
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-semibold text-blue-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div
                className="
                  mx-auto
                  mt-2
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:border-blue-500/40
                  group-hover:bg-blue-500/15
                "
              >
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                >
                  <Icon aria-hidden="true" className="h-8 w-8 text-blue-400" />
                </motion.div>
              </div>

              <h3 className="mt-4 text-xl font-bold tracking-tight text-white">
                {step.title}
              </h3>

              {step.input && (
                <div className="mt-6 space-y-3 text-left">

                  <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                      Input
                    </span>

                    <span className="text-xs font-semibold">
                      {step.input}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                      Core Component
                    </span>

                    <span className="text-xs font-semibold">
                      {step.component}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                      Output
                    </span>

                    <span className="text-xs font-semibold">
                      {step.output}
                    </span>
                  </div>

                </div>
              )}

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>

            </motion.div>

            {index !== pipeline.length - 1 && (
              <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <ArrowDown className="my-6 h-6 w-6 text-blue-400/70" />
            </motion.div>
            )}
          </div>
        );
      })}

      </div>

    </section>
  );
}

export default ArchitectureDiagram;