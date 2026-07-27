from sentence_transformers import SentenceTransformer
import json

def create_embeddings(filePath, model):
    model = SentenceTransformer(model)
    embedding_texts = []

    path_1 = filePath

    with open(path_1, 'r', encoding='utf-8') as f:
        for line in f:
            embedding_texts.append(json.loads(line)['embedding_text'])

    embeddings = model.encode(
        embedding_texts,
        show_progress_bar=True,
        convert_to_numpy=True
    )

    return embeddings

