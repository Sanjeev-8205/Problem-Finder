from ai_analyzer import generate_analysis
import json

with open("C:/Users/skd92/Main Projects/Problem Finder/clustering/clustered_metadata.json", 'r', encoding='utf-8') as f:
    issue_clusters = json.load(f)

generate_analysis(issue_clusters)