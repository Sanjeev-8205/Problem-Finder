from sources.github.analysis.ai_analyzer import generate_analysis, generate_discussion_analysis
import json
from pathlib import Path

def issues_llm_analysis(path):
    with open(path, 'r', encoding='utf-8') as f:
        issue_clusters = json.load(f)

    generate_analysis(issue_clusters)

def discussions_llm_analysis(path):
    with open(path, 'r', encoding='utf-8') as f:
        discussion_clusters = json.load(f)

    generate_discussion_analysis(discussion_clusters)