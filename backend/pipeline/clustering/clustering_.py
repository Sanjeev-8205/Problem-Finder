import hdbscan
import numpy as np
from hdbscan import validity

def clustering_using_sentence_embeddings(embeddings):
    hdb=hdbscan.HDBSCAN(
        min_cluster_size=12,
        min_samples=4,
        cluster_selection_method="leaf",
        metric="euclidean"
    ).fit(embeddings)

    labels = hdb.labels_
    confidence = hdb.probabilities_
    n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
    noise = np.mean(labels==-1)

    unique, counts = np.unique(labels, return_counts=True)

    print(f"No. of clusters = {n_clusters}")
    print(f"Noise = {noise}")
    print(f"DBCV = {validity.validity_index(embeddings.astype('float64'), labels):.4f}\n")

    for label, count in zip(unique, counts):
        print(f"{label} = {count}")

    print(confidence)

    return hdb.labels_, hdb.probabilities_