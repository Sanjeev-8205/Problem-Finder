from pathlib import Path
import json

from tqdm import tqdm

from sources.github.collector.graphql_client import graphql_client
from sources.github.collector.discussion_queries import (
    GET_DISCUSSION_CATEGORIES,
    GET_DISCUSSIONS,
)
from sources.github.collector.repositories import TARGET_REPOS
from sources.github.config import TARGET_CATEGORIES, MAX_COMMENTS, MIN_BODY_LENGTH

OUTPUT_DIR = (
    Path(__file__).resolve().parent.parent.parent.parent / "storage" / "github_" / "raw"
)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

OUTPUT_FILE = OUTPUT_DIR / "github_discussions.jsonl"

def build_embedding_text(discussion):

    comments = []

    for comment in discussion["comments"]["nodes"][:MAX_COMMENTS]:

        body = (comment.get("body") or "").strip()

        if body:
            comments.append(body)

    sections = [
        discussion["title"].strip(),
        (discussion.get("body") or "").strip(),
    ]

    if comments:
        sections.append("Comments:")
        sections.extend(comments)

    return "\n\n".join(filter(None, sections))


def save_discussion(repo_name: str, discussion: dict):

    body = (discussion.get("body") or "").strip()

    # Ignore discussions that contain almost no information
    if len(body) < MIN_BODY_LENGTH:
        return

    embedding_text = build_embedding_text(discussion)

    record = {
        "id": f"{repo_name}#{discussion['number']}",

        "repo": repo_name,

        "url": discussion["url"],

        # This is the ONLY field you should embed
        "text": embedding_text,

        # Raw data for later LLM analysis
        "raw": {
            "title": discussion["title"],
            "body": body,
            "comments": [
                {
                    "author": (
                        c["author"]["login"]
                        if c["author"]
                        else None
                    ),
                    "body": c["body"],
                    "created_at": c["createdAt"],
                }
                for c in discussion["comments"]["nodes"][:MAX_COMMENTS]
            ],
        },

        "engagement": {
            "upvotes": discussion["upvoteCount"],
            "comments": discussion["comments"]["totalCount"],
        },

        "metadata": {
            "category": discussion["category"]["name"],
            "answered": discussion["isAnswered"],
            "created_at": discussion["createdAt"],
            "updated_at": discussion["updatedAt"],
            "author": (
                discussion["author"]["login"]
                if discussion["author"]
                else None
            ),
        },
    }

    with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")


def fetch_categories(owner: str, repo: str):

    data = graphql_client.execute(
        GET_DISCUSSION_CATEGORIES,
        {
            "owner": owner,
            "repo": repo,
        },
    )

    print("Page received.")

    repository = data.get("repository")

    if repository is None:
        return []

    return repository["discussionCategories"]["nodes"]


def collect_category(owner: str, repo: str, category: dict):

    MAX_PAGE = 5
    page = 1
    cursor = None

    while page<=MAX_PAGE:
        print(f"Fetching Page = {page}")
        page+=1

        data = graphql_client.execute(
            GET_DISCUSSIONS,
            {
                "owner": owner,
                "repo": repo,
                "categoryId": category["id"],
                "cursor": cursor,
            },
        )

        discussions = data["repository"]["discussions"]
        page_info = discussions["pageInfo"]

        print(
            f"Found {len(discussions['nodes'])} discussions | "
            f"hasNextPage={page_info['hasNextPage']} | "
            f"endCursor={page_info['endCursor']}"
        )

        for discussion in discussions["nodes"]:
            save_discussion(
                f"{owner}/{repo}",
                discussion,
            )

        if not discussions["pageInfo"]["hasNextPage"]:
            break

        cursor = discussions["pageInfo"]["endCursor"]


def collect_discussions():

    OUTPUT_FILE.unlink(missing_ok=True)

    for repo_name in TARGET_REPOS:

        print("=" * 60)
        print(repo_name)
        print("=" * 60)

        owner, repo = repo_name.split("/")

        try:
            categories = fetch_categories(owner, repo)

        except Exception as e:
            print(f"Skipping {repo_name}: {e}")
            continue

        wanted = [
            c
            for c in categories
            if c["name"] in TARGET_CATEGORIES
        ]

        if not wanted:
            print("No matching discussion categories.")
            continue

        for category in tqdm(
            wanted,
            desc=f"{repo_name}",
        ):

            print(f"Collecting '{category['name']}' discussions")

            try:
                collect_category(
                    owner,
                    repo,
                    category,
                )

            except Exception as e:
                print(e)