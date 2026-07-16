import json
from collections import defaultdict
import random

with open("C:/Users/skd92/Main Projects/Problem Finder/clustering/clustered_metadata.json", 'r', encoding='utf-8') as f:
    clustered_metadata = json.load(f)

inspect_group = defaultdict(list)
for x in clustered_metadata:
        inspect_group[x['cluster']].append((x['title'],x['probs']))

for x, y in inspect_group.items():
    print(f"Cluster = {x}")
    print(f"No. of Issues = {len(y)}")
    y = sorted(y, key=lambda x:x[1], reverse=True)

    threshold = len(y) if len(y)<20 else 20
    i=0
    while i<threshold:
        print(y[i])
        i+=1
    print()