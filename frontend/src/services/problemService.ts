import database from "@/data/discussions_problem_database_20260727_191948.json";

import type { ProblemDatabase } from "@/types/problem";

export function getProblems(): ProblemDatabase {
  return database as ProblemDatabase;
}