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

        <DialogHeader className="sticky top-0 z-10 -mx-6 border-b bg-background px-6 pb-4 pt-2">

          <DialogDescription className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {cluster.primary_category}
          </DialogDescription>

          <DialogTitle className="max-w-3xl text-2xl leading-tight font-bold">
            {cluster.cluster_name}
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-10">

          {/* Metadata */}
          <div className="flex flex-wrap gap-3">

            <Badge variant="outline" className="gap-2">
              <AlertTriangle
                aria-hidden="true"
                className="size-3.5"
              />
              Severity {cluster.pain_severity_score}/10
            </Badge>

            <Badge variant="outline" className="gap-2">
              <Gauge
                aria-hidden="true"
                className="size-3.5"
              />
              {cluster.difficulty_to_solve}
            </Badge>

            <Badge variant="outline" className="gap-2">
              <Rocket
                aria-hidden="true"
                className="size-3.5"
              />
              {cluster.project_scope}
            </Badge>

            <Badge variant="outline" className="gap-2">
              Startup Score
              <span className="font-semibold">
                {cluster.startup_opportunity_score}/10
              </span>
            </Badge>

          </div>

          <div className="border-t" />

          {/* Engineering Problem */}
          <section>
            <h3 className="mb-2 text-lg font-semibold">
              Recurring Problem
            </h3>

            <p className="leading-7 text-muted-foreground">
              {cluster.recurring_problem}
            </p>
          </section>

          {/* Workflow */}
          <section className="space-y-3">

            <h3 className="text-lg font-semibold">
              Workflow
            </h3>

            <p className="leading-7 text-muted-foreground">
              {cluster.workflow}
            </p>

          </section>

          {/* Root Cause */}
          <section className="space-y-3">

            <h3 className="text-lg font-semibold">
              Root Cause
            </h3>

            <p className="leading-7 text-muted-foreground">
              {cluster.root_cause}
            </p>

          </section>

          {/* Developer Perspective */}
          <section className="space-y-5">

            <h3 className="text-lg font-semibold">
              Developer Perspective
            </h3>

            <div className="grid gap-4 lg:grid-cols-2">

              {/* Symptoms */}

              <div className="rounded-xl border p-5">

                <h4 className="mb-4 font-semibold">
                  Developer Symptoms
                </h4>

                <ul className="space-y-3">
                  {cluster.developer_symptoms.map((symptom) => (
                    <li
                      key={symptom}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50"
                      />

                      <span>{symptom}</span>

                    </li>
                  ))}
                </ul>

              </div>

              {/* Affected Developers */}

              <div className="rounded-xl border p-5">

                <div className="mb-4 flex items-center gap-2">

                  <Users
                    aria-hidden="true"
                    className="size-5"
                  />

                  <h4 className="font-semibold">
                    Who Is Affected?
                  </h4>

                </div>

                <ul className="space-y-3">

                  {cluster.affected_developers.map((developer) => (
                    <li
                      key={developer}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50"
                      />

                      <span>{developer}</span>

                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </section>

          {/* Evidence */}
          <section className="space-y-5">

            <div className="flex items-center gap-3">

              <FaGithub
                aria-hidden="true"
                className="size-5"
              />

              <div>

                <h3 className="text-lg font-semibold">
                  Evidence from GitHub
                </h3>

                <p className="text-sm text-muted-foreground">
                  Representative issue titles that support this recurring engineering problem.
                </p>

              </div>

            </div>

            <div className="space-y-3">

              {cluster.evidence_titles.map((title) => (

                <div
                  key={title}
                  className="rounded-lg border p-4 transition-colors hover:bg-muted/40"
                >

                  <div className="flex gap-3">

                    <FaGithub
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-muted-foreground"
                    />

                    <p className="text-sm leading-6">
                      {title}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* Opportunity Analysis */}
          <section className="rounded-xl border p-6">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h3 className="text-lg font-semibold">
                  Opportunity Analysis
                </h3>

                <p className="text-sm text-muted-foreground">
                  Evaluation generated from recurring community pain.
                </p>

              </div>

              <div className="text-right">

                <div className="text-3xl font-bold">
                  {cluster.startup_opportunity_score}/10
                </div>

                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  Startup Score
                </div>

              </div>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <Badge variant="secondary">
                Pain Severity: {cluster.pain_severity_score}/10
              </Badge>

              <Badge variant="secondary">
                Frequency: {cluster.frequency_score}/10
              </Badge>

              <Badge variant="secondary">
                Willingness to Pay: {cluster.willingness_to_pay_score}/10
              </Badge>

              <Badge variant="secondary">
                Competition: {cluster.competition_score}/10
              </Badge>

            </div>

            <div className="mt-6">

              <h4 className="mb-2 font-semibold">
                Why?
              </h4>

              <p className="leading-7 text-muted-foreground">
                {cluster.startup_opportunity_reasoning}
              </p>

            </div>

          </section>

          {/* Existing Alternatives */}
          <section className="space-y-4">

            <h3 className="text-lg font-semibold">
              Existing Alternatives
            </h3>

            <div className="flex flex-wrap gap-2">

              {cluster.existing_alternatives.map((alternative) => (

                <Badge
                  key={alternative}
                  variant="outline"
                >
                  {alternative}
                </Badge>

              ))}

            </div>

          </section>

          {/* Possible Solution */}
          <section className="rounded-xl border bg-muted/40 p-6">

            <div className="flex gap-4">

              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">

                <Lightbulb
                  aria-hidden="true"
                  className="size-5"
                />

              </div>

              <div>

                <h3 className="mb-2 text-lg font-semibold">
                  Proposed Solution
                </h3>

                <p className="leading-7 text-muted-foreground">
                  {cluster.possible_solution}
                </p>

              </div>

            </div>

          </section>

          {/* Keywords */}
          <section className="space-y-4">

            <h3 className="text-lg font-semibold">
              Search Keywords
            </h3>

            <div className="flex flex-wrap gap-2">

              {cluster.keywords.map((keyword) => (

                <Badge
                  key={keyword}
                  variant="secondary"
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