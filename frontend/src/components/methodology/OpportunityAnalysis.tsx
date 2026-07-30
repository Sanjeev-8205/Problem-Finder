import { 
  BarChart3,
  TriangleAlert,
  MessageSquareMore,
  Rocket
} from "lucide-react";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

const lineVariants = {
  hidden: {
    scaleX: 0,
  },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.6,
    },
  },
};

function OpportunityAnalysis() {
  return (
    <motion.section id="opportunity-analysis" className="py-24"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}>
        <div>

        {/* Hero */}

        <motion.div className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}>
                <Badge
            className="
                mb-4
                border
                border-blue-500/20
                bg-blue-500/10
                text-blue-300
                backdrop-blur-sm
            "
            >
            Evaluation Framework
            </Badge>

            <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Opportunity Analysis
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
            Every discovered problem cluster is evaluated across multiple
            dimensions to identify high-impact opportunities. Rather than relying
            on a single metric, Problem Finder considers demand, severity,
            community validation, and innovation potential to prioritize
            meaningful product ideas.
            </p>
        </motion.div>

        {/* Grid */}

        <motion.div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2" 
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={{
            hidden: {},
            show: {
                transition: {
                    staggerChildren: 0.12,
                },
            },
        }}>

            {/* Frequency */}
            <motion.div 
            variants={{
                hidden: {
                    opacity: 0,
                    y: 30,
                },
                show: {
                    opacity: 1,
                    y: 0,
                },
            }}
            transition={{
                duration: 0.4,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
            backdrop-blur-xl
            transition-all
            duration-300
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
                style={{ originX: 0 }}
                variants={lineVariants}
                />
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
                        <BarChart3 aria-hidden="true" className="h-8 w-8 text-blue-400" />
                    </motion.div>
            </div>

            <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                Frequency
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Measures how frequently similar problems appear across engineering
                communities. Recurring issues often indicate widespread demand.
            </p>

            <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl
                border
                border-slate-800
                bg-slate-800/40
                transition-all
                group-hover:border-blue-500/30
                group-hover:bg-slate-800/60 px-3 py-2">
                <span className="text-xs font-medium text-slate-400">
                    Metric
                </span>
                <span className="text-xs font-semibold">
                    Discussion Frequency
                </span>
                </div>

                <div className="flex items-center justify-between rounded-xl
                border
                border-slate-800
                bg-slate-800/40
                transition-all
                group-hover:border-blue-500/30
                group-hover:bg-slate-800/60 px-3 py-2">
                <span className="text-xs font-medium text-slate-400">
                    Purpose
                </span>
                <span className="text-xs font-semibold">
                    Demand Estimation
                </span>
                </div>
            </div>
            </motion.div>

            {/* Severity */}
            <motion.div 
            variants={{
                hidden: {
                    opacity: 0,
                    y: 30,
                },
                show: {
                    opacity: 1,
                    y: 0,
                },
            }}
            transition={{
                duration: 0.4,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-blue-500/40
            hover:shadow-2xl
            hover:shadow-blue-500/10
            ">
                <motion.div
                variants={lineVariants}
                style={{ originX: 0 }}
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
                />
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
                        <TriangleAlert aria-hidden="true" className="h-8 w-8 text-blue-400" />
                    </motion.div>
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                    Severity
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Estimates how disruptive or painful a problem is based on recurring
                    complaints, language intensity, and engineering impact.
                </p>

                <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-xl
                    border
                    border-slate-800
                    bg-slate-800/40
                    transition-all
                    group-hover:border-blue-500/30
                    group-hover:bg-slate-800/60 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                        Metric
                    </span>
                    <span className="text-xs font-semibold">
                        Problem Severity
                    </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl
                    border
                    border-slate-800
                    bg-slate-800/40
                    transition-all
                    group-hover:border-blue-500/30
                    group-hover:bg-slate-800/60 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                        Purpose
                    </span>
                    <span className="text-xs font-semibold">
                        Pain Assessment
                    </span>
                    </div>
                </div>
                </motion.div>

            {/* Engagement */}
            <motion.div 
            variants={{
                hidden: {
                    opacity: 0,
                    y: 30,
                },
                show: {
                    opacity: 1,
                    y: 0,
                },
            }}
            transition={{
                duration: 0.4,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-blue-500/40
            hover:shadow-2xl
            hover:shadow-blue-500/10
            ">
                <motion.div
                variants={lineVariants}
                style={{ originX: 0 }}
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
                />
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
                        <MessageSquareMore aria-hidden="true" className="h-8 w-8 text-blue-400" />
                    </motion.div>
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                    Engagement
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Evaluates replies, reactions, and discussion depth to identify
                    problems that generate sustained community attention.
                </p>

                <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-xl
                    border
                    border-slate-800
                    bg-slate-800/40
                    transition-all
                    group-hover:border-blue-500/30
                    group-hover:bg-slate-800/60 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                        Metric
                    </span>
                    <span className="text-xs font-semibold">
                        Community Engagement
                    </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl
                    border
                    border-slate-800
                    bg-slate-800/40
                    transition-all
                    group-hover:border-blue-500/30
                    group-hover:bg-slate-800/60 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                        Purpose
                    </span>
                    <span className="text-xs font-semibold">
                        Interest Validation
                    </span>
                    </div>
                </div>
                </motion.div>

            {/* Innovation Potential */}
            <motion.div 
            variants={{
                hidden: {
                    opacity: 0,
                    y: 30,
                },
                show: {
                    opacity: 1,
                    y: 0,
                },
            }}
            transition={{
                duration: 0.4,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-blue-500/40
            hover:shadow-2xl
            hover:shadow-blue-500/15
            ">
                <motion.div
                variants={lineVariants}
                style={{ originX: 0 }}
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
                />
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
                    <Rocket aria-hidden="true" className="h-8 w-8 text-blue-400" />
                    </motion.div>
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                    Innovation Potential
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Uses AI-assisted reasoning to estimate whether solving the identified
                    problem represents a meaningful product opportunity.
                </p>

                <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-xl
                    border
                    border-slate-800
                    bg-slate-800/40
                    transition-all
                    group-hover:border-blue-500/30
                    group-hover:bg-slate-800/60 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                        Metric
                    </span>
                    <span className="text-xs font-semibold">
                        Opportunity Score
                    </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl
                    border
                    border-slate-800
                    bg-slate-800/40
                    transition-all
                    group-hover:border-blue-500/30
                    group-hover:bg-slate-800/60 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                        Purpose
                    </span>
                    <span className="text-xs font-semibold">
                        Idea Prioritization
                    </span>
                    </div>
                </div>
                </motion.div>

        </motion.div>

        {/* Final Summary */}

        <motion.div
         initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.2,
            }}
        className="
            relative
            mx-auto
            mt-16
            max-w-4xl
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
            text-center
            backdrop-blur-xl
        "
        >
            <motion.div
            variants={lineVariants}
            style={{ originX: 0 }}
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
            />
            <h3 className="text-2xl font-bold text-white">
            From Problems to Opportunities
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
            These evaluation dimensions provide a structured framework for
            assessing engineering problem clusters. Together, they help surface
            opportunities that demonstrate recurring demand, meaningful impact,
            strong community engagement, and promising potential for innovative
            software solutions.
            </p>
        </motion.div>

        </div>
    </motion.section>
  );
}

export default OpportunityAnalysis;