from sources.github.analysis.ai_analyzer import generate_discussion_analysis
from pathlib import Path
import json

path_ = Path(__file__).resolve().parent.parent.parent / "storage" / "github_" / "metadata_" / "clustered_discussion_metadata.json"
with open(path_, 'r', encoding='utf-8') as f:
    clustered_metadata = json.load(f)

generate_discussion_analysis(clustered_metadata)