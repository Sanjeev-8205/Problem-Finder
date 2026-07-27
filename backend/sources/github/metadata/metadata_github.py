import json

def create_metadata(filePath):
    with open(filePath, "r", encoding="utf-8") as f:
        discussions = [json.loads(line) for line in f]

    metadata = []
    for i, discussion in enumerate(discussions):
        metadata.append({
            "index": i,
            "id": discussion["id"],
            "repo": discussion["repo"],
            "title": discussion["raw"]["title"],
            "body": discussion["raw"]["body"],
            "comments": discussion["raw"]["comments"],

            "url": discussion["url"],

            "category": discussion["metadata"]["category"],
            "author": discussion["metadata"]["author"],

            "upvotes": discussion["engagement"]["upvotes"],
            "comment_count": discussion["engagement"]["comments"],

            "answered": discussion["metadata"]["answered"],

            "created_at": discussion["metadata"]["created_at"],
            "updated_at": discussion["metadata"]["updated_at"],
        })

    return metadata