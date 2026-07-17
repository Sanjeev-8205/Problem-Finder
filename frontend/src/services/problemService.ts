import problems from "@/data/problem_database.json";

import type { Problem } from "@/types/problem";

export function getProblems(): Problem[] {
    return problems;
}