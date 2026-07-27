import time
from pathlib import Path

from tqdm import tqdm

from client import StackExchangeClient
from save import save_question
from problem_archetypes import PROBLEM_ARCHETYPES


OUTPUT_DIR = (
    Path(__file__).resolve().parent.parent.parent
    / "data"
    / "raw"
    / "stackexchange"
)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

client = StackExchangeClient()

seen = {}

total_saved = 0
total_duplicates = 0

print("=" * 80)
print("Starting Stack Exchange collection...")
print("=" * 80)

for archetype_name, archetype in PROBLEM_ARCHETYPES.items():

    intent = archetype["intent"]

    print("\n" + "=" * 80)
    print(f"Archetype : {archetype_name}")
    print(f"Intent    : {intent}")
    print(f"Sites     : {', '.join(archetype['sites'])}")
    print(f"Queries   : {len(archetype['queries'])}")
    print("=" * 80)

    for site in archetype["sites"]:

        if site not in seen:
            seen[site] = set()

        output_file = OUTPUT_DIR / f"{site}.jsonl"

        print(f"\n>>> Site: {site}")

        for query in archetype["queries"]:

            print(f"\nSearching: '{query}'")

            page = 1
            max_pages = 5

            query_saved = 0
            query_duplicates = 0

            with tqdm(total=max_pages, desc=query, unit="page") as pbar:

                while page <= max_pages:

                    print(f"  Fetching page {page}...")

                    response = client.search_questions(
                        site=site,
                        query=query,
                        page=page,
                    )

                    questions = response.get("items", [])

                    if not questions:
                        print("  No more results.")
                        break

                    print(f"  Retrieved {len(questions)} questions")

                    for question in questions:

                        qid = question["question_id"]

                        if qid in seen[site]:
                            query_duplicates += 1
                            total_duplicates += 1
                            continue

                        seen[site].add(qid)

                        save_question(
                            output_file=output_file,
                            site=site,
                            archetype=archetype_name,
                            intent=intent,
                            query=query,
                            question=question,
                        )

                        query_saved += 1
                        total_saved += 1

                    print(
                        f"  Page {page}: "
                        f"saved={query_saved} | "
                        f"duplicates={query_duplicates} | "
                        f"site_unique={len(seen[site])}"
                    )

                    pbar.update(1)

                    if not response.get("has_more", False):
                        print("  Reached last page.")
                        break

                    page += 1

                    time.sleep(0.1)

            print(
                f"\nFinished query '{query}' "
                f"-> New: {query_saved}, Duplicates: {query_duplicates}"
            )

        print(
            f"\nCompleted site '{site}' "
            f"({len(seen[site])} unique discussions collected)"
        )

print("\n" + "=" * 80)
print("Collection Complete")
print("=" * 80)
print(f"Total unique discussions : {total_saved}")
print(f"Total duplicates skipped : {total_duplicates}")
print("=" * 80)