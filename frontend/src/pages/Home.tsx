import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import StatsPanel from "@/components/dashboard/StatsPanel";
import type { Problem } from "@/types/problem";
import { getProblems } from "@/services/problemService";
import ClusterModal from "@/components/cards/ClusterModal";
import { useState } from "react";
import ClusterGrid from "@/components/cards/ClusterGrid";
import FilterBar from "@/components/filters/FilterBar";
import DashboardCharts from "@/components/dashboard/DashboardCharts";

function Home() {
    const problems = getProblems();
    const [selectedCluster, setSelectedCluster] = useState<Problem | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const categories = ["All", ...new Set(problems.map((problem) => problem.problem_category)),];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");

    const severityRank: Record<string, number> = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    const difficultyRank: Record<string, number> = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    const filteredProblems = problems.filter((problem) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      problem.cluster_name.toLowerCase().includes(query) ||
      problem.summary.toLowerCase().includes(query) ||
      problem.problem_category.toLowerCase().includes(query) ||
      problem.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query)
      );

    const matchesCategory =
      selectedCategory === "All" ||
      problem.problem_category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedProblems = [...filteredProblems].sort((a, b) => {
    switch (sortBy) {
      case "opportunity":
        return b.startup_opportunity_score - a.startup_opportunity_score;

      case "severity":
        return (
          (severityRank[b.severity] ?? 0) -
          (severityRank[a.severity] ?? 0)
        );

      case "difficulty":
        return (
          (difficultyRank[b.difficulty_to_solve] ?? 0) -
          (difficultyRank[a.difficulty_to_solve] ?? 0)
        );

      default:
        return 0;
    }
  });

  return (
    <>
      <Navbar />
      <Hero />
      <StatsPanel />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <DashboardCharts problems={problems} />
      </section>
      
      <section id="problems" className="scroll-mt-20 mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6">

          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onReset={() => {
              console.log("Home reset called");
              setSearchQuery("");
              setSelectedCategory("All");
              setSortBy("default");
            }}
          />

          <p className="text-sm text-muted-foreground">
            Showing {filteredProblems.length} of {problems.length} problems
          </p>

          {filteredProblems.length > 0 ? (
            <ClusterGrid
              problems={sortedProblems}
              onSelectCluster={setSelectedCluster}
            />
          ) : (
            <div className="py-16 text-center">
              <h3 className="text-lg font-semibold">
                No problems found
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Try searching with a different keyword or category.
              </p>
            </div>
          )}

        </div>
      </section>
      
      {
        selectedCluster && (

        <ClusterModal

        cluster={selectedCluster}

        open={selectedCluster !== null}

        onOpenChange={(open)=>{

        if(!open){

        setSelectedCluster(null);

        }

        }}

        />

        )
        }
    </>
  );
}

export default Home;