import {
  Search,
  Filter,
  ChartColumn,
  FolderSearch,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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

function SearchDiscovery(){
    return (
    <motion.section id="search-discovery" className="py-24 "
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
                Interactive Experience
            </Badge>

            <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                Search & Discovery
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
                Explore validated engineering opportunities through intelligent search,
                advanced filtering, interactive analytics, and detailed cluster
                exploration. Problem Finder transforms large-scale engineering
                discussions into an intuitive discovery experience for identifying
                high-impact software ideas.
            </p>
            </motion.div>

            {/* Features Grid */}

            <motion.div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2" initial='hidden'
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

            {/* Smart Search */}

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
                        <Search aria-hidden="true" className="h-8 w-8 text-blue-400" />
                    </motion.div>
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                Smart Search
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Instantly search across engineering discussions using semantic search
                to surface relevant problem clusters and recurring developer
                challenges.
                </p>

                <div className="mt-16 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                    Feature
                    </span>
                    <span className="text-xs font-semibold">
                    Semantic Search
                    </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                    Purpose
                    </span>
                    <span className="text-xs font-semibold">
                    Rapid Discovery
                    </span>
                </div>
                </div>
            </motion.div>

            {/* Intelligent Filters */}

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
                    <Filter aria-hidden="true" className="h-8 w-8 text-blue-400" />
                    </motion.div>
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                Intelligent Filters
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Narrow opportunities using categories, frequency, engagement,
                popularity, and other dimensions to focus on the most relevant
                engineering problems.
                </p>

                <div className="mt-10 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                    Feature
                    </span>
                    <span className="text-xs font-semibold">
                    Advanced Filters
                    </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                    Purpose
                    </span>
                    <span className="text-xs font-semibold">
                    Focused Exploration
                    </span>
                </div>
                </div>
            </motion.div>

            {/* Interactive Analytics */}

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
                        <ChartColumn aria-hidden="true" className="h-8 w-8 text-blue-400" />
                    </motion.div>
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                Interactive Analytics
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Visual dashboards summarize opportunity categories, problem
                distribution, and community trends to reveal where engineering demand
                is concentrated.
                </p>

                <div className="mt-10 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                    Feature
                    </span>
                    <span className="text-xs font-semibold">
                    Visual Analytics
                    </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                    Purpose
                    </span>
                    <span className="text-xs font-semibold">
                    Trend Identification
                    </span>
                </div>
                </div>
            </motion.div>

            {/* Cluster Explorer */}

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
                    <FolderSearch aria-hidden="true" className="h-8 w-8 text-blue-400" />
                    </motion.div>
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                Cluster Explorer
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Inspect every discovered problem cluster with AI-generated summaries,
                representative discussions, opportunity metrics, and supporting
                evidence.
                </p>

                <div className="mt-16 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                    Feature
                    </span>
                    <span className="text-xs font-semibold">
                    Detailed Insights
                    </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 px-3 py-2">
                    <span className="text-xs font-medium text-slate-400">
                    Purpose
                    </span>
                    <span className="text-xs font-semibold">
                    Decision Support
                    </span>
                </div>
                </div>
            </motion.div>

            </motion.div>

            {/* Summary */}

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
                From Data to Product Opportunities
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
                By combining semantic search, intelligent filtering, interactive
                analytics, and AI-powered cluster exploration, Problem Finder enables
                engineers, researchers, founders, and product teams to efficiently
                discover validated software opportunities from large-scale engineering
                discussions.
            </p>
            </motion.div>

        </div>
    </motion.section>
);
}

export default SearchDiscovery;