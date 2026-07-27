def create_clustered_metadata(metadata, labels, probs):

    labels = labels
    probs = probs

    assert len(metadata)==len(labels)
    assert len(metadata)==len(probs)

    clustered_metadata = []
    for item, label, prob in zip(metadata, labels, probs):
        clustered_metadata.append({
            "cluster": int(label),
            "probs": float(prob),
            **item
        })

    #with open(f"{current_path}/clustered_metadata.json", 'w', encoding='utf-8') as f:
    #   json.dump(clustered_metadata, f, indent=2, ensure_ascii=False)

    return clustered_metadata