import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import StatsPanel from "@/components/dashboard/StatsPanel";
import type { Problem } from "@/types/problem";
import { getProblems } from "@/services/problemService";
import ClusterModal from "@/components/cards/ClusterModal";
import { useState } from "react";
import ClusterGrid from "@/components/cards/ClusterGrid";

function Home() {
    const problems = getProblems();
    const [selectedCluster, setSelectedCluster] = useState<Problem | null>(null);
  return (
    <>
      <Navbar />
      <Hero />
      <StatsPanel />
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-6">

            <ClusterGrid
              problems={problems}
              onSelectCluster={setSelectedCluster}
            />

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