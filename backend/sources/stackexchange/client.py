import os
import time
import requests


class StackExchangeClient:

    BASE_URL = "https://api.stackexchange.com/2.3"

    def __init__(self):
        self.key = os.getenv("STACK_EXCHANGE_KEY")

        self.session = requests.Session()

        self.session.headers.update({
            "User-Agent": "OpportunityDiscoveryResearch/1.0"
        })

    def search_questions(
        self,
        site,
        query,
        page=1,
        pagesize=100,
        sort="relevance",
        order="desc",
        tagged=None,
    ):

        params = {
            "site": site,
            "q": query,
            "page": page,
            "pagesize": pagesize,
            "order": order,
            "sort": sort,
            "filter": "withbody",
        }

        if tagged:
            params["tagged"] = tagged

        if self.key:
            params["key"] = self.key
            print(self.key)

        response = self.session.get(
            f"{self.BASE_URL}/search/advanced",
            params=params,
            timeout=30,
        )

        if not response.ok:
            print("\n" + "=" * 80)
            print("Stack Exchange API Error")
            print("=" * 80)
            print(f"Status Code : {response.status_code}")
            print(f"Site        : {site}")
            print(f"Query       : {query}")
            print(f"Page        : {page}")
            print("\nResponse:")
            print(response.text)
            print("=" * 80 + "\n")
            response.raise_for_status()

        data = response.json()

        if "backoff" in data:
            print(f"Backoff requested: {data['backoff']}s")
            time.sleep(data["backoff"])

        return data