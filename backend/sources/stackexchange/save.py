import json
from datetime import datetime
from pathlib import Path


def save_question(
    output_file: Path,
    site: str,
    archetype: str,
    intent: str,
    query: str,
    question: dict,
):
    """
    Save a normalized discussion record.

    This schema is designed to be reusable across Stack Exchange,
    GitHub Discussions, Reddit, Discourse, etc.
    """

    record = {

        # ==========================================================
        # Source Metadata
        # ==========================================================
        "source": "stackexchange",
        "site": site,
        "matched_query": query,
        "problem_archetype": archetype,
        "intent": intent,

        # ==========================================================
        # Discussion Metadata
        # ==========================================================
        "discussion_id": question["question_id"],
        "title": question["title"],
        "body": question.get("body", ""),
        "content": f"{question['title']}\n\n{question.get('body', '')}",

        # ==========================================================
        # Tags / Categories
        # ==========================================================
        "tags": question.get("tags", []),

        # ==========================================================
        # Engagement Metrics
        # ==========================================================
        "score": question.get("score", 0),
        "view_count": question.get("view_count", 0),
        "answer_count": question.get("answer_count", 0),
        "favorite_count": question.get("favorite_count", 0),

        # ==========================================================
        # Accepted Answer
        # ==========================================================
        "accepted_answer_id": question.get("accepted_answer_id"),

        # ==========================================================
        # Dates
        # ==========================================================
        "creation_date": question.get("creation_date"),
        "last_activity_date": question.get("last_activity_date"),
        "collected_at": datetime.utcnow().isoformat(),

        # ==========================================================
        # Link
        # ==========================================================
        "url": question["link"],
    }

    with output_file.open("a", encoding="utf-8") as f:
        json.dump(record, f, ensure_ascii=False)
        f.write("\n")