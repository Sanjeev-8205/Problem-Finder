import json

from pipeline.preprocessing.clean import clean_text
from pipeline.preprocessing.normalize import normalize_text
from pipeline.preprocessing.deduplicate import compute_hash

def preprocessing_sentences_issues(input_path, output_path):
    seen = set() 
    duplicate_count=0 
    processed_count=0 

    with open(input_path, encoding="utf-8") as fin, \
        open(output_path, "w", encoding="utf-8") as fout: 

        for line in fin: 
            issue = json.loads(line) 

            title = str(issue.get("title") or "") 
            body = str(issue.get("body") or "") 
            labels = ", ".join((issue.get("labels", []))) 

            text = f""" 
            Labels: 
            {labels} 

            Title: 
            {title} 
            
            Body: 
            {body} 
            """ 

            text = clean_text(text) 
            text = normalize_text(text) 

            h = compute_hash(text) 

            if h in seen: 
                duplicate_count+=1 
                continue 

            seen.add(h) 

            issue["embedding_text"] = text 

            fout.write( 
                json.dumps(issue, ensure_ascii=False) + "\n" 
                ) 
            processed_count+=1 

            print(f"Processed Count = {processed_count}") 
            print(f"Duplicate Count = {duplicate_count}")

def preprocessing_sentences_discussions(input_path, output_path):

    seen = set()

    processed_count = 0
    duplicate_count = 0

    with open(input_path, encoding="utf-8") as fin, \
         open(output_path, "w", encoding="utf-8") as fout:

        for line in fin:

            discussion = json.loads(line)
            engagement = discussion["engagement"]

            if (
                engagement["upvotes"] == 0
                and engagement["comments"] == 0
            ):
                continue

            # Already constructed by the collector
            text = discussion.get("text", "")

            text = clean_text(text)
            text = normalize_text(text)

            h = compute_hash(text)

            if h in seen:
                duplicate_count += 1
                continue

            seen.add(h)

            discussion["embedding_text"] = text

            fout.write(
                json.dumps(discussion, ensure_ascii=False)
                + "\n"
            )

            processed_count += 1

    print(f"Processed Count = {processed_count}")
    print(f"Duplicate Count = {duplicate_count}")