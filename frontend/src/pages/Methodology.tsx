import Navbar from "@/components/layout/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ArchitectureDiagram from "@/components/methodology/ArchitectureDiagram";
import OpportunityAnalysis from "@/components/methodology/OpportunityAnalysis";
import MethodologyNavigator from "@/components/methodology/MethodologyNavigator";
import SearchDiscovery from "@/components/methodology/SearchDiscovery";

function Methodology() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/60
          backdrop-blur-xl
          shadow-xl
          shadow-black/20 border-border/60 px-8 py-24 text-center"
        >
        
        <div
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

        {/* Blue Glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            -z-10
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-blue-500/12
            blur-3xl
          "
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            right-8
            bottom-8
            -z-10
            h-56
            w-56
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

          {/* Badge */}
          <div className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10
          px-5
          py-1.5
          text-sm
          font-semibold
          tracking-wide
          text-blue-300
          backdrop-blur-sm
          ">
            METHODOLOGY
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl text-white">
            How Problem Finder
            <span className="block text-text">
              Works
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Transforming thousands of engineering discussions into structured
            opportunity intelligence through semantic embeddings, density-based
            clustering, and AI-powered analysis.
          </p>

          {/* CTA */}
          <div className="
          mt-10
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-blue-500/20
          bg-blue-500/10
          px-5
          py-3
          font-medium
          text-blue-300
          transition-all
          duration-300
          hover:border-blue-500/50
          hover:bg-blue-500/15
          hover:shadow-lg
          hover:shadow-blue-500/10
          ">
            <Link to="/#problems">
              <Button size="lg">
                Explore Problems
              </Button>
            </Link>
          </div>

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-20
              bg-linear-to-t
              from-slate-900
              to-transparent
            "
          />
        </motion.section>

        <MethodologyNavigator />

        <section id="architecture" className="relative py-8">
          <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
            <ArchitectureDiagram />
          <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
        </section>

        <section id="opportunity-analysis" className="relative py-8 bg-muted/20">
          <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
              <OpportunityAnalysis />
          <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
        </section>

        <section id="search-discovery" className="relative py-8">
          <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
              <SearchDiscovery />
          <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
        </section>
        
      </main>
    </>
  );
}

export default Methodology;