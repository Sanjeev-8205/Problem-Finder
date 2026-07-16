import umap
import numpy as np

x = np.load("C:/Users/skd92/Main Projects/Problem Finder/embeddings/embeddings.npy")

reducer = umap.UMAP(n_neighbors=15, n_components=10, min_dist=0.0, metric='cosine', random_state=42)
X_umap = reducer.fit_transform(x)

np.save("C:/Users/skd92/Main Projects/Problem Finder/clustering/x_umap.npy", X_umap)