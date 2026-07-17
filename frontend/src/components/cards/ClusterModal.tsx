import { Badge } from "@/components/ui/badge";

import {
  AlertTriangle,
  Gauge,
  Rocket,
  Users,
  Lightbulb,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import type { Problem } from "@/types/problem";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type ClusterModalProps = {
  cluster: Problem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function ClusterModal({
  cluster,
  open,
  onOpenChange,
}: ClusterModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] overflow-y-auto sm:max-w-4xl">

        <DialogHeader className="space-y-4">

          <DialogDescription className="text-xs font-semibold uppercase tracking-wider">
            {cluster.problem_category}
          </DialogDescription>

          <DialogTitle className="max-w-3xl text-xl leading-tight font-bold sm:text-2xl">
            {cluster.cluster_name}
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-8">

          {/* Metadata */}
          <div className="flex flex-wrap gap-2">

            <Badge variant="outline" className="gap-1.5">
              <AlertTriangle className="size-3.5" />

              {cluster.severity} Severity
            </Badge>

            <Badge variant="outline" className="gap-1.5">
              <Gauge className="size-3.5" />

              {cluster.difficulty_to_solve}
            </Badge>

            <Badge variant="outline" className="gap-1.5">
              <Rocket className="size-3.5" />

              {cluster.startup_opportunity_score}/10 Opportunity
            </Badge>

          </div>

          <div className="border-t" />

          {/* Engineering Problem */}
          <section>
            <h3 className="mb-2 text-lg font-semibold">
              Engineering Problem
            </h3>

            <p className="leading-7 text-muted-foreground">
              {cluster.engineering_problem}
            </p>
          </section>

          {/* Problem Statement */}
          <section>
            <h3 className="mb-2 text-lg font-semibold">
              Problem Statement
            </h3>

            <p className="leading-7 text-muted-foreground">
              {cluster.problem_statement}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-semibold">
              Analysis
            </h3>

            <div className="grid gap-4 lg:grid-cols-2">
              {/* Root Causes */}
              <div className="h-full rounded-xl border p-5">
                <h4 className="mb-4 font-semibold">
                  Root Causes
                </h4>

                <ul className="space-y-3">
                  {cluster.root_causes.map((cause) => (
                    <li
                      key={cause}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Developer Symptoms */}
              <div className="h-full rounded-xl border p-5">
                <h4 className="mb-4 font-semibold">
                  Developer Symptoms
                </h4>

                <ul className="space-y-3">
                  {cluster.developer_symptoms.map((symptom) => (
                    <li
                      key={symptom}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Affected Developers */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="size-5" />

              <h3 className="text-lg font-semibold">
                Who Is Affected?
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {cluster.affected_developers.map((developer) => (
                <div
                  key={developer}
                  className="rounded-lg border p-4"
                >
                  <p className="text-sm leading-6 text-muted-foreground">
                    {developer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Evidence */}
          <section className="space-y-4">

            <div className="flex items-center gap-2">
              <FaGithub className="size-5" />

              <div>
                <h3 className="text-lg font-semibold">
                  Evidence from GitHub Issues
                </h3>

                <p className="text-sm text-muted-foreground">
                  Representative issue titles supporting this problem cluster.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {cluster.evidence_titles.map((title) => (
                <div
                  key={title}
                  className="rounded-lg border p-4"
                >
                  <div className="flex gap-3">

                    <FaGithub className="mt-0.5 size-4 shrink-0 text-muted-foreground" />

                    <p className="text-sm leading-6 text-muted-foreground">
                      {title}
                    </p>

                  </div>
                </div>
              ))}
            </div>

          </section>

          {/* Possible Solution */}
          <section className="rounded-xl border bg-muted/40 p-5">
            <div className="flex gap-4">

              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">
                <Lightbulb className="size-5" />
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Possible Solution
                </h3>

                <p className="leading-7 text-muted-foreground">
                  {cluster.possible_solution}
                </p>
              </div>

            </div>
          </section>

          {/* Startup Opportunity */}
          <section className="rounded-xl border p-5">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted/40">
                  <Rocket className="size-5" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Startup Opportunity
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Potential for a product or business opportunity
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-2xl font-bold">
                  {cluster.startup_opportunity_score}
                </span>

                <span className="text-sm text-muted-foreground">
                  /10
                </span>
              </div>

            </div>

            <p className="leading-7 text-muted-foreground">
              {cluster.startup_opportunity_reasoning}
            </p>
          </section>

          {/* Keywords */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              Keywords
            </h3>

            <div className="flex flex-wrap gap-2">
              {cluster.keywords.map((keyword) => (
                <Badge
                  key={keyword}
                  variant="outline"
                  className="font-normal text-muted-foreground"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </section>

        </div>

      </DialogContent>
    </Dialog>
  );
}

export default ClusterModal;