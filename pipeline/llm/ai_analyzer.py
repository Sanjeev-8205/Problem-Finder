from google import genai
from google.genai import types
from dotenv import load_dotenv
import os
from collections import defaultdict
from tqdm import tqdm
import numpy as np
import json
import time

from schema_ import ClusteringAnalysis
from prompt_ import system_prompt, build_prompt

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

        with open(f"C:/Users/skd92/Main Projects/Problem Finder/outputs/cluster_{cluster_id}.json", 'w', encoding='utf-8') as f:
            json.dump(result, f, indent=2, ensure_ascii=True)
            print("JSON File Created")
    
    with open(f"C:/Users/skd92/Main Projects/Problem Finder/outputs/all_outputs.json", 'w', encoding='utf-8') as f:
        json.dump(store_cluster_analysis, f, indent=2, ensure_ascii=True)
        print("FInal JSON file created.")

    print()
    return