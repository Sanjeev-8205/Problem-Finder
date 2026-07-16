from pydantic import BaseModel

class ClusteringAnalysis(BaseModel):
    cluster_id: int
    cluster_name: str
    engineering_problem: str
    problem_statement: str
    summary: str

    problem_category: str

    root_causes: list[str]
    developer_symptoms: list[str]
    affected_developers: list[str]
    
    evidence_titles: list[str]

    severity: str

    difficulty_to_solve: str

    keywords: list[str]

    possible_solution: str

    startup_opportunity_score: int
    startup_opportunity_reasoning: str