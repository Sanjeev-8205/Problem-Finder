from pydantic import BaseModel
from typing import Literal
from datetime import datetime

class Metadata(BaseModel):
    source: str
    generated_at: datetime
    documents_analyzed: int
    communities_analyzed: int
    communities: list[str]
    clusters_found: int

class ClusteringAnalysis(BaseModel):

    # Cluster metadata
    cluster_id: int
    cluster_name: str

    # Core analysis
    recurring_problem: str
    workflow: str
    root_cause: str

    # Supporting evidence
    evidence_patterns: list[str]
    evidence_titles: list[str]
    repositories_affected: int

    # Users
    affected_developers: list[str]
    developer_symptoms: list[str]

    # Classification
    primary_category: str
    secondary_category: str | None = None

    # Project evaluation
    project_scope: Literal['Small', 'Medium', 'Portfolio', 'Large', 'Startup-scale']
    difficulty_to_solve: Literal['Easy', 'Medium', 'Hard']

    # Opportunity scoring
    pain_severity_score: int        # 1-10
    frequency_score: int            # 1-10
    willingness_to_pay_score: int   # 1-10
    competition_score: int          # 1-10 (10 = highly competitive)

    startup_opportunity_score: int
    startup_opportunity_reasoning: str

    # Product opportunity
    existing_alternatives: list[str]
    possible_solution: str

    # Search
    keywords: list[str]

class ClusteringResponse(BaseModel): 
    metadata: Metadata
    clusters: list[ClusteringAnalysis]