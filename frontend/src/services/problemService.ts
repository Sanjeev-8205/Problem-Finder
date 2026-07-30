import type { ProblemDatabase } from "@/types/problem";

export async function getProblems(): Promise<ProblemDatabase> {
  const response = await fetch("/discussions_problem_database.json");

  if (!response.ok) {
    throw new Error("Failed to load problem database");
  }

  return response.json();
}