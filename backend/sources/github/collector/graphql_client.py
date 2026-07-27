import os
import requests
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("problem_mining")

if TOKEN is None:
    raise ValueError("GitHub token not found!")

GRAPHQL_URL = "https://api.github.com/graphql"

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json",
}


class GitHubGraphQLClient:
    def __init__(self):
        self.url = GRAPHQL_URL
        self.headers = HEADERS

    def execute(self, query: str, variables: dict = None):
        payload = {
            "query": query,
            "variables": variables or {}
        }

        response = requests.post(
            self.url,
            json=payload,
            headers=self.headers,
            timeout=60
        )

        response.raise_for_status()

        data = response.json()

        if "errors" in data:
            raise RuntimeError(data["errors"])

        return data["data"]


graphql_client = GitHubGraphQLClient()