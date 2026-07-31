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
      <DialogContent
  className="
    w-[calc(100%-2rem)]
    max-h-[90vh]
    rounded-3xl
    border
    border-slate-800
    bg-[#0f172a]/95
    p-0
    backdrop-blur-xl
    shadow-2xl
    shadow-black/50
    sm:max-w-5xl
    overflow-hidden
  "
>
  <div
    className="
      max-h-[90vh]
      overflow-y-auto

      scrollbar-thin
      scrollbar-track-transparent
      scrollbar-thumb-slate-700
      hover:scrollbar-thumb-slate-600
    "
  >
    <div
      className="
        sticky
        top-0
        z-30

        border-b
        border-slate-800

        bg-[#0f172a]/95
        backdrop-blur-xl

        px-6
        pt-6
        pb-6
        pr-20

        border-t-2
        border-t-cyan-400
      "
      style={{
        borderTop: "2px solid transparent",
        borderImage:
          "linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6) 1",
      }}
    >
      <DialogDescription
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-cyan-400
        "
      >
        {cluster.primary_category}
      </DialogDescription>

      <DialogTitle
        className="
          mt-3
          max-w-4xl
          text-3xl
          font-bold
          leading-tight
          tracking-tight
          text-white
        "
      >
        {cluster.cluster_name}
      </DialogTitle>
    </div>

    <div className="p-6">
      <div className="space-y-10">

            {/* Metadata */}
            <div className="flex flex-wrap gap-3 ">

              <Badge className="
              gap-2
              rounded-xl
              border-slate-700
              bg-slate-900/60
              px-3
              py-1.5
              ">
                <AlertTriangle
                  aria-hidden="true"
                  className="size-3.5"
                />
                Severity {cluster.pain_severity_score}/10
              </Badge>

              <Badge className="
              gap-2
              rounded-xl
              border-slate-700
              bg-slate-900/60
              px-3
              py-1.5
              ">
                <Gauge
                  aria-hidden="true"
                  className="size-3.5"
                />
                {cluster.difficulty_to_solve}
              </Badge>

              <Badge className="
              gap-2
              rounded-xl
              border-slate-700
              bg-slate-900/60
              px-3
              py-1.5
              ">
                <Rocket
                  aria-hidden="true"
                  className="size-3.5"
                />
                {cluster.project_scope}
              </Badge>

              <Badge className="
              gap-2
              rounded-xl
              border-slate-700
              bg-slate-900/60
              px-3
              py-1.5
              ">
                Startup Score
                <span className="font-semibold">
                  {cluster.startup_opportunity_score}/10
                </span>
              </Badge>

            </div>

            <div className="border-t" />

            {/* Engineering Problem */}
            <section className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-800/35
            shadow-lg
            shadow-black/20
            p-6
            ">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-200">
                Recurring Problem
              </h3>

              <p className="leading-relaxed text-slate-200">
                {cluster.recurring_problem}
              </p>
            </section>

            {/* Workflow */}
            <section className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-800/35
            shadow-lg
            shadow-black/20
            p-6
            ">

              <h3 className="text-lg font-semibold">
                Workflow
              </h3>

              <p className="leading-relaxed text-slate-200">
                {cluster.workflow}
              </p>

            </section>

            {/* Root Cause */}
            <section className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-800/35
            shadow-lg
            shadow-black/20
            p-6
            ">

              <h3 className="text-lg font-semibold">
                Root Cause
              </h3>

              <p className="leading-7 text-muted-foreground">
                {cluster.root_cause}
              </p>

            </section>

            {/* Developer Perspective */}
            <section className="space-y-5">

              <h3 className="text-lg
              font-semibold
              text-slate-100">
                Developer Perspective
              </h3>

              <div className="grid gap-4 lg:grid-cols-2">

                {/* Symptoms */}

                <div className="border p-6 rounded-2xl
                border-slate-800
                bg-slate-800/35
                shadow-lg
                shadow-black/20">

                  <h4 className="text-lg font-semibold text-slate-100">
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

                <div className="border p-6 rounded-2xl
                border-slate-800
                bg-slate-800/35
                shadow-lg
                shadow-black/20">

                  <div className="mb-4 flex items-center gap-2">

                    <Users
                      aria-hidden="true"
                      className="size-5"
                    />

                    <h4 className="text-lg
                    font-semibold
                    text-slate-100">
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

                  <h3 className="text-lg font-semibold text-white">
                    Evidence from GitHub
                  </h3>

                  <p className="text-sm text-slate-200">
                    Representative issue titles that support this recurring engineering problem.
                  </p>

                </div>

              </div>

              <div className="space-y-3">

                {cluster.evidence_titles.map((title) => (

                  <div
                    key={title}
                    className="rounded-xl
                    border
                    border-slate-700
                    bg-slate-800/20
                    px-5
                    py-4
                    transition-all
                    duration-200
                    hover:bg-slate-800/50
                    hover:border-cyan-500/30
                    hover:-translate-y-0.5"
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
            <section
              className="
                relative
                rounded-3xl
                border
                border-slate-800
                overflow-hidden
                bg-linear-to-br
                from-slate-800/55
                via-slate-900/60
                to-slate-950/70
                shadow-xl
                shadow-cyan-950/10
                p-6
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-0.5
                  bg-linear-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                "
              />

              <div className="mb-6 flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Opportunity Analysis
                  </h3>

                  <p className="text-sm text-slate-200">
                    Evaluation generated from recurring community pain.
                  </p>

                </div>

                <div className="text-center rounded-2xl
                border
                border-cyan-500/20
                bg-cyan-500/5
                px-6
                py-5
                min-w-170px">

                  <div className="text-3xl font-bold">
                    {cluster.startup_opportunity_score}/10
                  </div>

                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    Startup Score
                  </div>

                </div>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Pain Severity</p>
                  <p className="text-2xl font-bold text-white">{cluster.pain_severity_score}/10</p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Frequency</p>
                  <p className="text-2xl font-bold text-white">{cluster.frequency_score}/10</p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Willingness to Pay</p>
                  <p className="text-2xl font-bold text-white">{cluster.willingness_to_pay_score}/10</p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Competition</p>
                  <p className="text-2xl font-bold text-white">{cluster.competition_score}/10</p>
                </div>

              </div>

              <div className="my-8 border-t border-slate-700/60" />

              <div className="mt-6">

                <h4 className="mb-2 font-semibold">
                  Why this opportunity exists?
                </h4>

                <p className="text-muted-foreground leading-8
                text-slate-200
                max-w-5xl">
                  {cluster.startup_opportunity_reasoning}
                </p>

              </div>

            </section>

            {/* Existing Alternatives */}
            <section className="space-y-4">

              <h3 className="text-lg font-semibold text-white">
                Existing Alternatives
              </h3>

              <div className="flex flex-wrap gap-2">

                {cluster.existing_alternatives.map((alternative) => (

                  <div className="rounded-full
                  border-slate-700
                  bg-slate-800/40
                  px-4
                  py-2
                  text-slate-200
                  transition-all
                  hover:border-cyan-500/30
                  hover:bg-slate-800/60
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl"
                  >
                    {alternative}
                  </div>

                ))}

              </div>

            </section>

            {/* Possible Solution */}
            <section className="rounded-3xl p-6
              border
              border-cyan-500/20
              bg-cyan-500/10
              text-cyan-300
              hover:bg-cyan-500/15
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl">

              <div className="flex gap-4">

                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">

                  <Lightbulb
                    aria-hidden="true"
                    className="size-5"
                  />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Proposed Solution
                  </h3>

                  <p className="leading-7 text-slate-200">
                    {cluster.possible_solution}
                  </p>

                </div>

              </div>

            </section>

            {/* Keywords */}
            <section className="space-y-4">

              <h3 className="text-lg font-semibold text-white">
                Search Keywords
              </h3>

              <div className="flex flex-wrap gap-2">

                {cluster.keywords.map((keyword) => (

                  <div className="rounded-full p-1.5
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    hover:bg-cyan-500/15
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    text-slate-200">
                    {keyword}
                  </div>

                ))}

              </div>

            </section>

               </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ClusterModal;