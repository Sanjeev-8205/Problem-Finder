import json
from pathlib import Path

from pipeline.preprocessing.clean import clean_text
from pipeline.preprocessing.normalize import normalize_text
from pipeline.preprocessing.deduplicate import compute_hash

INPUT = Path(__file__).resolve().parent / "data" / "raw" / "github_issues.jsonl"
OUTPUT = Path(__file__).resolve().parent / "data" / "processed" / "github_issues.jsonl"

seen = set()
duplicate_count=0
processed_count=0
with open(INPUT, encoding="utf-8") as fin, \
     open(OUTPUT, "w", encoding="utf-8") as fout:

    for line in fin:

        issue = json.loads(line)

        title = str(issue.get("title") or "")
        body = str(issue.get("body") or "")
        repo = str(issue.get("repo") or "")
        labels = ", ".join((issue.get("labels", [])))

        text = f"""
        Labels:
        {labels}

        Title:
        {title}

        Body:
        {body}
        """

        text = clean_text(text)
        text = normalize_text(text)

        h = compute_hash(text)

        if h in seen:
            duplicate_count+=1
            continue

        seen.add(h)

        issue["embedding_text"] = text

        fout.write(
            json.dumps(issue, ensure_ascii=False)
            + "\n"
        )
        processed_count+=1

print(f"Processed Count = {processed_count}")
print(f"Duplicate Count = {duplicate_count}")