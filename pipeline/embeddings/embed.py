from sentence_transformers import SentenceTransformer
import json
import numpy as np
from pathlib import Path
model = SentenceTransformer("BAAI/bge-base-en-v1.5")

embedding_texts = []

path_1 = Path(__file__).resolve().parent / "data" / "raw" / "github_issues.jsonl"
with open(path_1, 'r', encoding='utf-8') as f:
  for line in f:
    embedding_texts.append(json.loads(line)['embedding_text'])

embeddings = model.encode(
    embedding_texts,
    show_progress_bar=True,
    convert_to_numpy=True
)

np.save('embeddings.npy', embeddings)

path_2 = Path(__file__).resolve().parent / "data" / "processed" / "github_issues.jsonl"
with open(path_2, "r", encoding="utf-8") as f:
    issues = [json.loads(line) for line in f]

metadata = []
for i, issue in enumerate(issues):
    metadata.append({
        "index": i,
        "repo": issue["repo"],
        "number": issue["number"],
        "title": issue["title"],
        "url": issue["url"],
        "labels": issue.get("labels", []),
        "state": issue.get("state"),
    })

with open("metadata.json", "w", encoding="utf-8") as f:
    json.dump(metadata, f, indent=2, ensure_ascii=False)