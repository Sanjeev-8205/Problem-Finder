import umap

def reduce_dimensions(x):
    reducer = umap.UMAP(n_neighbors=10, n_components=5, min_dist=0.0, metric='cosine', random_state=42)
    X_umap = reducer.fit_transform(x)

    return X_umap