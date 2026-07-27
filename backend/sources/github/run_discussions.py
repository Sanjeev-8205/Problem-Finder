from sources.github.collector.discussions_collector import collect_discussions
from sources.github.preprocessing_github.prep import preprocessing_sentences_discussions
from pipeline.embeddings.embed import create_embeddings
from sources.github.config import EMBEDDING_MODEL
from pipeline.clustering.reduce import reduce_dimensions
from pipeline.clustering.clustering_ import clustering_using_sentence_embeddings
from pipeline.clustering.cluster_metadata import create_clustered_metadata
from sources.github.metadata.metadata_github import create_metadata
from pipeline.clustering.inspect_ import inspect_metadata

import numpy as np
import json
from pathlib import Path

# Collect the discussions
#collect_discussions()
print("Discussions Collected!!")

# Preprocessing
raw_discussions_path = Path(__file__).parent.parent.parent / "storage" / "github_" / "raw" / "github_discussions.jsonl"
processed_discussions_path = Path(__file__).parent.parent.parent / "storage" / "github_" / "processed" / "github_discussions.jsonl"

preprocessing_sentences_discussions(raw_discussions_path, processed_discussions_path)
print("Preprocessing Completed!!")

# Create and save Metadata
metadata = create_metadata(processed_discussions_path)

path_metadata = Path(__file__).parent.parent.parent / "storage" / "github_" / "metadata_"
with open(f"{path_metadata}/discussion_metadata.json", "w", encoding="utf-8") as f:
    json.dump(metadata, f, indent=2, ensure_ascii=False)
print("Metadata Created!!")

# Embeddings using BAAI sentence transformer
embeddings = create_embeddings(processed_discussions_path, EMBEDDING_MODEL)
path_embeds = Path(__file__).resolve().parent.parent.parent / "storage" / "github_" / "embedding"
np.save(f"{path_embeds}/discussion_embeddings.npy", embeddings)
print("Embeddings Computed!!")

# Reduce Dimensions using UMAP
reduc_dim_embeddings = reduce_dimensions(embeddings)
path_embeds = Path(__file__).resolve().parent.parent.parent / "storage" / "github_" / "embedding"
np.save(f"{path_embeds}/reduced_discussion_embeddings.npy", reduc_dim_embeddings)
print("Dimensions Reduced!!")

# Clustering using HDBSCAN
#-------------------------------------------------------------------------#

# First Pass
labels, probs = clustering_using_sentence_embeddings(reduc_dim_embeddings)
print("Clustering First Pass - Completed")

#Second Pass
noise_mask = labels==-1
noise_embeddings = reduc_dim_embeddings[noise_mask]

noise_umap = reduce_dimensions(noise_embeddings)
re_labels, re_probs = clustering_using_sentence_embeddings(noise_umap)
print("Clustering Second Pass - Completed")

final_labels = labels.copy()
final_probs = probs.copy()

next_cluster = final_labels.max() + 1

mask = re_labels != -1

noise_indices = np.where(noise_mask)[0]

final_labels[noise_indices[mask]] = re_labels[mask] + next_cluster
final_probs[noise_indices[mask]] = re_probs[mask]

# -----------------------
# Merge First + Second Pass
# -----------------------

# Copy first-pass results
final_labels = labels.copy()
final_probs = probs.copy()

# Find where the noise discussions came from
noise_indices = np.where(noise_mask)[0]

# Next available cluster id
next_cluster = labels.max() + 1

# Only keep actual clusters from second pass
valid_mask = re_labels != -1

# Assign new cluster ids
final_labels[noise_indices[valid_mask]] = (
    re_labels[valid_mask] + next_cluster
)

# Update confidence scores
final_probs[noise_indices[valid_mask]] = (
    re_probs[valid_mask]
)

# -----------------------
# Print summary
# -----------------------

unique, counts = np.unique(final_labels, return_counts=True)

n_clusters = len(unique) - (1 if -1 in unique else 0)
noise = np.mean(final_labels == -1)

print(f"\nFinal Results")
print(f"No. of clusters = {n_clusters}")
print(f"Noise = {noise:.4f}\n")

for label, count in zip(unique, counts):
    print(f"{label} = {count}")


# Create Clustered Metadata 
clustered_metadata = create_clustered_metadata(metadata, labels, probs)

with open(f"{path_metadata}/clustered_discussion_metadata.json", "w", encoding="utf-8") as f:
    json.dump(clustered_metadata, f, indent=2, ensure_ascii=False)

# Inspect the clustered metadata
inspect_metadata(clustered_metadata)