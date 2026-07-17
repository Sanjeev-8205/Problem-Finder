export interface Problem {
  cluster_id: number;

  cluster_name: string;

  engineering_problem: string;

  problem_statement: string;

  summary: string;

  problem_category: string;

  root_causes: string[];

  developer_symptoms: string[];

  affected_developers: string[];

  evidence_titles: string[];

  severity: string;

  difficulty_to_solve: string;

  keywords: string[];

  possible_solution: string;

  startup_opportunity_score: number;

  startup_opportunity_reasoning: string;
}