from pathlib import Path
from tqdm import tqdm
import json

from github_client import github_client
from repositories import TARGET_REPOS

OUTPUT_DIR = Path("../../data/raw")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

OUTPUT_FILE = OUTPUT_DIR / "github_issues.jsonl"

def save_issue(issue):

    record = {
        "repo": issue.repository.full_name,
        "number": issue.number,
        "title": issue.title,
        "body": issue.body,
        "state": issue.state,
        "comments": issue.comments,
        "created_at": issue.created_at.isoformat(),
        "updated_at": issue.updated_at.isoformat(),
        "url": issue.html_url,
        "labels": [label.name for label in issue.labels],
        "author": issue.user.login if issue.user else None,
    }

    with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")

for repo_name in TARGET_REPOS:
    print("=" * 60)
    print(f"Repository : {repo_name}")
    print("=" * 60)

    repo = github_client.get_repo(repo_name)
    issues = repo.get_issues(state='all', sort='updated', direction='desc')

    for i, issue in enumerate(tqdm(issues)):
        if i>500:
            break
        if issue.pull_request is not None:
            continue
        save_issue(issue)