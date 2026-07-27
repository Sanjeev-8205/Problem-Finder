from google import genai
from google.genai import types
from dotenv import load_dotenv
import os
from collections import defaultdict
from tqdm import tqdm
import numpy as np
import json
import time
from pathlib import Path
import math
from datetime import datetime
import time
from google.genai.errors import ServerError

from shared.schema_ import ClusteringAnalysis, ClusteringResponse, Metadata
from sources.github.analysis.issues_prompt_ import system_prompt, build_prompt
from sources.github.analysis.discussions_prompt_ import system_prompt_dis, build_prompt_dis

load_dotenv()
GEMINI_API_KEY = os.getenv('gemini_api')
gemini_client = genai.Client(api_key=GEMINI_API_KEY)

def generate_with_gemini(system_prompt, user_prompt):
    start = time.perf_counter()
    print("Generation Started")
    response = gemini_client.models.generate_content(
        model="gemini-3.1-flash-lite",
        contents=types.Part.from_text(text=user_prompt),
        config=types.GenerateContentConfig(
            response_mime_type='application/json',
            response_schema=ClusteringAnalysis,
            system_instruction=system_prompt
        ),
    )
    print("Generation Ended")
    end = time.perf_counter() - start
    print(f"Analysis Time = {end}")
    return response.text

def generate_analysis(issues):
    cluster_map=defaultdict(list)
    store_cluster_analysis=[]

    output_path = Path(__file__).resolve().parent / "outputs"
    
    for issue in issues:
        cluster_map[issue['cluster']].append(issue)
    
    print("Mapped the cluster")

    for key_, cluster in cluster_map.items():
        print(f"Started processing cluster {key_}")

        cluster_id = key_
        cluster_size = len(cluster)
        average_probability = np.mean([issue['probs'] for issue in cluster])
        repositories = len(np.unique([issue['repo'] for issue in cluster]))

        cluster.sort(key=lambda x:x['probs'], reverse=True)
        print(f"Sorted cluster {key_}")

        top_20_clusters = cluster[:20]

        issue_blocks = []

        for i, issue in enumerate(top_20_clusters, start=1):

            issue_blocks.append(
                f"""
        ================================================================================
        Issue {i}
        ================================================================================

        Confidence: {issue['probs']:.3f}

        Repository:
        {issue['repo']}

        Issue Number:
        {issue['number']}

        Labels:
        {", ".join(issue['labels'])}

        State:
        {issue['state']}

        Title:
        {issue['title']}

        Body:
        {issue['body']}
        """
            )

        issues_text = "\n".join(issue_blocks)

        user_prompt = build_prompt(
            cluster_id=cluster_id, cluster_size=cluster_size, avg_probability=average_probability,
            repositories=repositories, issues=issues_text
        )
        print("Prompt formatting completed")
        response = generate_with_gemini(system_prompt=system_prompt, user_prompt=user_prompt)

        result = json.loads(response)
        store_cluster_analysis.append(result)
        print("Result loaded and stored")

        if cluster_id==-1:
            cluster_id="noise"
        with open(f"{output_path}/cluster_{cluster_id}.json", 'w', encoding='utf-8') as f:
            json.dump(result, f, indent=2, ensure_ascii=True)
            print("JSON File Created")
    
    with open(f"{output_path}/problem_database.json", 'w', encoding='utf-8') as f:
        json.dump(store_cluster_analysis, f, indent=2, ensure_ascii=True)
        print("Final JSON file created.")

    print()
    return

def generate_discussion_analysis(metadata):
    run_started = datetime.now()
    cluster_map = defaultdict(list)
    store_cluster_analysis = []
    unique_repos = set()

    max_upvotes = max(row["upvotes"] for row in metadata) or 1
    max_comments = max(row["comment_count"] for row in metadata) or 1

    for row in metadata:
        row["normalized_upvotes"] = (
            math.log1p(row["upvotes"]) /
            math.log1p(max_upvotes)
        )

        row["normalized_comments"] = (
            math.log1p(row["comment_count"]) /
            math.log1p(max_comments)
        )

        row["score"] = (
            0.15 * row["probs"] +
            0.55 * row["normalized_upvotes"] +
            0.30 * row["normalized_comments"]
        )

        unique_repos.add(row["repo"])



    output_path = Path(__file__).resolve().parent.parent.parent.parent / "storage" / "github_" / "analysis"
    output_path.mkdir(exist_ok=True)

    # Group by cluster
    for row in metadata:
        cluster_map[row["cluster"]].append(row)

    print("Mapped the clusters")

    for cluster_id, cluster in cluster_map.items():

        print(f"Started processing cluster {cluster_id}")

        cluster_size = len(cluster)
        average_probability = np.mean([d["probs"] for d in cluster])
        repositories = len(set(d["repo"] for d in cluster))

        # Sort by probability (replace with score later if desired)
        cluster.sort(key=lambda x: x["score"], reverse=True)

        print(f"Sorted cluster {cluster_id}")

        top_20 = cluster[:20]

        discussion_blocks = []

        for i, row in enumerate(top_20, start=1):

            comments = row.get("comments", [])

            comments_text = "\n\n".join(
                f"{comment.get('author', 'Unknown')}:\n{comment.get('body', '')}"
                for comment in comments
            )

            discussion_blocks.append(
                f"""
================================================================================
Discussion {i}
================================================================================

Confidence:
{row["probs"]:.3f}

Repository:
{row["repo"]}

Category:
{row["category"]}

Author:
{row["author"]}

Answered:
{row["answered"]}

Upvotes:
{row["upvotes"]}

Comments:
{row["comment_count"]}

Title:
{row["title"]}

Body:
{(row["body"][:1500] + "...") if len(row["body"]) > 1500 else row["body"]}

Top Comments:
{comments_text}

URL:
{row["url"]}
"""
            )

        discussions_text = "\n".join(discussion_blocks)

        user_prompt = build_prompt_dis(
            cluster_id=cluster_id,
            cluster_size=cluster_size,
            avg_probability=average_probability,
            repositories=repositories,
            discussions=discussions_text,
        )

        print("Prompt formatting completed")

        MAX_RETRIES = 5

        for attempt in range(MAX_RETRIES):
            try:
                response = generate_with_gemini(
                    system_prompt=system_prompt_dis,
                    user_prompt=user_prompt,
                )
                break
            except ServerError:
                if attempt == MAX_RETRIES - 1:
                    raise

                wait = 2 ** attempt
                print(f"Gemini unavailable. Retrying in {wait}s...")
                time.sleep(wait)

        result = json.loads(response)
        store_cluster_analysis.append(result)

        print("Result loaded and stored")
        print()

    final_response = ClusteringResponse(
        metadata=Metadata(
            source='GitHub',
            generated_at=run_started,
            documents_analyzed=len(metadata),
            communities_analyzed=len(unique_repos),
            communities=list(unique_repos),
            clusters_found=len(store_cluster_analysis),
        ),
        clusters=store_cluster_analysis
    )

    timestamp = run_started.strftime("%Y%m%d_%H%M%S")
    file_path = output_path / f"discussions_problem_database_{timestamp}.json"

    data = final_response.model_dump(mode='json')
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print("Final JSON file created.")