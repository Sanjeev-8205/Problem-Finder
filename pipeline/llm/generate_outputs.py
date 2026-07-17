from pipeline.llm.ai_analyzer import generate_analysis
import json
from pathlib import Path

path_cluster = Path(__file__).resolve().parent / "clustering"
with open(f"{path_cluster}/clustered_metadata.json", 'r', encoding='utf-8') as f:
    issue_clusters = json.load(f)

generate_analysis(issue_clusters)