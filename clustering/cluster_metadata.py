import numpy as np
import json

with open("C:/Users/skd92/Main Projects/Problem Finder/embeddings/metadata.json", 'r', encoding='utf-8') as f:
    metadata = json.load(f)

labels = np.load("C:/Users/skd92/Main Projects/Problem Finder/clustering/labels.npy")
probs = np.load("C:/Users/skd92/Main Projects/Problem Finder/clustering/probs.npy")

assert len(metadata)==len(labels)
assert len(metadata)==len(probs)

clustered_metadata = []
for item, label, prob in zip(metadata, labels, probs):
    clustered_metadata.append({
        "cluster": int(label),
        "probs": float(prob),
        **item
    })

with open("C:/Users/skd92/Main Projects/Problem Finder/clustering/clustered_metadata.json", 'w', encoding='utf-8') as f:
    json.dump(clustered_metadata, f, indent=2, ensure_ascii=False)