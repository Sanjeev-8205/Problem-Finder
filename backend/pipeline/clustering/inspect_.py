import json
from collections import defaultdict

def inspect_metadata(metadata):

    inspect_group = defaultdict(list)
    for x in metadata:
            inspect_group[x['cluster']].append((x['title'],x['probs']))

    for x, y in inspect_group.items():
        print(f"Cluster = {x}")
        print(f"No. of elements = {len(y)}")
        y = sorted(y, key=lambda x:x[1], reverse=True)

        threshold = len(y) if len(y)<30 else 30
        i=0
        while i<threshold:
            print(y[i])
            i+=1
        print()