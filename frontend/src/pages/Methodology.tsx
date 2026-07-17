import Navbar from "@/components/layout/Navbar";

function Methodology() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <p className="text-sm font-medium text-muted-foreground">
            METHODOLOGY
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            How Problem Finder Works
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Problem Finder mines real engineering issues and transforms them
            into structured, explorable problem clusters using an offline
            AI and machine learning pipeline.
          </p>
        </div>

        <div className="grid gap-6">
          <PipelineStep
            number="01"
            title="Data Collection"
            description="Engineering issues are collected from GitHub."
          />

          <PipelineStep
            number="02"
            title="Preprocessing"
            description="Issues are cleaned, normalized, and deduplicated."
          />

          <PipelineStep
            number="03"
            title="Semantic Embeddings"
            description="BGE embeddings convert engineering issues into semantic vector representations."
          />

          <PipelineStep
            number="04"
            title="Dimensionality Reduction"
            description="UMAP reduces embedding dimensions while preserving semantic structure."
          />

          <PipelineStep
            number="05"
            title="Semantic Clustering"
            description="HDBSCAN discovers recurring groups of related engineering problems."
          />

          <PipelineStep
            number="06"
            title="Representative Selection"
            description="High-confidence representative issues are selected from each cluster."
          />

          <PipelineStep
            number="07"
            title="AI Analysis"
            description="Gemini analyzes each cluster and produces structured engineering problem intelligence."
          />

          <PipelineStep
            number="08"
            title="Problem Database"
            description="The resulting structured clusters are stored in the problem database and explored through this interface."
          />
        </div>
      </main>
    </>
  );
}

type PipelineStepProps = {
  number: string;
  title: string;
  description: string;
};

function PipelineStep({
  number,
  title,
  description,
}: PipelineStepProps) {
  return (
    <div className="rounded-xl border p-6">
      <div className="flex gap-5">
        <span className="text-sm font-semibold text-muted-foreground">
          {number}
        </span>

        <div>
          <h2 className="font-semibold">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Methodology;