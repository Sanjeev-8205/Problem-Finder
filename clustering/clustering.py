import hdbscan
import numpy as np
from hdbscan import validity

reduced_embeddings = np.load("C:/Users/skd92/Main Projects/Problem Finder/clustering/x_umap.npy")

hdb=hdbscan.HDBSCAN(
    min_cluster_size=10,
    min_samples=10,
    cluster_selection_method="eom",
    metric="euclidean",
    approx_min_span_tree=False
).fit(reduced_embeddings)

labels = hdb.labels_
confidence = hdb.probabilities_
n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
noise = np.mean(labels==-1)

unique, counts = np.unique(labels, return_counts=True)

print(f"No. of clusters = {n_clusters}")
print(f"Noise = {noise}")
print(f"DBCV = {validity.validity_index(reduced_embeddings.astype('float64'), labels):.4f}\n")

for label, count in zip(unique, counts):
    print(f"{label} = {count}")

np.save("C:/Users/skd92/Main Projects/Problem Finder/clustering/labels.npy", labels)
np.save("C:/Users/skd92/Main Projects/Problem Finder/clustering/probs.npy", confidence)
print(confidence)