from sentence_transformers import SentenceTransformer
import json
import numpy as np

model = SentenceTransformer("BAAI/bge-base-en-v1.5")

embedding_texts = []
with open('C:\Users\skd92\Main Projects\Problem Finder\data\raw\github_issues.jsonl', 'r', encoding='utf-8') as f:
  for line in f:
    embedding_texts.append(json.loads(line)['embedding_text'])

embeddings = model.encode(
    embedding_texts,
    show_progress_bar=True,
    convert_to_numpy=True
)

np.save('embeddings.npy', embeddings)

with open('C:\Users\skd92\Main Projects\Problem Finder\data\processed\github_issues.jsonl', "r", encoding="utf-8") as f:
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