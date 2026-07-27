export type Metadata = {
  source: string;
  generated_at: string;

  documents_analyzed: number;

  communities_analyzed: number;
  communities: string[];

  clusters_found: number;
};

export type Problem = {
  cluster_id: number;
  cluster_name: string;

  recurring_problem: string;
  workflow: string;
  root_cause: string;

  evidence_patterns: string[];
  evidence_titles: string[];

  repositories_affected: number;

  affected_developers: string[];
  developer_symptoms: string[];

  primary_category: string;
  secondary_category: string;

  project_scope: string;
  difficulty_to_solve: string;

  pain_severity_score: number;
  frequency_score: number;
  willingness_to_pay_score: number;
  competition_score: number;
  startup_opportunity_score: number;

  startup_opportunity_reasoning: string;

  existing_alternatives: string[];

  possible_solution: string;

  keywords: string[];
};

export type ProblemDatabase = {
  metadata: Metadata;
  clusters: Problem[];
};